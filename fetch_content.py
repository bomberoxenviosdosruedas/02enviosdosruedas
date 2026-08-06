import requests
from trafilatura import extract
import htmldate
import json

url = 'https://www.enviosdosruedas.com/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

try:
    resp = requests.get(url, headers=headers, timeout=30)
    print('Status:', resp.status_code)
    print('Content length:', len(resp.text))

    extracted = extract(resp.text, include_comments=False, include_tables=False, no_fallback=False)
    print('--- Extracted text ---')
    print(extracted[:5000] if extracted else 'NO EXTRACTED TEXT')

    pub_date = htmldate.find_date(resp.text, url=url)
    print('--- Publication date:', pub_date)

    # Save for later analysis
    result = {
        'url': url,
        'status': resp.status_code,
        'raw_html': resp.text[:10000],
        'extracted_text': extracted,
        'publication_date': str(pub_date) if pub_date else None,
        'word_count': len(extracted.split()) if extracted else 0
    }
    with open('content_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

except Exception as e:
    print('Error:', e)