import { Link } from 'react-router-dom'
import type { Post } from '../types/post'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('ms-MY', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      {post.image && (
        <div className="post-card__media">
          <Link to={`/blog/${post.slug}`} aria-label={post.title}>
            <img src={post.image} alt={post.title} loading="lazy" />
          </Link>
        </div>
      )}

      <div className="post-card__body">
        <div className="post-card__meta">
          <span className="date">{formatDate(post.date)}</span>
          <span>&middot;</span>
          <span>{post.author}</span>
        </div>

        <h3 className="post-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="post-card__excerpt">{post.excerpt}</p>

        <Link to={`/blog/${post.slug}`} className="post-card__link">
          Baca lagi
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}
