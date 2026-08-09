import { useState, type FormEvent } from 'react'
import { siteConfig } from '../config/site'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div
          className="cta"
          style={{
            backgroundImage: `url(/images/danceschool2-columnbg4.jpg)`,
          }}
        >
          <h2>IF YOU HIT A WALL, DANCE ON TOP OF IT</h2>
          <div className="cta__script">never miss a post</div>
          <p>
            Join the newsletter for new posts, workshop dates and dance tips.
            No spam — just good moves.
          </p>

          {sent ? (
            <p className="newsletter-success">
              Thanks {siteConfig.name} — you are on the list!
            </p>
          ) : (
            <form className="newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Your e-mail address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-label="Your e-mail address"
              />
              <button type="submit" className="button button--accent">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
