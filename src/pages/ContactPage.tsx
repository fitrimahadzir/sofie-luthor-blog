import { useState, type FormEvent } from 'react'
import SectionHeading from '../components/SectionHeading'

const SOCIALS = [
  {
    icon: 'icon-instagram',
    title: 'Instagram',
    items: [
      { name: 'Sofinah696', url: 'https://www.instagram.com/sofinah696/' },
      { name: 'SillyWonk', url: 'https://www.instagram.com/sillywonk/' },
      { name: 'Peculiar Escapism', url: 'https://www.instagram.com/peculiarescapism/' },
      { name: 'Sofie Luthor', url: 'https://www.instagram.com/sofieluthor/' },
    ],
  },
  {
    icon: 'icon-facebook-circled',
    title: 'Facebook / Page',
    items: [
      { name: 'Sofinah Lamudin', url: 'https://www.facebook.com/sofinah696' },
      {
        name: 'Blog Sofinahlamudindotcom',
        url: 'https://www.facebook.com/sofinahlamudindotcom/',
      },
      { name: 'Silly Wonk', url: 'https://www.facebook.com/SillyWonk' },
      { name: 'The Peculiar Escapism', url: 'https://www.facebook.com/peculiarescapism' },
      { name: 'How To Anything', url: 'https://www.facebook.com/howtoanythingMY' },
      { name: 'Sofie Luthor Merchandise', url: 'https://www.facebook.com/sofieluthor' },
    ],
  },
  {
    icon: 'icon-play',
    title: 'YouTube',
    items: [
      {
        name: 'Sofinah Lamudin Channel',
        url: 'https://www.youtube.com/channel/UCt_lD3D5CZdjpkxaUaRyn5A',
      },
    ],
  },
]

const WEBSITES = [
  { name: 'Forex', note: 'Temp. Unavailable', kind: 'unavailable', url: 'http://forex.mudahkaya.com/' },
  {
    name: 'Strategi Wang Forex',
    note: 'Temp. Unavailable',
    kind: 'unavailable',
    url: 'http://strategiwangforex.mudahkaya.com/',
  },
  { name: 'Tlbpro', note: 'Temp. Unavailable', kind: 'unavailable', url: 'http://tlbpro.mudahkaya.com/' },
  { name: 'Hedgingpro', note: 'Temp. Unavailable', kind: 'unavailable', url: 'http://hedgingpro.mudahkaya.com/' },
  {
    name: 'Strategi Forex',
    note: 'Temp. Unavailable',
    kind: 'unavailable',
    url: 'http://strategiforex.mudahkaya.com/',
  },
  { name: 'Sophee Studio', note: 'Closed', kind: 'closed', url: 'http://www.sopheestudio.net/' },
  { name: 'Silly Wonk', note: '', kind: 'active', url: 'https://www.sillywonk.com' },
  { name: 'How To Anything', note: '', kind: 'active', url: 'https://www.how-to-anything.com' },
  {
    name: 'Peculiar Escapism',
    note: '',
    kind: 'active',
    url: 'https://peculiarescapism.mudahkaya.com',
  },
  { name: 'Sofie Luthor Merchandise', note: '', kind: 'active', url: 'https://www.facebook.com/sofieluthor' },
]

const EMAILS = ['admin@sofinahlamudin.com', 'ciksofie90@gmail.com']

const LINK_IN_BIO = 'http://visit.sofieluthor.com/'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: wire up to WordPress contact-form-7 endpoint or your own backend.
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>KEEP IN TOUCH</h1>
          <div className="page-hero__script">sila hubungi saya</div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="linkbio">
            <a href={LINK_IN_BIO} target="_blank" rel="noopener noreferrer">
              Link In Bio : {LINK_IN_BIO}
            </a>
          </div>

          <SectionHeading
            title="SAYA AKAN GEMBIRA MENDENGAR DARIPADA ANDA"
            description="Ada cerita, pertanyaan atau idea? Hantarkan mesej dan saya akan membalas secepat mungkin."
          />

          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <h3>Terima kasih atas mesej anda!</h3>
              <p>Saya akan membalas secepat mungkin.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nama anda</label>
                <input id="name" name="name" type="text" required placeholder="Nama anda" />
              </div>
              <div>
                <label htmlFor="email">E-mel anda</label>
                <input id="email" name="email" type="email" required placeholder="E-mel anda" />
              </div>
              <div className="field-full">
                <label htmlFor="subject">Subjek</label>
                <input id="subject" name="subject" type="text" placeholder="Subjek" />
              </div>
              <div className="field-full">
                <label htmlFor="message">Mesej</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Mesej"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="button button--dark">
                  Hantar mesej
                </button>
              </div>
            </form>
          )}

          <div style={{ height: 64 }} />

          <SectionHeading
            title="HUBUNGI SAYA & JANGAN TERPUTUS HUBUNGAN"
            script="keep connecting"
          />

          <div className="info-grid">
            {SOCIALS.map((social) => (
              <div key={social.title} className="info-card">
                <div className="info-card__icon">
                  <i className={social.icon} />
                </div>
                <h5>{social.title}</h5>
                {social.items.map((item) => (
                  <p key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </p>
                ))}
              </div>
            ))}

            <div className="info-card">
              <div className="info-card__icon">
                <i className="icon-location" />
              </div>
              <h5>E-MAIL</h5>
              {EMAILS.map((email) => (
                <p key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Website / Blog
            </h3>
            <div className="website-grid">
              {WEBSITES.map((site) => (
                <div className="website-item" key={site.name}>
                  <a
                    className="website-item__name"
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.name}
                  </a>
                  {site.note && (
                    <span
                      className={`website-item__note website-item__note--${site.kind}`}
                    >
                      {site.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="quote-block">
            <blockquote>Keep Connecting!</blockquote>
            <div className="quote-block__sign">With Love, #Sofinah696 💕</div>
            <div className="quote-block__tags">
              Follow instagram : @sofinah696 &middot; @sillywonk &middot; @peculiarescapism
              &middot; @sofieluthor
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
