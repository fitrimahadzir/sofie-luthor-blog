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
            <span className="hero__tag">Welcome to {siteConfig.name}</span>
            <h1>{siteConfig.heroTitle}</h1>
            <div className="hero__script">{siteConfig.heroScript}</div>
            <p>{siteConfig.description}</p>
            <div className="hero__actions">
              <Link to="/blog" className="button button--light">
                Read the blog
              </Link>
              <Link to="/about" className="button button--accent">
                About us
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
              <span className="promo-card__tag">Latest Posts</span>
              <h3>
                Fresh
                <br />
                From the
                <br />
                Floor
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
              <span className="promo-card__tag">Our Team</span>
              <h3>
                Meet the
                <br />
                Instructors
                <br />
                Behind It
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            title="WHAT'S NEW ON THE BLOG"
            script="latest stories"
            description="Tips, workshops, stories and interviews from the dance floor."
          />

          {loading ? (
            <div className="loading">Loading posts&hellip;</div>
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
                    Read article
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
              View all posts
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
