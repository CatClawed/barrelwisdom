from games.A18.effects_traits_a18.models import *
from games.A18.effects_traits_a18.serializers import *
from games.A18.items_a18.models import *
from games.A18.items_a18.serializers import *
from games.A18.misc_a18.models import *
from games.A18.misc_a18.serializers import *
from games.A18.monsters_a18.models import *
from games.A18.monsters_a18.serializers import *
import json
import os


def export_traits():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'traits')
    obj = Trait.objects.all()
    for o in obj:
        data = A18TraitSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_effects():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'effects')
    obj = Effect.objects.all()
    for o in obj:
        data = A18EffectSerializerFull(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_monsters():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'monsters')
    obj = Monster.objects.all()
    for o in obj:
        data = A18MonsterFullSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_items():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'items')
    obj = Item.objects.all()
    
    for o in obj:
        serializer = A18ItemSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_catalysts():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'catalysts')
    obj = Catalyst.objects.all()
    
    for o in obj:
        serializer = A18CatalystSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.item.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_recipe_ideas():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'recipe-ideas')
    obj = Item.objects.all().filter(recipeidea__isnull=False).distinct()
    
    for o in obj:
        serializer = A18RecipeItemSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_categories():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'categories')
    obj = Category.objects.all()
    for o in obj:
        data = A18CategoryItemSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_races():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'races')
    obj = Race.objects.all()
    for o in obj:
        data = A18RaceListSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.icon}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_shops():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'firis', 'shops')
    obj = Shop.objects.all()
    for o in obj:
        data = A18ShopListSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))



export_traits()
export_effects()
export_items()
export_categories()
export_monsters()
export_races()
export_shops()