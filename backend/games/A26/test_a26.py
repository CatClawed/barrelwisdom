from django.test import TestCase
from rest_framework.test import APIClient
from games.A26.items_a26.models import Item, Trait, Effect, Category
from games.A26.monsters_a26.models import Monster

class TestA26(TestCase):
    fixtures = ['fixtures/a26_data.json.gz']
    client = APIClient()
    apiBase = '/api/A26'
    languages = ['en', 'ja', 'sc', 'tc', 'ko', 'fr', 'de', 'ru', 'es']
    lists = ['trait', 'effect', 'item', 'monster']

    def test_lists(self):
        for ls in self.lists:
            for lang in self.languages:
                print(f'{self.apiBase}/{ls}/{lang}/')
                request = self.client.get(f'{self.apiBase}/{ls}/{lang}/')
                assert(request.status_code == 200)

    def test_traits(self):
        objs = Trait.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/trait/{obj.id}/{lang}/')
                assert(request.status_code == 200)

    def test_items(self):
        objs = Item.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/item/{obj.id}/{lang}/')
                assert(request.status_code == 200)

    def test_monsters(self):
        objs = Monster.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/monster/{obj.id}/{lang}/')
                assert(request.status_code == 200)

    def test_effect(self):
        objs = Effect.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/effect/{obj.id}/{lang}/')
                assert(request.status_code == 200)

    def test_category(self):
        objs = Category.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/category/{obj.id}/{lang}/')
                assert(request.status_code == 200)
