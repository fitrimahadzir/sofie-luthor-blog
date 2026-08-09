export interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  authorAvatar?: string
  authorBio?: string
  image?: string
  categories: string[]
}

export interface WpTerm {
  id: number
  name: string
  slug: string
}

export interface WpAuthor {
  id: number
  name: string
  avatar_urls?: Record<string, string>
  description?: string
}

/**
 * Shape of a post returned by the WordPress REST API
 * (GET /wp-json/wp/v2/posts?_embed)
 */
export interface WpPost {
  id: number
  date: string
  date_gmt: string
  modified: string
  slug: string
  status: string
  type: string
  link: string
  title: { rendered: string }
  content: { rendered: string; protected: boolean }
  excerpt: { rendered: string; protected: boolean }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  categories: number[]
  tags: number[]
  _embedded?: {
    author?: WpAuthor[]
    'wp:featuredmedia'?: Array<{ source_url?: string }>
    'wp:term'?: WpTerm[][]
  }
}

export interface PostsPage {
  posts: Post[]
  totalPages: number
  total: number
}
