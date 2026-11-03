import urllib.request
import re

url = "http://tbo.karunika.co.id/book_list/check/HKUM"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=20) as res:
        html = res.read().decode("utf-8", errors="ignore")
        idx = html.find("HKUM4101")
        # Find closing </img> or > after img
        img_idx = html.find('<img', idx)
        img_close = html.find('>', img_idx)
        print("Content after img close:")
        print(html[img_close+1: img_close+1000])
except Exception as e:
    print("Error:", e)
