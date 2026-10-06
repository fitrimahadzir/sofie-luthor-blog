import SectionHeading from '../components/SectionHeading'
import { blogMap } from '../data/blogMap'

export default function BlogMapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>PETA BLOG</h1>
          <div className="page-hero__script">panduan cerita di blog ini</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="CARI TOPIK, BACA, DAN TEROKAI"
            description="Senarai lengkap topik dan artikel mengikut kategori. Pilih mana-mana tajuk untuk terus membaca di blog asal sofinahlamudin.com."
          />

          <div className="map-grid">
            {blogMap.map((group) => (
              <div className="map-card" key={group.category}>
                <h6 className="map-card__title">{group.category}</h6>
                {group.items.length > 0 ? (
                  <ul className="map-card__list">
                    {group.items.map((item, index) => (
                      <li key={`${item.url}-${index}`}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="chip">Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
