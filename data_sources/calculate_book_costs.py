import json

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data_sources/kurikulum_bmp_mapped_verified.json', 'r', encoding='utf-8') as f:
    courses = json.load(f)

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data_sources/tbo_verified_all_catalog.json', 'r', encoding='utf-8') as f:
    books = {b['kode']: b for b in json.load(f)}

print(f"Total courses: {len(courses)}")

semester_costs = {}
for c in courses:
    sem = c['semester']
    bmp_kode = c['bmp_kode']
    # Check price
    price = 0
    if bmp_kode in books:
        price = books[bmp_kode]['harga_mhs']
    else:
        # Check base code without suffix
        base = bmp_kode.split('-')[0]
        for b_code, b_data in books.items():
            if b_code.startswith(base):
                price = b_data['harga_mhs']
                break
    
    if sem not in semester_costs:
        semester_costs[sem] = {'courses': [], 'total_sks': 0, 'total_price': 0}
    semester_costs[sem]['courses'].append({
        'kode_mk': c['kode_mk'],
        'nama_mk': c['nama_mk'],
        'sks': c['sks'],
        'bmp_kode': bmp_kode,
        'price': price
    })
    semester_costs[sem]['total_sks'] += c['sks']
    semester_costs[sem]['total_price'] += price

grand_total_books = 0
grand_total_sks = 0
print("\n=== RINCIAN BIAYA BUKU PER SEMESTER (S1 ILMU HUKUM - NON SIPAS) ===")
for sem in sorted(semester_costs.keys()):
    data = semester_costs[sem]
    grand_total_books += data['total_price']
    grand_total_sks += data['total_sks']
    print(f"Semester {sem}: {len(data['courses'])} MK ({data['total_sks']} SKS) -> Biaya Buku: Rp {data['total_price']:,} (SPP SKS: Rp {data['total_sks']*40000:,})")
    for crs in data['courses']:
        print(f"   - {crs['kode_mk']} | {crs['nama_mk']} ({crs['sks']} SKS) -> BMP {crs['bmp_kode']}: Rp {crs['price']:,}")

print(f"\nGRAND TOTAL BUKU (8 Semester, 49 MK, {grand_total_sks} SKS): Rp {grand_total_books:,}")
print(f"GRAND TOTAL SPP NON-SIPAS ({grand_total_sks} SKS x Rp 40.000): Rp {grand_total_sks * 40000:,}")
print(f"TOTAL BIAYA NON-SIPAS (SPP + BUKU): Rp {(grand_total_sks * 40000) + grand_total_books:,}")
print(f"Bandingkan dengan SIPAS Non-TTM (8 x Rp 1.300.000): Rp {8 * 1300000:,} (SUDAH TERMASUK BUKU!)")
