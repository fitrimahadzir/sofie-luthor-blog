# Website Asal — BeDanceSchool 2 (Muffin Group / BeTheme)

Fail ini mendokumenkan detail **website asal** sebelum diubah kepada blog individu Sofie Luthor.
Ia disimpan sebagai rujukan/simpanan sekiranya perlu dikembalikan.

> **Theme asal (WordPress):** BeDanceSchool 2 — BeTheme oleh Muffin Group
> Demo: https://themes.muffingroup.com/be/danceschool2/
> Preview Alternatif (Elementor): https://themes.muffingroup.com/be/danceschool2_el/
> Ditulis pada tahun **2019** (fail imej bertarikh 2019/09).

Reka bentuk asal adalah **sekolah/studio tarian** yang bersifat organisasi (pasukan pengajar,
kelas, bengkel, harga). Ia kemudian dialihkan menjadi aplikasi React blog dan kini diubah kepada
blog individu.

---

## Senarai Halaman React (selepas penukaran)

- `/` — Home
- `/blog` — Blog
- `/about` — About
- `/contact` — Contact

---

## Kandungan Asal (Demo BeDanceSchool 2)

### Navigasi Atas (Header)
- Logo + nama.
- Menu: **START / ABOUT US / WORKSHOPS / GALLERY / CLASSES / OUR TEAM / CONTACT**
- Butang: **BUY NOW**

### Hero (Slider)
- Tajuk: `DANCE IS THE HIDDEN LANGUAGE OF THE SOUL`
- Script: `let's dance!`
- Butang: **OUR OFFER** dan **ABOUT US**

### Promosi (2 keping, ikon `danceschool2-icon1.png`)
1. **PROMOTION** — "ELIT LECTUS FELIS"
2. **OUR TEAM** — "GRAVIDA VITAE DAPIBUS"

### About / Kelas
- Tajuk: `THE JOB OF FEETS IS WALKING, BUT THEIR HOBBY IS DANCING`
- Script: `what's your style?`
- Deskripsi:
  > "Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna."
- **3 Kelas** (murid/kelas, bukan pasukan):
  1. HIP-HOP & BREAKDANCE (`danceschool2-pic1.jpg`) — `01`
  2. JAZZ & MODERN DANCE (`danceschool2-pic2.jpg`) — `02`
  3. BALLROOM DANCES (`danceschool2-pic3.jpg`) — `03`

### How We Work
- Tajuk: `IF YOU HIT A WALL, CLIMB OVER IT, CRAWL UNDER IT, OR DANCE ON TOP OF IT`
- "watch our promo video" (YouTube: `z0jjTU-H43M`)

### Workshops (jual tiket)
- Tajuk: `ANY KIND OF DANCING IS BETTER THAN NO DANCING AT ALL`
- Senarai bengkel + harga (BOOK NOW):
  | Tarikh | Kelas | Harga |
  | --- | --- | --- |
  | 19-20 JUN | FLAMENCO | $39 |
  | 22-24 JUN | TANGO | $29 |
  | 26-29 JUN | FOXTROT | $45 |
  | 6-8 AUG | RUMBA | $67 |
  | 19-20 AUG | FLAMENCO | $53 |
  | 23-24 AUG | CHA-CHA | $82 |

### Instagram / Prices
- Tajuk: `WHEN YOU DANCE YOU CAN ENJOY THE LUXURY OF BEING YOU`
- "prices" — 3 pakej keahlian:
  | Pakej | Kenyataan | Harga |
  | --- | --- | --- |
  | KIDS | 2–8 tahun (`icon2`) | $99.99 — JOIN NOW |
  | TEENS | 8–18 tahun (`icon3`) | $149.99 — JOIN NOW |
  | ADULTS | 18+ (`icon4`) | $199.99 — JOIN NOW |

### Testimonials
- 3 testimoni lorem ipsum:
  - Brandon Ross (`danceschool2-testimonials1.jpg`)
  - Kevin Perry (`danceschool2-testimonials2.jpg`)
  - Katarina Johnes (`danceschool2-testimonials3.jpg`)

### Our Team ("25 YEARS OF EXPERIENCE — WE ARE BEDANCESCHOOL")
- Script: `our team`
- 3 ahli pasukan:
  - **KEVIN PERRY** — Hip-Hop & Breakdance (`danceschool2-pic5.jpg`)
  - **ALICE BOYD** — Jazz & Modern Dance (`danceschool2-pic6.jpg`)
  - **BRANDON ROSS** — Ballroom Dances (`danceschool2-pic7.jpg`)

### Contact ("DO YOU HAVE A QUESTION? FEEL FREE TO CONTACT")
- Script: `contact us`
- 3 kad maklumat:
  1. **ADDRESS** — Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
  2. **OPENING HOURS** — Monday–Friday 08:00–17:00; Saturday 08:00–17:00
  3. **CALL US** — `+61 (0) 383 766 284`

### Footer
- © 2026 BeTheme by Muffin group | All Rights Reserved | Powered by WordPress

---

## Konfigurasi React Asal (`src/config/site.ts`)

| Field | Nilai asal |
| --- | --- |
| `name` | `Sofie Luthor` |
| `tagline` | `Dance & Lifestyle Blog` |
| `heroTitle` | `DANCE IS THE HIDDEN LANGUAGE OF THE SOUL` |
| `heroScript` | `let's dance!` |
| `logo` | `/images/danceschool2.png` |
| `description` | `A blog about dance, movement and lifestyle. Tips, workshops, stories and interviews from the dance floor.` |
| `footerDescription` | `A blog about dance, movement and lifestyle. Tips, workshops, stories and interviews from the dance floor.` |
| `address` | `Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia` |
| `phone` | `+61 (0) 383 766 284` |
| `email` | `hello@sofieluthor.com` |
| `openingHours` | `Monday - Friday: 08:00 AM - 05:00 PM` |
| `socials` | twitter/facebook/instagram = `#` |
| `wpApiUrl` | `https://your-wordpress-site.com/wp-json` |
| `useWpApi` | `false` |

---

## Halaman React Asal (Kandungan sebelum diubah ke blog individu)

### Header (`src/components/Header.tsx`)
- Logo + teks nama **"Sofie Luthor"** (`siteConfig.logo`).
- Menu: Home, Blog, About, Contact.

### Footer (`src/components/Footer.tsx`)
- Logo + teks nama **"Sofie Luthor"**.
- **EXPLORE**: Home, Blog, About Us, Contact.
- **CONTACT**:
  - Alamat: `Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia`
  - Telefon: `+61 (0) 383 766 284`
  - Email: `hello@sofieluthor.com`
- Baris bawah: `© {tahun} Sofie Luthor | All Rights Reserved` · `Powered by React & WordPress`

### Home (`src/pages/HomePage.tsx`)
- Hero: tag `Welcome to Sofie Luthor`, tajuk `DANCE IS THE HIDDEN LANGUAGE OF THE SOUL`, script `let's dance!`, deskripsi blog.
- Butang: **Read the blog** + **About us**.
- 2 promo card:
  1. **Latest Posts** — "Fresh From the Floor" (ikon `danceschool2-icon1.png`, bg `danceschool2-columnbg1.jpg`)
  2. **Our Team** — "Meet the Instructors Behind It" (ikon `danceschool2-icon1.png`, bg `danceschool2-columnbg2.jpg`)
- "What's New on the Blog" — featured post + `post-grid` (3 pos) + butang **View all posts**.

### About (`src/pages/AboutPage.tsx`)
- Hero: `ABOUT SOFIE LUTHOR`, script `25 years on the dance floor`.
- Section: `THE JOB OF FEET IS WALKING, BUT THEIR HOBBY IS DANCING`, script `what's your style?`.
- Deskripsi asal (Lorem + sekolah tarian):
  > "Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. We have been teaching dance for 25 years — from our first wobbly steps to workshops that fill the room."
- 3 kad pasukan pengajar (`TEAM`):
  | Nama | Peranan | Imej |
  | --- | --- | --- |
  | KEVIN PERRY | Hip-Hop & Breakdance | `danceschool2-pic5.jpg` |
  | ALICE BOYD | Jazz & Modern Dance | `danceschool2-pic6.jpg` |
  | BRANDON ROSS | Ballroom Dances | `danceschool2-pic7.jpg` |
- Butang **Get in touch** → `/contact`.

### Contact (`src/pages/ContactPage.tsx`)
- Hero: `DO YOU HAVE A QUESTION?`, script `contact us`.
- Section: `WE WOULD LOVE TO HEAR FROM YOU`.
- Borang: nama, email, subjek, mesej → butang **Send a message**.
- 3 kad maklumat (`INFO`):
  1. **ADDRESS** (ikon `icon-location`) — alamat Melbourne.
  2. **OPENING HOURS** (ikon `icon-clock`) — Mon–Fri 08:00–17:00, Sab 08:00–17:00.
  3. **CALL US** (ikon `icon-phone`) — telefon + email.

### Blog (`src/pages/BlogPage.tsx`) — tidak diubah
- Hero: `THE SOFIE LUTHOR BLOG`, script `stories from the floor`.
- Filter kategori + `post-grid` + pagination.

---

## Aset Imej Asal (`public/images/`)

- `danceschool2.png` — logo asal
- `danceschool2-icon1.png` / `icon2` / `icon3` / `icon4.png` — ikon
- `danceschool2-pic1.jpg` − `pic7.jpg` — gambar kelas, pasukan & profil
- `danceschool2-columnbg1/2/4.jpg` — latar column/promo
- `danceschool2-sectionbg1–6,8.png` — latar section
- `danceschool2-testimonials1–3.jpg` — testimonials

Nota: Imej demo yang dipaparkan di laman tema WordPress biasanya **tidak disertakan** dalam pakej
tema (mengikut dasar Muffin Group: "Images and icons used in our demo site are not included to the
theme package").

---

## Nota Integrasi WordPress

Seting asal dalam `siteConfig`:
- `wpApiUrl: 'https://your-wordpress-site.com/wp-json'` + `useWpApi: false` — sedia untuk disambungkan ke REST API WordPress apabila diperlukan.

Detail ini disimpan sebagai rujukan versi sebelum penukaran kepada blog individu.
