from games.A15.categories_a15.models import *
from games.A15.properties_a15.models import *
from games.A15.effects_a15.models import *
from games.A15.regions_a15.models import *
from games.A15.monsters_a15.models import *
from games.A15.items_a15.models import *
import requests

base_url = 'http://nginx:80'

def get_url(section, slug):
    try:
        page = requests.get(f'{base_url}/escha/{section}/{slug}/en')
        assert(f'https://barrelwisdom.com/escha/{section}/{slug}/en' in page.text)
        page = requests.get(f'{base_url}/escha/{section}/{slug}/ja')
        assert(f'https://barrelwisdom.com/escha/{section}/{slug}/ja' in page.text)
        page = requests.get(f'{base_url}/escha/{section}/{slug}')
        assert(f'https://barrelwisdom.com/escha/{section}/{slug}/en' in page.text)
    except (requests.exceptions.HTTPError, requests.exceptions.ConnectionError, AssertionError):
        print("Error", section, slug)


objects = Property.objects.all()
for o in objects:
    get_url('properties', o.slug)

objects = Category.objects.all()
for o in objects:
    get_url('categories', o.slug)

objects = Item.objects.all()
for o in objects:
    get_url('items', o.slug)

objects = Book.objects.all()
for o in objects:
    get_url('recipe-books', o.slug)

objects = Monster.objects.all()
for o in objects:
    get_url('monsters', o.slug)

objects = Effect.objects.all()
for o in objects:
    get_url('effects', o.slug)

objects = Region.objects.all()
for o in objects:
    if not o.parent:
        get_url('locations', o.slug)