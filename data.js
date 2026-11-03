// Basis Data Terpadu Resmi Program Studi S1 Ilmu Hukum Universitas Terbuka
// Disarikan dari Pedoman Penyelenggaraan 2026/2027, Katalog Non-Pendas, Kalender Akademik, dan Live TBO Karunika

const WIKI_DATA = {
  kurikulum_bmp: [
  {
    "semester": 1,
    "kode_mk": "FSIH4101",
    "nama_mk": "Pengantar Ilmu Hukum",
    "sks": 3,
    "waktu_ujian": "I.2",
    "praktik": "-",
    "catatan": "Mata kuliah dasar keahlian hukum.",
    "bmp_kode": "FSIH4101",
    "bmp_judul": "PENGANTAR ILMU HUKUM",
    "bmp_harga": "Rp. 178,300.00",
    "bmp_stok": 148,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4101 (Rp. 178,300.00)"
  },
  {
    "semester": 1,
    "kode_mk": "MKWN4110",
    "nama_mk": "Pancasila",
    "sks": 2,
    "waktu_ujian": "I.3",
    "praktik": "-",
    "catatan": "Mata Kuliah Wajib Nasional.",
    "bmp_kode": "MKWN4110",
    "bmp_judul": "PANCASILA",
    "bmp_harga": "Rp. 96,400.00",
    "bmp_stok": 145,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWN4110 (Rp. 96,400.00)"
  },
  {
    "semester": 1,
    "kode_mk": "FSIH4102",
    "nama_mk": "Sistem Hukum Indonesia",
    "sks": 3,
    "waktu_ujian": "I.4",
    "praktik": "-",
    "catatan": "Pengenalan tata hukum positif di Indonesia.",
    "bmp_kode": "ISIP4131-3",
    "bmp_judul": "SISTEM HUKUM INDONESIA EDISI 3",
    "bmp_harga": "Rp. 201,500.00",
    "bmp_stok": 79,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: ISIP4131-3 (Rp. 201,500.00)"
  },
  {
    "semester": 1,
    "kode_mk": "FSIH4103",
    "nama_mk": "Ilmu Negara",
    "sks": 2,
    "waktu_ujian": "II.1",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "HKUM4209-2",
    "bmp_judul": "ILMU NEGARA EDISI 2",
    "bmp_harga": "Rp. 88,000.00",
    "bmp_stok": 19,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4209-2 (Rp. 88,000.00)"
  },
  {
    "semester": 1,
    "kode_mk": "MKWN4108",
    "nama_mk": "Bahasa Indonesia",
    "sks": 2,
    "waktu_ujian": "II.3",
    "praktik": "-",
    "catatan": "Mata Kuliah Wajib Nasional.",
    "bmp_kode": "MKWN4108",
    "bmp_judul": "BAHASA INDONESIA",
    "bmp_harga": "Rp. 108,700.00",
    "bmp_stok": 689,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWN4108 (Rp. 108,700.00)"
  },
  {
    "semester": 1,
    "kode_mk": "MKWN4109",
    "nama_mk": "Pendidikan Kewarganegaraan",
    "sks": 2,
    "waktu_ujian": "II.4",
    "praktik": "-",
    "catatan": "Mata Kuliah Wajib Nasional.",
    "bmp_kode": "MKWN4109",
    "bmp_judul": "PENDIDIKAN KEWARGANEGARAAN",
    "bmp_harga": "Rp. 99,400.00",
    "bmp_stok": 170,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWN4109 (Rp. 99,400.00)"
  },
  {
    "semester": 1,
    "kode_mk": "MKWN4101-4107",
    "nama_mk": "Pendidikan Agama (Islam/Katolik/Kristen/Buddha/Hindu/Khonghucu)",
    "sks": 3,
    "waktu_ujian": "I.5",
    "praktik": "-",
    "catatan": "Dipilih satu sesuai data pribadi mahasiswa.",
    "bmp_kode": "MKWN4101",
    "bmp_judul": "PENDIDIKAN AGAMA ISLAM",
    "bmp_harga": "Rp. 139,300.00",
    "bmp_stok": 0,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWN4101 (Rp. 139,300.00)"
  },
  {
    "semester": 2,
    "kode_mk": "FSIH4104",
    "nama_mk": "Hukum Perdata",
    "sks": 4,
    "waktu_ujian": "I.5",
    "praktik": "-",
    "catatan": "MATA KULIAH PRASYARAT TAPS (Tugas Akhir Program Sarjana)!",
    "bmp_kode": "HKUM4202-2",
    "bmp_judul": "HUKUM PERDATA EDISI 2",
    "bmp_harga": "Rp. 95,400.00",
    "bmp_stok": 97,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4202-2 (Rp. 95,400.00)"
  },
  {
    "semester": 2,
    "kode_mk": "FSIH4105",
    "nama_mk": "Hukum Pidana",
    "sks": 4,
    "waktu_ujian": "I.2",
    "praktik": "-",
    "catatan": "MATA KULIAH PRASYARAT TAPS (Tugas Akhir Program Sarjana)!",
    "bmp_kode": "FSIH4105",
    "bmp_judul": "HUKUM PIDANA",
    "bmp_harga": "Rp. 206,900.00",
    "bmp_stok": 0,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4105 (Rp. 206,900.00)"
  },
  {
    "semester": 2,
    "kode_mk": "FSIH4106",
    "nama_mk": "Hukum Tata Negara",
    "sks": 3,
    "waktu_ujian": "I.3",
    "praktik": "-",
    "catatan": "Struktur ketatanegaraan RI.",
    "bmp_kode": "HKUM4201-3",
    "bmp_judul": "HUKUM TATA NEGARA EDISI 3",
    "bmp_harga": "Rp. 150,200.00",
    "bmp_stok": 88,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4201-3 (Rp. 150,200.00)"
  },
  {
    "semester": 2,
    "kode_mk": "FSIH4107",
    "nama_mk": "Hukum Administrasi Negara",
    "sks": 3,
    "waktu_ujian": "II.2",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "ADPU4332-3",
    "bmp_judul": "HUKUM ADMINISTRASI NEGARA EDISI 3",
    "bmp_harga": "Rp. 150,700.00",
    "bmp_stok": 17,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: ADPU4332-3 (Rp. 150,700.00)"
  },
  {
    "semester": 2,
    "kode_mk": "MKDI4203",
    "nama_mk": "Kewirausahaan di Era Digital",
    "sks": 3,
    "waktu_ujian": "I.1",
    "praktik": "-",
    "catatan": "Mata Kuliah Dasar Institusional.",
    "bmp_kode": "MKWI4203-2",
    "bmp_judul": "KEWIRAUSAHAAN DI ERA DIGITAL EDISI 2",
    "bmp_harga": "Rp. 119,600.00",
    "bmp_stok": 123,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWI4203-2 (Rp. 119,600.00)"
  },
  {
    "semester": 3,
    "kode_mk": "FSIH4201",
    "nama_mk": "Hukum Internasional",
    "sks": 3,
    "waktu_ujian": "I.2",
    "praktik": "-",
    "catatan": "MATA KULIAH PRASYARAT TAPS (Tugas Akhir Program Sarjana)!",
    "bmp_kode": "HKUM4206-2",
    "bmp_judul": "HUKUM INTERNASIONAL EDISI 2",
    "bmp_harga": "Rp. 182,200.00",
    "bmp_stok": 105,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4206-2 (Rp. 182,200.00)"
  },
  {
    "semester": 3,
    "kode_mk": "FSIH4202",
    "nama_mk": "Hukum Acara Perdata",
    "sks": 3,
    "waktu_ujian": "I.4",
    "praktik": "-",
    "catatan": "Hukum formil perdata.",
    "bmp_kode": "HKUM4405-2",
    "bmp_judul": "HUKUM ACARA PERDATA EDISI 2",
    "bmp_harga": "Rp. 165,500.00",
    "bmp_stok": 65,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4405-2 (Rp. 165,500.00)"
  },
  {
    "semester": 3,
    "kode_mk": "FSIH4203",
    "nama_mk": "Hukum Acara Pidana",
    "sks": 3,
    "waktu_ujian": "I.5",
    "praktik": "-",
    "catatan": "Hukum formil pidana.",
    "bmp_kode": "HKUM4406-2",
    "bmp_judul": "HUKUM ACARA PIDANA EDISI 2",
    "bmp_harga": "Rp. 135,900.00",
    "bmp_stok": 80,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4406-2 (Rp. 135,900.00)"
  },
  {
    "semester": 3,
    "kode_mk": "FSIH4204",
    "nama_mk": "Hukum Islam dan Acara Peradilan Agama",
    "sks": 3,
    "waktu_ujian": "II.1",
    "praktik": "BP",
    "catatan": "MATA KULIAH BERPRAKTIK. Teori & praktik terbimbing via Tuton (wajib). Nilai Akhir: 40% UAS + 60% Nilai Praktik. Laporan akhir praktik wajib diunggah!",
    "bmp_kode": "HKUM4408-2",
    "bmp_judul": "HUKUM ISLAM DAN ACARA PERADILAN AGAMA EDISI 2",
    "bmp_harga": "Rp. 152,600.00",
    "bmp_stok": 34,
    "companion_guide": "FSIH4001: Panduan Berpraktik Hukum Islam dan Acara Peradilan Agama (Rp. 29,800.00)",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4408-2 (Rp. 152,600.00)"
  },
  {
    "semester": 3,
    "kode_mk": "FSIH4205",
    "nama_mk": "Hukum Agraria",
    "sks": 3,
    "waktu_ujian": "II.4",
    "praktik": "BP",
    "catatan": "MATA KULIAH BERPRAKTIK. Teori & praktik terbimbing via Tuton (wajib). Nilai Akhir: 40% UAS + 60% Nilai Praktik. Laporan akhir praktik wajib diunggah!",
    "bmp_kode": "FSIH4205",
    "bmp_judul": "HUKUM AGRARIA",
    "bmp_harga": "Rp. 131,900.00",
    "bmp_stok": 20,
    "companion_guide": "FSIH4002: Panduan Berpraktik Hukum Agraria (Rp. 30,800.00)",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4205 (Rp. 131,900.00)"
  },
  {
    "semester": 3,
    "kode_mk": "FSIH4206",
    "nama_mk": "Hukum Adat",
    "sks": 2,
    "waktu_ujian": "II.3",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "FSIH4206",
    "bmp_judul": "HUKUM ADAT",
    "bmp_harga": "Rp. 86,500.00",
    "bmp_stok": 18,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4206 (Rp. 86,500.00)"
  },
  {
    "semester": 3,
    "kode_mk": "MKDI4202",
    "nama_mk": "Belajar di Era Digital",
    "sks": 3,
    "waktu_ujian": "II.5",
    "praktik": "-",
    "catatan": "Mata Kuliah Dasar Institusional.",
    "bmp_kode": "MKWI4202-2",
    "bmp_judul": "BELAJAR DI ERA DIGITAL EDISI 2",
    "bmp_harga": "Rp. 157,600.00",
    "bmp_stok": 500,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWI4202-2 (Rp. 157,600.00)"
  },
  {
    "semester": 4,
    "kode_mk": "FSIH4207",
    "nama_mk": "Ilmu Perundang-Undangan",
    "sks": 3,
    "waktu_ujian": "I.4",
    "praktik": "-",
    "catatan": "MATA KULIAH PRASYARAT TAPS (Tugas Akhir Program Sarjana)!",
    "bmp_kode": "HKUM4403-3",
    "bmp_judul": "ILMU PERUNDANG-UNDANGAN EDISI 3",
    "bmp_harga": "Rp. 110,220.00",
    "bmp_stok": 32,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4403-3 (Rp. 110,220.00)"
  },
  {
    "semester": 4,
    "kode_mk": "FSIH4208",
    "nama_mk": "Hukum Perjanjian",
    "sks": 3,
    "waktu_ujian": "II.1",
    "praktik": "BP",
    "catatan": "MATA KULIAH BERPRAKTIK & PRASYARAT TAPS! Teori & praktik terbimbing via Tuton (wajib). Nilai Akhir: 40% UAS + 60% Nilai Praktik. Laporan akhir praktik wajib diunggah!",
    "bmp_kode": "HKUM4402-2",
    "bmp_judul": "HUKUM PERJANJIAN EDISI 2",
    "bmp_harga": "Rp. 149,200.00",
    "bmp_stok": 130,
    "companion_guide": "FSIH4003: Panduan Berpraktik Hukum Perjanjian (Rp. 30,800.00)",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4402-2 (Rp. 149,200.00)"
  },
  {
    "semester": 4,
    "kode_mk": "MKDI4201",
    "nama_mk": "Bahasa Inggris",
    "sks": 3,
    "waktu_ujian": "II.2",
    "praktik": "-",
    "catatan": "Mata Kuliah Dasar Institusional.",
    "bmp_kode": "MKWI4201-2",
    "bmp_judul": "BAHASA INGGRIS EDISI 2",
    "bmp_harga": "Rp. 130,900.00",
    "bmp_stok": 231,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKWI4201-2 (Rp. 130,900.00)"
  },
  {
    "semester": 4,
    "kode_mk": "FSIH4209",
    "nama_mk": "Praktik Peradilan Perdata",
    "sks": 3,
    "waktu_ujian": "99",
    "praktik": "P",
    "catatan": "MATA KULIAH PRAKTIK MURNI. Waktu ujian 99 (tanpa UAS). Nilai akhir 100% dari nilai praktik. Metode tatap muka via silayar.ut.ac.id atau online via elearning.ut.ac.id. SYARAT KELULUSAN PRODI: NILAI MINIMAL C!",
    "bmp_kode": "FSIH4209",
    "bmp_judul": "PANDUAN PRAKTIK PERADILAN PERDATA",
    "bmp_harga": "Rp. 44,600.00",
    "bmp_stok": 207,
    "companion_guide": "",
    "sipas_info": "Panduan Praktik Cetak/Digital Resmi UT",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4209 (Rp. 44,600.00)"
  },
  {
    "semester": 4,
    "kode_mk": "FSIH4210",
    "nama_mk": "Praktik Peradilan Pidana",
    "sks": 3,
    "waktu_ujian": "99",
    "praktik": "P",
    "catatan": "MATA KULIAH PRAKTIK MURNI. Waktu ujian 99 (tanpa UAS). Nilai akhir 100% dari nilai praktik. Metode tatap muka via silayar.ut.ac.id atau online via elearning.ut.ac.id. SYARAT KELULUSAN PRODI: NILAI MINIMAL C!",
    "bmp_kode": "FSIH4210",
    "bmp_judul": "PANDUAN PRAKTIK PERADILAN PIDANA",
    "bmp_harga": "Rp. 72,700.00",
    "bmp_stok": 160,
    "companion_guide": "",
    "sipas_info": "Panduan Praktik Cetak/Digital Resmi UT",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4210 (Rp. 72,700.00)"
  },
  {
    "semester": 4,
    "kode_mk": "FSIH4211",
    "nama_mk": "Hukum dan Masyarakat",
    "sks": 3,
    "waktu_ujian": "II.5",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "FSIH4211",
    "bmp_judul": "HUKUM DAN MASYARAKAT",
    "bmp_harga": "Rp. 150,200.00",
    "bmp_stok": 59,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4211 (Rp. 150,200.00)"
  },
  {
    "semester": 4,
    "kode_mk": "FSIH4212",
    "nama_mk": "Hukum Dagang dan Kepailitan",
    "sks": 3,
    "waktu_ujian": "I.2",
    "praktik": "-",
    "catatan": "Aspek kepailitan dan hukum dagang.",
    "bmp_kode": "HKUM4207-2",
    "bmp_judul": "HUKUM DAGANG DAN KEPAILITAN EDISI 2",
    "bmp_harga": "Rp. 131,900.00",
    "bmp_stok": 97,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4207-2 (Rp. 131,900.00)"
  },
  {
    "semester": 5,
    "kode_mk": "FSIH4301",
    "nama_mk": "Hukum Perdata Internasional",
    "sks": 2,
    "waktu_ujian": "I.5",
    "praktik": "-",
    "catatan": "Kaidah penunjuk dan yurisdiksi lintas batas.",
    "bmp_kode": "HKUM4304-3",
    "bmp_judul": "HUKUM PERDATA INTERNATIONAL EDISI 3",
    "bmp_harga": "Rp. 131,400.00",
    "bmp_stok": 87,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4304-3 (Rp. 131,400.00)"
  },
  {
    "semester": 5,
    "kode_mk": "FSIH4302",
    "nama_mk": "Tindak Pidana Korupsi",
    "sks": 2,
    "waktu_ujian": "I.4",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "HKUM4310-2",
    "bmp_judul": "TINDAK PIDANA KORUPSI EDISI 2",
    "bmp_harga": "Rp. 120,600.00",
    "bmp_stok": 102,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4310-2 (Rp. 120,600.00)"
  },
  {
    "semester": 5,
    "kode_mk": "FSIH4303",
    "nama_mk": "Hukum Pidana Ekonomi",
    "sks": 3,
    "waktu_ujian": "II.1",
    "praktik": "-",
    "catatan": "Tindak pidana sektor korporasi dan ekonomi.",
    "bmp_kode": "FSIH4303",
    "bmp_judul": "HUKUM PIDANA EKONOMI",
    "bmp_harga": "Rp. 130,900.00",
    "bmp_stok": 129,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4303 (Rp. 130,900.00)"
  },
  {
    "semester": 5,
    "kode_mk": "EMBS4320",
    "nama_mk": "Hukum Bisnis",
    "sks": 2,
    "waktu_ujian": "II.3",
    "praktik": "-",
    "catatan": "Regulasi transaksi komersial.",
    "bmp_kode": "EKMA4316-2",
    "bmp_judul": "HUKUM BISNIS EDISI 2",
    "bmp_harga": "Rp. 57,300.00",
    "bmp_stok": 0,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: EKMA4316-2 (Rp. 57,300.00)"
  },
  {
    "semester": 5,
    "kode_mk": "PILIHAN-1",
    "nama_mk": "Mata Kuliah Pilihan Semester 5 (FSIH4304 / FSIH4305)",
    "sks": 3,
    "waktu_ujian": "I.2 / II.5",
    "praktik": "-",
    "catatan": "Pilih salah satu dari 2 mata kuliah pilihan yang tersedia.",
    "bmp_kode": "HKUM4303-2",
    "bmp_judul": "HUKUM PERUSAHAAN EDISI 2",
    "bmp_harga": "Rp. 118,100.00",
    "bmp_stok": 10,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4303-2 (Rp. 118,100.00)"
  },
  {
    "semester": 5,
    "kode_mk": "SPKN4301",
    "nama_mk": "Kriminologi dan Kenakalan Remaja di Era Globalisasi",
    "sks": 3,
    "waktu_ujian": "I.3",
    "praktik": "-",
    "catatan": "Kajian sosiologis kejahatan dan delikuensi remaja.",
    "bmp_kode": "SPKN4301",
    "bmp_judul": "Kriminologi dan Kenakalan Remaja di Era Globalisasi",
    "bmp_harga": "Rp. 114,700.00",
    "bmp_stok": 965,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: SPKN4301 (Rp. 114,700.00)"
  },
  {
    "semester": 5,
    "kode_mk": "FSIH4306",
    "nama_mk": "Hukum Pajak dan Acara Perpajakan",
    "sks": 3,
    "waktu_ujian": "II.4",
    "praktik": "-",
    "catatan": "Materi hukum fiskal dan sengketa pajak.",
    "bmp_kode": "FSIH4306",
    "bmp_judul": "HUKUM PAJAK DAN ACARA PERPAJAKAN",
    "bmp_harga": "Rp. 107,300.00",
    "bmp_stok": 128,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4306 (Rp. 107,300.00)"
  },
  {
    "semester": 5,
    "kode_mk": "FSIH4310",
    "nama_mk": "Pengujian Peraturan Perundang-Undangan",
    "sks": 2,
    "waktu_ujian": "I.1",
    "praktik": "BP",
    "catatan": "MATA KULIAH BERPRAKTIK & PROGRAM PELURU (wajib diambil di semester 5 dan 6)! Teori & praktik terbimbing via Tuton (wajib). Nilai Akhir: 40% UAS + 60% Nilai Praktik. Laporan akhir praktik wajib diunggah!",
    "bmp_kode": "HKUM4404-2",
    "bmp_judul": "TEORI PERUNDANG-UNDANGAN EDISI 2",
    "bmp_harga": "Rp. 99,900.00",
    "bmp_stok": 84,
    "companion_guide": "FSIH4004: Panduan Berpraktik Pengujian Peraturan Perundang-Undangan (Rp. 30,800.00)",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4404-2 (Rp. 99,900.00)"
  },
  {
    "semester": 6,
    "kode_mk": "FSIK4206",
    "nama_mk": "Bahasa Inggris Komunikasi",
    "sks": 3,
    "waktu_ujian": "II.2",
    "praktik": "BP",
    "catatan": "Mata kuliah berpraktik bimbingan online.",
    "bmp_kode": "SKOM4209-3",
    "bmp_judul": "BAHASA INGGRIS II  EDISI 3",
    "bmp_harga": "Rp. 107,800.00",
    "bmp_stok": 60,
    "companion_guide": "FSIK4002: Panduan Berpraktik Bahasa Inggris Komunikasi (Rp. 31,800.00)",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: SKOM4209-3 (Rp. 107,800.00)"
  },
  {
    "semester": 6,
    "kode_mk": "FSIH4307",
    "nama_mk": "Hukum Pidana Internasional",
    "sks": 3,
    "waktu_ujian": "II.5",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "FSIH4307",
    "bmp_judul": "HUKUM PIDANA INTERNASIONAL",
    "bmp_harga": "Rp. 152,600.00",
    "bmp_stok": 39,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: FSIH4307 (Rp. 152,600.00)"
  },
  {
    "semester": 6,
    "kode_mk": "FSIH4308",
    "nama_mk": "Tindak Pidana Khusus",
    "sks": 2,
    "waktu_ujian": "I.1",
    "praktik": "-",
    "catatan": "Tindak pidana luar biasa di luar KUHP.",
    "bmp_kode": "HKUM4309-2",
    "bmp_judul": "TINDAK PIDANA KHUSUS EDISI 2",
    "bmp_harga": "Rp. 159,100.00",
    "bmp_stok": 145,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4309-2 (Rp. 159,100.00)"
  },
  {
    "semester": 6,
    "kode_mk": "FSIH4309",
    "nama_mk": "Metode Penelitian Hukum",
    "sks": 3,
    "waktu_ujian": "99",
    "praktik": "P",
    "catatan": "MATA KULIAH PRAKTIK, PROGRAM PELURU (wajib di smt 5 & 6) & PRASYARAT TAPS! Waktu ujian 99 (tanpa UAS). Bimbingan Praton online di elearning.ut.ac.id. Nilai Akhir 100% dari nilai laporan praktik (proposal penelitian).",
    "bmp_kode": "HKUM4306-2",
    "bmp_judul": "METODE PENELITIAN HUKUM EDISI 2",
    "bmp_harga": "Rp. 133,900.00",
    "bmp_stok": 13,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4306-2 (Rp. 133,900.00)"
  },
  {
    "semester": 6,
    "kode_mk": "PILIHAN-2",
    "nama_mk": "Mata Kuliah Pilihan Semester 6 (Pilih 9 SKS)",
    "sks": 9,
    "waktu_ujian": "Variatif",
    "praktik": "-",
    "catatan": "Total 9 SKS mata kuliah pengayaan lintas program studi.",
    "bmp_kode": "HKUM4308-2",
    "bmp_judul": "HUKUM PERBANKAN & TINDAK PIDANA PENCUCIAN UANG EDISI 02",
    "bmp_harga": "Rp. 126,000.00",
    "bmp_stok": 0,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4308-2 (Rp. 126,000.00)"
  },
  {
    "semester": 7,
    "kode_mk": "FSIH4401",
    "nama_mk": "Hukum dan Hak Asasi Manusia",
    "sks": 3,
    "waktu_ujian": "I.2",
    "praktik": "-",
    "catatan": "Instrumen HAM nasional dan internasional.",
    "bmp_kode": "HKUM4208-2",
    "bmp_judul": "HUKUM DAN HAK ASASI MANUSIA EDISI 2",
    "bmp_harga": "Rp. 129,500.00",
    "bmp_stok": 0,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4208-2 (Rp. 129,500.00)"
  },
  {
    "semester": 7,
    "kode_mk": "FSIH4402",
    "nama_mk": "Interpretasi dan Penalaran Hukum",
    "sks": 2,
    "waktu_ujian": "II.1",
    "praktik": "-",
    "catatan": "Legal reasoning dan konstruksi hukum.",
    "bmp_kode": "HKUM4401-2",
    "bmp_judul": "INTERPRETASI DAN PENALARAN HUKUM EDISI 2",
    "bmp_harga": "Rp. 84,600.00",
    "bmp_stok": 63,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4401-2 (Rp. 84,600.00)"
  },
  {
    "semester": 7,
    "kode_mk": "FSIH4403",
    "nama_mk": "Arbitrase, Mediasi, dan Negosiasi",
    "sks": 3,
    "waktu_ujian": "II.3",
    "praktik": "BP",
    "catatan": "MATA KULIAH BERPRAKTIK. Teori & praktik terbimbing via Tuton (wajib). Nilai Akhir: 40% UAS + 60% Nilai Praktik. Laporan akhir praktik wajib diunggah!",
    "bmp_kode": "HKUM4409-2",
    "bmp_judul": "ARBITRASE, MEDIASI DAN NEGOSIASI EDISI 2",
    "bmp_harga": "Rp. 90,500.00",
    "bmp_stok": 56,
    "companion_guide": "FSIH4005: Panduan Berpraktik Arbitrase, Mediasi, dan Negosiasi (Rp. 31,300.00)",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4409-2 (Rp. 90,500.00)"
  },
  {
    "semester": 7,
    "kode_mk": "FSIH4404",
    "nama_mk": "Hukum Lingkungan",
    "sks": 2,
    "waktu_ujian": "II.4",
    "praktik": "-",
    "catatan": "Perlindungan & pengelolaan lingkungan hidup.",
    "bmp_kode": "HKUM4210-2",
    "bmp_judul": "HUKUM LINGKUNGAN EDISI 2",
    "bmp_harga": "Rp. 94,900.00",
    "bmp_stok": 20,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4210-2 (Rp. 94,900.00)"
  },
  {
    "semester": 7,
    "kode_mk": "TAPS (FSIH4450 / FSIH4460)",
    "nama_mk": "Tugas Akhir Program Sarjana (TAPS) / Ujian Komprehensif Tertulis (UKT) atau Artikel Ilmiah",
    "sks": 6,
    "waktu_ujian": "0.2 / 99",
    "praktik": "P / BWo",
    "catatan": "PILIH SALAH SATU: FSIH4450 UKT (6 sks, Ujian 0.2, wajib tuton & wajib UAS! Jika tidak ikut salah satu nilai E) ATAU FSIH4460 Artikel Ilmiah (Ujian 99, 100% dari nilai artikel ilmiah). SYARAT PENJARINGAN: Minimal telah menempuh 110 sks (145-35), IPK minimal 2.50, dan LULUS 6 MK Prasyarat TAPS!",
    "bmp_kode": "MKKI4450",
    "bmp_judul": "Panduan Tugas Akhir Program Sarjana (TAPS)",
    "bmp_harga": "Rp. 77,700.00",
    "bmp_stok": 1443,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: MKKI4450 (Rp. 77,700.00)"
  },
  {
    "semester": 8,
    "kode_mk": "FSIH4405",
    "nama_mk": "Filsafat Hukum dan Etika Profesi",
    "sks": 3,
    "waktu_ujian": "II.5",
    "praktik": "-",
    "catatan": "Aliran filsafat hukum dan moralitas penegak hukum.",
    "bmp_kode": "HKUM4103-2",
    "bmp_judul": "FILSAFAT HUKUM DAN ETIKA PROFESI EDISI 2",
    "bmp_harga": "Rp. 126,000.00",
    "bmp_stok": 1103,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4103-2 (Rp. 126,000.00)"
  },
  {
    "semester": 8,
    "kode_mk": "FSIH4406",
    "nama_mk": "Hukum Telematika",
    "sks": 3,
    "waktu_ujian": "I.4",
    "praktik": "-",
    "catatan": "Cyber law, transaksi elektronik, dan privasi data.",
    "bmp_kode": "HKUM4301-3",
    "bmp_judul": "HUKUM TELEMATIKA EDISI 3",
    "bmp_harga": "Rp. 134,900.00",
    "bmp_stok": 177,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4301-3 (Rp. 134,900.00)"
  },
  {
    "semester": 8,
    "kode_mk": "FSIH4407",
    "nama_mk": "Hak Kekayaan Intelektual",
    "sks": 3,
    "waktu_ujian": "II.1",
    "praktik": "-",
    "catatan": "Wajib Tuton untuk SIPAS Penuh & SIPAS Plus.",
    "bmp_kode": "HKUM4302-2",
    "bmp_judul": "HUKUM KEKAYAAN INTELEKTUAL EDISI 2",
    "bmp_harga": "Rp. 210,400.00",
    "bmp_stok": 152,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4302-2 (Rp. 210,400.00)"
  },
  {
    "semester": 8,
    "kode_mk": "FSIH4408",
    "nama_mk": "Hukum Ketenagakerjaan",
    "sks": 2,
    "waktu_ujian": "I.3",
    "praktik": "-",
    "catatan": "Hubungan industrial, ketenagakerjaan, dan PHK.",
    "bmp_kode": "ADBI4336-3",
    "bmp_judul": "HUKUM KETENAGAKERJAAN EDISI 3",
    "bmp_harga": "Rp. 126,000.00",
    "bmp_stok": 200,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: ADBI4336-3 (Rp. 126,000.00)"
  },
  {
    "semester": 8,
    "kode_mk": "FSIH4409",
    "nama_mk": "Hukum Perlindungan Konsumen",
    "sks": 3,
    "waktu_ujian": "II.2",
    "praktik": "-",
    "catatan": "Hak konsumen, klausula baku, dan penyelesaian sengketa konsumen.",
    "bmp_kode": "HKUM4312-2",
    "bmp_judul": "HUKUM PERLINDUNGAN KONSUMEN EDISI 2",
    "bmp_harga": "Rp. 127,500.00",
    "bmp_stok": 541,
    "companion_guide": "",
    "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)",
    "nonsipas_info": "Wajib Beli Mandiri di TBO Karunika: HKUM4312-2 (Rp. 127,500.00)"
  }
],
  tbo_books: [
  {
    "kode": "ADBI4336-3",
    "judul": "HUKUM KETENAGAKERJAAN EDISI 3",
    "edisi": 3,
    "harga_mhs": 126000,
    "harga_mhs_str": "Rp. 126,000.00",
    "harga_umum_str": "Rp. 155,900.00",
    "stok": 200
  },
  {
    "kode": "ADPU4332-3",
    "judul": "HUKUM ADMINISTRASI NEGARA EDISI 3",
    "edisi": 3,
    "harga_mhs": 150700,
    "harga_mhs_str": "Rp. 150,700.00",
    "harga_umum_str": "Rp. 194,300.00",
    "stok": 17
  },
  {
    "kode": "EKMA4316-2",
    "judul": "HUKUM BISNIS EDISI 2",
    "edisi": 2,
    "harga_mhs": 57300,
    "harga_mhs_str": "Rp. 57,300.00",
    "harga_umum_str": "Rp. 89,200.00",
    "stok": 0
  },
  {
    "kode": "EKMA4316-3",
    "judul": "HUKUM BISNIS EDISI 3",
    "edisi": 3,
    "harga_mhs": 132900,
    "harga_mhs_str": "Rp. 132,900.00",
    "harga_umum_str": "Rp. 166,700.00",
    "stok": 1183
  },
  {
    "kode": "FSIH4001",
    "judul": "Panduan Berpraktik Hukum Islam dan Acara Peradilan Agama",
    "edisi": 1,
    "harga_mhs": 29800,
    "harga_mhs_str": "Rp. 29,800.00",
    "harga_umum_str": "Rp. 6,300.00",
    "stok": 0
  },
  {
    "kode": "FSIH4002",
    "judul": "Panduan Berpraktik Hukum Agraria",
    "edisi": 1,
    "harga_mhs": 30800,
    "harga_mhs_str": "Rp. 30,800.00",
    "harga_umum_str": "Rp. 7,800.00",
    "stok": 0
  },
  {
    "kode": "FSIH4003",
    "judul": "Panduan Berpraktik Hukum Perjanjian",
    "edisi": 1,
    "harga_mhs": 30800,
    "harga_mhs_str": "Rp. 30,800.00",
    "harga_umum_str": "Rp. 7,800.00",
    "stok": 0
  },
  {
    "kode": "FSIH4004",
    "judul": "Panduan Berpraktik Pengujian Peraturan Perundang-Undangan",
    "edisi": 1,
    "harga_mhs": 30800,
    "harga_mhs_str": "Rp. 30,800.00",
    "harga_umum_str": "Rp. 7,800.00",
    "stok": 0
  },
  {
    "kode": "FSIH4005",
    "judul": "Panduan Berpraktik Arbitrase, Mediasi, dan Negosiasi",
    "edisi": 1,
    "harga_mhs": 31300,
    "harga_mhs_str": "Rp. 31,300.00",
    "harga_umum_str": "Rp. 8,600.00",
    "stok": 0
  },
  {
    "kode": "FSIH4101",
    "judul": "PENGANTAR ILMU HUKUM",
    "edisi": 1,
    "harga_mhs": 178300,
    "harga_mhs_str": "Rp. 178,300.00",
    "harga_umum_str": "Rp. 237,300.00",
    "stok": 148
  },
  {
    "kode": "FSIH4105",
    "judul": "HUKUM PIDANA",
    "edisi": 1,
    "harga_mhs": 206900,
    "harga_mhs_str": "Rp. 206,900.00",
    "harga_umum_str": "Rp. 281,800.00",
    "stok": 0
  },
  {
    "kode": "FSIH4205",
    "judul": "HUKUM AGRARIA",
    "edisi": 1,
    "harga_mhs": 131900,
    "harga_mhs_str": "Rp. 131,900.00",
    "harga_umum_str": "Rp. 165,100.00",
    "stok": 20
  },
  {
    "kode": "FSIH4206",
    "judul": "HUKUM ADAT",
    "edisi": 1,
    "harga_mhs": 86500,
    "harga_mhs_str": "Rp. 86,500.00",
    "harga_umum_str": "Rp. 94,500.00",
    "stok": 18
  },
  {
    "kode": "FSIH4209",
    "judul": "PANDUAN PRAKTIK PERADILAN PERDATA",
    "edisi": 1,
    "harga_mhs": 44600,
    "harga_mhs_str": "Rp. 44,600.00",
    "harga_umum_str": "Rp. 29,300.00",
    "stok": 207
  },
  {
    "kode": "FSIH4210",
    "judul": "PANDUAN PRAKTIK PERADILAN PIDANA",
    "edisi": 1,
    "harga_mhs": 72700,
    "harga_mhs_str": "Rp. 72,700.00",
    "harga_umum_str": "Rp. 73,100.00",
    "stok": 160
  },
  {
    "kode": "FSIH4211",
    "judul": "HUKUM DAN MASYARAKAT",
    "edisi": 1,
    "harga_mhs": 150200,
    "harga_mhs_str": "Rp. 150,200.00",
    "harga_umum_str": "Rp. 193,500.00",
    "stok": 59
  },
  {
    "kode": "FSIH4303",
    "judul": "HUKUM PIDANA EKONOMI",
    "edisi": 1,
    "harga_mhs": 130900,
    "harga_mhs_str": "Rp. 130,900.00",
    "harga_umum_str": "Rp. 163,600.00",
    "stok": 129
  },
  {
    "kode": "FSIH4306",
    "judul": "HUKUM PAJAK DAN ACARA PERPAJAKAN",
    "edisi": 1,
    "harga_mhs": 107300,
    "harga_mhs_str": "Rp. 107,300.00",
    "harga_umum_str": "Rp. 126,800.00",
    "stok": 128
  },
  {
    "kode": "FSIH4307",
    "judul": "HUKUM PIDANA INTERNASIONAL",
    "edisi": 1,
    "harga_mhs": 152600,
    "harga_mhs_str": "Rp. 152,600.00",
    "harga_umum_str": "Rp. 197,400.00",
    "stok": 39
  },
  {
    "kode": "FSIK4002",
    "judul": "Panduan Berpraktik Bahasa Inggris Komunikasi",
    "edisi": 1,
    "harga_mhs": 31800,
    "harga_mhs_str": "Rp. 31,800.00",
    "harga_umum_str": "Rp. 9,400.00",
    "stok": 0
  },
  {
    "kode": "HKUM4101-2",
    "judul": "BAHASA DAN TERMINOLOGI HUKUM EDISI.2",
    "edisi": 2,
    "harga_mhs": 107308,
    "harga_mhs_str": "Rp. 107,308.00",
    "harga_umum_str": "Rp. 126,808.00",
    "stok": 0
  },
  {
    "kode": "HKUM4103-2",
    "judul": "FILSAFAT HUKUM DAN ETIKA PROFESI EDISI 2",
    "edisi": 2,
    "harga_mhs": 126000,
    "harga_mhs_str": "Rp. 126,000.00",
    "harga_umum_str": "Rp. 155,900.00",
    "stok": 1103
  },
  {
    "kode": "HKUM4201-3",
    "judul": "HUKUM TATA NEGARA EDISI 3",
    "edisi": 3,
    "harga_mhs": 150200,
    "harga_mhs_str": "Rp. 150,200.00",
    "harga_umum_str": "Rp. 193,500.00",
    "stok": 88
  },
  {
    "kode": "HKUM4202-2",
    "judul": "HUKUM PERDATA EDISI 2",
    "edisi": 2,
    "harga_mhs": 95400,
    "harga_mhs_str": "Rp. 95,400.00",
    "harga_umum_str": "Rp. 108,300.00",
    "stok": 97
  },
  {
    "kode": "HKUM4203-2",
    "judul": "HUKUM PIDANA EDISI 2",
    "edisi": 2,
    "harga_mhs": 140800,
    "harga_mhs_str": "Rp. 140,800.00",
    "harga_umum_str": "Rp. 178,900.00",
    "stok": 0
  },
  {
    "kode": "HKUM4204-2",
    "judul": "HUKUM ADAT ED 2",
    "edisi": 2,
    "harga_mhs": 48600,
    "harga_mhs_str": "Rp. 48,600.00",
    "harga_umum_str": "Rp. 75,700.00",
    "stok": 0
  },
  {
    "kode": "HKUM4206-2",
    "judul": "HUKUM INTERNASIONAL EDISI 2",
    "edisi": 2,
    "harga_mhs": 182200,
    "harga_mhs_str": "Rp. 182,200.00",
    "harga_umum_str": "Rp. 243,400.00",
    "stok": 105
  },
  {
    "kode": "HKUM4207-2",
    "judul": "HUKUM DAGANG DAN KEPAILITAN EDISI 2",
    "edisi": 2,
    "harga_mhs": 131900,
    "harga_mhs_str": "Rp. 131,900.00",
    "harga_umum_str": "Rp. 165,100.00",
    "stok": 97
  },
  {
    "kode": "HKUM4208-2",
    "judul": "HUKUM DAN HAK ASASI MANUSIA EDISI 2",
    "edisi": 2,
    "harga_mhs": 129500,
    "harga_mhs_str": "Rp. 129,500.00",
    "harga_umum_str": "Rp. 161,300.00",
    "stok": 0
  },
  {
    "kode": "HKUM4209-2",
    "judul": "ILMU NEGARA EDISI 2",
    "edisi": 2,
    "harga_mhs": 88000,
    "harga_mhs_str": "Rp. 88,000.00",
    "harga_umum_str": "Rp. 96,800.00",
    "stok": 19
  },
  {
    "kode": "HKUM4210-2",
    "judul": "HUKUM LINGKUNGAN EDISI 2",
    "edisi": 2,
    "harga_mhs": 94900,
    "harga_mhs_str": "Rp. 94,900.00",
    "harga_umum_str": "Rp. 107,600.00",
    "stok": 20
  },
  {
    "kode": "HKUM4301-3",
    "judul": "HUKUM TELEMATIKA EDISI 3",
    "edisi": 3,
    "harga_mhs": 134900,
    "harga_mhs_str": "Rp. 134,900.00",
    "harga_umum_str": "Rp. 169,700.00",
    "stok": 177
  },
  {
    "kode": "HKUM4302-2",
    "judul": "HUKUM KEKAYAAN INTELEKTUAL EDISI 2",
    "edisi": 2,
    "harga_mhs": 210400,
    "harga_mhs_str": "Rp. 210,400.00",
    "harga_umum_str": "Rp. 287,100.00",
    "stok": 152
  },
  {
    "kode": "HKUM4303-2",
    "judul": "HUKUM PERUSAHAAN EDISI 2",
    "edisi": 2,
    "harga_mhs": 118100,
    "harga_mhs_str": "Rp. 118,100.00",
    "harga_umum_str": "Rp. 143,700.00",
    "stok": 10
  },
  {
    "kode": "HKUM4304-3",
    "judul": "HUKUM PERDATA INTERNATIONAL EDISI 3",
    "edisi": 3,
    "harga_mhs": 131400,
    "harga_mhs_str": "Rp. 131,400.00",
    "harga_umum_str": "Rp. 164,400.00",
    "stok": 87
  },
  {
    "kode": "HKUM4306-2",
    "judul": "METODE PENELITIAN HUKUM EDISI 2",
    "edisi": 2,
    "harga_mhs": 133900,
    "harga_mhs_str": "Rp. 133,900.00",
    "harga_umum_str": "Rp. 168,200.00",
    "stok": 13
  },
  {
    "kode": "HKUM4307-2",
    "judul": "HUKUM PERSAINGAN USAHA EDISI 2",
    "edisi": 2,
    "harga_mhs": 143300,
    "harga_mhs_str": "Rp. 143,300.00",
    "harga_umum_str": "Rp. 182,800.00",
    "stok": 172
  },
  {
    "kode": "HKUM4308-2",
    "judul": "HUKUM PERBANKAN & TINDAK PIDANA PENCUCIAN UANG EDISI 02",
    "edisi": 2,
    "harga_mhs": 126000,
    "harga_mhs_str": "Rp. 126,000.00",
    "harga_umum_str": "Rp. 155,900.00",
    "stok": 0
  },
  {
    "kode": "HKUM4309-2",
    "judul": "TINDAK PIDANA KHUSUS EDISI 2",
    "edisi": 2,
    "harga_mhs": 159100,
    "harga_mhs_str": "Rp. 159,100.00",
    "harga_umum_str": "Rp. 207,300.00",
    "stok": 145
  },
  {
    "kode": "HKUM4310-2",
    "judul": "TINDAK PIDANA KORUPSI EDISI 2",
    "edisi": 2,
    "harga_mhs": 120600,
    "harga_mhs_str": "Rp. 120,600.00",
    "harga_umum_str": "Rp. 147,500.00",
    "stok": 102
  },
  {
    "kode": "HKUM4311-2",
    "judul": "HUKUM TINDAK PIDANA EKONOMI EDISI 02",
    "edisi": 2,
    "harga_mhs": 118600,
    "harga_mhs_str": "Rp. 118,600.00",
    "harga_umum_str": "Rp. 144,400.00",
    "stok": 0
  },
  {
    "kode": "HKUM4312-2",
    "judul": "HUKUM PERLINDUNGAN KONSUMEN EDISI 2",
    "edisi": 2,
    "harga_mhs": 127500,
    "harga_mhs_str": "Rp. 127,500.00",
    "harga_umum_str": "Rp. 158,200.00",
    "stok": 541
  },
  {
    "kode": "HKUM4401-2",
    "judul": "INTERPRETASI DAN PENALARAN HUKUM EDISI 2",
    "edisi": 2,
    "harga_mhs": 84600,
    "harga_mhs_str": "Rp. 84,600.00",
    "harga_umum_str": "Rp. 91,500.00",
    "stok": 63
  },
  {
    "kode": "HKUM4402-2",
    "judul": "HUKUM PERJANJIAN EDISI 2",
    "edisi": 2,
    "harga_mhs": 149200,
    "harga_mhs_str": "Rp. 149,200.00",
    "harga_umum_str": "Rp. 192,000.00",
    "stok": 130
  },
  {
    "kode": "HKUM4403-3",
    "judul": "ILMU PERUNDANG-UNDANGAN EDISI 3",
    "edisi": 3,
    "harga_mhs": 110220,
    "harga_mhs_str": "Rp. 110,220.00",
    "harga_umum_str": "Rp. 131,400.00",
    "stok": 32
  },
  {
    "kode": "HKUM4404-2",
    "judul": "TEORI PERUNDANG-UNDANGAN EDISI 2",
    "edisi": 2,
    "harga_mhs": 99900,
    "harga_mhs_str": "Rp. 99,900.00",
    "harga_umum_str": "Rp. 115,200.00",
    "stok": 84
  },
  {
    "kode": "HKUM4405-2",
    "judul": "HUKUM ACARA PERDATA EDISI 2",
    "edisi": 2,
    "harga_mhs": 165500,
    "harga_mhs_str": "Rp. 165,500.00",
    "harga_umum_str": "Rp. 217,300.00",
    "stok": 65
  },
  {
    "kode": "HKUM4406-2",
    "judul": "HUKUM ACARA PIDANA EDISI 2",
    "edisi": 2,
    "harga_mhs": 135900,
    "harga_mhs_str": "Rp. 135,900.00",
    "harga_umum_str": "Rp. 171,300.00",
    "stok": 80
  },
  {
    "kode": "HKUM4408-2",
    "judul": "HUKUM ISLAM DAN ACARA PERADILAN AGAMA EDISI 2",
    "edisi": 2,
    "harga_mhs": 152600,
    "harga_mhs_str": "Rp. 152,600.00",
    "harga_umum_str": "Rp. 197,400.00",
    "stok": 34
  },
  {
    "kode": "HKUM4409-2",
    "judul": "ARBITRASE, MEDIASI DAN NEGOSIASI EDISI 2",
    "edisi": 2,
    "harga_mhs": 90500,
    "harga_mhs_str": "Rp. 90,500.00",
    "harga_umum_str": "Rp. 100,700.00",
    "stok": 56
  },
  {
    "kode": "HKUM4410-2",
    "judul": "PRAKTIK PENGALAMAN BERACARA EDISI 02",
    "edisi": 2,
    "harga_mhs": 129500,
    "harga_mhs_str": "Rp. 129,500.00",
    "harga_umum_str": "Rp. 161,300.00",
    "stok": 0
  },
  {
    "kode": "ISIP4131-3",
    "judul": "SISTEM HUKUM INDONESIA EDISI 3",
    "edisi": 3,
    "harga_mhs": 201500,
    "harga_mhs_str": "Rp. 201,500.00",
    "harga_umum_str": "Rp. 273,300.00",
    "stok": 79
  },
  {
    "kode": "MKKI4450",
    "judul": "Panduan Tugas Akhir Program Sarjana (TAPS)",
    "edisi": 1,
    "harga_mhs": 77700,
    "harga_mhs_str": "Rp. 77,700.00",
    "harga_umum_str": "Rp. 80,700.00",
    "stok": 1443
  },
  {
    "kode": "MKWI4201-2",
    "judul": "BAHASA INGGRIS EDISI 2",
    "edisi": 2,
    "harga_mhs": 130900,
    "harga_mhs_str": "Rp. 130,900.00",
    "harga_umum_str": "Rp. 163,600.00",
    "stok": 231
  },
  {
    "kode": "MKWI4202-2",
    "judul": "BELAJAR DI ERA DIGITAL EDISI 2",
    "edisi": 2,
    "harga_mhs": 157600,
    "harga_mhs_str": "Rp. 157,600.00",
    "harga_umum_str": "Rp. 205,000.00",
    "stok": 500
  },
  {
    "kode": "MKWI4203-2",
    "judul": "KEWIRAUSAHAAN DI ERA DIGITAL EDISI 2",
    "edisi": 2,
    "harga_mhs": 119600,
    "harga_mhs_str": "Rp. 119,600.00",
    "harga_umum_str": "Rp. 145,900.00",
    "stok": 123
  },
  {
    "kode": "MKWN4101",
    "judul": "PENDIDIKAN AGAMA ISLAM",
    "edisi": 1,
    "harga_mhs": 139300,
    "harga_mhs_str": "Rp. 139,300.00",
    "harga_umum_str": "Rp. 176,600.00",
    "stok": 0
  },
  {
    "kode": "MKWN4108",
    "judul": "BAHASA INDONESIA",
    "edisi": 1,
    "harga_mhs": 108700,
    "harga_mhs_str": "Rp. 108,700.00",
    "harga_umum_str": "Rp. 129,100.00",
    "stok": 689
  },
  {
    "kode": "MKWN4109",
    "judul": "PENDIDIKAN KEWARGANEGARAAN",
    "edisi": 1,
    "harga_mhs": 99400,
    "harga_mhs_str": "Rp. 99,400.00",
    "harga_umum_str": "Rp. 114,500.00",
    "stok": 170
  },
  {
    "kode": "MKWN4110",
    "judul": "PANCASILA",
    "edisi": 1,
    "harga_mhs": 96400,
    "harga_mhs_str": "Rp. 96,400.00",
    "harga_umum_str": "Rp. 109,900.00",
    "stok": 145
  },
  {
    "kode": "SKOM4209-3",
    "judul": "BAHASA INGGRIS II  EDISI 3",
    "edisi": 3,
    "harga_mhs": 107800,
    "harga_mhs_str": "Rp. 107,800.00",
    "harga_umum_str": "Rp. 127,500.00",
    "stok": 60
  },
  {
    "kode": "SPKN4301",
    "judul": "Kriminologi dan Kenakalan Remaja di Era Globalisasi",
    "edisi": 1,
    "harga_mhs": 114700,
    "harga_mhs_str": "Rp. 114,700.00",
    "harga_umum_str": "Rp. 138,300.00",
    "stok": 965
  }
],
  upbjj: [
  {
    "no": 1,
    "nama": "Layanan Luar Negeri",
    "alamat": "Universitas Terbuka, Gedung Pelayanan Publik Lantai 2, Jl. Cabe Raya, Pondok Cabe, Pamulang, Tangerang Selatan 15437",
    "telp": "021-7490941",
    "email": "luarnegeri@ecampus.ut.ac.id",
    "web": "luarnegeri.ut.ac.id"
  },
  {
    "no": 2,
    "nama": "Banda Aceh",
    "alamat": "Jl. Pendidikan/Bahagia, Punge Blang Cut, Kec. Jaya Baru, Kota Banda Aceh 23234",
    "telp": "0651-44749, 44750",
    "email": "ut-bandaaceh@ecampus.ut.ac.id",
    "web": "aceh.ut.ac.id"
  },
  {
    "no": 3,
    "nama": "Medan",
    "alamat": "Jl. Bromo No. 29 Medan, Kel. Binjai, Kec. Medan Denai 20228",
    "telp": "061-7323795, 7326261",
    "email": "ut-medan@ecampus.ut.ac.id",
    "web": "medan.ut.ac.id"
  },
  {
    "no": 4,
    "nama": "Batam",
    "alamat": "Jl. Dr. Sutomo No. 3 Sekupang, Batam 29422",
    "telp": "0778-323478",
    "email": "ut-batam@ecampus.ut.ac.id",
    "web": "batam.ut.ac.id"
  },
  {
    "no": 5,
    "nama": "Padang",
    "alamat": "Jl. Raya By Pass Km.13 Sungai Sapih, Padang 25159",
    "telp": "0811-6601414",
    "email": "ut-padang@ecampus.ut.ac.id",
    "web": "padang.ut.ac.id"
  },
  {
    "no": 6,
    "nama": "Pangkalpinang",
    "alamat": "Jl. Pulau Bangka, Komplek Perkantoran dan Pemukiman Terpadu, Pemprov Kep. Bangka Belitung Air Hitam, Pangkal Pinang",
    "telp": "0717-424986, 437949",
    "email": "ut-pangkalpinang@ecampus.ut.ac.id",
    "web": "pangkalpinang.ut.ac.id"
  },
  {
    "no": 7,
    "nama": "Pekanbaru",
    "alamat": "Jl. Arifin Ahmad No. 111, Pekanbaru 28294",
    "telp": "0761-589261",
    "email": "ut-pekanbaru@ecampus.ut.ac.id",
    "web": "pekanbaru.ut.ac.id"
  },
  {
    "no": 8,
    "nama": "Jambi",
    "alamat": "Jl. Gajah Mada No.51, Lebak Bandung, Jelutung, Jambi 36135",
    "telp": "0741-25753",
    "email": "jambi@ecampus.ut.ac.id",
    "web": "jambi.ut.ac.id"
  },
  {
    "no": 9,
    "nama": "Palembang",
    "alamat": "Jln. Kol. H. Burlian KM. 10, Karya Baru, Alang-Alang Lebar, Palembang 30154",
    "telp": "0711-5724000",
    "email": "ut-palembang@ecampus.ut.ac.id",
    "web": "palembang.ut.ac.id"
  },
  {
    "no": 10,
    "nama": "Bengkulu",
    "alamat": "Jl. Sadang Raya, Kel. Lingkar Barat, Kota Bengkulu 38225",
    "telp": "0736-26294",
    "email": "ut-bengkulu@ecampus.ut.ac.id",
    "web": "bengkulu.ut.ac.id"
  },
  {
    "no": 11,
    "nama": "Bandar Lampung",
    "alamat": "Jl. Soekarno-Hatta No. 108B Rajabasa, Bandar Lampung 35144",
    "telp": "0721-704772",
    "email": "ut-bandarlampung@ecampus.ut.ac.id",
    "web": "lampung.ut.ac.id"
  },
  {
    "no": 12,
    "nama": "Jakarta",
    "alamat": "Jl. Ahmad Yani No. 43 (By pass) Kel. Utan Kayu, Kec. Matraman, Jakarta Timur",
    "telp": "021-29613751, 29613753",
    "email": "ut-jakarta@ecampus.ut.ac.id",
    "web": "jakarta.ut.ac.id"
  },
  {
    "no": 13,
    "nama": "Serang",
    "alamat": "Jl. Raya Jakarta Km. 7 Pakupatan, Serang, Banten 42122",
    "telp": "0254-282728, 282721",
    "email": "ut-serang@ecampus.ut.ac.id",
    "web": "serang.ut.ac.id"
  },
  {
    "no": 14,
    "nama": "Bogor",
    "alamat": "Jl. KH. Soleh Iskandar No. 234, Tanah Sereal, Bogor 16164",
    "telp": "0251-7559237",
    "email": "ut-bogor@ecampus.ut.ac.id",
    "web": "bogor.ut.ac.id"
  },
  {
    "no": 15,
    "nama": "Bandung",
    "alamat": "Jl. Panyileukan Raya No. 1 A, Soekarno-Hatta, Bandung 40614",
    "telp": "022-7801791, 7801792",
    "email": "bandung@ecampus.ut.ac.id",
    "web": "bandung.ut.ac.id"
  },
  {
    "no": 16,
    "nama": "Purwokerto",
    "alamat": "Jl. Kampus No. 54 Grendeng, Purwokerto 53122",
    "telp": "0281-624317",
    "email": "ut-purwokerto@ecampus.ut.ac.id",
    "web": "purwokerto.ut.ac.id"
  },
  {
    "no": 17,
    "nama": "Semarang",
    "alamat": "Jl. Raya Semarang-Kendal Km. 14,5, Mangkang Wetan, Semarang",
    "telp": "024-8666044",
    "email": "ut-semarang@ecampus.ut.ac.id",
    "web": "semarang.ut.ac.id"
  },
  {
    "no": 18,
    "nama": "Surakarta",
    "alamat": "Jl. Raya Solo-Tawangmangu Km 9,5 Mojolaban, Sukoharjo 57554",
    "telp": "0271-822629, 822632",
    "email": "ut-surakarta@ecampus.ut.ac.id",
    "web": "surakarta.ut.ac.id"
  },
  {
    "no": 19,
    "nama": "Yogyakarta",
    "alamat": "Jl. Bantul No. 81 Kel. Gedongkiwo, Kec. Mantrijeron, Yogyakarta",
    "telp": "0274-411463, 411464",
    "email": "ut-yogyakarta@ecampus.ut.ac.id",
    "web": "yogyakarta.ut.ac.id"
  },
  {
    "no": 20,
    "nama": "Surabaya",
    "alamat": "Jl. Dr. Ir. H. Soekarno No. 567 MERR Rungkut Surabaya",
    "telp": "031-5961861, 5961862",
    "email": "ut-surabaya@ecampus.ut.ac.id",
    "web": "surabaya.ut.ac.id"
  },
  {
    "no": 21,
    "nama": "Malang",
    "alamat": "Jl. Mayjen Sungkono No. 9, Malang 65145",
    "telp": "0341-751600, 751608",
    "email": "malang@ecampus.ut.ac.id",
    "web": "malang.ut.ac.id"
  },
  {
    "no": 22,
    "nama": "Jember",
    "alamat": "Jl. Kaliurang No. 2-A, Jember 68121",
    "telp": "0331-326444",
    "email": "jember@ecampus.ut.ac.id",
    "web": "jember.ut.ac.id"
  },
  {
    "no": 23,
    "nama": "Denpasar",
    "alamat": "Jalan Raya Sesetan No.121, Sesetan, Denpasar Selatan, Denpasar, Bali 80223",
    "telp": "0361-2108064",
    "email": "ut-denpasar@ecampus.ut.ac.id",
    "web": "denpasar.ut.ac.id"
  },
  {
    "no": 24,
    "nama": "Mataram",
    "alamat": "Jl. Soedjono No. 78 Jempong Baru, Kec. Sekarbela, Mataram, NTB 83361",
    "telp": "0370-671006",
    "email": "ut-mataram@ecampus.ut.ac.id",
    "web": "mataram.ut.ac.id"
  },
  {
    "no": 25,
    "nama": "Kupang",
    "alamat": "Jl. Pulau Indah No. 6, Oesapa Barat, Kupang 85228",
    "telp": "0380-8553825",
    "email": "ut-kupang@ecampus.ut.ac.id",
    "web": "kupang.ut.ac.id"
  },
  {
    "no": 26,
    "nama": "Pontianak",
    "alamat": "Jl. Karya Bakti, Pontianak 78121",
    "telp": "0561-736107, 730291",
    "email": "ut-pontianak@ecampus.ut.ac.id",
    "web": "pontianak.ut.ac.id"
  },
  {
    "no": 27,
    "nama": "Palangka Raya",
    "alamat": "Jl. G. Obos Km. 3,5 No. 177, Palangka Raya, Kalteng 73112",
    "telp": "0536-3221084, 3306440",
    "email": "ut-palangkaraya@ecampus.ut.ac.id",
    "web": "palangkaraya.ut.ac.id"
  },
  {
    "no": 28,
    "nama": "Banjarmasin",
    "alamat": "Jl. Sultan Adam No. 128 RT 26, Banjarmasin 70122",
    "telp": "0511-4315675",
    "email": "banjarmasin@ecampus.ut.ac.id",
    "web": "banjarmasin.ut.ac.id"
  },
  {
    "no": 29,
    "nama": "Samarinda",
    "alamat": "Jl. H.A.M.M. Rifaddin, Samarinda Seberang 75131",
    "telp": "0541-7269108",
    "email": "samarinda@ecampus.ut.ac.id",
    "web": "samarinda.ut.ac.id"
  },
  {
    "no": 30,
    "nama": "Makassar",
    "alamat": "Jl. Monginsidi Baru No. 7, Makassar 90142",
    "telp": "0411-441444",
    "email": "ut-makassar@ecampus.ut.ac.id",
    "web": "makassar.ut.ac.id"
  },
  {
    "no": 31,
    "nama": "Majene",
    "alamat": "Jl. Sultan Hasanuddin No. 2 Majene",
    "telp": "0422-22224, 22229",
    "email": "ut-majene@ecampus.ut.ac.id",
    "web": "majene.ut.ac.id"
  },
  {
    "no": 32,
    "nama": "Palu",
    "alamat": "Jl. Pendidikan, Jalur 2 Untad Tondo, Palu 94118",
    "telp": "0451-452228",
    "email": "ut-palu@ecampus.ut.ac.id",
    "web": "palu.ut.ac.id"
  },
  {
    "no": 33,
    "nama": "Kendari",
    "alamat": "Jl. A.H. Nasution, Kel. Kambu Bundaran Anduonohu, Kendari 93232",
    "telp": "0401-3136035",
    "email": "ut-kendari@ecampus.ut.ac.id",
    "web": "kendari.ut.ac.id"
  },
  {
    "no": 34,
    "nama": "Manado",
    "alamat": "Jl. Sam Ratulangi Raya Manado-Tomohon, Kec. Winangun, Manado, Sulut 95261",
    "telp": "0431-822292",
    "email": "ut-manado@ecampus.ut.ac.id",
    "web": "manado.ut.ac.id"
  },
  {
    "no": 35,
    "nama": "Gorontalo",
    "alamat": "Jl. Achmad Nadjamudin No. 27, Kel. Dulalowo Timur, Kec. Kota Tengah, Kota Gorontalo 96115",
    "telp": "0435-831965",
    "email": "ut-gorontalo@ecampus.ut.ac.id",
    "web": "gorontalo.ut.ac.id"
  },
  {
    "no": 36,
    "nama": "Ambon",
    "alamat": "Jl. Woltermonginsidi Lateri, Ambon 97231",
    "telp": "0911-361303",
    "email": "ut-ambon@ecampus.ut.ac.id",
    "web": "ambon.ut.ac.id"
  },
  {
    "no": 37,
    "nama": "Ternate",
    "alamat": "Jl. Raya Mangga Dua, Kota Ternate, Maluku Utara 97710",
    "telp": "0921-3128352",
    "email": "ut-ternate@ecampus.ut.ac.id",
    "web": "ternate.ut.ac.id"
  },
  {
    "no": 38,
    "nama": "Jayapura",
    "alamat": "Jl. SPG Teruna Bhakti Waena, Kotak pos 204 Abepura Jayapura Papua 99358",
    "telp": "0967-571447",
    "email": "ut-jayapura@ecampus.ut.ac.id",
    "web": "jayapura.ut.ac.id"
  },
  {
    "no": 39,
    "nama": "Sorong",
    "alamat": "Jl. Basuki Rahmat, KM 11,5 Sorong, Papua Barat",
    "telp": "0951-321107",
    "email": "ut-sorong@ecampus.ut.ac.id",
    "web": "sorong.ut.ac.id"
  },
  {
    "no": 40,
    "nama": "Tarakan",
    "alamat": "Jl. Mulawarman No. 234, Tarakan Barat, Tarakan, Kaltara 77111",
    "telp": "0551-3808080",
    "email": "ut-tarakan@ecampus.ut.ac.id",
    "web": "tarakan.ut.ac.id"
  }
],
  biaya: {
  "non_ttm": {
    "nama": "SIPAS Non-TTM",
    "tarif": 1300000,
    "deskripsi": "Layanan paket semester terpopuler dengan tutorial online (Tuton) dan pengiriman bahan ajar cetak gratis ke alamat mahasiswa.",
    "rincian": [
      "Bahan Ajar Cetak (Buku Materi Pokok) lengkap per semester dikirim gratis ke alamat",
      "Layanan Tutorial Online (Tuton) di elearning.ut.ac.id untuk seluruh mata kuliah",
      "Ujian Akhir Semester (UAS) di lokasi ujian yang ditentukan UPBJJ",
      "Layanan administrasi akademik dan bimbingan daring"
    ]
  },
  "semi": {
    "nama": "SIPAS Semi",
    "tarif": 1750000,
    "deskripsi": "Kombinasi layanan tutorial online dengan Tutorial Tatap Muka / Tutorial Webinar (Tuweb) untuk mata kuliah tertentu.",
    "rincian": [
      "Bahan Ajar Cetak lengkap dikirim gratis ke alamat",
      "Tutorial Tatap Muka / Webinar (Tuweb) untuk mata kuliah berpraktik / pilihan",
      "Tutorial Online (Tuton) untuk mata kuliah teori lainnya",
      "UAS dan layanan kemahasiswaan terintegrasi"
    ]
  },
  "penuh": {
    "nama": "SIPAS Penuh",
    "tarif": 2200000,
    "deskripsi": "Layanan komprehensif di mana seluruh mata kuliah didampingi oleh Tutorial Tatap Muka / Webinar terjadwal.",
    "rincian": [
      "Bahan Ajar Cetak lengkap dikirim gratis",
      "Tutorial Tatap Muka / Webinar intensif untuk seluruh mata kuliah",
      "Akses penuh kelas Tuton daring",
      "UAS dan layanan bimbingan karir"
    ]
  },
  "plus": {
    "nama": "SIPAS Plus",
    "tarif": 2400000,
    "deskripsi": "Layanan premium yang mencakup seluruh fasilitas SIPAS Penuh ditambah pelatihan pengembangan diri dan sertifikasi.",
    "rincian": [
      "Seluruh fasilitas SIPAS Penuh",
      "Pelatihan soft-skills dan sertifikasi kompetensi penunjang",
      "Bimbingan karir hukum eksklusif oleh praktisi mitra UPBJJ"
    ]
  },
  "non_sipas": {
    "nama": "Skema Non-SIPAS (Reguler Per SKS)",
    "tarif_per_sks": 40000,
    "deskripsi": "Skema fleksibel di mana mahasiswa membayar per SKS mata kuliah yang diambil (Rp 40.000/SKS) dan membeli bahan ajar cetak mandiri di TBO Karunika.",
    "rincian": [
      "Biaya kuliah Rp 40.000 per SKS",
      "WAJIB membeli Bahan Ajar (BMP) mandiri di Toko Buku Online Karunika (tbo.karunika.co.id)",
      "Layanan Tutorial Online (Tuton) di elearning.ut.ac.id",
      "Mahasiswa bebas menentukan jumlah SKS dan mata kuliah setiap semester (maks 24 SKS)"
    ]
  }
},
  kalender_akademik: [
  {
    "category": "Pendaftaran Mahasiswa Baru",
    "activity": "Jalur Umum (Non RPL/Non Alih Kredit)",
    "ganjil": "4 Mei – 22 Juli 2026",
    "genap": "5 Oktober 2026 – 6 Januari 2027"
  },
  {
    "category": "Pendaftaran Mahasiswa Baru",
    "activity": "Jalur Rekognisi Pembelajaran Lampau (RPL)/Alih Kredit",
    "ganjil": "4 Mei – 24 Juni 2026",
    "genap": "5 Oktober – 8 Desember 2026"
  },
  {
    "category": "Pembayaran Biaya Admisi",
    "activity": "Jalur Umum (Non RPL/Non Alih Kredit)",
    "ganjil": "4 Mei – 24 Juli 2026",
    "genap": "5 Oktober 2026 – 8 Januari 2027"
  },
  {
    "category": "Pembayaran Biaya Admisi",
    "activity": "Jalur Rekognisi Pembelajaran Lampau (RPL)/Alih Kredit",
    "ganjil": "4 Mei – 26 Juni 2026",
    "genap": "5 Oktober – 10 Desember 2026"
  },
  {
    "category": "Unggah Berkas Mahasiswa Baru",
    "activity": "Jalur Umum (Non RPL/Non Alih Kredit)",
    "ganjil": "4 Mei – 27 Juli 2026",
    "genap": "5 Oktober 2026 – 11 Januari 2027"
  },
  {
    "category": "Unggah Berkas Mahasiswa Baru",
    "activity": "Jalur Rekognisi Pembelajaran Lampau (RPL)/Alih Kredit",
    "ganjil": "4 Mei – 29 Juni 2026",
    "genap": "5 Oktober – 14 Desember 2026"
  },
  {
    "category": "Unggah Berkas Mahasiswa Baru",
    "activity": "Proses Asesmen RPL",
    "ganjil": "4 Mei – 6 Juli 2026",
    "genap": "5 Oktober – 21 Desember 2026"
  },
  {
    "category": "Unggah Berkas Mahasiswa Baru",
    "activity": "Waktu Sanggah Hasil Asesmen RPL",
    "ganjil": "11 Mei – 13 Juli 2026",
    "genap": "12 Oktober – 28 Desember 2026"
  },
  {
    "category": "Registrasi Mata Kuliah",
    "activity": "Registrasi Mata Kuliah",
    "ganjil": "1 Juni – 5 Agustus 2026",
    "genap": "5 Oktober 2026 – 20 Januari 2027"
  },
  {
    "category": "Registrasi Mata Kuliah",
    "activity": "Pembayaran Uang Kuliah",
    "ganjil": "1 Juni – 7 Agustus 2026",
    "genap": "5 Oktober 2026 – 22 Januari 2027"
  },
  {
    "category": "Registrasi Mata Kuliah",
    "activity": "Registrasi TTM Atas Permintaan Mahasiswa",
    "ganjil": "1 Juni – 12 Agustus 2026",
    "genap": "5 Oktober 2026 – 29 Januari 2027"
  },
  {
    "category": "Registrasi Mata Kuliah",
    "activity": "Pembayaran TTM Atas Permintaan Mahasiswa",
    "ganjil": "1 Juni – 14 Agustus 2026",
    "genap": "5 Oktober 2026 – 1 Februari 2027"
  },
  {
    "category": "Registrasi Mata Kuliah",
    "activity": "Aktivasi Tutorial Online Melalui MyUT untuk Mahasiswa Baru",
    "ganjil": "1 Juni – 24 Agustus 2026",
    "genap": "5 Oktober 2026 – 11 Februari 2027"
  },
  {
    "category": "Layanan Sukses Belajar (LPKBJJ)",
    "activity": "Orientasi Studi Mahasiswa Baru (OSMB) & Workshop Tugas (WT)",
    "ganjil": "1 Juni – 23 Agustus 2026",
    "genap": "6 Oktober 2026 – 10 Februari 2027"
  },
  {
    "category": "Layanan Sukses Belajar (LPKBJJ)",
    "activity": "Pelatihan Keterampilan Belajar Jarak Jauh (PKBJJ) & Klinik Ujian (KU)",
    "ganjil": "1 Juni – 23 Agustus 2026",
    "genap": "6 Oktober 2026 – 10 Februari 2027"
  },
  {
    "category": "Dies Natalis",
    "activity": "Dies Natalis Universitas Terbuka",
    "ganjil": "4 September 2026",
    "genap": "4 September 2027"
  },
  {
    "category": "Pengumuman Kelulusan",
    "activity": "Pengumuman Kelulusan Tahap I",
    "ganjil": "9 September 2026",
    "genap": "24 Maret 2027"
  },
  {
    "category": "Pengumuman Kelulusan",
    "activity": "Pengumuman Kelulusan Tahap II",
    "ganjil": "10 Oktober 2026",
    "genap": "28 April 2027"
  },
  {
    "category": "Tutorial",
    "activity": "Tutorial Tatap Muka (TTM)",
    "ganjil": "5 September – 22 November 2026",
    "genap": "20 Februari – 23 Mei 2027"
  },
  {
    "category": "Tutorial",
    "activity": "Tutorial Online (Tuton)",
    "ganjil": "14 September – 23 November 2026",
    "genap": "1 Maret – 24 Mei 2027"
  },
  {
    "category": "Tugas Akhir Program Sarjana (TAPS)",
    "activity": "Bimbingan TAPS",
    "ganjil": "14 September – 8 Desember 2026",
    "genap": "1 Maret – 7 Juni 2027"
  },
  {
    "category": "Tugas Akhir Program Sarjana (TAPS)",
    "activity": "Unggah TAPS",
    "ganjil": "28 September – 8 Desember 2026",
    "genap": "15 Maret – 7 Juni 2027"
  },
  {
    "category": "Wisuda",
    "activity": "Wisuda Tahap I",
    "ganjil": "26 – 27 Oktober 2026",
    "genap": "21 – 22 Juni 2027"
  },
  {
    "category": "Wisuda",
    "activity": "Wisuda Tahap II",
    "ganjil": "9 – 10 November 2026",
    "genap": "5 – 6 Juli 2027"
  },
  {
    "category": "Wisuda",
    "activity": "Wisuda Tahap III",
    "ganjil": "23 – 24 November 2026",
    "genap": "19 – 20 Juli 2027"
  },
  {
    "category": "Laporan Praktik & KTPU",
    "activity": "Batas Akhir Mengunggah Laporan Praktik/Praktikum ke Laman https://silayar.ut.ac.id",
    "ganjil": "8 Desember 2026",
    "genap": "7 Juni 2027"
  },
  {
    "category": "Laporan Praktik & KTPU",
    "activity": "Pencetakan KTPU melalui Laman https://myut.ut.ac.id",
    "ganjil": "14 Oktober – 28 November 2026",
    "genap": "29 April – 12 Juni 2027"
  },
  {
    "category": "Ujian Akhir Semester",
    "activity": "Ujian Akhir Semester (Tatap Muka)",
    "ganjil": "28 dan 29 November 2026",
    "genap": "29 dan 30 Mei 2027"
  },
  {
    "category": "Ujian Akhir Semester",
    "activity": "Ujian Akhir Semester (Ujian Online)",
    "ganjil": "28 November – 13 Desember 2026",
    "genap": "29 Mei – 13 Juni 2027"
  },
  {
    "category": "Ujian Akhir Semester",
    "activity": "Ujian Remedial Online",
    "ganjil": "7 – 15 Desember 2026",
    "genap": "31 Mei – 15 Juni 2027"
  },
  {
    "category": "Ujian Akhir Semester",
    "activity": "Pengumuman Nilai Akhir Mata Kuliah",
    "ganjil": "6 Januari 2027",
    "genap": "5 Juli 2027"
  }
],
  biaya_buku: {
  "summary": {
    "total_sks": 145,
    "total_mk": 49,
    "grand_total_biaya_buku": 6197920,
    "grand_total_biaya_buku_str": "Rp 6.197.920",
    "rata_biaya_buku_semester": 774740,
    "rata_biaya_buku_semester_str": "Rp 774.740",
    "grand_total_spp_nonsipas": 5800000,
    "grand_total_spp_nonsipas_str": "Rp 5.800.000",
    "grand_total_biaya_nonsipas": 11997920,
    "grand_total_biaya_nonsipas_str": "Rp 11.997.920",
    "grand_total_sipas_nonttm": 10400000,
    "grand_total_sipas_nonttm_str": "Rp 10.400.000",
    "grand_hemat_sipas": 1597920,
    "grand_hemat_sipas_str": "Rp 1.597.920"
  },
  "per_semester": [
    {
      "semester": 1,
      "jumlah_mk": 7,
      "total_sks": 17,
      "total_biaya_buku": 911600,
      "total_biaya_buku_str": "Rp 911.600",
      "spp_nonsipas": 680000,
      "spp_nonsipas_str": "Rp 680.000",
      "total_nonsipas": 1591600,
      "total_nonsipas_str": "Rp 1.591.600",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": 291600,
      "selisih_hemat_sipas_str": "Rp 291.600",
      "buku_items": [
        {
          "kode_mk": "FSIH4101",
          "nama_mk": "Pengantar Ilmu Hukum",
          "sks": 3,
          "bmp_kode": "FSIH4101",
          "bmp_judul": "PENGANTAR ILMU HUKUM",
          "edisi": 1,
          "harga": 178300,
          "harga_str": "Rp 178.300,00",
          "stok": 148
        },
        {
          "kode_mk": "MKWN4110",
          "nama_mk": "Pancasila",
          "sks": 2,
          "bmp_kode": "MKWN4110",
          "bmp_judul": "PANCASILA",
          "edisi": 1,
          "harga": 96400,
          "harga_str": "Rp 96.400,00",
          "stok": 145
        },
        {
          "kode_mk": "FSIH4102",
          "nama_mk": "Sistem Hukum Indonesia",
          "sks": 3,
          "bmp_kode": "ISIP4131-3",
          "bmp_judul": "SISTEM HUKUM INDONESIA EDISI 3",
          "edisi": 3,
          "harga": 201500,
          "harga_str": "Rp 201.500,00",
          "stok": 79
        },
        {
          "kode_mk": "FSIH4103",
          "nama_mk": "Ilmu Negara",
          "sks": 2,
          "bmp_kode": "HKUM4209-2",
          "bmp_judul": "ILMU NEGARA EDISI 2",
          "edisi": 2,
          "harga": 88000,
          "harga_str": "Rp 88.000,00",
          "stok": 19
        },
        {
          "kode_mk": "MKWN4108",
          "nama_mk": "Bahasa Indonesia",
          "sks": 2,
          "bmp_kode": "MKWN4108",
          "bmp_judul": "BAHASA INDONESIA",
          "edisi": 1,
          "harga": 108700,
          "harga_str": "Rp 108.700,00",
          "stok": 689
        },
        {
          "kode_mk": "MKWN4109",
          "nama_mk": "Pendidikan Kewarganegaraan",
          "sks": 2,
          "bmp_kode": "MKWN4109",
          "bmp_judul": "PENDIDIKAN KEWARGANEGARAAN",
          "edisi": 1,
          "harga": 99400,
          "harga_str": "Rp 99.400,00",
          "stok": 170
        },
        {
          "kode_mk": "MKWN4101-4107",
          "nama_mk": "Pendidikan Agama (Islam/Katolik/Kristen/Buddha/Hindu/Khonghucu)",
          "sks": 3,
          "bmp_kode": "MKWN4101",
          "bmp_judul": "PENDIDIKAN AGAMA ISLAM",
          "edisi": 1,
          "harga": 139300,
          "harga_str": "Rp 139.300,00",
          "stok": 0
        }
      ]
    },
    {
      "semester": 2,
      "jumlah_mk": 5,
      "total_sks": 17,
      "total_biaya_buku": 722800,
      "total_biaya_buku_str": "Rp 722.800",
      "spp_nonsipas": 680000,
      "spp_nonsipas_str": "Rp 680.000",
      "total_nonsipas": 1402800,
      "total_nonsipas_str": "Rp 1.402.800",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": 102800,
      "selisih_hemat_sipas_str": "Rp 102.800",
      "buku_items": [
        {
          "kode_mk": "FSIH4104",
          "nama_mk": "Hukum Perdata",
          "sks": 4,
          "bmp_kode": "HKUM4202-2",
          "bmp_judul": "HUKUM PERDATA EDISI 2",
          "edisi": 2,
          "harga": 95400,
          "harga_str": "Rp 95.400,00",
          "stok": 97
        },
        {
          "kode_mk": "FSIH4105",
          "nama_mk": "Hukum Pidana",
          "sks": 4,
          "bmp_kode": "FSIH4105",
          "bmp_judul": "HUKUM PIDANA",
          "edisi": 1,
          "harga": 206900,
          "harga_str": "Rp 206.900,00",
          "stok": 0
        },
        {
          "kode_mk": "FSIH4106",
          "nama_mk": "Hukum Tata Negara",
          "sks": 3,
          "bmp_kode": "HKUM4201-3",
          "bmp_judul": "HUKUM TATA NEGARA EDISI 3",
          "edisi": 3,
          "harga": 150200,
          "harga_str": "Rp 150.200,00",
          "stok": 88
        },
        {
          "kode_mk": "FSIH4107",
          "nama_mk": "Hukum Administrasi Negara",
          "sks": 3,
          "bmp_kode": "ADPU4332-3",
          "bmp_judul": "HUKUM ADMINISTRASI NEGARA EDISI 3",
          "edisi": 3,
          "harga": 150700,
          "harga_str": "Rp 150.700,00",
          "stok": 17
        },
        {
          "kode_mk": "MKDI4203",
          "nama_mk": "Kewirausahaan di Era Digital",
          "sks": 3,
          "bmp_kode": "MKWI4203-2",
          "bmp_judul": "KEWIRAUSAHAAN DI ERA DIGITAL EDISI 2",
          "edisi": 2,
          "harga": 119600,
          "harga_str": "Rp 119.600,00",
          "stok": 123
        }
      ]
    },
    {
      "semester": 3,
      "jumlah_mk": 7,
      "total_sks": 20,
      "total_biaya_buku": 1012200,
      "total_biaya_buku_str": "Rp 1.012.200",
      "spp_nonsipas": 800000,
      "spp_nonsipas_str": "Rp 800.000",
      "total_nonsipas": 1812200,
      "total_nonsipas_str": "Rp 1.812.200",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": 512200,
      "selisih_hemat_sipas_str": "Rp 512.200",
      "buku_items": [
        {
          "kode_mk": "FSIH4201",
          "nama_mk": "Hukum Internasional",
          "sks": 3,
          "bmp_kode": "HKUM4206-2",
          "bmp_judul": "HUKUM INTERNASIONAL EDISI 2",
          "edisi": 2,
          "harga": 182200,
          "harga_str": "Rp 182.200,00",
          "stok": 105
        },
        {
          "kode_mk": "FSIH4202",
          "nama_mk": "Hukum Acara Perdata",
          "sks": 3,
          "bmp_kode": "HKUM4405-2",
          "bmp_judul": "HUKUM ACARA PERDATA EDISI 2",
          "edisi": 2,
          "harga": 165500,
          "harga_str": "Rp 165.500,00",
          "stok": 65
        },
        {
          "kode_mk": "FSIH4203",
          "nama_mk": "Hukum Acara Pidana",
          "sks": 3,
          "bmp_kode": "HKUM4406-2",
          "bmp_judul": "HUKUM ACARA PIDANA EDISI 2",
          "edisi": 2,
          "harga": 135900,
          "harga_str": "Rp 135.900,00",
          "stok": 80
        },
        {
          "kode_mk": "FSIH4204",
          "nama_mk": "Hukum Islam dan Acara Peradilan Agama",
          "sks": 3,
          "bmp_kode": "HKUM4408-2",
          "bmp_judul": "HUKUM ISLAM DAN ACARA PERADILAN AGAMA EDISI 2",
          "edisi": 2,
          "harga": 152600,
          "harga_str": "Rp 152.600,00",
          "stok": 34
        },
        {
          "kode_mk": "FSIH4205",
          "nama_mk": "Hukum Agraria",
          "sks": 3,
          "bmp_kode": "FSIH4205",
          "bmp_judul": "HUKUM AGRARIA",
          "edisi": 1,
          "harga": 131900,
          "harga_str": "Rp 131.900,00",
          "stok": 20
        },
        {
          "kode_mk": "FSIH4206",
          "nama_mk": "Hukum Adat",
          "sks": 2,
          "bmp_kode": "FSIH4206",
          "bmp_judul": "HUKUM ADAT",
          "edisi": 1,
          "harga": 86500,
          "harga_str": "Rp 86.500,00",
          "stok": 18
        },
        {
          "kode_mk": "MKDI4202",
          "nama_mk": "Belajar di Era Digital",
          "sks": 3,
          "bmp_kode": "MKWI4202-2",
          "bmp_judul": "BELAJAR DI ERA DIGITAL EDISI 2",
          "edisi": 2,
          "harga": 157600,
          "harga_str": "Rp 157.600,00",
          "stok": 500
        }
      ]
    },
    {
      "semester": 4,
      "jumlah_mk": 7,
      "total_sks": 21,
      "total_biaya_buku": 789720,
      "total_biaya_buku_str": "Rp 789.720",
      "spp_nonsipas": 840000,
      "spp_nonsipas_str": "Rp 840.000",
      "total_nonsipas": 1629720,
      "total_nonsipas_str": "Rp 1.629.720",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": 329720,
      "selisih_hemat_sipas_str": "Rp 329.720",
      "buku_items": [
        {
          "kode_mk": "FSIH4207",
          "nama_mk": "Ilmu Perundang-Undangan",
          "sks": 3,
          "bmp_kode": "HKUM4403-3",
          "bmp_judul": "ILMU PERUNDANG-UNDANGAN EDISI 3",
          "edisi": 3,
          "harga": 110220,
          "harga_str": "Rp 110.220,00",
          "stok": 32
        },
        {
          "kode_mk": "FSIH4208",
          "nama_mk": "Hukum Perjanjian",
          "sks": 3,
          "bmp_kode": "HKUM4402-2",
          "bmp_judul": "HUKUM PERJANJIAN EDISI 2",
          "edisi": 2,
          "harga": 149200,
          "harga_str": "Rp 149.200,00",
          "stok": 130
        },
        {
          "kode_mk": "MKDI4201",
          "nama_mk": "Bahasa Inggris",
          "sks": 3,
          "bmp_kode": "MKWI4201-2",
          "bmp_judul": "BAHASA INGGRIS EDISI 2",
          "edisi": 2,
          "harga": 130900,
          "harga_str": "Rp 130.900,00",
          "stok": 231
        },
        {
          "kode_mk": "FSIH4209",
          "nama_mk": "Praktik Peradilan Perdata",
          "sks": 3,
          "bmp_kode": "FSIH4209",
          "bmp_judul": "PANDUAN PRAKTIK PERADILAN PERDATA",
          "edisi": 1,
          "harga": 44600,
          "harga_str": "Rp 44.600,00",
          "stok": 207
        },
        {
          "kode_mk": "FSIH4210",
          "nama_mk": "Praktik Peradilan Pidana",
          "sks": 3,
          "bmp_kode": "FSIH4210",
          "bmp_judul": "PANDUAN PRAKTIK PERADILAN PIDANA",
          "edisi": 1,
          "harga": 72700,
          "harga_str": "Rp 72.700,00",
          "stok": 160
        },
        {
          "kode_mk": "FSIH4211",
          "nama_mk": "Hukum dan Masyarakat",
          "sks": 3,
          "bmp_kode": "FSIH4211",
          "bmp_judul": "HUKUM DAN MASYARAKAT",
          "edisi": 1,
          "harga": 150200,
          "harga_str": "Rp 150.200,00",
          "stok": 59
        },
        {
          "kode_mk": "FSIH4212",
          "nama_mk": "Hukum Dagang dan Kepailitan",
          "sks": 3,
          "bmp_kode": "HKUM4207-2",
          "bmp_judul": "HUKUM DAGANG DAN KEPAILITAN EDISI 2",
          "edisi": 2,
          "harga": 131900,
          "harga_str": "Rp 131.900,00",
          "stok": 97
        }
      ]
    },
    {
      "semester": 5,
      "jumlah_mk": 8,
      "total_sks": 20,
      "total_biaya_buku": 880200,
      "total_biaya_buku_str": "Rp 880.200",
      "spp_nonsipas": 800000,
      "spp_nonsipas_str": "Rp 800.000",
      "total_nonsipas": 1680200,
      "total_nonsipas_str": "Rp 1.680.200",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": 380200,
      "selisih_hemat_sipas_str": "Rp 380.200",
      "buku_items": [
        {
          "kode_mk": "FSIH4301",
          "nama_mk": "Hukum Perdata Internasional",
          "sks": 2,
          "bmp_kode": "HKUM4304-3",
          "bmp_judul": "HUKUM PERDATA INTERNATIONAL EDISI 3",
          "edisi": 3,
          "harga": 131400,
          "harga_str": "Rp 131.400,00",
          "stok": 87
        },
        {
          "kode_mk": "FSIH4302",
          "nama_mk": "Tindak Pidana Korupsi",
          "sks": 2,
          "bmp_kode": "HKUM4310-2",
          "bmp_judul": "TINDAK PIDANA KORUPSI EDISI 2",
          "edisi": 2,
          "harga": 120600,
          "harga_str": "Rp 120.600,00",
          "stok": 102
        },
        {
          "kode_mk": "FSIH4303",
          "nama_mk": "Hukum Pidana Ekonomi",
          "sks": 3,
          "bmp_kode": "FSIH4303",
          "bmp_judul": "HUKUM PIDANA EKONOMI",
          "edisi": 1,
          "harga": 130900,
          "harga_str": "Rp 130.900,00",
          "stok": 129
        },
        {
          "kode_mk": "EMBS4320",
          "nama_mk": "Hukum Bisnis",
          "sks": 2,
          "bmp_kode": "EKMA4316-2",
          "bmp_judul": "HUKUM BISNIS EDISI 2",
          "edisi": 2,
          "harga": 57300,
          "harga_str": "Rp 57.300,00",
          "stok": 0
        },
        {
          "kode_mk": "PILIHAN-1",
          "nama_mk": "Mata Kuliah Pilihan Semester 5 (FSIH4304 / FSIH4305)",
          "sks": 3,
          "bmp_kode": "HKUM4303-2",
          "bmp_judul": "HUKUM PERUSAHAAN EDISI 2",
          "edisi": 2,
          "harga": 118100,
          "harga_str": "Rp 118.100,00",
          "stok": 10
        },
        {
          "kode_mk": "SPKN4301",
          "nama_mk": "Kriminologi dan Kenakalan Remaja di Era Globalisasi",
          "sks": 3,
          "bmp_kode": "SPKN4301",
          "bmp_judul": "Kriminologi dan Kenakalan Remaja di Era Globalisasi",
          "edisi": 1,
          "harga": 114700,
          "harga_str": "Rp 114.700,00",
          "stok": 965
        },
        {
          "kode_mk": "FSIH4306",
          "nama_mk": "Hukum Pajak dan Acara Perpajakan",
          "sks": 3,
          "bmp_kode": "FSIH4306",
          "bmp_judul": "HUKUM PAJAK DAN ACARA PERPAJAKAN",
          "edisi": 1,
          "harga": 107300,
          "harga_str": "Rp 107.300,00",
          "stok": 128
        },
        {
          "kode_mk": "FSIH4310",
          "nama_mk": "Pengujian Peraturan Perundang-Undangan",
          "sks": 2,
          "bmp_kode": "HKUM4404-2",
          "bmp_judul": "TEORI PERUNDANG-UNDANGAN EDISI 2",
          "edisi": 2,
          "harga": 99900,
          "harga_str": "Rp 99.900,00",
          "stok": 84
        }
      ]
    },
    {
      "semester": 6,
      "jumlah_mk": 5,
      "total_sks": 20,
      "total_biaya_buku": 679400,
      "total_biaya_buku_str": "Rp 679.400",
      "spp_nonsipas": 800000,
      "spp_nonsipas_str": "Rp 800.000",
      "total_nonsipas": 1479400,
      "total_nonsipas_str": "Rp 1.479.400",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": 179400,
      "selisih_hemat_sipas_str": "Rp 179.400",
      "buku_items": [
        {
          "kode_mk": "FSIK4206",
          "nama_mk": "Bahasa Inggris Komunikasi",
          "sks": 3,
          "bmp_kode": "SKOM4209-3",
          "bmp_judul": "BAHASA INGGRIS II  EDISI 3",
          "edisi": 3,
          "harga": 107800,
          "harga_str": "Rp 107.800,00",
          "stok": 60
        },
        {
          "kode_mk": "FSIH4307",
          "nama_mk": "Hukum Pidana Internasional",
          "sks": 3,
          "bmp_kode": "FSIH4307",
          "bmp_judul": "HUKUM PIDANA INTERNASIONAL",
          "edisi": 1,
          "harga": 152600,
          "harga_str": "Rp 152.600,00",
          "stok": 39
        },
        {
          "kode_mk": "FSIH4308",
          "nama_mk": "Tindak Pidana Khusus",
          "sks": 2,
          "bmp_kode": "HKUM4309-2",
          "bmp_judul": "TINDAK PIDANA KHUSUS EDISI 2",
          "edisi": 2,
          "harga": 159100,
          "harga_str": "Rp 159.100,00",
          "stok": 145
        },
        {
          "kode_mk": "FSIH4309",
          "nama_mk": "Metode Penelitian Hukum",
          "sks": 3,
          "bmp_kode": "HKUM4306-2",
          "bmp_judul": "METODE PENELITIAN HUKUM EDISI 2",
          "edisi": 2,
          "harga": 133900,
          "harga_str": "Rp 133.900,00",
          "stok": 13
        },
        {
          "kode_mk": "PILIHAN-2",
          "nama_mk": "Mata Kuliah Pilihan Semester 6 (Pilih 9 SKS)",
          "sks": 9,
          "bmp_kode": "HKUM4308-2",
          "bmp_judul": "HUKUM PERBANKAN & TINDAK PIDANA PENCUCIAN UANG EDISI 02",
          "edisi": 2,
          "harga": 126000,
          "harga_str": "Rp 126.000,00",
          "stok": 0
        }
      ]
    },
    {
      "semester": 7,
      "jumlah_mk": 5,
      "total_sks": 16,
      "total_biaya_buku": 477200,
      "total_biaya_buku_str": "Rp 477.200",
      "spp_nonsipas": 640000,
      "spp_nonsipas_str": "Rp 640.000",
      "total_nonsipas": 1117200,
      "total_nonsipas_str": "Rp 1.117.200",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": -182800,
      "selisih_hemat_sipas_str": "Rp -182.800",
      "buku_items": [
        {
          "kode_mk": "FSIH4401",
          "nama_mk": "Hukum dan Hak Asasi Manusia",
          "sks": 3,
          "bmp_kode": "HKUM4208-2",
          "bmp_judul": "HUKUM DAN HAK ASASI MANUSIA EDISI 2",
          "edisi": 2,
          "harga": 129500,
          "harga_str": "Rp 129.500,00",
          "stok": 0
        },
        {
          "kode_mk": "FSIH4402",
          "nama_mk": "Interpretasi dan Penalaran Hukum",
          "sks": 2,
          "bmp_kode": "HKUM4401-2",
          "bmp_judul": "INTERPRETASI DAN PENALARAN HUKUM EDISI 2",
          "edisi": 2,
          "harga": 84600,
          "harga_str": "Rp 84.600,00",
          "stok": 63
        },
        {
          "kode_mk": "FSIH4403",
          "nama_mk": "Arbitrase, Mediasi, dan Negosiasi",
          "sks": 3,
          "bmp_kode": "HKUM4409-2",
          "bmp_judul": "ARBITRASE, MEDIASI DAN NEGOSIASI EDISI 2",
          "edisi": 2,
          "harga": 90500,
          "harga_str": "Rp 90.500,00",
          "stok": 56
        },
        {
          "kode_mk": "FSIH4404",
          "nama_mk": "Hukum Lingkungan",
          "sks": 2,
          "bmp_kode": "HKUM4210-2",
          "bmp_judul": "HUKUM LINGKUNGAN EDISI 2",
          "edisi": 2,
          "harga": 94900,
          "harga_str": "Rp 94.900,00",
          "stok": 20
        },
        {
          "kode_mk": "TAPS (FSIH4450 / FSIH4460)",
          "nama_mk": "Tugas Akhir Program Sarjana (TAPS) / Ujian Komprehensif Tertulis (UKT) atau Artikel Ilmiah",
          "sks": 6,
          "bmp_kode": "MKKI4450",
          "bmp_judul": "Panduan Tugas Akhir Program Sarjana (TAPS)",
          "edisi": 1,
          "harga": 77700,
          "harga_str": "Rp 77.700,00",
          "stok": 1443
        }
      ]
    },
    {
      "semester": 8,
      "jumlah_mk": 5,
      "total_sks": 14,
      "total_biaya_buku": 724800,
      "total_biaya_buku_str": "Rp 724.800",
      "spp_nonsipas": 560000,
      "spp_nonsipas_str": "Rp 560.000",
      "total_nonsipas": 1284800,
      "total_nonsipas_str": "Rp 1.284.800",
      "sipas_nonttm": 1300000,
      "sipas_nonttm_str": "Rp 1.300.000",
      "selisih_hemat_sipas": -15200,
      "selisih_hemat_sipas_str": "Rp -15.200",
      "buku_items": [
        {
          "kode_mk": "FSIH4405",
          "nama_mk": "Filsafat Hukum dan Etika Profesi",
          "sks": 3,
          "bmp_kode": "HKUM4103-2",
          "bmp_judul": "FILSAFAT HUKUM DAN ETIKA PROFESI EDISI 2",
          "edisi": 2,
          "harga": 126000,
          "harga_str": "Rp 126.000,00",
          "stok": 1103
        },
        {
          "kode_mk": "FSIH4406",
          "nama_mk": "Hukum Telematika",
          "sks": 3,
          "bmp_kode": "HKUM4301-3",
          "bmp_judul": "HUKUM TELEMATIKA EDISI 3",
          "edisi": 3,
          "harga": 134900,
          "harga_str": "Rp 134.900,00",
          "stok": 177
        },
        {
          "kode_mk": "FSIH4407",
          "nama_mk": "Hak Kekayaan Intelektual",
          "sks": 3,
          "bmp_kode": "HKUM4302-2",
          "bmp_judul": "HUKUM KEKAYAAN INTELEKTUAL EDISI 2",
          "edisi": 2,
          "harga": 210400,
          "harga_str": "Rp 210.400,00",
          "stok": 152
        },
        {
          "kode_mk": "FSIH4408",
          "nama_mk": "Hukum Ketenagakerjaan",
          "sks": 2,
          "bmp_kode": "ADBI4336-3",
          "bmp_judul": "HUKUM KETENAGAKERJAAN EDISI 3",
          "edisi": 3,
          "harga": 126000,
          "harga_str": "Rp 126.000,00",
          "stok": 200
        },
        {
          "kode_mk": "FSIH4409",
          "nama_mk": "Hukum Perlindungan Konsumen",
          "sks": 3,
          "bmp_kode": "HKUM4312-2",
          "bmp_judul": "HUKUM PERLINDUNGAN KONSUMEN EDISI 2",
          "edisi": 2,
          "harga": 127500,
          "harga_str": "Rp 127.500,00",
          "stok": 541
        }
      ]
    }
  ]
},
  faq: [
  {
    "q": "Apakah mahasiswa baru S1 Ilmu Hukum UT wajib membeli buku sendiri?",
    "a": "Tergantung skema pendaftaran Anda. Jika Anda mengambil skema SIPAS (Non-TTM, Semi, Penuh, atau Plus), Anda TIDAK PERLU MEMBELI BUKU karena modul Buku Materi Pokok (BMP) cetak sudah termasuk dalam biaya UKT semesteran dan otomatis dikirim ke alamat rumah Anda gratis. Namun, jika Anda mengambil skema Non-SIPAS, Anda WAJIB MEMBELI BUKU SENDIRI di Toko Buku Online Karunika (tbo.karunika.co.id)."
  },
  {
    "q": "Apakah ada perkuliahan tatap muka setiap hari seperti kampus biasa?",
    "a": "Tidak ada. Sistem Universitas Terbuka adalah Pendidikan Terbuka dan Jarak Jauh (PTTJJ). Mahasiswa belajar secara mandiri menggunakan Buku Materi Pokok (BMP) cetak dan Ruang Baca Virtual, serta mengikuti Tutorial Online (Tuton) asinkronus selama 8 minggu di laman elearning.ut.ac.id."
  },
  {
    "q": "Berapa besar kontribusi nilai Tutorial Online (Tuton) terhadap nilai akhir mata kuliah?",
    "a": "Nilai Tuton berkontribusi sebesar 30% terhadap Nilai Akhir Mata Kuliah, DENGAN SYARAT skor nilai Ujian Akhir Semester (UAS) Anda minimal 30 (dari skala 100). Jika nilai UAS di bawah 30, maka nilai Tuton tidak diperhitungkan dan nilai akhir murni 100% dari skor UAS."
  },
  {
    "q": "Apa saja syarat agar nilai Tuton saya maksimal?",
    "a": "Anda wajib aktif membaca inisiasi, memberikan tanggapan diskusi di 8 sesi mingguan, serta WAJIB mengunggah 3 Tugas Tutorial Wajib pada Sesi 3, Sesi 5, dan Sesi 7 tepat waktu."
  },
  {
    "q": "Apakah di S1 Ilmu Hukum UT ada skripsi?",
    "a": "Tidak ada skripsi konvensional. Sebagai gantinya, mahasiswa wajib menempuh Tugas Akhir Program (TAP - HKUM4500) berupa ujian penalaran studi kasus komprehensif dan menyelesaikan penulisan 1 artikel publikasi Karya Ilmiah (Karil - HKUM4560)."
  },
  {
    "q": "Apa yang dimaksud dengan Program Peluru pada S1 Ilmu Hukum?",
    "a": "Program Peluru adalah ketentuan wajib lulus berurutan pada mata kuliah FSIH4310 (Pengujian UU di Semester 5) dan FSIH4309 (Metode Penelitian Hukum di Semester 6). Keduanya tidak boleh dilewati karena menjadi syarat mutlak untuk dapat meregistrasikan Tugas Akhir Program (TAP)."
  },
  {
    "q": "Bagaimana cara pelaksanaan mata kuliah berpraktik hukum seperti Praktik Peradilan Perdata dan Pidana?",
    "a": "Berdasarkan Tabel 5.48 Pedoman Penyelenggaraan UT, Praktik Peradilan Perdata (FSIH4209) dan Pidana (FSIH4210) dilaksanakan melalui praktik tatap muka di lokasi yang ditunjuk UT Daerah dengan unggah tugas di silayar.ut.ac.id ATAU praktik online di elearning.ut.ac.id. Nilai akhir diambil 100% dari nilai praktik."
  },
  {
    "q": "Berapa batas masa studi di UT? Apakah ada sistem Drop Out (DO)?",
    "a": "Universitas Terbuka tidak menerapkan sistem Drop Out (DO) berdasarkan batas waktu semester. Mahasiswa dapat menempuh perkuliahan sesuai ritme hidup masing-masing tanpa khawatir dikeluarkan karena batasan tahun studi."
  }
]
};

if (typeof window !== "undefined") {
  window.WIKI_DATA = WIKI_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = WIKI_DATA;
}
