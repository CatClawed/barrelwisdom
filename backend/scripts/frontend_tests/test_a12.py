from games.A12.traits_a12.models import *
from games.A12.effects_a12.models import *
from games.A12.categories_a12.models import *
from games.A12.monsters_a12.models import *
from games.A12.items_a12.models import *
from games.A12.areadata_a12.models import *
import requests

base_url = 'http://nginx:80'

def get_url(section, slug):
    try:
        page = requests.get(f'{base_url}/totori/{section}/{slug}/en')
        assert(f'https://barrelwisdom.com/totori/{section}/{slug}/en' in page.text)
        page = requests.get(f'{base_url}/totori/{section}/{slug}/ja')
        assert(f'https://barrelwisdom.com/totori/{section}/{slug}/ja' in page.text)
        page = requests.get(f'{base_url}/totori/{section}/{slug}')
        assert(f'https://barrelwisdom.com/totori/{section}/{slug}/en' in page.text)
    except (requests.exceptions.HTTPError, requests.exceptions.ConnectionError, AssertionError):
        print("Error", section, slug)

objects = Trait.objects.all()
for o in objects:
    get_url('traits', o.slug)

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