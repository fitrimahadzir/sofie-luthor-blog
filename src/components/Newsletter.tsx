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
    <section className="section" style={{ paddingBottom: 90 }}>
      <div className="container">
        <div
          className="cta"
          style={{
            backgroundImage: `url(/images/danceschool2-columnbg4.jpg)`,
          }}
        >
          <h2>JANGAN TERLEPAS ARTIKEL TERBARU</h2>
          <div className="cta__script">langgan surat berita</div>
          <p>
            Langgan untuk menerima artikel terbaru terus ke e-mel anda. Tiada
            spam — hanya tulisan jujur dari saya.
          </p>

          {sent ? (
            <p className="newsletter-success">
              Terima kasih {siteConfig.name} — anda berjaya melanggan!
            </p>
          ) : (
            <form className="newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Alamat e-mel anda"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-label="Alamat e-mel anda"
              />
              <button type="submit" className="button button--accent">
                Langgan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
