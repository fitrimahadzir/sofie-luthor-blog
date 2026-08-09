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
              <img src={siteConfig.logo} alt={`${siteConfig.name} logo`} />
              <span>{siteConfig.name}</span>
            </div>
            <p>{siteConfig.footerDescription}</p>
          </div>

          <div>
            <h5>EXPLORE</h5>
            <ul className="footer__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>CONTACT</h5>
            <ul className="footer__list">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {year} {siteConfig.name} | All Rights Reserved
          </span>
          <span>Powered by React &amp; WordPress</span>
        </div>
      </div>
    </footer>
  )
}
