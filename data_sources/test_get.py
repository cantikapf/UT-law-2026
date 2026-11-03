import urllib.request
import urllib.parse

# Test if check_book accepts GET parameters
url = "http://tbo.karunika.co.id/check_book?kode_barang=HKUM4101"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=15) as res:
        html = res.read().decode("utf-8", errors="ignore")
        if "BAHASA DAN TERMINOLOGI" in html:
            print("YES! GET request works on check_book?kode_barang=HKUM4101!")
        else:
            print("GET did not return the book details.")
except Exception as e:
    print("Error:", e)
