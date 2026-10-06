import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../config/site'

const NAV_ITEMS = [
  { label: 'Utama', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: 'Penulis', to: '/about' },
  { label: 'Hubungi', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" onClick={() => setOpen(false)}>
          <img src={siteConfig.logo} alt={`${siteConfig.name} logo`} />
        </NavLink>

        <button
          type="button"
          className={`header__burger${open ? ' is-open' : ''}`}
          aria-label="Togol menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Menu utama">
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `nav__link${isActive ? ' is-active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
