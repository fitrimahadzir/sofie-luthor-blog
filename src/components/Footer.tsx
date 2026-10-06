import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              <img src={siteConfig.footerLogo} alt={`${siteConfig.name} logo`} />
            </div>
            <p>{siteConfig.footerDescription}</p>
          </div>

          <div>
            <h5>TEROKA</h5>
            <ul className="footer__list">
              <li>
                <Link to="/">Utama</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">Penulis</Link>
              </li>
              <li>
                <Link to="/contact">Hubungi</Link>
              </li>
              <li>
                <Link to="/peta-blog">Peta Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>HUBUNGI</h5>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {year} {siteConfig.name} | Hak Cipta Terpelihara
          </span>
          <span>
            Direka &amp; dibangunkan oleh{' '}
            <a href="https://www.fitrimahadzir.my" target="_blank" rel="noopener noreferrer">
              FM
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
