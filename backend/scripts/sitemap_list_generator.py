from blog.models import Blog
from games.A18.effects_traits_a18.models import Trait as A18Trait, Effect as A18Effect
from games.A18.items_a18.models import Item as A18Item
from games.A18.monsters_a18.models import Monster as A18Monster
from games.A25.misc_a25.models import Trait as A25Trait
from games.A25.chara_a25.models import Character as A25Character, Memoria as A25Memoria
from games.A25.items_a25.models import Item as A25Item
import xml.etree.cElementTree as ET
import datetime

"""Google has trouble indexing my full site unless I tell it the other languages
exist. So I do. Merged code from: https://github.com/CatClawed/sitemap

Auto upload would be... cute.
"""
def sitemap(langs=['en'], pages=[], game='error'):
    # if I could do things over easily I'd change sc/tc to zhs and zht
    code = {
        "en":"en",
        "fr":"fr",
        "ko":"ko",
        "ja":"ja",
        "sc":"zh-Hans",
        "tc":"zh-Hant"
    }
    urlset = ET.Element("urlset")
    urlset.set('xmlns','http://www.sitemaps.org/schemas/sitemap/0.9')
    urlset.set('xmlns:xhtml','http://www.w3.org/1999/xhtml')
    
    for page in pages:
        for lang in langs:
            url = ET.SubElement(urlset, "url")
            ET.SubElement(url, "loc").text = f'https://barrelwisdom.com/{game}/{page}/{lang}'
            for altlang in langs:
                l = ET.SubElement(url, 'xhtml:link')
                l.set('rel','alternate')
                l.set('hreflang',code[lang])
                l.set('href', f'https://barrelwisdom.com/{game}/{page}/{altlang}')
    tree = ET.ElementTree(urlset)
    tree.write("scripts/sitemaps/"+game+".xml", encoding='utf-8', xml_declaration=True)


def resleri():
    langs = ["en", "ja"]
    pages = []
    for obj in A25Item.objects.all():
        if obj.kind.slug == 'material':
            pages.append(f'items/materials/{obj.slug}')
        else:
            pages.append(f'items/synthesis/{obj.slug}')
    
    for obj in A25Character.objects.all():
        pages.append(f'characters/{obj.slug}')

    for obj in A25Memoria.objects.all():
        pages.append(f'memoria/{obj.slug}')

    for obj in A25Trait.objects.all():
        pages.append(f'traits/{obj.slug}')

    pages.append(f'items/materials')
    pages.append(f'items/synthesis')
    pages.append(f'items/recipes')
    pages.append(f'characters')
    pages.append(f'memoria')
    pages.append(f'research')
    pages.append(f'home')
    pages.append(f'traits')
    pages.append(f'dungeons')
    pages.append(f'scorebattles')
    pages.append(f'tower')

    sitemap(langs, pages, 'resleri')

def firis():
    langs = ["en", "ja"]
    pages = []

    for obj in A18Item.objects.all():
        pages.append(f'items/{obj.slug}')

    for obj in A18Monster.objects.all():
        pages.append(f'monsters/{obj.slug}')

    for obj in A18Trait.objects.all():
        pages.append(f'traits/{obj.slug}')

    for obj in A18Effect.objects.all():
        pages.append(f'effects/{obj.slug}')

    pages.append(f'items')
    pages.append(f'monsters')
    pages.append(f'traits')
    pages.append(f'effects')
    pages.append(f'recipe-ideas')
    pages.append(f'shops')
    pages.append(f'catalysts')

    sitemap(langs, pages, 'firis')

def blog():
    pages = []
    for obj in Blog.objects.all():
        pages.append(f'{obj.section.name}/{obj.slugtitle}')

    urlset = ET.Element("urlset")
    urlset.set('xmlns','http://www.sitemaps.org/schemas/sitemap/0.9')
    for page in pages:
        url = ET.SubElement(urlset, "url")
        ET.SubElement(url, "loc").text = f'https://barrelwisdom.com/{page}'

    # main page
    url = ET.SubElement(urlset, "url")
    ET.SubElement(url, "loc").text = 'https://barrelwisdom.com/'
    ET.SubElement(url, "changefreq").text = 'weekly'
    ET.SubElement(url, "priority").text = '1.0'

    tree = ET.ElementTree(urlset)
    tree.write("scripts/sitemaps/blog.xml", encoding='utf-8', xml_declaration=True)

"""A sitemap of sitemaps."""
def sitemap_index():
    sections = ['blog',
        'totori',
        'escha', 'shallie',
        'firis', 'sophie2',
        'ryza2',
        'bluereflection', 'second-light',
        'resleri'
    ]

    index = ET.Element("sitemapindex")
    index.set('xmlns','http://www.sitemaps.org/schemas/sitemap/0.9')

    for section in sections:
        sitemap = ET.SubElement(index, "sitemap")
        ET.SubElement(sitemap, 'loc').text = f'https://barrelwisdom.com/media/sitemaps/{section}.xml'
        ET.SubElement(sitemap, 'lastmod').text = datetime.datetime.now().strftime("%Y-%m-%d")
        
        tree = ET.ElementTree(index)
        tree.write('scripts/sitemaps/sitemap.xml',encoding='utf-8', xml_declaration=True)

resleri()
#firis()
blog()
sitemap_index()