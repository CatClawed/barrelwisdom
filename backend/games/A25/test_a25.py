from django.test import TestCase
from rest_framework.test import APIClient
from games.A25.items_a25.models import Item
from games.A25.misc_a25.models import Trait
from games.A25.chara_a25.models import Character, Memoria
from django.test.utils import override_settings
from django.conf import settings

@override_settings(DEBUG_TOOLBAR_CONFIG={"SHOW_TOOLBAR_CALLBACK": lambda request: False,})
class TestA25(TestCase):
    fixtures = ['fixtures/a25_data.json.gz']
    client = APIClient()
    apiBase = '/api/A25'
    languages = ['en', 'ja', 'sc', 'tc']
    lists = ['trait', 'research', 'character', 'memoria', 'recipe', 'material',
        'synth', 'update', 'tower/elemental-tower', 'training', 'scorebattle',
        'tower/fire', 'tower/ice', 'tower/lightning', 'tower/wind', 'tower/slash',
        'tower/pierce', 'tower/impact']

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

    def test_characters(self):
        objs = Character.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/character/{obj.slug}/{lang}/')
                assert(request.status_code == 200)
                if not obj.gbl and lang != 'ja':
                    assert(request.json()['title'] == obj.title.text_ja)

    def test_memoria(self):
        objs = Memoria.objects.all()
        for obj in objs:
            for lang in self.languages:
                request = self.client.get(f'{self.apiBase}/memoria/{obj.slug}/{lang}/')
                assert(request.status_code == 200)
                if not obj.gbl and lang != 'ja':
                    assert(request.json()['skill_desc'] == obj.skill_desc.text_ja)

    def test_item(self):
        objs = Item.objects.all()
        for obj in objs:
            for lang in self.languages:
                if len(obj.material_set.all()) > 0:
                    request = self.client.get(f'{self.apiBase}/material/{obj.slug}/{lang}/')
                    assert request.status_code == 200, print(obj.name.text_ja)
                    request = self.client.get(f'{self.apiBase}/synth/{obj.slug}/{lang}/')
                    assert request.status_code == 404, print(obj.name.text_ja)
                else:
                    request = self.client.get(f'{self.apiBase}/material/{obj.slug}/{lang}/')
                    assert request.status_code == 404, print(obj.name.text_ja)
                    request = self.client.get(f'{self.apiBase}/synth/{obj.slug}/{lang}/')
                    assert request.status_code == 200, print(obj.name.text_ja)

