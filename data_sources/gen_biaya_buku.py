import json

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data_sources/kurikulum_bmp_mapped_verified.json', 'r', encoding='utf-8') as f:
    courses = json.load(f)

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data_sources/tbo_verified_all_catalog.json', 'r', encoding='utf-8') as f:
    books = {b['kode']: b for b in json.load(f)}

semesters_summary = []
for sem in range(1, 9):
    sem_courses = [c for c in courses if c['semester'] == sem]
    total_sks = sum(c['sks'] for c in sem_courses)
    book_items = []
    sem_total_price = 0
    for c in sem_courses:
        bmp = c['bmp_kode']
        price = 0
        stok = 0
        edisi = 1
        if bmp in books:
            price = books[bmp]['harga_mhs']
            stok = books[bmp]['stok']
            edisi = books[bmp]['edisi']
        else:
            base = bmp.split('-')[0]
            for b_code, b_data in books.items():
                if b_code.startswith(base):
                    price = b_data['harga_mhs']
                    stok = b_data['stok']
                    edisi = b_data['edisi']
                    break
        sem_total_price += price
        book_items.append({
            'kode_mk': c['kode_mk'],
            'nama_mk': c['nama_mk'],
            'sks': c['sks'],
            'bmp_kode': bmp,
            'bmp_judul': c['bmp_judul'],
            'edisi': edisi,
            'harga': price,
            'harga_str': f"Rp {price:,.2f}".replace(',', 'X').replace('.', ',').replace('X', '.'),
            'stok': stok
        })
    spp_nonsipas = total_sks * 40000
    total_nonsipas = spp_nonsipas + sem_total_price
    sipas_nonttm = 1300000
    selisih = total_nonsipas - sipas_nonttm
    
    semesters_summary.append({
        'semester': sem,
        'jumlah_mk': len(sem_courses),
        'total_sks': total_sks,
        'total_biaya_buku': sem_total_price,
        'total_biaya_buku_str': f"Rp {sem_total_price:,.0f}".replace(',', '.'),
        'spp_nonsipas': spp_nonsipas,
        'spp_nonsipas_str': f"Rp {spp_nonsipas:,.0f}".replace(',', '.'),
        'total_nonsipas': total_nonsipas,
        'total_nonsipas_str': f"Rp {total_nonsipas:,.0f}".replace(',', '.'),
        'sipas_nonttm': sipas_nonttm,
        'sipas_nonttm_str': "Rp 1.300.000",
        'selisih_hemat_sipas': selisih,
        'selisih_hemat_sipas_str': f"Rp {selisih:,.0f}".replace(',', '.'),
        'buku_items': book_items
    })

grand_books = sum(s['total_biaya_buku'] for s in semesters_summary)
grand_spp = sum(s['spp_nonsipas'] for s in semesters_summary)
grand_nonsipas = grand_books + grand_spp
grand_sipas = 8 * 1300000
grand_selisih = grand_nonsipas - grand_sipas

output_data = {
    'summary': {
        'total_sks': 145,
        'total_mk': 49,
        'grand_total_biaya_buku': grand_books,
        'grand_total_biaya_buku_str': f"Rp {grand_books:,.0f}".replace(',', '.'),
        'rata_biaya_buku_semester': round(grand_books / 8),
        'rata_biaya_buku_semester_str': f"Rp {round(grand_books / 8):,.0f}".replace(',', '.'),
        'grand_total_spp_nonsipas': grand_spp,
        'grand_total_spp_nonsipas_str': f"Rp {grand_spp:,.0f}".replace(',', '.'),
        'grand_total_biaya_nonsipas': grand_nonsipas,
        'grand_total_biaya_nonsipas_str': f"Rp {grand_nonsipas:,.0f}".replace(',', '.'),
        'grand_total_sipas_nonttm': grand_sipas,
        'grand_total_sipas_nonttm_str': "Rp 10.400.000",
        'grand_hemat_sipas': grand_selisih,
        'grand_hemat_sipas_str': f"Rp {grand_selisih:,.0f}".replace(',', '.')
    },
    'per_semester': semesters_summary
}

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data_sources/biaya_buku_per_semester.json', 'w', encoding='utf-8') as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

print("Saved biaya_buku_per_semester.json successfully!")
print(f"Grand Total Buku: Rp {grand_books:,}")
print(f"Grand Total Non-SIPAS: Rp {grand_nonsipas:,}")
print(f"Grand Total SIPAS: Rp {grand_sipas:,}")
print(f"SIPAS lebih hemat: Rp {grand_selisih:,}")
