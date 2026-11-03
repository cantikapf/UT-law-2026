import requests
import re
import time
import json
from bs4 import BeautifulSoup

# Collect all codes to check
candidate_codes = [
    # General / Non-HKUM codes from curriculum
    "MKWN4110", "MKWN4108", "MKWN4109", 
    "MKWN4101", "MKWN4102", "MKWN4103", "MKWN4104", "MKWN4105", "MKWN4106", "MKWN4107",
    "ISIP4131", "ADPU4332", "MKWI4203", "MKDI4203", "MKWI4202", "MKDI4202", "MKWI4201", "MKDI4201",
    "EKMA4316", "EMBS4320", "SPKN4301", "SKOM4209", "FSIK4206", "ADBI4336", "MKKI4450",
    
    # FSIH codes
    "FSIH4101", "FSIH4102", "FSIH4103", "FSIH4104", "FSIH4105", "FSIH4106", "FSIH4107",
    "FSIH4201", "FSIH4202", "FSIH4203", "FSIH4204", "FSIH4205", "FSIH4206", "FSIH4207",
    "FSIH4208", "FSIH4209", "FSIH4210", "FSIH4211", "FSIH4212",
    "FSIH4301", "FSIH4302", "FSIH4303", "FSIH4304", "FSIH4305", "FSIH4306", "FSIH4307",
    "FSIH4308", "FSIH4309", "FSIH4310",
    "FSIH4401", "FSIH4402", "FSIH4403", "FSIH4404", "FSIH4405", "FSIH4406", "FSIH4407",
    "FSIH4408", "FSIH4409", "FSIH4450", "FSIH4460",
    "FSIH4001", "FSIH4002", "FSIH4003", "FSIH4004", "FSIH4005", "FSIK4002",
    
    # HKUM codes
    "HKUM4101", "HKUM4102", "HKUM4103",
    "HKUM4201", "HKUM4202", "HKUM4203", "HKUM4204", "HKUM4205", "HKUM4206", "HKUM4207",
    "HKUM4208", "HKUM4209", "HKUM4210", "HKUM4211",
    "HKUM4301", "HKUM4302", "HKUM4303", "HKUM4304", "HKUM4305", "HKUM4306", "HKUM4307",
    "HKUM4308", "HKUM4309", "HKUM4310", "HKUM4311", "HKUM4312",
    "HKUM4401", "HKUM4402", "HKUM4403", "HKUM4404", "HKUM4405", "HKUM4406", "HKUM4407",
    "HKUM4408", "HKUM4409", "HKUM4410", "HKUM4411", "HKUM4500", "HKUM4560"
]

# Deduplicate
candidate_codes = sorted(list(set(candidate_codes)))

def run_batch():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "http://tbo.karunika.co.id/"
    })
    
    print("[*] Getting homepage and CSRF token...", flush=True)
    r = session.get("http://tbo.karunika.co.id/", timeout=15)
    m = re.search(r'name="_token"\s+value="([^"]+)"', r.text)
    if not m:
        print("[!] No CSRF token found!", flush=True)
        return
    token = m.group(1)
    print(f"[+] Token acquired: {token}", flush=True)
    
    results = {}
    print(f"[*] Starting check for {len(candidate_codes)} codes at http://tbo.karunika.co.id/check_book ...", flush=True)
    
    for i, code in enumerate(candidate_codes):
        try:
            resp = session.post("http://tbo.karunika.co.id/check_book", data={
                "_token": token,
                "kode_barang": code
            }, timeout=10)
            
            soup = BeautifulSoup(resp.text, "html.parser")
            panels = soup.find_all("div", class_="panel")
            items = []
            
            for p in panels:
                title_elem = p.find(class_="panel-title")
                title_text = title_elem.get_text(strip=True) if title_elem else ""
                body_elem = p.find(class_="panel-body")
                body_text = body_elem.get_text(" ", strip=True) if body_elem else ""
                
                # Check if this panel has book details
                if "Harga Mahasiswa" in body_text or "Judul" in body_text:
                    # Extract fields
                    # Format: Kode : MKWN4108 Judul : BAHASA INDONESIA Harga Mahasiswa : Rp. 108,700.00 Harga Umum : Rp. 129,100.00 Ketersediaan :689
                    kode_m = re.search(r'Kode\s*:\s*([^\s]+)', body_text)
                    judul_m = re.search(r'Judul\s*:\s*(.*?)(?=Harga Mahasiswa|$)', body_text)
                    hmhs_m = re.search(r'Harga Mahasiswa\s*:\s*(Rp\.\s*[\d,\.]+)', body_text)
                    humum_m = re.search(r'Harga Umum\s*:\s*(Rp\.\s*[\d,\.]+)', body_text)
                    stok_m = re.search(r'Ketersediaan\s*:\s*(\d+)', body_text)
                    
                    item = {
                        "searched_code": code,
                        "panel_title": title_text,
                        "kode": kode_m.group(1).strip() if kode_m else title_text,
                        "judul": judul_m.group(1).strip() if judul_m else "",
                        "harga_mahasiswa": hmhs_m.group(1).strip() if hmhs_m else "",
                        "harga_umum": humum_m.group(1).strip() if humum_m else "",
                        "stok": int(stok_m.group(1)) if stok_m else 0,
                        "raw_body": body_text
                    }
                    items.append(item)
            
            if items:
                print(f"[{i+1}/{len(candidate_codes)}] {code}: FOUND {len(items)} item(s) -> {items[0]['kode']}: {items[0]['judul']} ({items[0]['harga_mahasiswa']}, stok: {items[0]['stok']})", flush=True)
                results[code] = items
            else:
                print(f"[{i+1}/{len(candidate_codes)}] {code}: NOT FOUND", flush=True)
                results[code] = []
                
        except Exception as e:
            print(f"[{i+1}/{len(candidate_codes)}] {code}: ERROR {e}", flush=True)
            results[code] = []
            
        time.sleep(0.3)
        
    with open("data_sources/tbo_all_checked_books.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
        
    print(f"\n[+] Done! Saved all checked results to data_sources/tbo_all_checked_books.json", flush=True)

if __name__ == "__main__":
    run_batch()
