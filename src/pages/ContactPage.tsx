import { useState, type FormEvent } from 'react'
import SectionHeading from '../components/SectionHeading'
import { siteConfig } from '../config/site'

const INFO = [
  {
    icon: 'icon-location',
    title: 'ADDRESS',
    lines: siteConfig.address.split(', '),
  },
  {
    icon: 'icon-clock',
    title: 'OPENING HOURS',
    lines: ['Monday - Friday', '08:00 AM - 05:00 PM', 'Saturday: 08:00 AM - 05:00 PM'],
  },
  {
    icon: 'icon-phone',
    title: 'CALL US',
    lines: [siteConfig.phone, siteConfig.email],
  },
]

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
          <h1>DO YOU HAVE A QUESTION?</h1>
          <div className="page-hero__script">contact us</div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            title="WE WOULD LOVE TO HEAR FROM YOU"
            description="Questions about a post, a workshop or the blog itself? Send a message and we will get back to you."
          />

          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <h3>Thanks for your message!</h3>
              <p>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email">Your e-mail</label>
                <input id="email" name="email" type="email" required placeholder="Your e-mail" />
              </div>
              <div className="field-full">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" />
              </div>
              <div className="field-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Message"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="button button--dark">
                  Send a message
                </button>
              </div>
            </form>
          )}

          <div style={{ height: 64 }} />

          <div className="info-grid">
            {INFO.map((item) => (
              <div key={item.title} className="info-card">
                <div className="info-card__icon">
                  <i className={item.icon} />
                </div>
                <h5>{item.title}</h5>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
