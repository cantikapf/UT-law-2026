import requests
import re
import time
import json
from bs4 import BeautifulSoup

retry_codes = [
    "EKMA4316", "MKKI4450", "MKWI4201", "MKWI4202", "MKWI4203", "MKWN4109", "MKWN4110",
    "MKWN4102", "MKWN4103", "MKWN4104", "MKWN4105", "MKWN4106", "MKWN4107",
    "FSIH4102", "FSIH4103", "FSIH4104", "FSIH4106", "FSIH4107", "FSIH4201", "FSIH4202",
    "FSIH4203", "FSIH4204", "FSIH4207", "FSIH4208", "FSIH4212", "FSIH4301", "FSIH4302",
    "FSIH4308", "FSIH4310", "FSIH4401", "FSIH4402", "FSIH4403", "FSIH4404", "FSIH4405",
    "FSIH4406", "FSIH4407", "FSIH4408", "FSIH4409"
]

def run_retry():
    with open("data_sources/tbo_all_checked_books.json", "r", encoding="utf-8") as f:
        existing = json.load(f)
        
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "http://tbo.karunika.co.id/"
    })
    
    print("[*] Getting homepage and CSRF token...", flush=True)
    r = session.get("http://tbo.karunika.co.id/", timeout=20)
    m = re.search(r'name="_token"\s+value="([^"]+)"', r.text)
    token = m.group(1)
    
    for i, code in enumerate(retry_codes):
        print(f"[{i+1}/{len(retry_codes)}] Checking {code}...", flush=True)
        try:
            resp = session.post("http://tbo.karunika.co.id/check_book", data={
                "_token": token,
                "kode_barang": code
            }, timeout=20)
            
            soup = BeautifulSoup(resp.text, "html.parser")
            panels = soup.find_all("div", class_="panel")
            items = []
            
            for p in panels:
                title_elem = p.find(class_="panel-title")
                title_text = title_elem.get_text(strip=True) if title_elem else ""
                body_elem = p.find(class_="panel-body")
                body_text = body_elem.get_text(" ", strip=True) if body_elem else ""
                
                if "Harga Mahasiswa" in body_text or "Judul" in body_text:
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
                print(f"  -> FOUND: {items[0]['kode']}: {items[0]['judul']} ({items[0]['harga_mahasiswa']}, stok: {items[0]['stok']})", flush=True)
                existing[code] = items
            else:
                print(f"  -> NOT FOUND", flush=True)
                existing[code] = []
        except Exception as e:
            print(f"  -> ERROR {e}", flush=True)
            
        time.sleep(0.5)
        
    with open("data_sources/tbo_all_checked_books.json", "w", encoding="utf-8") as f:
        json.dump(existing, f, indent=2, ensure_ascii=False)
    print("\n[+] Done updating data_sources/tbo_all_checked_books.json!", flush=True)

if __name__ == "__main__":
    run_retry()
