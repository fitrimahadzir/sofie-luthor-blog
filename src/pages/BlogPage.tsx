import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import SectionHeading from '../components/SectionHeading'
import SidebarLayout from '../components/SidebarLayout'
import { useCategories, usePosts } from '../hooks/usePosts'
import { siteConfig } from '../config/site'

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') ?? 'all'
  const activeQuery = searchParams.get('q') ?? ''
  const page = Number(searchParams.get('page') ?? '1')

  const categories = useCategories()
  const { posts, totalPages, loading, error } = usePosts(
    activeCategory,
    page,
    activeQuery,
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeCategory, page, activeQuery])

  function buildParams(next: Record<string, string> = {}) {
    const params: Record<string, string> = { ...next }
    if (activeCategory !== 'all' && !params.category) params.category = activeCategory
    if (activeQuery && !params.q) params.q = activeQuery
    return params
  }

  function setCategory(category: string) {
    setSearchParams(buildParams(category === 'all' ? {} : { category }))
  }

  function goToPage(next: number) {
    setSearchParams(buildParams({ page: String(next) }))
  }

  function clearSearch() {
    const params = buildParams()
    delete params.q
    setSearchParams(params)
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>BLOG {siteConfig.name.toUpperCase()}</h1>
          <div className="page-hero__script">kisah dari ruang kecil ini</div>

        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SidebarLayout>
            <SectionHeading
              title="SEMUA ARTIKEL"
              description="Cerita, renungan dan pelbagai topik yang saya tulis tanpa tema tetap."
            />

            <div className="chips">
              {activeQuery && (
                <button
                  type="button"
                  className="chip is-active"
                  onClick={clearSearch}
                >
                  Carian: &ldquo;{activeQuery}&rdquo; &times;
                </button>
              )}
              <button
                type="button"
                className={`chip${activeCategory === 'all' ? ' is-active' : ''}`}
                onClick={() => setCategory('all')}
              >
                Semua
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
              <div className="loading">Memuatkan artikel&hellip;</div>
            ) : error ? (
              <div className="loading">{error}</div>
            ) : posts.length === 0 ? (
              <div className="loading">
                {activeQuery
                  ? `Tiada artikel yang sepadan dengan carian "${activeQuery}".`
                  : 'Tiada artikel dalam kategori ini buat masa ini.'}
              </div>
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
                      aria-label="Halaman sebelumnya"
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
                      aria-label="Halaman seterusnya"
                    >
                      &rsaquo;
                    </button>
                  </div>
                )}
              </>
            )}
          </SidebarLayout>
        </div>
      </section>
    </>
  )
}
