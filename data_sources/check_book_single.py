import requests
import re
from bs4 import BeautifulSoup
import sys

def test_code(code):
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "http://tbo.karunika.co.id/"
    })
    
    print(f"[*] Fetching homepage for code {code}...", flush=True)
    try:
        r1 = session.get("http://tbo.karunika.co.id/", timeout=10)
    except Exception as e:
        print(f"Error getting homepage: {e}", flush=True)
        return
        
    m = re.search(r'name="_token"\s+value="([^"]+)"', r1.text)
    if not m:
        print("CSRF token not found!", flush=True)
        return
    token = m.group(1)
    print(f"[+] Token: {token}", flush=True)
    
    print(f"[*] Posting to check_book with kode_barang={code}...", flush=True)
    try:
        r2 = session.post("http://tbo.karunika.co.id/check_book", data={
            "_token": token,
            "kode_barang": code
        }, timeout=10)
    except Exception as e:
        print(f"Error posting: {e}", flush=True)
        return
        
    print(f"[+] Status: {r2.status_code}, Length: {len(r2.text)}", flush=True)
    soup = BeautifulSoup(r2.text, "html.parser")
    
    # Save output for inspection
    with open(f"data_sources/check_book_{code}.html", "w", encoding="utf-8") as f:
        f.write(r2.text)
    print(f"[+] Saved to data_sources/check_book_{code}.html", flush=True)
    
    # Parse items
    panels = soup.find_all("div", class_="panel")
    print(f"[+] Found {len(panels)} panels in result", flush=True)
    for p in panels:
        title = p.find(class_="panel-title")
        t_text = title.get_text(strip=True) if title else "No title"
        body = p.find(class_="panel-body")
        b_text = body.get_text(" ", strip=True) if body else "No body"
        print(f"  --- Panel: {t_text} ---")
        print(f"      Body: {b_text[:200]}")

if __name__ == "__main__":
    code = sys.argv[1] if len(sys.argv) > 1 else "MKWN4108"
    test_code(code)
