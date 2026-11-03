import json

def update_data():
    with open("data_sources/tbo_all_checked_books.json", "r", encoding="utf-8") as f:
        tbo_checked = json.load(f)
        
    with open("data_sources/kurikulum_bmp_mapped.json", "r", encoding="utf-8") as f:
        kurikulum = json.load(f)
        
    # Helper to get book details from checked results
    def get_book(code):
        items = tbo_checked.get(code, [])
        return items[0] if items else None
        
    # Build complete TBO catalog of all 61 unique books
    all_books_dict = {}
    for code, items in tbo_checked.items():
        for it in items:
            k = it["kode"]
            if k not in all_books_dict:
                # parse edisi
                edisi = 1
                if "-3" in k or "EDISI 3" in it["judul"].upper() or "EDISI.3" in it["judul"].upper():
                    edisi = 3
                elif "-2" in k or "EDISI 2" in it["judul"].upper() or "EDISI.2" in it["judul"].upper():
                    edisi = 2
                    
                # clean price
                raw_price = it["harga_mahasiswa"].replace("Rp.", "").replace("Rp", "").replace(",", "").strip()
                try:
                    price_val = int(float(raw_price))
                except:
                    price_val = 0
                    
                all_books_dict[k] = {
                    "kode": k,
                    "judul": it["judul"],
                    "edisi": edisi,
                    "harga_mhs": price_val,
                    "harga_mhs_str": it["harga_mahasiswa"],
                    "harga_umum_str": it.get("harga_umum", ""),
                    "stok": it["stok"]
                }
                
    # Sort all books by code
    sorted_all_books = sorted(all_books_dict.values(), key=lambda x: x["kode"])
    print(f"Total verified books in TBO catalog: {len(sorted_all_books)}")
    
    # Now map each of the 49 courses accurately
    mapped_courses = []
    for c in kurikulum:
        mk = c["kode_mk"]
        sem = c["semester"]
        sks = c["sks"]
        nama = c["nama_mk"]
        waktu = c["waktu_ujian"]
        praktik = c["praktik"]
        catatan = c["catatan"]
        
        # Determine exact primary BMP and companion practical guide
        bmp_code = ""
        bmp_title = ""
        bmp_price = ""
        bmp_stok = 0
        companion_guide = ""
        
        if mk == "FSIH4101":
            b = get_book("FSIH4101")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "MKWN4110":
            b = get_book("MKWN4110")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4102":
            b = get_book("ISIP4131")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4103":
            b = get_book("HKUM4209")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "MKWN4108":
            b = get_book("MKWN4108")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "MKWN4109":
            b = get_book("MKWN4109")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif "MKWN4101" in mk:
            b = get_book("MKWN4101")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4104":
            b = get_book("HKUM4202")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4105":
            b = get_book("FSIH4105") or get_book("HKUM4203")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4106":
            b = get_book("HKUM4201")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4107":
            b = get_book("ADPU4332")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "MKDI4203":
            b = get_book("MKWI4203")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4201":
            b = get_book("HKUM4206")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4202":
            b = get_book("HKUM4405")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4203":
            b = get_book("HKUM4406")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4204":
            b = get_book("HKUM4408")
            bg = get_book("FSIH4001")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            companion_guide = f"{bg['kode']}: {bg['judul']} ({bg['harga_mahasiswa']})" if bg else ""
        elif mk == "FSIH4205":
            b = get_book("FSIH4205")
            bg = get_book("FSIH4002")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            companion_guide = f"{bg['kode']}: {bg['judul']} ({bg['harga_mahasiswa']})" if bg else ""
        elif mk == "FSIH4206":
            b = get_book("FSIH4206") or get_book("HKUM4204")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "MKDI4202":
            b = get_book("MKWI4202")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4207":
            b = get_book("HKUM4403")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4208":
            b = get_book("HKUM4402")
            bg = get_book("FSIH4003")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            companion_guide = f"{bg['kode']}: {bg['judul']} ({bg['harga_mahasiswa']})" if bg else ""
        elif mk == "MKDI4201":
            b = get_book("MKWI4201")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4209":
            b = get_book("FSIH4209")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4210":
            b = get_book("FSIH4210")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4211":
            b = get_book("FSIH4211")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4212":
            b = get_book("HKUM4207")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4301":
            b = get_book("HKUM4304")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4302":
            b = get_book("HKUM4310")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4303":
            b = get_book("FSIH4303") or get_book("HKUM4311")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "EMBS4320":
            b = get_book("EKMA4316")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif "PILIHAN-1" in mk:
            b = get_book("HKUM4303")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "SPKN4301":
            b = get_book("SPKN4301")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4306":
            b = get_book("FSIH4306")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4310":
            b = get_book("HKUM4404")
            bg = get_book("FSIH4004")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            companion_guide = f"{bg['kode']}: {bg['judul']} ({bg['harga_mahasiswa']})" if bg else ""
        elif mk == "FSIK4206":
            b = get_book("SKOM4209")
            bg = get_book("FSIK4002")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            companion_guide = f"{bg['kode']}: {bg['judul']} ({bg['harga_mahasiswa']})" if bg else ""
        elif mk == "FSIH4307":
            b = get_book("FSIH4307")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4308":
            b = get_book("HKUM4309")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4309":
            b = get_book("HKUM4306")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif "PILIHAN-2" in mk:
            b = get_book("HKUM4308") or get_book("HKUM4410")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4401":
            b = get_book("HKUM4208")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4402":
            b = get_book("HKUM4401")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4403":
            b = get_book("HKUM4409")
            bg = get_book("FSIH4005")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            companion_guide = f"{bg['kode']}: {bg['judul']} ({bg['harga_mahasiswa']})" if bg else ""
        elif mk == "FSIH4404":
            b = get_book("HKUM4210")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif "TAPS" in mk or "FSIH4450" in mk or "FSIH4460" in mk:
            b = get_book("MKKI4450")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4405":
            b = get_book("HKUM4103")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4406":
            b = get_book("HKUM4301")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4407":
            b = get_book("HKUM4302")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4408":
            b = get_book("ADBI4336")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
        elif mk == "FSIH4409":
            b = get_book("HKUM4312")
            bmp_code = b["kode"]; bmp_title = b["judul"]; bmp_price = b["harga_mahasiswa"]; bmp_stok = b["stok"]
            
        mapped_courses.append({
            "semester": sem,
            "kode_mk": mk,
            "nama_mk": nama,
            "sks": sks,
            "waktu_ujian": waktu,
            "praktik": praktik,
            "catatan": catatan,
            "bmp_kode": bmp_code,
            "bmp_judul": bmp_title,
            "bmp_harga": bmp_price,
            "bmp_stok": bmp_stok,
            "companion_guide": companion_guide,
            "sipas_info": "Termasuk dalam paket UKT SIPAS (Modul fisik dikirim gratis ke alamat)" if "FSIH4209" not in mk and "FSIH4210" not in mk else "Panduan Praktik Cetak/Digital Resmi UT",
            "nonsipas_info": f"Wajib Beli Mandiri di TBO Karunika: {bmp_code} ({bmp_price})"
        })

    with open("data_sources/kurikulum_bmp_mapped_verified.json", "w", encoding="utf-8") as f:
        json.dump(mapped_courses, f, indent=2, ensure_ascii=False)
        
    with open("data_sources/tbo_verified_all_catalog.json", "w", encoding="utf-8") as f:
        json.dump(sorted_all_books, f, indent=2, ensure_ascii=False)
        
    print(f"[+] Successfully mapped all {len(mapped_courses)} courses and built catalog of {len(sorted_all_books)} books!")

if __name__ == "__main__":
    update_data()
