# Sofie Luthor — Dance & Lifestyle Blog (React + Vite + TypeScript)

Versi React blog ini diubah daripada website **BeDanceSchool 2** (BeTheme demo) yang
dimuat turun menggunakan HTTrack. Reka bentuk, warna, fon dan imej dikekalkan,
manakala struktur diubah menjadi blog penuh yang sedia untuk disambung ke
**WordPress CMS** melalui REST API.

## Mulakan

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # build production (tsc + vite)
npm run lint      # oxlint
npm run preview   # pratonton build production
```

## Struktur projek

```
src/
  config/site.ts        # Konfigurasi tapak (nama, logo, URL WordPress API, dll)
  types/post.ts         # Jenis Post & respons WordPress REST API
  data/demoPosts.ts     # Data demo (digunakan sebelum WordPress disambung)
  services/wpClient.ts  # Service layer untuk WordPress REST API + fallback demo
  hooks/usePosts.ts     # React hooks untuk memuat posts/posts kategori
  components/           # Header, Footer, Layout, PostCard, Newsletter, dll
  pages/                # Home, Blog, Post (artikel), About, Contact
```

## Menyambung ke WordPress

1. Pastikan WordPress anda ada **REST API** diaktifkan (aktif secara default).
2. Pasang plugin `WP CORS` (atau tambah header CORS) pada WordPress supaya
   penyemak imbas membenarkan permintaan dari domain React anda.
3. Buka `src/config/site.ts` dan set:

```ts
wpApiUrl: 'https://domain-wordpress-anda.com/wp-json',
useWpApi: true,
```

Service layer akan mengambil:
- Senarai posts: `GET /wp-json/wp/v2/posts?_embed`
- Satu post: `GET /wp-json/wp/v2/posts?slug=<slug>&_embed`
- Kategori: `GET /wp-json/wp/v2/categories`

Jika API gagal atau `useWpApi` masih `false`, aplikasi akan terus menggunakan
`src/data/demoPosts.ts` — jadi pembangunan tetap boleh diteruskan.

### Nota penting untuk artikel
- Imej featured diambil daripada `_embedded['wp:featuredmedia'][0].source_url`.
- Tajuk/ekserp artikel diambil daripada medan `rendered` (HTML) WordPress.
- Untuk kandungan artikel dipaparkan sepenuhnya, gunakan `GET /wp-json/wp/v2/posts`
  (WP biasanya menghantar penuh untuk permintaan dari laman sendiri; jika terpotong,
  tambahkan parameter atau aktifkan plugin REST API Content).

## Mengubah kandungan blog

- **Demo content**: edit `src/data/demoPosts.ts`.
- **Nama/logo/lagu**: edit `src/config/site.ts`.
- **Warna & tipografi**: edit pembolehubah CSS dalam `src/index.css`.
