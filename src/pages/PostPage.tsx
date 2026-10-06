import { Link, useParams } from 'react-router-dom'
import { usePost, usePosts } from '../hooks/usePosts'
import PostCard from '../components/PostCard'
import { siteConfig } from '../config/site'
import type { Post } from '../types/post'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('ms-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function AuthorBox({ post }: { post: Post }) {
  if (!post.author) return null
  return (
    <div className="container">
      <div className="author-box">
        {post.authorAvatar && (
          <div className="author-box__avatar">
            <img src={post.authorAvatar} alt={post.author} />
          </div>
        )}
        <div>
          <h4>{post.author}</h4>
          <p>
            {post.authorBio ??
              `Penulis di ${siteConfig.name}.`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { post, loading, error } = usePost(slug)

  // Related posts: same first category, excluding current post
  const related = usePosts(post?.categories[0] ?? 'all', 1)
  const relatedPosts = related.posts
    .filter((p) => p.id !== post?.id)
    .slice(0, 3)

  if (loading) {
    return <div className="loading">Memuatkan artikel&hellip;</div>
  }

  if (error || !post) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Artikel tidak dijumpai</h2>
        <p>Artikel yang anda cari tidak wujud atau telah dikeluarkan.</p>
        <Link to="/blog" className="button button--dark">
          Kembali ke blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="post-hero">
        <div className="container">
          <div className="post-hero__meta">
            <span>{post.categories[0] ?? 'Blog'}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.author}</span>
          </div>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="article">
            {post.image && (
              <div className="article__media">
                <img src={post.image} alt={post.title} />
              </div>
            )}
            <div
              className="article__content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {post.categories.length > 0 && (
              <div className="article__tags">
                {post.categories.map((category) => (
                  <Link
                    key={category}
                    className="tag"
                    to={`/blog?category=${encodeURIComponent(category)}`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </article>

          <AuthorBox post={post} />

          {relatedPosts.length > 0 && (
            <div style={{ marginTop: 80 }}>
              <h2 style={{ textAlign: 'center', marginBottom: 40 }}>
                ARTIKEL BERKAITAN
              </h2>
              <div className="post-grid">
                {relatedPosts.map((item) => (
                  <PostCard key={item.id} post={item} />
                ))}
              </div>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/blog" className="button button--outline">
              &larr; Kembali ke blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
