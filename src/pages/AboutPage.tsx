import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import SectionHeading from '../components/SectionHeading'
import { siteConfig } from '../config/site'

const JOURNEY = [
  { year: '1990', text: 'Dilahirkan pada 16 September' },
  { year: '1996', text: 'Tadika Al Iman, Labuan' },
  { year: '1997 – 2002', text: 'SK Layang-Layangan, Labuan' },
  { year: '2003 – 2007', text: 'SMK Mutiara, Labuan — Sains Tulen' },
  { year: 'Jun 2008 – 2009', text: 'SMK Lajau, Labuan — Perniagaan' },
]

const VALUES = [
  'Agama',
  'Cinta',
  'Kekeluargaan',
  'Kesihatan',
  'Kecantikan',
  'Estetik',
  'Pengiktirafan',
  'Kewangan',
  'Ilmu Pengetahuan',
  'Kedamaian',
]

const PASSIONS = [
  'Muzik',
  'Dance',
  'Jump Rope',
  'Lukisan',
  'Foto',
  'Senaman Kecergasan',
  'Vegetarian',
  'Game',
  'Grafik',
  'Video',
  'Animasi',
  'Bandar',
  'Bangunan',
  'Kucing',
  'Buku',
  'Permainan',
]

const FUN_FACTS = [
  'Blogger sepenuh masa',
  'Ulat buku & kaki library',
  'Gila kamera & captured foto',
  'Kumpul & edit gambar',
  'Isteri kepada Encik Suami',
  'Membina kejayaan bersama suami',
]

const BOOK_GENRES = [
  { group: 'Motivasi', items: ['Suami Isteri / Keluarga', 'Perniagaan', 'Kewangan', 'Membina Diri'] },
  { group: 'Komik / Majalah Kartun', items: ['Gempak', 'Bekazon', 'Ujang'] },
  { group: 'Novel', items: ['Fiksyen', 'Fantasi', 'Sci-Fi'] },
  { group: 'Seni Lukisan', items: ['Potret', 'Karikatur', 'Pensil Warna', 'Doodle'] },
  { group: 'English', items: ['Learning English', 'Dictionary', 'Grammar'] },
]

const MOVIES = ['Harry Potter', 'Fantastic Beast', 'Marvel', 'Maleficent', 'Alice & The Wonderland']

const TV_SHOWS = [
  'Ellen Degeneres Show',
  'The Big Bang Theory',
  'Young Sheldon',
  'Miracle Workers',
  'The Mentalist',
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>TENTANG PENULIS</h1>
          <div className="page-hero__script">salam, saya sofie</div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="about-profile">
            <div className="about-profile__media">
              <img src="/images/danceschool2-pic1.jpg" alt={siteConfig.name} />
            </div>
            <div className="about-profile__body">
              <h3>Sofinah binti Lamudin</h3>
              <p className="about-profile__role">
                Blogger sepenuh masa &middot; Internet Marketer &middot; Penulis &amp; Pelukis
              </p>
              <p>
                Anak jati Wilayah Persekutuan Labuan. Berkahwin pada 26 Disember
                2014. Dikenali dalam talian sebagai <em>Sofie Luthor</em> — aktif
                dalam bidang internet marketing, penulisan dan menjalankan blog
                sepenuh masa sejak tahun 2006.
              </p>
              <div className="team-card__socials">
                <a href={siteConfig.socials.instagram} aria-label="Instagram">
                  <i className="icon-instagram" />
                </a>
                <a href={siteConfig.socials.facebook} aria-label="Facebook">
                  <i className="icon-facebook-circled" />
                </a>
                <a href={siteConfig.socials.twitter} aria-label="Twitter">
                  <i className="icon-twitter-circled" />
                </a>
              </div>
            </div>
          </div>

          <SectionHeading
            title="KISAH SAYA"
            script="my story"
            description="Perjalanan yang membawa saya ke dunia internet, penulisan dan seni."
          />

          <div className="about-text">
            <p>
              SOFINAH BINTI LAMUDIN nama diberi. Anak jati Wilayah Persekutuan
              Labuan. Lahir pada tahun 1990. Berkahwin dengan Mohd Nasyit pada 26
              Disember 2014. Beliau kini bergiat aktif dalam bidang internet
              marketing, penulisan dan menjadi <strong>BLOGGER sepenuh masa</strong>.
              Beliau telah berkecimpung dalam dunia blog sejak di bangku sekolah
              sekitar tahun 2006. Pada tahun 2017, beliau menjadi salah seorang
              daripada keluarga <strong>ZALORA MALAYSIA</strong> sebagai penulis
              artikel di majalah atas talian Zalora. Pada Disember 2020, beliau
              menjadi salah seorang <strong>SHOPEE AMBASSADOR</strong>.
            </p>
            <p>
              Sejak meninggalkan pekerjaan terakhirlahnya di EON Auto Mart, Labuan
              (Mitsubishi Motors Dealer) pada tahun 2014, beliau memulakan semula
              hobi sejak kecil iaitu melukis di samping aktiviti dalam talian yang
              lain. Pada 2016 beliau membuka laman sesawang khas untuk mengongsikan
              lukisan dan penulisan seni visual bernama <strong>Sophee Studio</strong>.
              Namun, pada 2019, Sophee Studio telah dirombak dan ditukar kepada{' '}
              <strong>PECULIAR ESCAPISM</strong>. Beliau kini menerima komisen
              melukis dan menjadi designer di Printcious.
            </p>
            <p>
              Selain melukis, pada 08 Ogos 2018 beliau membuat satu lagi blog khas
              bernama <strong>"Silly Wonk Book Blog"</strong> untuk membuat review
              buku dalam bahasa Inggeris, kerana aktif kembali membaca buku sebagai
              hobi dan aktiviti utama dalam rutin harian.
            </p>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Persinggahan di Dunia
            </h3>
            <div className="timeline">
              {JOURNEY.map((item) => (
                <div className="timeline__item" key={item.year}>
                  <span className="timeline__year">{item.year}</span>
                  <span className="timeline__dot" />
                  <span className="timeline__text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Nilai atau Mutu yang Dihajati
            </h3>
            <div className="tag-list">
              {VALUES.map((value) => (
                <span className="tag" key={value}>
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Keterujaan &amp; Minat Saya
            </h3>
            <div className="tag-list">
              {PASSIONS.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Serba-Serbi Tentang Saya
            </h3>
            <ul className="about-list">
              {FUN_FACTS.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Genre Buku Kegemaran
            </h3>
            <div className="genre-grid">
              {BOOK_GENRES.map((genre) => (
                <div className="genre-card" key={genre.group}>
                  <h4>{genre.group}</h4>
                  <ul>
                    {genre.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h3 className="about-block__title">
              <span className="about-block__badge">♥</span> Favorit Kami
            </h3>
            <div className="fav-columns">
              <div>
                <h4>Movies</h4>
                <ul className="about-list">
                  {MOVIES.map((movie) => (
                    <li key={movie}>{movie}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>TV Show</h4>
                <ul className="about-list">
                  {TV_SHOWS.map((show) => (
                    <li key={show}>{show}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="quote-block">
            <blockquote>
              "Hidup lebih bermakna dan bahagia dengan berusaha keras membina
              kejayaan untuk mengongsikannya bersama orang lain kerana rezeki itu
              datangnya dari ALLAH bukan untuk kita semata mata."
            </blockquote>
            <div className="quote-block__tags">#Nevergiveup &middot; #KeepLearning</div>
            <div className="quote-block__sign">With Love, #Sofinah696 💕</div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/blog" className="button button--dark">
              Baca blog saya
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
