with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

required_ids = [
    'toggleLeftSidebarBtn',
    'toggleRightSidebarBtn',
    'hideLeftSidebarInline',
    'hideRightSidebarInline',
    'total-biaya-buku',
    'biayaBukuTableBody',
    'costSemSelector',
    'costSemDetailContainer',
    'kurikulumTableBody',
    'tboTableBody',
    'calendarTableBody',
    'upbjjTableBody',
    'themeToggleBtn'
]

for rid in required_ids:
    if f'id="{rid}"' in html:
        print(f"[OK] Found ID: {rid}")
    else:
        print(f"[ERROR] Missing ID: {rid}")

with open('data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

print("data.js size:", len(data_content))
assert "biaya_buku:" in data_content
assert "kalender_akademik:" in data_content
assert "4 Mei – 22 Juli 2026" in data_content
assert "28 dan 29 November 2026" in data_content
print("[OK] 2026/2027 calendar dates verified in data.js!")

with open('app.js', 'r', encoding='utf-8') as f:
    app_content = f.read()

print("app.js size:", len(app_content))
assert "renderBiayaBukuSection" in app_content
assert "renderDirectTBOPurchase" in app_content
assert "toggleLeftSidebar" in app_content
assert "toggleRightSidebar" in app_content
print("[OK] All features verified in app.js!")
