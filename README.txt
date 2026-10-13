LANDING PAGE SEKOLAH
====================

Cara pakai
1. Ekstrak file ZIP ini.
2. Buka index.html dengan browser untuk melihat hasilnya.
3. Untuk online, unggah seluruh isi folder ke hosting (cPanel, Netlify, GitHub Pages, dll).

Struktur
  index.html          Halaman utama (semua teks ada di sini)
  css/style.css       Tampilan; warna dan font ada di bagian :root
  js/main.js          Menu mobile, menu aktif, formulir WhatsApp
  assets/img/         Logo, ilustrasi, dan gambar galeri (format SVG)

Yang perlu Anda ganti
- Nama sekolah: cari "SMA Cendekia Nusantara" di index.html.
- Nomor WhatsApp: js/main.js, variabel WA_NUMBER (contoh 6281234567890).
- Nomor telepon & email: bagian "Hubungi kami" di index.html.
- Tautan peta: ubah query=... pada tombol "Buka lokasi di Google Maps".
- Data (NPSN, akreditasi, jumlah guru, jadwal PPDB, berita): semua contoh,
  sesuaikan dengan data sekolah.
- Gambar: ganti file di assets/img/ dengan foto asli (JPG/WebP/PNG).
  Jika ekstensi berubah, sesuaikan juga atribut src di index.html.
  Logo: ganti assets/img/logo.svg dan favicon.svg dengan logo sekolah.

Catatan
- Font (Bricolage Grotesque & Source Sans 3) dimuat dari Google Fonts, sehingga
  perlu internet. Tanpa internet, halaman memakai font bawaan sistem.
