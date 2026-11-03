import json

with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data_sources/biaya_buku_per_semester.json', 'r', encoding='utf-8') as f:
    biaya_buku_data = json.load(f)

# Read data.js
with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Inject biaya_buku before 'faq:'
inject_str = f"  biaya_buku: {json.dumps(biaya_buku_data, indent=2, ensure_ascii=False)},\n  faq:"

if "biaya_buku:" not in content:
    content = content.replace("  faq:", inject_str, 1)
    with open('d:/PERSONAL PROJECT/UT jurusan hukum in a nutshell/data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Injected biaya_buku into data.js successfully!")
else:
    print("biaya_buku already exists in data.js")
