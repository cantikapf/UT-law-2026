import json

kalender_2026_2027 = [
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
]

# Read data.js and replace kalender_akademik
with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
pattern = r'kalender_akademik:\s*\[[\s\S]*?\n\s*\],'
replacement = f'kalender_akademik: {json.dumps(kalender_2026_2027, indent=2, ensure_ascii=False)},'

new_text = re.sub(pattern, replacement, text)

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data.js', 'w', encoding='utf-8') as f:
    f.write(new_text)

print(f"Updated kalender_akademik with {len(kalender_2026_2027)} official 2026/2027 items!")
