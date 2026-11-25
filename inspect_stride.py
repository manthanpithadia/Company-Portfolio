import urllib.request
from bs4 import BeautifulSoup

url = 'https://formo.framer.media/projects/stride'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
soup = BeautifulSoup(urllib.request.urlopen(req).read().decode('utf-8'), 'html.parser')

print('--- IMAGES ---')
for i, img in enumerate(soup.find_all('img')):
    print(f'Image {i+1}: src={img.get("src")}')

print('\n--- CTAS ---')
for a in soup.find_all(['a', 'button']):
    txt = a.get_text(strip=True)
    if any(k in txt for k in ['Start a project', 'Book a call', 'Velō', 'Next']):
        print(f'CTA: "{txt}", href={a.get("href")}')
