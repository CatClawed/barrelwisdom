from games.A16.categories_a16.models import *
from games.A16.effects_a16.models import *
from games.A16.properties_a16.models import *
from games.A16.monsters_a16.models import *
from games.A16.items_a16.models import *
from games.A16.areadata_a16.models import *
import requests

base_url = 'http://nginx:80'

def get_url(section, slug):
    try:
        page = requests.get(f'{base_url}/shallie/{section}/{slug}/en')
        assert(f'https://barrelwisdom.com/shallie/{section}/{slug}/en' in page.text)
        page = requests.get(f'{base_url}/shallie/{section}/{slug}/ja')
        assert(f'https://barrelwisdom.com/shallie/{section}/{slug}/ja' in page.text)
        page = requests.get(f'{base_url}/shallie/{section}/{slug}')
        assert(f'https://barrelwisdom.com/shallie/{section}/{slug}/en' in page.text)
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

objects = Area.objects.all()
for o in objects:
    get_url('locations', o.region.slug)