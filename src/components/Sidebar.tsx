import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useArchive } from '../hooks/usePosts'

const SOCIALS = [
  { icon: 'icon-play', label: 'Subs. di Youtube', url: 'https://www.youtube.com/sofinahlamudin' },
  { icon: 'icon-instagram', label: 'Follow di Insta', url: 'http://www.instagram.com/sofieluthor' },
  {
    icon: 'icon-facebook-circled',
    label: 'Add di Facebook',
    url: 'http://www.facebook.com/sofinah696',
  },
]

const HIGHLIGHTS = [
  { label: 'Review', url: 'https://www.sofinahlamudin.com/search/label/Review%20Produk' },
  {
    label: 'Metafizik',
    url: 'https://www.sofinahlamudin.com/search/label/Metafizik%20Pernomboran',
  },
  { label: 'Personal', url: 'https://www.sofinahlamudin.com/search/label/Sofinazz%20Story' },
  { label: 'Thoughts', url: 'https://www.sofinahlamudin.com/search/label/Thoughts' },
]

const ALTERNATIVES = [
  { label: 'Kafein September', url: 'https://www.instagram.com/kafeinseptember' },
  { label: 'Sofie Luthor Live', url: 'https://www.instagram.com/sofieluthor.live' },
]

const EMAIL = 'ciksofie90@gmail.com'
const WHATSAPP_LABEL = '011-54269623'
const WHATSAPP_URL = 'https://wa.me/601154269623'
const TRAFFIC = '4,082,770'

const MONTH_NAMES = [
  'Januari',
  'Februari',
  'Mac',
  'April',
  'Mei',
  'Jun',
  'Julai',
  'Ogos',
  'September',
  'Oktober',
  'November',
  'Disember',
]



function WidgetTitle({ children }: { children: string }) {
  return <h2 className="widget__title">{children}</h2>
}

export default function Sidebar() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [term, setTerm] = useState(searchParams.get('q') ?? '')
  const archive = useArchive()

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    const q = term.trim()
    navigate(q ? `/blog?q=${encodeURIComponent(q)}` : '/blog')
  }

  return (
    <>
      <div className="widget">
        <WidgetTitle>Cari</WidgetTitle>
        <form className="widget-search" onSubmit={handleSearch} role="search">
          <input
            type="search"
            name="q"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Carian..."
            aria-label="Cari artikel"
          />
          <button type="submit" className="button button--accent button--sm">
            <i className="icon-search" />
          </button>
        </form>
      </div>

      <div className="widget">
        <WidgetTitle>Trafik</WidgetTitle>
        <div className="widget-stats">
          <span className="widget-stats__count">{TRAFFIC}</span>
          <span className="widget-stats__label">Jumlah kunjungan</span>
        </div>
      </div>

      <div className="widget">
        <WidgetTitle>Bio Sofie</WidgetTitle>
        <div className="widget-bio">
          <img src="/images/dp-sementara.jpg" alt={siteConfig.name} />
          <p>{siteConfig.footerDescription}</p>
          <Link className="widget-more" to="/about">
            Selengkapnya &rarr;
          </Link>
        </div>
      </div>

      <div className="widget">
        <WidgetTitle>Media Sosial</WidgetTitle>
        <div className="widget-social">
          {SOCIALS.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
              <span>{social.label}</span>
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="widget">
        <WidgetTitle>Hubungi Sofie</WidgetTitle>
        <div className="widget-contact">
          <a href={`mailto:${EMAIL}`}>
            <i className="icon-mail" />
            <span>{EMAIL}</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <i className="icon-phone" />
            <span>{WHATSAPP_LABEL}</span>
          </a>
        </div>
      </div>

      <div className="widget">
        <WidgetTitle>My Highlight</WidgetTitle>
        <ul className="widget-links">
          {HIGHLIGHTS.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        <WidgetTitle>Alternative</WidgetTitle>
        <ul className="widget-links">
          {ALTERNATIVES.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        <WidgetTitle>Arkib</WidgetTitle>
        <div className="widget-archive">
          {archive.length === 0 && (
            <div style={{ fontSize: '15px', color: 'var(--muted)' }}>
              Tiada arkib buat masa ini.
            </div>
          )}
          {archive.map((entry) => (
            <div key={entry.year}>
              <Link
                to={`/blog?year=${entry.year}`}
                className="widget-archive__year"
                style={{ textDecoration: 'none' }}
              >
                <span>{entry.year}</span>
                <span>({entry.total})</span>
              </Link>
              {entry.months.map((item) => (
                <Link
                  to={`/blog?year=${entry.year}&month=${item.month + 1}`}
                  className="widget-archive__month"
                  key={item.month}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span>{MONTH_NAMES[item.month]} {entry.year}</span>
                  <span>({item.count})</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
