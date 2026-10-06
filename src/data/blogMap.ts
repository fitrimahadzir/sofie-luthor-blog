export type BlogMapItem = {
  title: string
  url: string
}

export type BlogMapCategory = {
  category: string
  items: BlogMapItem[]
}

export const blogMap: BlogMapCategory[] = [
  {
    category: 'KESIHATAN, SENAMAN, DAN PERGIGIAN',
    items: [
      { title: 'Menyihatkan Kolon dan Memulihkan Kulit Dengan Kitsui White Berries Tanpa Gula | Sesuai Untuk Mereka Yang Mengamalkan Makanan Tanpa Gula', url: 'https://www.sofinahlamudin.com/2019/12/Apakah-khasiat-buah-monk-kitsui-white-berries.html' },
      { title: 'Masalah Gigi Bongsu (Wisdom Teeth) Dan Jangkitan Pericoronitis Serta Puncanya | Simptom / Gejala Jangkitan Pericoronitis dan Puncanya', url: 'https://www.sofinahlamudin.com/2020/07/Masalah-gigi-bongsu-sakit-bergejala-jangkitan-pericoronotis.html' },
      { title: 'Kenapa Sakit Gigi Ketika Mengunyah Selepas Buat Tampal Gigi (Tooth Filling)? Bagaimanakah Menyelesaikannya?', url: 'https://www.sofinahlamudin.com/2020/07/punca-masih-sakit-gigi-selepas-tampal-gigi.html' },
      { title: 'Bagaimana Menggelakkan Kembung Perut Dengan Menggunakan Apple Cider Vinegar (Cuka Epal)  dengan Madu Asli dari Surya', url: 'https://www.sofinahlamudin.com/2019/03/cara-menghilangkan-kembung-perut-dengan-apple-cider-vinegar.html' },
      { title: 'Saya dan Mr.Bee Mencuba LiveZymes dari Dynamic Nutrition Untuk Kesihatan Usus Dan Melancarkan Penghadaman/Pencernaan Yang Baik', url: 'https://www.sofinahlamudin.com/2018/06/livezymes-dari-dynamic-nutrition-untuk-kesihatan-usus-dan-melancarkan-penghadaman-pencernaan-yang-baik.html' },
      { title: 'Kebaikan Susu Kambing Untuk Kesihatan Seluruh Keluarga', url: 'https://www.sofinahlamudin.com/2018/05/kebaikan-susu-kambing-untuk-kesihatan.html' },
      { title: 'Manfaat dan Faedah Mengamalkan Detoks Natural Clenx Tea', url: 'https://www.sofinahlamudin.com/2018/01/manfaat-dan-faedah-mengamalkan-detoks-natural-clenx-tea-sofinah-lamudin.html' },
      { title: 'Ingin Mengembalikan Rutin Senaman Dan Kecergasan', url: 'https://www.sofinahlamudin.com/2018/01/ingin-mengembalikan-rutin-senaman-dan-kecergasan-Sofinah-Lamudin.html' },
      { title: 'Bersenam di Gim UTC (Pusat Transformasi Bandar Labuan), WP.Labuan', url: 'https://www.sofinahlamudin.com/2018/03/bersenam-di-gim-utc-pusat-transformasi-bandar-labuan-wp-labuan.html' },
    ],
  },
  {
    category: 'PENJAGAAN KULIT, KOSMETIK, DAN KECANTIKAN',
    items: [
      { title: 'Review Fungsi CC Cream Yang Terbaik Nampak Simple Tapi Glowing, Tak Bercapuk dan Kulit Rasa Sangat Lembut | Hansaegee Nature', url: 'https://www.sofinahlamudin.com/2020/06/kelebihan-gold-nano-cc-cream-hansaegee%20nature.html' },
      { title: 'Bagaimanakah Untuk Menghilangkan Rambut Yang Buruk | Terdapat 3 Cara Menhilangkan Rambut Yang Buruk', url: 'https://www.sofinahlamudin.com/2020/06/bagaimana-cara-untuk-menghilangkan-rambut-rosak.html' },
      { title: 'Rawatan Terbaik Menghilangkan Lingkaran Gelap Bawah Mata Dengan Produk Yang Boleh Dipercayai dan Selamat | Eye Treatment Gel Review', url: 'https://www.sofinahlamudin.com/2018/12/rawatan-terbaik-menghilangkan-lingkaran-gelap-bawah-mata-dengan-produk-yang-boleh-dipercayai-dan-selamat.html' },
      { title: '90 peratus wanita benci akan lingkaran gelap bawah mata. Mengapa?', url: 'https://www.sofinahlamudin.com/2018/12/rawatan-terbaik-menghilangkan-lingkaran-bawah-mata-dengan-produk-yang-boleh-dipercayai-dan-selamat.html' },
      { title: 'Hampir Setahun Menggunakan Skin Care Botanical Effect', url: 'https://www.sofinahlamudin.com/2017/12/hampir-setahun-menggunakan-skin-care.html' },
    ],
  },
  {
    category: 'ALAT TULIS DAN REVIEW ALAT TULIS',
    items: [
      { title: 'Koleksi Alat Tulis | Ball Pen Untuk Menulis Nota Atau Mencatat | Review dan Kelebihan Ball Point Pen - Halaman 1', url: 'https://www.sofinahlamudin.com/2019/09/Ball-Point-Pen-Terbaik-Untuk-Menulis-Nota-Mencatat-Review-Kelebihan-Ball-Point-Pen.html' },
      { title: 'Koleksi Alat Tulis | Koleksi Pen Highlighter Untuk Membaca, Ulangkaji, Planning, Nota dan Belajar Serta 3 Jenis Pen Highlighter Pilihan', url: 'https://www.sofinahlamudin.com/2019/04/3-jenis-pen-highlighter-terbaik-untuk-planning-dan-menulis-nota.html' },
    ],
  },
  {
    category: 'BUKU DAN REVIEW BUKU',
    items: [
      { title: 'Anak Kembar Encik Harun Siri Pelajar No. 8 | Buku Kegemaran Ketika Berumur 11-12 Tahun', url: 'https://www.sofinahlamudin.com/2020/03/ulasan-anak-kembar-encik-harun-siri-pelajar.html' },
      { title: 'Jangan Baca Novel Ini oleh Ismi Fa Ismail | Agak Agak Ada Anom Tak Sebelah saya Sebab Saya Baca Buku Ni?', url: 'https://www.sofinahlamudin.com/2020/02/ulasan-review-jangan-baca-novel-ini-oleh-ismi-fa-ismail.html' },
      { title: 'Bentala oleh Sha Hanim Ramli | Gabungan Dunia Fantasi dan Realiti Yang Diolah Dengan Kreatif | Mesej Untuk Bangsa Melayu dan Muslim', url: 'https://www.sofinahlamudin.com/2020/02/Review-Ulasan-Buku-Bentala-oleh-Sha-Hanim-Ramli.html' },
      { title: 'Cerpen oleh Nadia Khan | 8 dari 20 Cerita Pendek Yang Melekat dalam Ingatan', url: 'https://www.sofinahlamudin.com/2020/02/cerpen-oleh-nadia-khan-8-dari-20-cerita-yang-melekat-dalam-ingatan-pembaca.html' },
      { title: '[PART 1] Quichotte by Salman Rushdie | Quichotte Membuat Saya Agak Gila dan Salman Rushdie Memaksa Saya Bermain Dengan Teka Teki', url: 'https://www.sofinahlamudin.com/2020/02/ulasan-buku-quichotte-oleh-salman-rushdie.html' },
      { title: 'Apa Yang Saya Perhatikan? oleh Syed Faiz | Selepas Saya Membaca Buku Ini, Saya Tertanya tanya. Adakah.....', url: 'https://www.sofinahlamudin.com/2020/01/Review-Buku-Apa-Yang-Saya-Perhatikan-Syed-Faiz.html' },
      { title: 'Memiliki "I Change" Sejak 6 Tahun Yang Lalu dan Saya Dapati Ia Boleh Menggandakan Pendapatan Jika Diamalkan', url: 'https://www.sofinahlamudin.com/2018/08/i-change-boleh-menggandakan-pendapatan-jika-diamalkan.html' },
      { title: 'Saya Menyesal Tak Baca Lebih Awal Buku 88 Love Life oleh Diana Rikasari', url: 'https://www.sofinahlamudin.com/2018/07/88-love-life-by-diana-rikasari.html' },
      { title: '4 Cara Mengekalkan Dan Menggandakan Prestasi, Pendapatan dan Produktiviti Diri Walaupun Tersalah Langkah', url: 'https://www.sofinahlamudin.com/2018/03/Cara-menggandakan-produktiviti-pendapatan-dan-prestasi-diri.html' },
      { title: 'Rahsia Menggandakan Pendapatan Dengan Formula Lengkung Kecekapan', url: 'https://www.sofinahlamudin.com/2018/03/rahsia-menggandakan-pendapatan.html' },
      { title: 'Cara Meningkatkan Pendapatan Dan Prestasi Diri Dengan Mengamalkan Hukum Pulangan Bertambah', url: 'https://www.sofinahlamudin.com/2018/03/cara-meningkatkan-pendapatan-dan-prestasi-diri.html' },
    ],
  },
  {
    category: 'KEWANGAN, FOREX, DAN PELABURAN',
    items: [
      { title: '5 Teknik Sederhana Untuk Menghasilkan Untung Dari Perdagangan | Bagaimanakah Menghasilkan Untung Dalam Forex', url: 'https://www.sofinahlamudin.com/2019/12/5-teknik-sederhana-untuk-menghasilkan.html' },
    ],
  },
  {
    category: 'BLOG, TIPS BLOG, DAN SOSIAL MEDIA',
    items: [
      { title: 'Aplikasi Tik Tok Kini Diblok (Disekat) Oleh Kementerian Komunikasi dan Multimedia', url: 'https://www.sofinahlamudin.com/2018/07/aplikasi-tik-tok-diblok-disekat-oleh-kementerian.html' },
      { title: 'Teknik dan Cara Menggunakan Aplikasi Tik Tok / Musically / Thriller / Kwai', url: 'https://www.sofinahlamudin.com/2018/06/teknik-dan-cara-menggunakan-aplikasi-tik-tok-musically-thriller-kwai.html' },
    ],
  },
  {
    category: 'RESTOREN, MAKANAN, DAN MINUMAN',
    items: [
      { title: 'Kebaikan Lazz Susu Kambing Di Bulan Ramadhan | Saya dan Suami Amalkan Lazz Susu Kambing Perisa Kurma', url: 'https://www.sofinahlamudin.com/2018/05/kebaikan-lazz-susu-kambing.html' },
      { title: 'Makan Tengahari Di Win Cafe, Financial Park (Ujana Kewangan), WP. Labuan', url: 'https://www.sofinahlamudin.com/2018/01/makan-tengahari-di-win-cafe-financial-park-ujana-kewangan-wp.labuan.html' },
      { title: 'Harga makanan Restoren JJ Nazar (Indian) di Cawangan Terbaru, WP.Labuan', url: 'https://www.sofinahlamudin.com/2017/12/harga-makanan-restoren-jj-nazar-indian.html' },
      { title: 'Mr.Bee Mencuba Chizza KFC', url: 'https://www.sofinahlamudin.com/2017/12/mrbee-mencuba-chizza-kfc.html' },
      { title: 'Resipi Daging Masak Hitam Ringkas Tapi Sedap', url: 'https://www.sofinahlamudin.com/2017/12/resipi-daging-masak-hitam-ringkas-tapi-sedap.html' },
      { title: 'Resipi Sayur Sawi Tumis Simple', url: 'https://www.sofinahlamudin.com/2017/12/resepi-sayur-sawi-tumis-simple.html' },
    ],
  },
  {
    category: 'RESIPI',
    items: [
      { title: 'Resipi Daging Masak Hitam Ringkas Tapi Sedap', url: 'https://www.sofinahlamudin.com/2017/12/resipi-daging-masak-hitam-ringkas-tapi-sedap.html' },
      { title: 'Resipi Sayur Sawi Tumis Simple', url: 'https://www.sofinahlamudin.com/2017/12/resepi-sayur-sawi-tumis-simple.html' },
    ],
  },
  {
    category: 'KUCING DAN HAIWAN PELIHARAAN',
    items: [
      { title: 'Saya Menyaksikan Kucing Menangkap Ikan', url: 'https://www.sofinahlamudin.com/2018/02/saya-menyaksikan-kucing-menangkap-ikan.html' },
      { title: 'Si Ontot Dah Pergi Selama-Lamanya?', url: 'https://www.sofinahlamudin.com/2018/01/si-ontot-dah-pergi-selama-lamanya-sofinah-lamudin.html' },
    ],
  },
  {
    category: 'PELANCONGAN, PENERBANGAN, DAN PENGINAPAN',
    items: [
      { title: 'Melancong dan Jimat!! dengan Traveloka Sale-Abration The Biggest Travel Sale!', url: 'https://www.sofinahlamudin.com/2019/08/melancong-dan-jimat-dengan-traveloka-sale-abration-matta-fair-air-promotion.html' },
      { title: 'Bangkok Tour Packages | Pakej percutian ke bangkok termasuk tiket penerbangan dan penginapan dengan Traveloka', url: 'https://www.sofinahlamudin.com/2018/11/bangkok-tour-packages-pakej-percutian-ke-bangkok-termasuk-tiket-penerbangan-dan-penginapan-dengan-traveloka.html' },
      { title: 'Pesawat Nasional Malaysia Airlines', url: 'https://www.sofinahlamudin.com/2018/07/pesawat-nasional-malaysia-airlines.html' },
      { title: 'Tawaran Terbaik Pakej Umrah dan Haji serta Pakej Pelancongan di Dalam dan Luar Negara dari Juara Travel & Tours Sdn. Bhd', url: 'https://www.sofinahlamudin.com/2018/06/tawaran-terbaik-pakej-umrah-dan-haji-terkini-di-Juara-Travel.html' },
    ],
  },
  {
    category: 'WILAYAH PERSEKUTUAN LABUAN',
    items: [
      { title: 'Bersenam di Gim UTC (Pusat Transformasi Bandar Labuan), WP.Labuan', url: 'https://www.sofinahlamudin.com/2018/03/bersenam-di-gim-utc-pusat-transformasi-bandar-labuan-wp-labuan.html' },
      { title: 'Melawat Medan Selera Moden (Baru) di Wilayah Persekutuan Labuan', url: 'https://www.sofinahlamudin.com/2018/02/Melawat-Medan-Selera-Baru-di-Labuan-Sofinah-Lamudin.html' },
      { title: 'Makan Tengahari Di Win Cafe, Financial Park (Ujana Kewangan), WP. Labuan', url: 'https://www.sofinahlamudin.com/2018/01/makan-tengahari-di-win-cafe-financial-park-ujana-kewangan-wp.labuan.html' },
      { title: 'Harga makanan Restoren JJ Nazar (Indian) di Cawangan Terbaru, WP.Labuan', url: 'https://www.sofinahlamudin.com/2017/12/harga-makanan-restoren-jj-nazar-indian.html' },
    ],
  },
  {
    category: 'INFORMASI AM, BERITA DAN HIBURAN',
    items: [
      { title: 'Saya Terkejut Kisah Oki Setiana Dewi Tidak Bertudung', url: 'https://www.sofinahlamudin.com/2018/07/saya-terkejut-kisah-oki-setiana-dewi-tidak-bertudung.html' },
    ],
  },
  {
    category: 'MOVIE, GEEK, FANDOM, DAN REVIEW MOVIE',
    items: [
      { title: 'Ulasan Movie She Made Them Do It | Dia Yang Buat Saya Lakukan Semua Tu Sebab Saya Sayang Dia', url: 'https://www.sofinahlamudin.com/2020/03/ulasan-movie-she-made-them-do-it.html' },
      { title: 'Movie Bumblebee 2018 Buat Saya Jatuh Cinta Dengan Transformer', url: 'https://www.sofinahlamudin.com/2019/02/movie-bumblebee-2018-buat-saya-jatuh.html' },
      { title: 'Review Penuh Movie Infinity War (Amaran : Spoiler Alert)', url: 'https://www.sofinahlamudin.com/2018/05/review-penuh-movie-infinity-war-amaran-spoiler-alert.html' },
      { title: 'Stress Tengok The Avengers : Infinity War', url: 'https://www.sofinahlamudin.com/2018/04/stress-tengok-avengers-infinity-war.html' },
      { title: 'Cosmic Entities Merupakan Asal Usul dan Pencipta Infinity Stone Yang Berpotensi Menewaskan Thanos | Infinity War April 2018', url: 'https://www.sofinahlamudin.com/2018/04/asal-usul-dan-pencipta-infinity-stone-infinity-war.html' },
      { title: 'Keberadaan Batu Soul (Soul Stone) Terdedah Di Movie Guardian Of The Galaxy Pada Tahun 2017', url: 'https://www.sofinahlamudin.com/2018/04/lokasi-soul-stone-infinity-war.html' },
      { title: 'Kisah Dan Maksud Disebalik 6 Batu Infinity Dan Dimanakah Setiap Batu Ini Berada?', url: 'https://www.sofinahlamudin.com/2018/04/Apa-itu-Infinity-Stone-Di-Mana-Infinity-Stone.html' },
      { title: 'Siapakah Thanos dan Fakta Yang Wajib Kita Ketahui Sebelum Menonton Infinity War Marvel', url: 'https://www.sofinahlamudin.com/2018/04/Siapakah-Thanos-dan-Fakta-Menarik-Infinity-War.html' },
      { title: 'Teknologi Nano Milik Black Panther Marvel | Tak Sangka Ada Dua Black Panther, Satu Purple, Satu lagi Oren. Korang Pilih Mana Satu?', url: 'https://www.sofinahlamudin.com/2018/03/teknologi-nano-milik-black-panther-marvel.html' },
      { title: 'Review Saya Selepas Menonton Maze Runner Ke 3 : The Death Cure', url: 'https://www.sofinahlamudin.com/2018/01/review-saya-selepas-menonton-maze-runner-Sofinah-Lamudin.html' },
      { title: 'Mesej Pitch Perfect 3 - Iri Hati dan Tidak Move On Bukanlah Kunci Kejayaan The Barden Bellas', url: 'https://www.sofinahlamudin.com/2018/01/mesej-pitch-perfect-3-iri-hati-dan-tidak-move-on-bukanlah-kunci-kejayaan-the-barden-bellas.html' },
      { title: 'Persembahan Pitch Perfect 3 Yang Mengecewakan Penonton', url: 'https://www.sofinahlamudin.com/2018/01/persembahan-pitch-perfect-3-yang-mengecewakan-penonton.html' },
      { title: 'Porg Adalah Sebahagian Kebijaksanaan Disney dalam Mempromosikan Star Wars The Last Jedi', url: 'https://www.sofinahlamudin.com/2017/12/porg-adalah-sebahagian-kebijaksanaan-Disney-dalam-mempromosikan-Star-Wars-The-Last-Jedi.html' },
    ],
  },
  {
    category: 'TV SHOWS',
    items: [
    ],
  },
  {
    category: 'KDRAMA',
    items: [
    ],
  },
  {
    category: 'SOFINAH SPEAKS, PENDAPAT, DAN KISAH PERIBADI',
    items: [
      { title: 'Forget My Name', url: 'https://www.sofinahlamudin.com/2020/05/forget-my-name.html' },
      { title: 'Menukar Sophee Studio kepada Sofina Artwork dan Logo Baru', url: 'https://www.sofinahlamudin.com/2020/04/menukar-sophee-studio-kepada-sofina.html' },
      { title: 'Memperkenalkan READING SECTION Untuk Bloggers Dan Readers', url: 'https://www.sofinahlamudin.com/2020/01/Senarai-blogger-dalam-malaysia.html' },
      { title: 'Memperkenalkan Kategori Utama Di Dalam Blog Sofinahlamudin Dot Com', url: 'https://www.sofinahlamudin.com/2020/01/memperkenalkan-kategori-utama-di-dalam.html' },
      { title: 'Dah Tak Ada Azam Mahupun Impian. Yang Sekarang Adalah Harapan, Tanggungjawab Dan Komitmen. Selamat Memulakan Dekad Baharu | 2020', url: 'https://www.sofinahlamudin.com/2020/01/dah-tak-azam-mahupun-impian-sekarang.html' },
      { title: 'Saat Saya Kenal Oki Setiana Dewi', url: 'https://www.sofinahlamudin.com/2018/07/saat-saya-kenal-oki-setiana-dewi.html' },
      { title: 'Selamat Ulang Tahun Yang Ke 30 Tahun My Mr.Right!', url: 'https://www.sofinahlamudin.com/2018/03/selamat-ulang-tahun-yang-ke-30-tahun-my.html' },
      { title: '1 Foto 1 Cerita : Selepas 13 Tahun Kita Jumpa Lagi', url: 'https://www.sofinahlamudin.com/2018/01/1-foto-1-cerita-selepas-13-tahun-kita-jumpa-lagi-sofinah-lamudin.html' },
      { title: '1 Foto 1 Cerita : Dari Shah Alam Sekyen 7 Hingga Berjumpa dengan Hantu Berjaya Times Square, Kuala Lumpur', url: 'https://www.sofinahlamudin.com/2017/12/1-foto-1-cerita-dari-shah-alam-sekyen-7-hingga-berjumpa-dengan-hantu-berjaya-times-square-kuala-lumpur.html' },
      { title: '1 Foto 1 Cerita : Bila dah Beralih ke Zaman Pekerjaan - Masuk Department Visual sebagai Artist', url: 'https://www.sofinahlamudin.com/2017/12/1-foto-1-cerita-bila-dah-beralih-ke-zaman-pekerjaan-masuk-department-visual-sebagai-artist.html' },
      { title: '1 Foto 1 Cerita : Bila dah Beralih ke Zaman Pekerjaan - Pertama Kali Bekerja', url: 'https://www.sofinahlamudin.com/2017/12/1-foto-1-cerita-bila-dah-beralih-ke-zaman-pekerjaan-pertama-kali-bekerja.html' },
      { title: 'Cerita Bulan Januari Hingga Disember 2019 Sofinazz - Halaman 1 | Januari 2019', url: 'https://www.sofinahlamudin.com/2019/11/cerita-bulan-januari-hingga-oktober.html' },
      { title: 'Cerita Bulan Januari Hingga Disember 2019 Sofinazz - Halaman 2 | Februari 2019', url: 'https://www.sofinahlamudin.com/2019/12/cerita-bulan-januari-hingga-disember.html' },
      { title: 'Memulakan Tahun 2019 ke Kota Kinabalu - 04.01.2019 - Muka surat 1', url: 'https://www.sofinahlamudin.com/2019/01/memulakan-tahun-2019-ke-kota-kinabalu-04.01.2019-muka-surat-1.html' },
      { title: 'Memulakan Tahun 2019 ke Kota Kinabalu - 05.01.2019 - Muka surat 2', url: 'https://www.sofinahlamudin.com/2019/01/memulakan-tahun-2019-ke-kota-kinabalu.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 1', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-1.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 2', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-2.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 3', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-3.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 4', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-4.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 5', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-5.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 6', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-6.html' },
      { title: 'Setiap Persinggahan dalam Perjalanan Hidup - Muka Surat 7', url: 'https://www.sofinahlamudin.com/2019/01/setiap-persinggahan-dalam-perjalanan-hidup-muka-surat-7.html' },
      { title: 'Semoga Pengakhiran Tahun 2017 akan Membawa 1001 Pencapaian Positif di Tahun 2018', url: 'https://www.sofinahlamudin.com/2017/12/semoga-pengakhiran-tahun-2017-akan-membawa-1001-pencapaian-positif-di-tahun-2018.html' },
      { title: 'Sambut Anniversary Perkahwinan Ringkas tetapi Bermakna', url: 'https://www.sofinahlamudin.com/2017/12/sambut-anniversary-perkahwinan-ringkas-tetapi-bermakna.html' },
      { title: 'Anniversary perkahwinan kami ke 3 tahun', url: 'https://www.sofinahlamudin.com/2017/12/anniversary-perkahwinan-kami-ke-3-tahun.html' },
      { title: 'Selamat Hari Lahir ke 3 tahun Budak Kecik!', url: 'https://www.sofinahlamudin.com/2017/12/selamat-hari-lahir-ke-3-tahun-budak.html' },
    ],
  },
  {
    category: 'PENDAPAT PERIBADI',
    items: [
      { title: 'Ilmu Pengetahuan Adalah Penting Untuk Membuka Minda Lebih Luas', url: 'https://www.sofinahlamudin.com/2017/12/ilmu-pengetahun-adalah-penting-untuk-membuka-minda-lebih-luas.html' },
      { title: 'Fokus Penyelesaian Masalah', url: 'https://www.sofinahlamudin.com/2020/02/fokus-penyelesaian-masalah.html' },
    ],
  },
  {
    category: 'PENULISAN KREATIF (FORGET MY NAME)',
    items: [
      { title: 'I\'m Sweet But a Psycho - Episode 1', url: 'https://www.sofinahlamudin.com/2020/05/i-made-my-own-trap-episode-1.html' },
      { title: 'Obses', url: 'https://www.sofinahlamudin.com/2020/05/obses.html' },
      { title: 'Human May Change Anytime', url: 'https://www.sofinahlamudin.com/2020/05/human-may-change-anytime.html' },
      { title: 'Adakah Kau Rindu?', url: 'https://www.sofinahlamudin.com/2018/02/adakah-kau-rindu.html' },
      { title: 'Kerana Hatiku Yang Tenggelam', url: 'https://www.sofinahlamudin.com/2018/01/kerana-hatiku-yang-tenggelam.html' },
    ],
  },
  {
    category: 'SHOPPING ONLINE, PEMBELIAN HADIAH, DAN KURIER',
    items: [
      { title: 'Hadiah Eksklusif Untuk Bayi Baru Lahir Yang Nampak Bermakna dan Kreatif Ada di Lovingly Signed', url: 'https://www.sofinahlamudin.com/2020/01/bagaimanakah-mendapatkan-hadiah-ekskusif-untuk-bayi-baru-lahir.html' },
      { title: 'Favorite Gifts for Baby Hampers That Mom and Dad Expect | Little Flower Hut', url: 'https://www.sofinahlamudin.com/2019/08/favorite-gifts-for-baby-hampers-that.html' },
      { title: 'Menghantar Barang Menggunakan myGDEX Lebih Mudah Dan Jimat Masa Dengan Perkhidmatan Pickup | Cara Menghantar Barang Mengunakan myGDEX', url: 'https://www.sofinahlamudin.com/2018/06/panduan-menghantar-barang-menggunakan-mygdex.html' },
      { title: 'Cetak/Print Baju Tshirt Sedondon Dengan Design Superheroes Sendiri Di Printcious', url: 'https://www.sofinahlamudin.com/2018/06/cetak-print-baju-tshirt-dengan-design-sendiri.html' },
      { title: 'Idea Hadiah Ulang Tahun Kreatif Dan Berkualiti Buat Insan Tersayang Dari Printcious', url: 'https://www.sofinahlamudin.com/2018/05/idea-hadiah-ulang-tahun-kreatif-dan-berkualiti.html' },
      { title: 'Tshirt Labuh (HanaTajuddin) Menutup Pinggul Sesuai Untuk Riadah dan Sukan Tetapi Bergaya | Basic Tee 2.0 TeeLicious', url: 'https://www.sofinahlamudin.com/2018/02/tshirt-labuh-menutup-pinggul-tshirt-labuh-untuk-riadah-dan-sukan-tshirt-labuh-hanatajuddin-tshirt-muslimah-hanatajuddin.html' },
      { title: 'Cara dan Kaedah Pembayaran Barangan CHILINDO Malaysia Menggunakan ATM atau TRANSFER ONLINE', url: 'https://www.sofinahlamudin.com/2017/12/cara-dan-kaedah-pembayaran-barangan-CHILINDO-Malaysia-menggunakan-ATM-atau-TRANSFER-ONLINE.html' },
      { title: 'Baju Couples Dari Bajupanas.Tee', url: 'https://www.sofinahlamudin.com/2017/12/baju-couples-dari-bajupanastee.html' },
    ],
  },
  {
    category: 'PAKAIAN',
    items: [
      { title: 'Cetak/Print Baju Tshirt Sedondon Dengan Design Superheroes Sendiri Di Printcious', url: 'https://www.sofinahlamudin.com/2018/06/cetak-print-baju-tshirt-dengan-design-sendiri.html' },
      { title: 'Tshirt Labuh (HanaTajuddin) Menutup Pinggul Sesuai Untuk Riadah dan Sukan Tetapi Bergaya | Basic Tee 2.0 TeeLicious', url: 'https://www.sofinahlamudin.com/2018/02/tshirt-labuh-menutup-pinggul-tshirt-labuh-untuk-riadah-dan-sukan-tshirt-labuh-hanatajuddin-tshirt-muslimah-hanatajuddin.html' },
      { title: 'Baju Couples Dari Bajupanas.Tee', url: 'https://www.sofinahlamudin.com/2017/12/baju-couples-dari-bajupanastee.html' },
    ],
  },
  {
    category: 'INFORMASI AM',
    items: [
    ],
  },
  {
    category: 'MAINAN DAN PERMAINAN VIDEO',
    items: [
      { title: 'Game Handle dan Joystick Untuk Main Game Mobile Legends Bagus atau Tak Bagus?', url: 'https://www.sofinahlamudin.com/2018/05/game-handle-dan-joystick-untuk-mobile-legends.html' },
    ],
  },
  {
    category: 'PERCINTAAN DAN PERSAHABATAN',
    items: [
      { title: 'How to Make Your Dreams Come True and Become Happy in a Relationship', url: 'https://www.sofinahlamudin.com/2018/08/how-to-make-your-dreams-come-true-and.html' },
    ],
  },
  {
    category: 'SENI VISUAL DAN MELUKIS',
    items: [
      { title: 'Minggu pertama Oktober 2018 | Menyertai Event Global "Inktober Challenge" untuk kali ke 3 pada Tahun 2018', url: 'https://www.sofinahlamudin.com/2018/10/minggu-pertama-oktober-2018-menyertai-event-global-inktober-challenge-untuk-kali-ke-3-pada-tahun-2018.html' },
      { title: '16 September 2018 | Hari Malaysia ke 55 dan Hari Lahir Saya ke 28', url: 'https://www.sofinahlamudin.com/2018/09/hari-malaysia-ke-55-dan-hari-lahir-saya-ke-28.html' },
    ],
  },
  {
    category: 'BELAJAR BAHASA INGGERIS',
    items: [
    ],
  },
  {
    category: 'ISLAMIK',
    items: [
      { title: 'Wanita Yang Melawan Penindasan Dengan Kalimah Kebenaran dan Keimanan', url: 'https://www.sofinahlamudin.com/2020/01/wanita-yang-melawan-penindasan-dengan-kalimah-kebenaran-dan-keimanan.html' },
    ],
  },
  {
    category: 'MOTIVASI, KATA KATA SEMANGAT, DAN INSPIRASI',
    items: [
      { title: '4 Cara Mengekalkan Dan Menggandakan Prestasi, Pendapatan dan Produktiviti Diri Walaupun Tersalah Langkah', url: 'https://www.sofinahlamudin.com/2018/03/Cara-menggandakan-produktiviti-pendapatan-dan-prestasi-diri.html' },
      { title: 'Cara Meningkatkan Pendapatan Dan Prestasi Diri Dengan Mengamalkan Hukum Pulangan Bertambah', url: 'https://www.sofinahlamudin.com/2018/03/cara-meningkatkan-pendapatan-dan-prestasi-diri.html' },
      { title: 'Antara Cara Saya Untuk Fokus dan Konsentrasi Ketika Bekerja atau Belajar - Tips Terbaik Untuk Fokus dan Konsentrasi', url: 'https://www.sofinahlamudin.com/2018/01/tips-untuk-fokus-belajar-tips-untuk-fokus-bekerja-sofinah-lamudin.html' },
      { title: 'Bagaimanakah Cara Nak Tahu Mana Satu Personaliti Korang? BE YOURSELF Positif atau BE YOURSELF Negatif? - Part 1', url: 'https://www.sofinahlamudin.com/2018/01/mana-satu-personaliti-korang-be-yourself-positif-atau-be-yourself-negatif-part-1-sofinah-lamudin.html' },
      { title: 'Bagaimanakah Cara Nak Tahu Mana Satu Personaliti Korang? BE YOURSELF Positif atau BE YOURSELF Negatif? - Part 2', url: 'https://www.sofinahlamudin.com/2018/01/mana-satu-personaliti-korang-be-yourself-positif-atau-be-yourself-negatif-part-2-sofinah-lamudin.html' },
      { title: 'Nak Fokus Tapi Gangguan Yang Sering Saya Terima - Part 1', url: 'https://www.sofinahlamudin.com/2018/01/jenis-jenis-gangguan-fokus-part-1-sofinah-lamudin.html' },
      { title: 'Nak Fokus Tapi Gangguan Yang Sering Saya Terima - Part 2', url: 'https://www.sofinahlamudin.com/2018/01/jenis-jenis-gangguan-fokus-part-2-sofinah-lamudin.html' },
      { title: 'Setelah Saya Gagal Mencapai Impian, Saya Akan Lakukan - Part 1', url: 'https://www.sofinahlamudin.com/2018/01/tips-menghadapi-kegagalan-impian-2018-part-1-sofinah-lamudin.html' },
      { title: 'Setelah Saya Gagal Mencapai Impian, Saya Akan Lakukan - Part 2', url: 'https://www.sofinahlamudin.com/2018/01/tips-menghadapi-kegagalan-impian-2018-part-2-sofinah-lamudin.html' },
      { title: 'Saya Lakukan Tips ini Untuk Mencapai Impian 2018 - Part 1', url: 'https://www.sofinahlamudin.com/2018/01/tips-mencapai-impian-2018-part-1-sofinah-lamudin.html' },
      { title: 'Saya Lakukan Tips ini Untuk Mencapai Impian 2018 - Part 2', url: 'https://www.sofinahlamudin.com/2018/01/tips-mencapai-impian-2018-part-2-sofinah-lamudin.html' },
      { title: 'Cara Saya Menulis Impian 2018', url: 'https://www.sofinahlamudin.com/2018/01/tips-menulis-impian-2018-sofinah-lamudin.html' },
      { title: 'Kenapa Saya Tulis Impian 2018 Bukan Azam 2018', url: 'https://www.sofinahlamudin.com/2018/01/perbezaan-impian-2018-dan-azam-2018-sofinah-lamudin.html' },
    ],
  },
  {
    category: 'BAGAIMANAKAH / HOW TO',
    items: [
      { title: 'Bagaimanakah Cara Nak Tahu Mana Satu Personaliti Korang? BE YOURSELF Positif atau BE YOURSELF Negatif? - Part 1', url: 'https://www.sofinahlamudin.com/2018/01/mana-satu-personaliti-korang-be-yourself-positif-atau-be-yourself-negatif-part-1-sofinah-lamudin.html' },
      { title: 'Bagaimanakah Cara Nak Tahu Mana Satu Personaliti Korang? BE YOURSELF Positif atau BE YOURSELF Negatif? - Part 2', url: 'https://www.sofinahlamudin.com/2018/01/mana-satu-personaliti-korang-be-yourself-positif-atau-be-yourself-negatif-part-2-sofinah-lamudin.html' },
      { title: 'Bagaimanakah Untuk Menghilangkan Rambut Yang Buruk | Terdapat 3 Cara Menhilangkan Rambut Yang Buruk', url: 'https://www.sofinahlamudin.com/2020/06/bagaimana-cara-untuk-menghilangkan-rambut-rosak.html' },
      { title: '5 Teknik Sederhana Untuk Menghasilkan Untung Dari Perdagangan | Bagaimanakah Menghasilkan Untung Dalam Forex', url: 'https://www.sofinahlamudin.com/2019/12/5-teknik-sederhana-untuk-menghasilkan.html' },
      { title: 'Kenapa Sakit Gigi Ketika Mengunyah Selepas Buat Tampal Gigi (Tooth Filling)? Bagaimanakah Menyelesaikannya?', url: 'https://www.sofinahlamudin.com/2020/07/punca-masih-sakit-gigi-selepas-tampal-gigi.html' },
    ],
  },
  {
    category: 'APA ITU',
    items: [
      { title: 'Apa Itu Metafizik? | Apakah Maksud Metafizik? | Pengenalan Metafizik dan Kaitannya dengan Pernomboran (Numerologi)', url: 'https://www.sofinahlamudin.com/2019/11/apa-itu-metafizik-apakah-maksud.html' },
    ],
  },
  {
    category: 'TIPS MENJANA PENDAPATAN DAN PERNIAGAAN',
    items: [
      { title: '4 Cara Mengekalkan Dan Menggandakan Prestasi, Pendapatan dan Produktiviti Diri Walaupun Tersalah Langkah', url: 'https://www.sofinahlamudin.com/2018/03/Cara-menggandakan-produktiviti-pendapatan-dan-prestasi-diri.html' },
      { title: 'Rahsia Menggandakan Pendapatan Dengan Formula Lengkung Kecekapan', url: 'https://www.sofinahlamudin.com/2018/03/rahsia-menggandakan-pendapatan.html' },
      { title: 'Cara Meningkatkan Pendapatan Dan Prestasi Diri Dengan Mengamalkan Hukum Pulangan Bertambah', url: 'https://www.sofinahlamudin.com/2018/03/cara-meningkatkan-pendapatan-dan-prestasi-diri.html' },
    ],
  },
  {
    category: 'HARTANAH',
    items: [
      { title: 'Types of properties in Malaysia', url: 'https://www.sofinahlamudin.com/2019/04/types-of-properties-in-malaysia.html' },
      { title: 'The Dos and Don\'ts Of Decorating A Small Bedroom', url: 'https://www.sofinahlamudin.com/2018/07/Decorating-Bedroom-Tips.html' },
      { title: 'Tips on Renovating Your Home With a Budget', url: 'https://www.sofinahlamudin.com/2018/04/tips-on-renovating-your-home-with-budget.html' },
      { title: 'Kuching a New Property Hotspot for Investor', url: 'https://www.sofinahlamudin.com/2018/01/kuching-new-property-hotspot-for-investor.html' },
    ],
  },
  {
    category: 'PSIKOLOGI DAN KESIHATAN MENTAL',
    items: [
    ],
  },
  {
    category: 'PERSONALITI DAN METAFIZIK',
    items: [
      { title: 'Apa Itu Metafizik? | Apakah Maksud Metafizik? | Pengenalan Metafizik dan Kaitannya dengan Pernomboran (Numerologi)', url: 'https://www.sofinahlamudin.com/2019/11/apa-itu-metafizik-apakah-maksud.html' },
      { title: 'Pengiraan Metafizik Tarikh Lahir Sebenarnya dipanggil Numerologi', url: 'https://www.sofinahlamudin.com/2017/12/pengiraan-metafizik-tarikh-lahir-sebenarnya-dipanggil-numerologi.html' },
      { title: 'Tahun Peribadi Berdasarkan Pengiraan Tarikh Lahir Metafizik Sains Pernomboran (Numerologi)', url: 'https://www.sofinahlamudin.com/2018/01/tahun-peribadi-berdasarkan-pengiraan-tarikh-lahir-metafizik-sains-pernomboran-numerologi-sofinah-lamudin.html' },
      { title: 'Laluan Hidup Berdasarkan Pengiraan Metafizik Sains Pernomboran (Numerologi)', url: 'https://www.sofinahlamudin.com/2018/01/laluan-hidup-berdasarkan-pengiraan-metafizik-sains-pernomboran-numerologi-sofinah-lamudin.html' },
      { title: 'Pengiraan Personaliti Berdasarkan Nama - Metafizik Sains Pernomboran (Numerologi)', url: 'https://www.sofinahlamudin.com/2018/01/pengiraan-personaliti-berdasarkan-nama-metafizik-sains-pernomboran-numerologi.html' },
      { title: 'Sejauh Mana Kebenaran dan Logik Analisis Tahun Peribadi Berdasarkan Metafizik Sains Pernomboran (Numerologi) - Part 1', url: 'https://www.sofinahlamudin.com/2018/01/sejauh-mana-kebenaran-dan-logik-analisis-tahun-peribadi-berdasarkan-metafizik-sains-pernomboran-numerologi-part-1-Sofinah-Lamudin.html' },
      { title: 'Sejauh Mana Kebenaran dan Logik Analisis Tahun Peribadi Berdasarkan Metafizik Sains Pernomboran (Numerologi) - Part 2', url: 'https://www.sofinahlamudin.com/2018/01/sejauh-mana-kebenaran-dan-logik-analisis-tahun-peribadi-berdasarkan-metafizik-sains-pernomboran-numerologi-part-2-Sofinah-Lamudin.html' },
      { title: 'Sejauh Mana Kebenaran dan Logik Analisis Tahun Peribadi Berdasarkan Metafizik Sains Pernomboran (Numerologi) - Part 3', url: 'https://www.sofinahlamudin.com/2018/01/Sejauh-Mana-Kebenaran-dan-Logik-Analisis-Tahun-Peribadi-Berdasarkan-Metafizik-Sains-Pernomboran-Numerologi-Part-3-Sofinah-Lamudin.html' },
      { title: 'Sejauh Mana Kebenaran dan Logik Analisis Tahun Peribadi Berdasarkan Metafizik Sains Pernomboran (Numerologi) - Part 4', url: 'https://www.sofinahlamudin.com/2018/01/Sejauh-Mana-Kebenaran-dan-Logik-Analisis-Tahun-Peribadi-Berdasarkan-Metafizik-Sains-Pernomboran-Numerologi-Part-4-Sofinah-Lamudin.html' },
      { title: 'Menjawab Semua Soalan Personaliti Metafizik Tarikh Lahir (Part 3)', url: 'https://www.sofinahlamudin.com/2018/01/menjawab-semua-soalan-personaliti-metafizik-tarikh-lahir-part-3-Sofinah-Lamudin.html' },
      { title: 'Menjawab Semua Soalan Personaliti Metafizik Tarikh Lahir (Part 4)', url: 'https://www.sofinahlamudin.com/2018/01/menjawab-semua-soalan-personaliti-metafizik-traikh-lahir-part-4-sofinah-lamudin.html' },
      { title: 'Menjawab Semua Soalan Personaliti Metafizik Tarikh Lahir (Part 5)', url: 'https://www.sofinahlamudin.com/2018/01/menjawab-semua-soalan-personaliti-metafizik-tarikh-lahir-part-5-sofinah-lamudin.html' },
      { title: 'Menjawab Semua Soalan Personaliti Metafizik Tarikh Lahir (Part 6)', url: 'https://www.sofinahlamudin.com/2018/01/menjawab-semua-soalan-personaliti-metafizik-tarikh-lahir-part-8-sofinah-lamudin.html' },
    ],
  },
  {
    category: 'TUTORIAL, APLIKASI, DAN PERISIAN',
    items: [
      { title: 'Aplikasi Tik Tok Kini Diblok (Disekat) Oleh Kementerian Komunikasi dan Multimedia', url: 'https://www.sofinahlamudin.com/2018/07/aplikasi-tik-tok-diblok-disekat-oleh-kementerian.html' },
      { title: 'Teknik dan Cara Menggunakan Aplikasi Tik Tok / Musically / Thriller / Kwai', url: 'https://www.sofinahlamudin.com/2018/06/teknik-dan-cara-menggunakan-aplikasi-tik-tok-musically-thriller-kwai.html' },
    ],
  },
]
