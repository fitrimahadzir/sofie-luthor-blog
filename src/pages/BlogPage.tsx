import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import SectionHeading from '../components/SectionHeading'
import { useCategories, usePosts } from '../hooks/usePosts'
import { siteConfig } from '../config/site'

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') ?? 'all'
  const page = Number(searchParams.get('page') ?? '1')

  const categories = useCategories()
  const { posts, totalPages, loading, error } = usePosts(activeCategory, page)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeCategory, page])

  function setCategory(category: string) {
    setSearchParams(category === 'all' ? {} : { category })
  }

  function goToPage(next: number) {
    setSearchParams(
      activeCategory === 'all'
        ? { page: String(next) }
        : { category: activeCategory, page: String(next) },
    )
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>THE {siteConfig.name} BLOG</h1>
          <div className="page-hero__script">stories from the floor</div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            title="ALL ARTICLES"
            description="Tips, workshops, stories and interviews about dance and movement."
          />

          <div className="chips">
            <button
              type="button"
              className={`chip${activeCategory === 'all' ? ' is-active' : ''}`}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`chip${
                  activeCategory.toLowerCase() === category.toLowerCase()
                    ? ' is-active'
                    : ''
                }`}
                onClick={() => setCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading">Loading posts&hellip;</div>
          ) : error ? (
            <div className="loading">{error}</div>
          ) : posts.length === 0 ? (
            <div className="loading">No posts found in this category yet.</div>
          ) : (
            <>
              <div className="post-grid">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    type="button"
                    disabled={page <= 1}
                    onClick={() => goToPage(page - 1)}
                    aria-label="Previous page"
                  >
                    &lsaquo;
                  </button>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      type="button"
                      className={number === page ? 'is-active' : ''}
                      onClick={() => goToPage(number)}
                      aria-current={number === page ? 'page' : undefined}
                    >
                      {number}
                    </button>
                  ))}
                  <button
                    type="button"
                    disabled={page >= totalPages}
                    onClick={() => goToPage(page + 1)}
                    aria-label="Next page"
                  >
                    &rsaquo;
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
