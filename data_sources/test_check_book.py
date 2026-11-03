import urllib.request
import urllib.parse
import http.cookiejar
import re
from bs4 import BeautifulSoup

def test_check_book(code):
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    opener.addheaders = [("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")]
    
    # 1. Get homepage to retrieve CSRF token and session cookie
    resp = opener.open("http://tbo.karunika.co.id/")
    html = resp.read().decode("utf-8", errors="ignore")
    
    token_match = re.search(r'name="_token"\s+value="([^"]+)"', html)
    if not token_match:
        print("CSRF token not found!")
        return
    token = token_match.group(1)
    print(f"Got CSRF token: {token}")
    
    # 2. POST to check_book
    post_data = urllib.parse.urlencode({
        "_token": token,
        "kode_barang": code
    }).encode("utf-8")
    
    req = urllib.request.Request("http://tbo.karunika.co.id/check_book", data=post_data)
    req.add_header("Referer", "http://tbo.karunika.co.id/")
    
    resp_post = opener.open(req)
    result_html = resp_post.read().decode("utf-8", errors="ignore")
    print(f"POST result length for {code}: {len(result_html)}")
    
    soup = BeautifulSoup(result_html, "html.parser")
    # Check for panels, titles, prices, stock
    panels = soup.find_all(class_="panel-title")
    print(f"Found {len(panels)} panel titles:")
    for p in panels:
        print("  Panel Title:", p.get_text(strip=True))
        
    # Check text around table or prices
    price_tags = soup.find_all(text=re.compile(r"Rp\.|Harga|Stok", re.I))
    print(f"Found {len(price_tags)} price/stock matches:")
    for pt in price_tags[:10]:
        print("  Match:", pt.strip()[:100])

if __name__ == "__main__":
    test_check_book("MKWN4108")
