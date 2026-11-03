import urllib.request
import re

url = "http://tbo.karunika.co.id/book_list/check/HKUM"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req, timeout=20) as res:
        html = res.read().decode("utf-8", errors="ignore")
        # Find where HKUM4101 appears
        idx = html.find("HKUM4101")
        if idx != -1:
            snippet = html[max(0, idx - 400): idx + 1000]
            print("Found HKUM4101 snippet:")
            print(snippet)
        else:
            print("HKUM4101 not found directly as string. Let's search for HKUM:")
            matches = [m.start() for m in re.finditer(r"HKUM\d{4}", html)]
            print(f"Found {len(matches)} HKUM codes. First one snippet:")
            if matches:
                print(html[matches[0]-200:matches[0]+400])
except Exception as e:
    print("Error:", e)
