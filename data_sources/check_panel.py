import urllib.request
import re

url = "http://tbo.karunika.co.id/book_list/check/HKUM"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=20) as res:
        html = res.read().decode("utf-8", errors="ignore")
        idx = html.find("HKUM4101")
        if idx != -1:
            snippet = html[idx: idx + 4000]
            # Strip out base64 img data
            snippet_clean = re.sub(r'data:image/[^;]+;base64,[a-zA-Z0-9+/=]+', '[BASE64_IMAGE]', snippet)
            print("Panel body after HKUM4101:")
            print(snippet_clean[:2500])
except Exception as e:
    print("Error:", e)
