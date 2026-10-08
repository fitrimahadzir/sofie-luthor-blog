import { siteConfig } from '../config/site'
import { demoAuthors, demoPosts } from '../data/demoPosts'
import type { Post, PostsPage, WpPost, WpTerm } from '../types/post'

const POSTS_PER_PAGE = 6

/** Fallback used when the WordPress API is not connected yet. */
function getDemoPosts(category?: string, page = 1, search?: string): PostsPage {
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

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  const start = (page - 1) * POSTS_PER_PAGE
  const posts = filtered.slice(start, start + POSTS_PER_PAGE).map((post) => {
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

async function fetchWpPosts(
  category?: string,
  page = 1,
  search?: string,
): Promise<PostsPage> {
  const params = new URLSearchParams({
    _embed: '1',
    per_page: String(POSTS_PER_PAGE),
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

  const response = await request(`/wp/v2/posts?${params.toString()}`)
  const totalPages = Number(response.headers.get('X-WP-TotalPages')) || 1
  const data = (await response.json()) as WpPost[]
  const posts = data.map(mapWpPost)

  return { posts, totalPages, total: posts.length }
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
   * category can be a category name ('Dance Styles'), the string 'all',
   * or undefined. With the API connected it is passed through as a search.
   */
  async getPosts(
    category?: string,
    page = 1,
    search?: string,
  ): Promise<PostsPage> {
    if (!siteConfig.useWpApi) {
      return getDemoPosts(category, page, search)
    }
    try {
      return await fetchWpPosts(category, page, search)
    } catch (error) {
      console.warn('[wp] Failed to load posts, using demo data.', error)
      return getDemoPosts(category, page, search)
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

  /** Search helper kept for future use / header search. */
  async searchPosts(query: string, page = 1): Promise<PostsPage> {
    if (!siteConfig.useWpApi) {
      const q = query.toLowerCase()
      const filtered = demoPosts.filter((p) =>
        `${p.title} ${stripHtml(p.content)} ${p.categories.join(' ')}`
          .toLowerCase()
          .includes(q),
      )
      const start = (page - 1) * POSTS_PER_PAGE
      return {
        posts: filtered.slice(start, start + POSTS_PER_PAGE),
        totalPages: Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE)),
        total: filtered.length,
      }
    }
    try {
      return await fetchWpPosts(undefined, page, query)
    } catch (error) {
      console.warn('[wp] Search failed, using demo data.', error)
      return { posts: [], totalPages: 1, total: 0 }
    }
  },
}
