import urllib.request
import re

url = "http://tbo.karunika.co.id/book_list/check/HKUM"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=20) as res:
        html = res.read().decode("utf-8", errors="ignore")
        idx = html.find("HKUM4101")
        # Find next occurrence of <h2 or <h4 or <a or form
        idx_after_img = html.find('">', idx + 200) # end of img tag
        print("After img tag:")
        print(html[idx_after_img+2 : idx_after_img + 1200])
except Exception as e:
    print("Error:", e)
