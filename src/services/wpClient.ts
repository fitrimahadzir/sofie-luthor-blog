import { siteConfig } from '../config/site'
import { demoAuthors, demoPosts } from '../data/demoPosts'
import type {
  ArchivePeriod,
  Post,
  PostQuery,
  PostsPage,
  WpPost,
  WpTerm,
} from '../types/post'

/** Posts per page on small screens (mobile & tablet). */
export const POSTS_PER_PAGE = 6
/** Posts per page on desktop (>= 1024px). */
export const POSTS_PER_PAGE_DESKTOP = 12

/** Safety cap so the archive fetch can never loop forever. */
const ARCHIVE_MAX_PAGES = 20

/** Fallback used when the WordPress API is not connected yet. */
function getDemoPosts(query: PostQuery = {}): PostsPage {
  const { category, search, year, month } = query
  const page = query.page ?? 1
  const perPage = query.perPage ?? POSTS_PER_PAGE

  let filtered = [...demoPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  if (category && category !== 'all') {
    filtered = filtered.filter((p) =>
      p.categories.map((c) => c.toLowerCase()).includes(category.toLowerCase()),
    )
  }

  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter((p) =>
      `${p.title} ${stripHtml(p.content)} ${p.categories.join(' ')}`
        .toLowerCase()
        .includes(q),
    )
  }

  if (year) {
    filtered = filtered.filter((p) => {
      const date = new Date(p.date)
      if (date.getFullYear() !== year) return false
      if (month && date.getMonth() + 1 !== month) return false
      return true
    })
  }

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const start = (page - 1) * perPage
  const posts = filtered.slice(start, start + perPage).map((post) => {
    const author = demoAuthors[post.author]
    return {
      ...post,
      author: author?.name ?? post.author,
      authorAvatar: author?.avatar,
      authorBio: author?.bio,
    }
  })

  return { posts, totalPages, total }
}

function getDemoPost(slug: string): Post | undefined {
  const post = demoPosts.find((p) => p.slug === slug)
  if (!post) return undefined

  const author = demoAuthors[post.author]
  return {
    ...post,
    author: author?.name ?? 'Sofie Luthor',
    authorAvatar: author?.avatar,
    authorBio: author?.bio,
  }
}

/** Maps a raw WordPress REST API post into the app's Post shape. */
function mapWpPost(raw: WpPost): Post {
  const embedded = raw._embedded
  const author = embedded?.author?.[0]
  const media = embedded?.['wp:featuredmedia']?.[0]
  const terms = embedded?.['wp:term']
  const categories =
    terms?.flatMap((group) => group.map((term) => term.name)) ?? []

  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title?.rendered ?? '',
    excerpt: stripHtml(raw.excerpt?.rendered ?? ''),
    content: raw.content?.rendered ?? '',
    date: raw.date,
    author: author?.name ?? 'Admin',
    authorAvatar: author?.avatar_urls?.['96'],
    authorBio: author?.description,
    image: media?.source_url,
    categories,
  }
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent ?? ''
}

const API = siteConfig.wpApiUrl.replace(/\/$/, '')

async function request(path: string): Promise<Response> {
  const response = await fetch(`${API}${path}`, {
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`)
  }
  return response
}

/** Formats a Date as a WordPress local-time ISO string (no timezone). */
function toWpDate(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0')
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  )
}

/**
 * Builds an exclusive `after`/`before` range for a year (or a single month).
 * WordPress treats `after`/`before` as strict, so we nudge the boundaries by
 * one second to keep posts published at midnight inside the range.
 */
function archiveRange(year: number, month?: number): { after: string; before: string } {
  const start = month ? new Date(year, month - 1, 1) : new Date(year, 0, 1)
  const end = month ? new Date(year, month, 1) : new Date(year + 1, 0, 1)
  return {
    after: toWpDate(new Date(start.getTime() - 1000)),
    before: toWpDate(end),
  }
}

/** Groups post dates into years/months with counts. */
function computeArchive(dates: string[]): ArchivePeriod[] {
  const byYear = new Map<number, Map<number, number>>()
  for (const iso of dates) {
    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) continue
    const year = date.getFullYear()
    const month = date.getMonth()
    if (!byYear.has(year)) byYear.set(year, new Map())
    const months = byYear.get(year)!
    months.set(month, (months.get(month) ?? 0) + 1)
  }
  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, months]) => ({
      year,
      total: [...months.values()].reduce((sum, count) => sum + count, 0),
      months: [...months.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([month, count]) => ({ month, count })),
    }))
}

async function fetchWpPosts(query: PostQuery = {}): Promise<PostsPage> {
  const { category, search, year, month } = query
  const page = query.page ?? 1
  const perPage = query.perPage ?? POSTS_PER_PAGE

  const params = new URLSearchParams({
    _embed: '1',
    per_page: String(perPage),
    page: String(page),
  })
  if (category && category !== 'all') {
    const categoryId = await resolveCategoryId(category)
    if (categoryId === null) {
      return { posts: [], totalPages: 1, total: 0 }
    }
    params.set('categories', String(categoryId))
  }
  if (search) {
    params.set('search', search)
  }
  if (year) {
    const range = archiveRange(year, month)
    params.set('after', range.after)
    params.set('before', range.before)
  }

  const response = await request(`/wp/v2/posts?${params.toString()}`)
  const totalPages = Number(response.headers.get('X-WP-TotalPages')) || 1
  const total = Number(response.headers.get('X-WP-Total')) || 0
  const data = (await response.json()) as WpPost[]
  const posts = data.map(mapWpPost)

  return { posts, totalPages, total }
}

/** Fetches every post's date (paginated) and groups them into an archive. */
async function fetchWpArchive(): Promise<ArchivePeriod[]> {
  const dates: string[] = []
  let page = 1
  let totalPages = 1
  do {
    const response = await request(
      `/wp/v2/posts?per_page=100&page=${page}&_fields=date&orderby=date&order=desc`,
    )
    totalPages = Number(response.headers.get('X-WP-TotalPages')) || 1
    const data = (await response.json()) as Array<{ date: string }>
    dates.push(...data.map((item) => item.date))
    page += 1
  } while (page <= totalPages && page <= ARCHIVE_MAX_PAGES)

  return computeArchive(dates)
}

async function fetchWpPost(slug: string): Promise<Post | undefined> {
  const response = await request(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`)
  const data = (await response.json()) as WpPost[]
  const raw = data[0]
  if (!raw) return undefined
  return mapWpPost(raw)
}

let categoryCache: WpTerm[] | null = null

async function fetchWpCategories(): Promise<WpTerm[]> {
  if (categoryCache) return categoryCache
  const response = await request('/wp/v2/categories?per_page=100&hide_empty=true')
  const data = (await response.json()) as WpTerm[]
  categoryCache = data
  return data
}

/** Resolves a category name (or slug) from the UI into a WordPress term ID. */
async function resolveCategoryId(category: string): Promise<number | null> {
  const needle = category.trim().toLowerCase()
  const match = (await fetchWpCategories()).find(
    (cat) => cat.name.toLowerCase() === needle || cat.slug.toLowerCase() === needle,
  )
  return match ? match.id : null
}

export const wpService = {
  /**
   * Returns the list of post categories.
   * When the API is connected this hits the WP REST API; otherwise it
   * derives the list from the demo data.
   */
  async getCategories(): Promise<string[]> {
    if (!siteConfig.useWpApi) {
      return [...new Set(demoPosts.flatMap((p) => p.categories))]
    }
    try {
      const cats = await fetchWpCategories()
      return cats.map((cat) => cat.name)
    } catch (error) {
      console.warn('[wp] Failed to load categories, using demo data.', error)
      return [...new Set(demoPosts.flatMap((p) => p.categories))]
    }
  },

  /**
   * Returns a page of posts.
   * `category` can be a category name ('Dance Styles'), the string 'all',
   * or undefined. `year`/`month` filter by the archive period.
   */
  async getPosts(query: PostQuery = {}): Promise<PostsPage> {
    if (!siteConfig.useWpApi) {
      return getDemoPosts(query)
    }
    try {
      return await fetchWpPosts(query)
    } catch (error) {
      console.warn('[wp] Failed to load posts, using demo data.', error)
      return getDemoPosts(query)
    }
  },

  /** Returns a single post by slug. */
  async getPost(slug: string): Promise<Post | undefined> {
    if (!siteConfig.useWpApi) {
      return getDemoPost(slug)
    }
    try {
      return await fetchWpPost(slug)
    } catch (error) {
      console.warn('[wp] Failed to load post, using demo data.', error)
      return getDemoPost(slug)
    }
  },

  /** Returns posts grouped by year/month for the archive widget. */
  async getArchive(): Promise<ArchivePeriod[]> {
    if (!siteConfig.useWpApi) {
      return computeArchive(demoPosts.map((p) => p.date))
    }
    try {
      return await fetchWpArchive()
    } catch (error) {
      console.warn('[wp] Failed to load archive, using demo data.', error)
      return computeArchive(demoPosts.map((p) => p.date))
    }
  },

  /** Search helper kept for future use / header search. */
  async searchPosts(query: string, page = 1, perPage = POSTS_PER_PAGE): Promise<PostsPage> {
    return this.getPosts({ search: query, page, perPage })
  },
}
