import urllib.request
import urllib.parse
import re
from bs4 import BeautifulSoup

def inspect_page(prefix):
    url = f"http://tbo.karunika.co.id/book_list/check/{prefix}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    html = urllib.request.urlopen(req).read().decode("utf-8", errors="ignore")
    soup = BeautifulSoup(html, "html.parser")
    tables = soup.find_all("table")
    print(f"Prefix {prefix}: found {len(tables)} tables")
    for i, t in enumerate(tables):
        rows = t.find_all("tr")
        print(f"Table {i} has {len(rows)} rows")
        for r in rows[:4]:
            cols = [c.get_text(strip=True) for c in r.find_all(["th", "td"])]
            print("  ", cols)

if __name__ == "__main__":
    inspect_page("MKWN")
    inspect_page("HKUM")
