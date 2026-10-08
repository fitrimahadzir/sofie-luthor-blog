import type { Post } from '../types/post'

export const demoAuthors: Record<string, { name: string; bio: string; avatar: string }> = {
  sofie: {
    name: 'Sofie Luthor',
    bio: 'Penyelia blog ini. Sofie menulis tentang kehidupan, fikiran, dan segala yang menarik minatnya.',
    avatar: '/images/dp-sementara.jpg',
  },
}

export const demoPosts: Post[] = [
  {
    id: 1,
    slug: 'fikiran-menjelang-pagi',
    title: 'Fikiran Menjelang Pagi',
    excerpt:
      'Ada malam yang membawa fikiran jauh pergi. Renungan peribadi tentang tidur yang lari dan fikiran yang enggan berhenti.',
    content: `<p>Malam tadi saya tidak dapat tidur. Pukul 12 tengah malam, minda saya masih berlegar ke sana ke mari, menolak untuk berehat.</p>
<p>Sering kali, menulis selepas pukul 10 malam membangunkan ribut dalam kepala yang enggan berhenti. Saya cuba mendiamkannya, tetapi fikiran itu tidak mahu melepaskan saya.</p>
<blockquote>Kadang-kadang kita tidak perlu memaksa fikiran untuk berhenti — hanya perlu membiarkannya mengalir.</blockquote>
<h2>Antara tengah malam hingga subuh</h2>
<p>Antara pukul 12 hingga 3.30 pagi, saya hanya berjaya lena kira-kira 15 minit. Menjelang 3.30, saya menyerah. Jika tidak dapat berehat, sekurang-kurangnya biarkan minda melarikan diri ke dalam perkataan.</p>
<ul>
<li>Tidur yang mencukupi benar-benar penting</li>
<li>Menulis boleh menjadi terapi</li>
<li>Fikiran yang bercelaru selalunya tenang menjelang pagi</li>
</ul>
<h2>Pagi yang tenang</h2>
<p>Apabila akhirnya fajar tiba, kepala terasa lebih ringan. Dokumen, kerja, dan projek menanti, tetapi untuk seketika, kesunyian pagi terasa seperti hadiah.</p>`,
    date: '2026-08-10T06:00:00',
    author: 'sofie',
    image: '/images/4-3 ratio.jpg',
    categories: ['Fikiran'],
  },
  {
    id: 2,
    slug: 'tips-menjaga-kulit-sihat',
    title: 'Tips Menjaga Kulit Sihat',
    excerpt:
      'Langkah mudah dan rutin harian untuk kulit yang sihat dan cerah. Tidak perlu produk mahal, hanya konsisten.',
    content: `<p>Kulit yang sihat bukan sekadar soal kosmetik mahal. Ia bermula dengan rutin harian yang mudah dan konsisten.</p>
<h2>Bermula dengan asas</h2>
<p>Bersihkan wajah dua kali sehari, lembapkan selepas mencuci, dan jangan lupa pelindung matahari. Tiga langkah asas ini sudah banyak membantu.</p>
<ul>
<li><strong>Bersihkan</strong> — buang kotoran dan minyak</li>
<li><strong>Lembapkan</strong> — jaga kelembapan kulit</li>
<li><strong>Lindungi</strong> — selalu pakai pelindung matahari</li>
</ul>
<h2>Jangan lupa minum air</h2>
<p>Penghidratan penting. Kulit yang sihat datang dari dalam — pastikan anda minum air secukupnya dan tidur yang cukup.</p>
<blockquote>Kulit yang sihat bukan tentang siapa anda mahu menjadi, tetapi tentang menjaga diri anda.</blockquote>
<p>Cuba beri masa beberapa minggu sebelum menilai hasil. Konsistensi adalah kuncinya.</p>`,
    date: '2026-08-03T10:00:00',
    author: 'sofie',
    image: '/images/4-3 ratio.jpg',
    categories: ['Kecantikan'],
  },
  {
    id: 3,
    slug: 'review-buku-yang-saya-baca-bulan-ini',
    title: 'Review Buku yang Saya Baca Bulan Ini',
    excerpt:
      'Ulasan ringkas tentang buku yang menemani saya sepanjang bulan ini — apa yang saya suka dan apa yang membuat saya berfikir.',
    content: `<p>Setiap bulan saya cuba membaca sekurang-kurangnya satu buku. Bulan ini, pilihan saya membawa saya ke dalam dunia yang sangat berbeza.</p>
<h2>Apa yang menarik minat saya</h2>
<p>Gaya penulisan yang mengalir, watak yang terasa hidup, dan tema tentang manusia yang membuat saya berfikir tentang kehidupan sendiri.</p>
<blockquote>Buku yang baik bukan hanya menghiburkan, tetapi mengubah cara kita melihat dunia.</blockquote>
<h2>Adakah saya mengesyorkannya?</h2>
<ul>
<li>Ya, jika anda suka kisah yang mendalam</li>
<li>Ya, jika anda seronok membaca renungan tentang kehidupan</li>
<li>Langkau jika anda mencari bacaan yang ringan sahaja</li>
</ul>
<p>Secara keseluruhan, buku ini bernilai masa. Saya tidak sabar untuk berkongsi pilihan bulan hadapan.</p>`,
    date: '2026-07-28T09:00:00',
    author: 'sofie',
    image: '/images/4-3 ratio.jpg',
    categories: ['Ulasan', 'Buku'],
  },
  {
    id: 4,
    slug: 'renungan-tentang-kesabaran',
    title: 'Renungan Tentang Kesabaran',
    excerpt:
      'Kesabaran jarang terasa seperti sesuatu yang sedang berlaku — sehingga ia selesai. Fikiran tentang menunggu, harapan dan mengalir bersama masa.',
    content: `<p>Ada sesuatu yang sukar tentang menunggu. Kita mahukan hasil segera, jawapan sekarang, jalan yang jelas.</p>
<p>Tetapi banyak perkara dalam hidup — pertumbuhan, penyembuhan, hubungan — mengambil masa. Kesabaran bukan tentang berdiam diri; ia tentang kekal hadir sementara masa bekerja.</p>
<h2>Belajar mempercayai proses</h2>
<p>Kadang-kadang kita tidak dapat melihat kemajuan, namun ia berlaku di celah-celah ketidaksabaran kita. Setiap hari kecil, setiap langkah halus.</p>
<blockquote>Kesabaran bukan kebolehan menunggu, tetapi kebolehan mengekalkan sikap yang baik semasa menunggu.</blockquote>
<ul>
<li>Beri masa untuk proses</li>
<li>Percaya bahawa siang pasti tiba</li>
<li>Bersikap lembut terhadap diri sendiri</li>
</ul>
<p>Jadi, jika hidup terasa perlahan ketika ini, ketahuilah anda bukan ketinggalan. Anda hanya dalam perjalanan.</p>`,
    date: '2026-07-20T14:00:00',
    author: 'sofie',
    image: '/images/4-3 ratio.jpg',
    categories: ['Fikiran', 'Psikologi'],
  },
  {
    id: 5,
    slug: 'panduan-permulaan-melabur',
    title: 'Panduan Permulaan Melabur',
    excerpt:
      'Langkah pertama untuk memahami pelaburan tanpa rasa takut. Sumber yang mudah difahami untuk mereka yang baru bermula.',
    content: `<p>Melabur kedengaran menakutkan, terutamanya bagi mereka yang baru bermula. Tetapi memahami asasnya lebih mudah daripada yang disangka.</p>
<h2>Mulakan dengan ilmu</h2>
<p>Sebelum meletakkan wang, fahami apa yang anda beli. Baca, tanya, dan jangan tergesa-gesa membuat keputusan berdasarkan emosi.</p>
<h2>Beberapa prinsip asas</h2>
<ul>
<li><strong>Diversifikasi</strong> — jangan letakkan semua telur dalam satu bakul</li>
<li><strong>Long-term</strong> — fikirkan jangka panjang</li>
<li><strong>Konsisten</strong> — melabur sedikit tetapi kerap</li>
</ul>
<blockquote>Melabur bukan tentang menjadi kaya dengan cepat, tetapi tentang membina masa depan secara berperingkat.</blockquote>
<h2>Risiko itu nyata</h2>
<p>Semua pelaburan ada risikonya. Pastikan anda hanya melabur wang yang anda mampu biarkan untuk jangka masa panjang, dan dapatkan nasihat jika perlu.</p>`,
    date: '2026-07-10T11:00:00',
    author: 'sofie',
    image: '/images/4-3 ratio.jpg',
    categories: ['Kewangan'],
  },
  {
    id: 6,
    slug: 'catatan-perjalanan-ke-luar-bandar',
    title: 'Catatan Perjalanan ke Luar Bandar',
    excerpt:
      'Satu hujung minggu melarikan diri dari hiruk-pikuk bandar. Catatan kecil tentang pemandangan, makanan dan kedamaian.',
    content: `<p>Kadang-kadang kita hanya perlukan perubahan suasana. Hujung minggu lalu, saya membawa diri keluar dari bandar.</p>
<h2>Perjalanan yang menyegarkan</h2>
<p>Udara yang lebih bersih, pemandangan yang lebih luas, dan langkah yang lebih perlahan. Semua terasa lebih ringan di luar bandar.</p>
<h2>Apa yang saya nikmati</h2>
<ul>
<li>Pemandangan matahari terbenam yang memukau</li>
<li>Makanan tempatan yang mengenyangkan</li>
<li>Kesunyian yang jarang ditemui di bandar</li>
</ul>
<blockquote>Perjalanan kecil mengingatkan kita bahawa dunia lebih luas daripada bilik kita.</blockquote>
<h2>Kembali dengan tenaga baru</h2>
<p>Kembali ke rumah membawa semangat yang diperbaharui. Kadang-kadang, rehat yang jauh sedikit adalah yang paling diperlukan.</p>`,
    date: '2026-07-02T13:00:00',
    author: 'sofie',
    image: '/images/4-3 ratio.jpg',
    categories: ['Info Am', 'Perjalanan'],
  },
]
