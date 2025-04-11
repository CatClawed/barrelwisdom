from games.A26.monsters_a26.models import *
from games.A26.items_a26.models import *

import requests

base_url = 'http://nginx:80'
languages = ['en', 'ja', 'sc', 'tc', 'ko', 'fr', 'de', 'ru', 'es']

def get_url(section, id=None):
    if id:
        try:
            page = requests.get(f'{base_url}/yumia/{section}/{id}/en')
            assert(f'https://barrelwisdom.com/yumia/{section}/{id}/en' in page.text)
            assert('undefined' not in page.text)
        except (requests.exceptions.HTTPError, requests.exceptions.ConnectionError, AssertionError):
            print("Error", section, id)
    else:
        try:
            page = requests.get(f'{base_url}/yumia/{section}/en')
            assert(f'https://barrelwisdom.com/yumia/{section}/en' in page.text)
            assert ('undefined' not in page.text)
        except (requests.exceptions.HTTPError, requests.exceptions.ConnectionError, AssertionError):
            print("Error", section)

objects = Category.objects.all()
for o in objects:
    if o.id > 10 and o.id < 15:
        get_url('categories', o.id)

objects = Item.objects.all()
for o in objects:
    get_url('items', o.id)

objects = Monster.objects.all()
for o in objects:
    get_url('monsters', o.id)

objects = Effect.objects.all()
for o in objects:
    get_url('effects', o.id)

for o in ['monsters', 'items', 'effects', 'traits', 'memory-vial-locations', 'treasure-trove-key-locations']:
    get_url(o)

objects = Trait.objects.all()
for o in objects:
    get_url('traits', o.id)
