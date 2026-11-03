# Dokumentasi Resmi Perkuliahan S1 Ilmu Hukum (311) — Universitas Terbuka (2026/2027)

Website dokumentasi modern, terstruktur, dan terverifikasi untuk membantu mahasiswa baru Program Studi **S1 Ilmu Hukum (Kode 311)**, Fakultas Hukum, Ilmu Sosial, dan Ilmu Politik (FHISIP) Universitas Terbuka (PTN-BH) memahami seluruh seluk-beluk perkuliahan tanpa kebingungan.

Dibangun dengan filosofi **Scandinavian Design System** (kejelasan fungsional, tipografi terukur, palet monokromatik murni, bebas ornamen visual berlebih, dan keterbacaan tinggi).

---

## Sumber Rujukan Resmi (100% Grounded & Zero Hallucination)

Seluruh informasi dalam repositori ini disarikan secara objektif dan verbatim dari dokumen primer resmi:
1. **Universitas Terbuka:** *Pedoman Penyelenggaraan Universitas Terbuka Tahun Akademik 2026/2027* (Bab III Sistem Registrasi & Biaya Pendidikan hlm. 101–105; Bab V Bagian 23 Ketentuan Praktik Program Studi S1 Ilmu Hukum hlm. 136–138 memuat Tabel 5.47 & Tabel 5.48).
2. **FHISIP UT:** *Katalog Program Sarjana dan Diploma Non-Pendas Tahun Akademik 2026/2027* (Kurikulum S1 Ilmu Hukum Kode 311 hlm. 127–134, memuat struktur 49 mata kuliah, 145 SKS, prasyarat TAP, dan CPL).
3. **PT Karunika Citra Mandiri (TBO Karunika):** Basis data verifikasi bahan ajar resmi per November 2026 (`check_book` & `book_list/check/HKUM`), memuat 62 judul Buku Materi Pokok (BMP) dan Buku Panduan Praktik, edisi revisi, tarif mahasiswa resmi, serta ketersediaan stok fisik.
4. **Universitas Terbuka:** *Kalender Akademik Resmi Program Sarjana UT Tahun Akademik 2026/2027* (Semester 2026 Ganjil & 2026 Genap).
5. **Direktorat Pembelajaran dan Layanan Mahasiswa UT:** *Buku Saku 1 (Memahami UT)*, *Buku Saku 2 (Kiat Sukses Belajar)*, dan *Buku Saku 3 (Mengakses Layanan UT Online)*.

---

## Fitur Utama

- **Orientasi & Mental Model 4 Langkah Maba:** Panduan awal perkuliahan mandiri jarak jauh (PTTJJ), perbedaan mendasar SIPAS vs Non-SIPAS, alur Tutorial Online (Tuton), hingga Ujian Akhir Semester (UAS).
- **Kurikulum 145 SKS & Pemetaan BMP Lengkap:** 49 mata kuliah dipetakan secara presisi ke modul BMP resmi, kode bahan ajar, edisi terbaru, waktu ujian, bobot SKS, tanda prasyarat TAP, dan penanda Program Peluru.
- **Tautan Pembelian Langsung (*Direct Deep-Link*) TBO Karunika:** Setiap buku dilengkapi tombol otomatis form POST yang langsung membuka kartu produk spesifik di `tbo.karunika.co.id/check_book` (lengkap dengan cover, stok, dan tarif mahasiswa) serta tautan kategori seri modul.
- **Analisis & Komparasi Total Biaya Buku:**
  - Total Biaya 49 Modul Buku Non-SIPAS: **Rp 6.197.920** (Rata-rata Rp 774.740/semester).
  - Total SPP Non-SIPAS: **Rp 5.800.000** (145 SKS &times; Rp 40.000).
  - Total Pengeluaran Non-SIPAS: **Rp 11.997.920**.
  - Total SIPAS Non-TTM: **Rp 10.400.000** &rarr; **Lebih hemat Rp 1.597.920** dan bebas biaya pengiriman buku ke seluruh Indonesia.
  - Penjelajah daftar belanja modul per semester (Semester 1 s.d. 8).
- **Tabel Verbatim 9 Mata Kuliah Berpraktik:** Menyalin persis Tabel 5.47 dan Tabel 5.48 Pedoman Penyelenggaraan UT untuk skema bimbingan wajib, unggah laporan di `silayar.ut.ac.id`, dan ketentuan nilai praktik 100%.
- **Kalender Akademik Resmi 2026/2027:** 31 agenda lengkap semester ganjil dan genap (admisi, registrasi matkul, pembayaran UKT, Tuton, bimbingan TAPS, wisuda, hingga UAS tatap muka dan online).
- **Direktori 40 Kantor Layanan UPBJJ-UT:** Alamat lengkap, nomor telepon, surel resmi, dan portal web 40 kantor daerah di seluruh Indonesia serta Layanan Luar Negeri.
- **Katalog 62 Buku BMP TBO Karunika:** Pencarian cepat seluruh modul hukum, sosial, administrasi, ekonomi, dan bahasa.
- **Sistem Navigasi Dokumen Skandinavia:**
  - Dual Sidebar (*Menu Navigasi* di kiri & *Pada Bab Ini* di kanan) yang dapat disembunyikan (*hide/show*) dengan tombol header atau pintasan keyboard `[` dan `]`.
  - Mode membaca fleksibel (*responsive reading column*) yang melebar dinamis hingga 1080px.
  - Mode Terang / Gelap (*Monochrome Light/Dark Theme*) yang tersimpan otomatis di `localStorage`.
  - Filter interaktif semester, pencarian global berkecepatan tinggi, dan *ScrollSpy*.

---

## Struktur Berkas

```text
UT-law-2026/
├── index.html       # Halaman dokumentasi utama (struktur semantik HTML5)
├── styles.css       # Scandinavian Design System (Nordic Monochrome, Alpha ladder)
├── app.js           # Mesin interaktif dokumentasi (toggles, calculator, filter, scrollspy)
├── data.js          # Basis data terverifikasi (49 matkul, 62 BMP, biaya, kalender 26/27, UPBJJ)
├── assets/          # Aset gambar ruang sidang yudisial dan literatur hukum
├── data_sources/    # Berkas JSON hasil kurasi dan verifikasi data resmi
├── .gitignore       # Pengabaian berkas cache dan PDF biner besar
└── README.md        # Dokumentasi repositori
```

---

## Menjalankan Secara Lokal

Situs ini dibangun menggunakan *Vanilla Web Technologies* (Zero Dependencies). Cukup buka berkas `index.html` langsung di peramban web modern, atau jalankan server lokal:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js (npx serve)
npx serve .
```

Buka `http://localhost:8000` pada peramban Anda.
Situs ini juga 100% kompatibel dengan **GitHub Pages** (cukup aktifkan GitHub Pages dari cabang `main`).

---

## Lisensi & Atribusi

- Materi kurikulum, pedoman akademik, dan tarif resmi merupakan hak cipta milik **Universitas Terbuka** dan **PT Karunika Citra Mandiri**.
- Dibuat secara independen untuk tujuan edukasi dan panduan mahasiswa baru Program Studi S1 Ilmu Hukum Universitas Terbuka.
