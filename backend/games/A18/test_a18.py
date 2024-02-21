from django.test import TestCase
from rest_framework.test import APIClient
from games.A18.items_a18.models import Item, Category
from games.A18.monsters_a18.models import Monster
from games.A18.effects_traits_a18.models import Trait, Effect
from django.test.utils import override_settings
from django.conf import settings

@override_settings(DEBUG_TOOLBAR_CONFIG={"SHOW_TOOLBAR_CALLBACK": lambda request: False,})
class TestA18(TestCase):
    fixtures = ['fixtures/a18_data.json.gz']
    client = APIClient()
    apiBase = '/api/A18'
    languages = ['en', 'ja', 'sc', 'tc']
    lists = ['trait', 'effect', 'monster', 'race', 'category', 'catalyst',
        'recipe', 'item', 'shop']

    def test_lists(self):
        for ls in self.lists:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/{ls}/{lang}/')
                assert(request.status_code == 200)

    def test_traits(self):
        objs = Trait.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/trait/{obj.slug}/{lang}/')
                assert(request.status_code == 200)

    def test_effects(self):
        objs = Effect.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/effect/{obj.slug}/{lang}/')
                assert(request.status_code == 200)

    def test_monsters(self):
        objs = Monster.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/monster/{obj.slug}/{lang}/')
                assert(request.status_code == 200)

    def test_items(self):
        objs = Item.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/item/{obj.slug}/{lang}/')
                assert(request.status_code == 200)

    def test_categories(self):
        objs = Category.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/category/{obj.slug}/{lang}/')
                assert(request.status_code == 200)
