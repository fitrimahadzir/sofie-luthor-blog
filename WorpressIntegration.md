# Penyambungan Blog ke WordPress CMS

Panduan langkah demi langkah untuk menyambung blog React ini ke WordPress melalui
**WordPress REST API**. Kira-kira ambil masa 15–30 minit jika WordPress sudah sedia.

---

## 1. Persediaan WordPress

1. **Pasang WordPress** (hosting, VPS, atau `wp-env`/Local untuk ujian tempatan).
2. Pastikan **permalinks** diaktifkan:
   - Pergi ke **Settings → Permalinks** → pilih selain *Plain*
     (contoh: *Post name* `/%postname%/`).
   - REST API (`/wp-json`) **tidak berfungsi dengan betul** jika permalink *Plain*.
3. REST API diaktifkan secara default — tiada plugin diperlukan.

## 2. Cipta kategori

Gunakan kategori yang sama dengan demo blog untuk konsistensi, contoh:
`Dance Styles`, `Lifestyle`, `Workshops`, `News`.

1. Pergi ke **Posts → Categories** di dashboard.
2. Tambah setiap kategori dan **assign** kepada post yang berkaitan.

## 3. Sediakan content post

1. **Posts → Add New** untuk setiap artikel.
2. Set **Featured Image** — digunakan sebagai kad gambar dalam blog.
3. **Excerpt** — jika kosong, WordPress akan auto-truncate dari content.
4. **Tajuk & content** akan dipaparkan sebagai HTML (medan `rendered`), jadi
   block editor biasa seperti Word adalah mencukupi.
5. Pastikan setiap post ada **slug** yang unik (ia menjadi URL artikel).

## 4. Aktifkan CORS (sangat penting)

React app (localhost:5173 atau domain lain) perlu dibenarkan memanggil API
WordPress dari pelayar. Tanpa CORS, permintaan akan disekat.

Pilihan A — Plugin (paling mudah):
1. Pergi ke **Plugins → Add New** → cari **"WP CORS"**.
2. Pasang & aktifkan.
3. Pergi ke **Settings → WP CORS** → tambah origin anda:
   - `http://localhost:5173` (pembangunan)
   - `https://domain-react-anda.com` (production)

Pilihan B — Tanpa plugin (tambah di `wp-config.php` atau `.htaccess`):

```php
// wp-config.php — letak sebelum "That's all, stop editing!"
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: *');
```

> Nota: Untuk production dengan domain berbeza, gantikan origin di atas dengan
> domain React anda. Jangan gunakan `*` jika API memerlukan kredensial.

## 5. Konfigurasi app

Edit `src/config/site.ts`:

```ts
wpApiUrl: 'https://domain-wordpress-anda.com/wp-json',
useWpApi: true,
```

- `wpApiUrl` — base URL API WordPress (tanpa trailing slash).
- `useWpApi` — `true` untuk menggunakan API; `false` untuk terus guna data demo.

Simpan, kemudian jalankan `npm run dev`.

## 6. Uji sambungan

Buka URL berikut dalam pelayar:

```
https://domain-wordpress-anda.com/wp-json/wp/v2/posts?_embed
https://domain-wordpress-anda.com/wp-json/wp/v2/categories
```

Jika papar JSON — sambungan berjaya. Buka app React anda dan semak senarai post,
kategori, dan artikel dipaparkan dari WordPress.

## 7. Deploy ke production

1. `npm run build` → folder `dist/`.
2. Host `dist/` di platform kegemaran anda (Vercel, Netlify, dll).
3. Kemas kini `wpApiUrl` di `site.ts` jika perlu.
4. Pastikan origin production ditambah dalam setting CORS WordPress.

---

## Peta endpoint yang digunakan

| Tujuan           | Endpoint                                        | Parameter                                |
| ---------------- | ----------------------------------------------- | ---------------------------------------- |
| Senarai post     | `GET /wp-json/wp/v2/posts`                      | `_embed`, `per_page`, `page`, `search`   |
| Satu post (slug) | `GET /wp-json/wp/v2/posts`                      | `slug=<slug>&_embed`                     |
| Kategori         | `GET /wp-json/wp/v2/categories`                 | `per_page=100`                           |
| Pagination       | Header respons `X-WP-TotalPages` & `X-WP-Total` | —                                        |

Semua permintaan dibuat dalam `src/services/wpClient.ts`.

## Pemetaan data WordPress → app

| Medan app (`Post`)      | Sumber WordPress                                  |
| ----------------------- | ------------------------------------------------- |
| `title`                 | `title.rendered`                                  |
| `excerpt`               | `excerpt.rendered` (HTML dibuang)                 |
| `content`               | `content.rendered`                                |
| `image`                 | `_embedded['wp:featuredmedia'][0].source_url`     |
| `author` / avatar / bio | `_embedded['author'][0]`                          |
| `categories`            | `_embedded['wp:term']` (nama kategori)            |
| `slug`, `date`          | `slug`, `date`                                    |

## Kelakuan fallback

Jika `useWpApi` masih `false` **atau** panggilan API gagal (tidak reachable, CORS
tersekat, dsb.), app automatik jatuh kembali kepada data demo
(`src/data/demoPosts.ts`). Pembangunan boleh diteruskan walaupun WordPress belum
siap.

---

## Troubleshooting

- **Empty / fail "TypeError: Failed to fetch"** → CORS tidak diset. Semak langkah 4.
- **Paparkan data demo walaupun `useWpApi: true`** → buka Console pelayar; ralat
  `[wp] Failed to load...` menunjukkan punca. Sahkan `wpApiUrl` betul dan boleh
  dibuka dalam pelayar.
- **Permalink Plain** → `/wp-json` tidak berfungsi. Tukar di Settings → Permalinks.
- **Post tiada gambar** → Featured Image belum diset pada post tersebut.
- **Kategori tidak keluar** → pastikan post di-assign kategori; `_embed`
  hanya menyertakan term yang wujud.
- **Content terpotong** → WordPress menghantar `content.rendered` penuh melalui
  API; jika tersekat cache, cuba semak permalink atau cache hosting.
- **Filter kategori tidak jalan** → semasa ujian di localhost, pastikan nama
  kategori di WordPress sepadan dengan nama yang dipaparkan dalam app.

## Senarai semak sebelum live

- [ ] Permalinks bukan *Plain*
- [ ] Featured Image untuk setiap post
- [ ] Kategori di-assign
- [ ] CORS diaktifkan untuk domain production
- [ ] `wpApiUrl` betul & `useWpApi: true`
- [ ] `npm run build` berjaya tanpa ralat TypeScript
