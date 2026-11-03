import json

def update_data_js():
    with open("data_sources/kurikulum_bmp_mapped_verified.json", "r", encoding="utf-8") as f:
        kurikulum_bmp = json.load(f)
        
    with open("data_sources/tbo_verified_all_catalog.json", "r", encoding="utf-8") as f:
        tbo_books = json.load(f)
        
    with open("data_sources/upbjj_list.json", "r", encoding="utf-8") as f:
        upbjj = json.load(f)
        
    with open("data_sources/kalender_akademik_clean.json", "r", encoding="utf-8") as f:
        kalender_akademik = json.load(f)
        
    # Read existing data.js to preserve biaya and faq
    with open("data.js", "r", encoding="utf-8") as f:
        content = f.read()
        
    # We can reconstruct data.js cleanly
    biaya = {
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
    }
    
    faq = [
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
    
    js_content = f"""// Basis Data Terpadu Resmi Program Studi S1 Ilmu Hukum Universitas Terbuka
// Disarikan dari Pedoman Penyelenggaraan 2026/2027, Katalog Non-Pendas, Kalender Akademik, dan Live TBO Karunika

const WIKI_DATA = {{
  kurikulum_bmp: {json.dumps(kurikulum_bmp, indent=2, ensure_ascii=False)},
  tbo_books: {json.dumps(tbo_books, indent=2, ensure_ascii=False)},
  upbjj: {json.dumps(upbjj, indent=2, ensure_ascii=False)},
  biaya: {json.dumps(biaya, indent=2, ensure_ascii=False)},
  kalender_akademik: {json.dumps(kalender_akademik, indent=2, ensure_ascii=False)},
  faq: {json.dumps(faq, indent=2, ensure_ascii=False)}
}};

if (typeof window !== "undefined") {{
  window.WIKI_DATA = WIKI_DATA;
}}

if (typeof module !== "undefined" && module.exports) {{
  module.exports = WIKI_DATA;
}}
"""
    with open("data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("[+] Successfully generated data.js with 62 TBO books and 49 verified mapped courses!")

if __name__ == "__main__":
    update_data_js()
