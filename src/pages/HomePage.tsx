import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'
import SectionHeading from '../components/SectionHeading'
import { usePosts } from '../hooks/usePosts'
import { siteConfig } from '../config/site'

export default function HomePage() {
  const { posts, loading } = usePosts('all', 1)
  const [featured, ...recent] = posts

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <span className="hero__tag">Selamat datang ke {siteConfig.name}</span>
            <h1>{siteConfig.heroTitle}</h1>
            <div className="hero__script">{siteConfig.heroScript}</div>
            <p>{siteConfig.description}</p>
            <div className="hero__actions">
              <Link to="/blog" className="button button--light">
                Baca blog
              </Link>
              <Link to="/about" className="button button--accent">
                Tentang saya
              </Link>
              <Link to="/peta-blog" className="button button--ghost">
                Peta blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="promo-strip">
            <Link
              className="promo-card"
              to="/blog"
              style={{
                backgroundImage: `url(/images/danceschool2-columnbg1.jpg)`,
              }}
            >
              <img
                className="promo-card__icon"
                src="/images/danceschool2-icon1.png"
                alt=""
              />
              <span className="promo-card__tag">Artikel Terbaru</span>
              <h3>
                Baharu
                <br />
                Di
                <br />
                Blog
              </h3>
            </Link>
            <Link
              className="promo-card"
              to="/about"
              style={{
                backgroundImage: `url(/images/danceschool2-columnbg2.jpg)`,
              }}
            >
              <img
                className="promo-card__icon"
                src="/images/danceschool2-icon1.png"
                alt=""
              />
              <span className="promo-card__tag">Saya &amp; Perjalanan</span>
              <h3>
                Tentang
                <br />
                Saya &
                <br />
                Kisahku
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            title="APA YANG TERBARU DI BLOG"
            script="kisah terkini"
            description="Kisah, fikiran dan idea terbaru saya — ditulis khas untuk anda."
          />

          {loading ? (
            <div className="loading">Memuatkan artikel&hellip;</div>
          ) : featured ? (
            <div className="featured-post">
              <div className="featured-post__media">
                <Link to={`/blog/${featured.slug}`} aria-label={featured.title}>
                  <img src={featured.image} alt={featured.title} />
                </Link>
              </div>
              <div className="featured-post__body">
                <span className="chip featured-post__tag">
                  {featured.categories[0]}
                </span>
                <h2>
                  <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.excerpt}</p>
                <div>
                  <Link to={`/blog/${featured.slug}`} className="button button--dark button--sm">
                    Baca artikel
                  </Link>
                </div>
              </div>
            </div>
          ) : null}

          <div className="post-grid">
            {recent.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/blog" className="button button--outline">
              Lihat semua artikel
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
