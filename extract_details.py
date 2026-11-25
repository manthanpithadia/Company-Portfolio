import urllib.request
from bs4 import BeautifulSoup
import re
import json

headers = {'User-Agent': 'Mozilla/5.0'}

req = urllib.request.Request('https://formo.framer.media/', headers=headers)
html = urllib.request.urlopen(req).read().decode('utf-8')
soup = BeautifulSoup(html, 'html.parser')

# Find fonts
font_faces = re.findall(r'@font-face\s*\{([^}]+)\}', html)
font_families = set(re.findall(r'font-family:\s*([^;\}]+)', html))

# Find colors
hex_colors = set(re.findall(r'#[0-9a-fA-F]{3,8}\b', html))
rgb_colors = set(re.findall(r'rgba?\([0-9\s,\.]+\)', html))

# Look at client logos / testimonials / services / awards
sections = []
for div in soup.find_all(['section', 'div'], attrs={'data-framer-name': True}):
    name = div.get('data-framer-name')
    if name and name not in sections:
        sections.append(name)

# Case study full text
stride_req = urllib.request.Request('https://formo.framer.media/projects/stride', headers=headers)
stride_html = urllib.request.urlopen(stride_req).read().decode('utf-8')
stride_soup = BeautifulSoup(stride_html, 'html.parser')

stride_sections = []
for tag in stride_soup.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'span']):
    t = tag.get_text(strip=True)
    if t and len(t) > 5 and t not in stride_sections[-3:]:
        stride_sections.append(t)

print("Font Families:", list(font_families)[:10])
print("Framer Sections:", sections[:30])
print("\nColor samples (Hex):", sorted(list(hex_colors))[:25])
print("\nStride details sample:", stride_sections[:20])

with open("detailed_tokens.json", "w", encoding="utf-8") as f:
    json.dump({
        "font_families": list(font_families),
        "framer_named_components": sections,
        "hex_colors": sorted(list(hex_colors)),
        "stride_content": stride_sections
    }, f, indent=2)
print("Saved detailed_tokens.json")
