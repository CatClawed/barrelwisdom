from django.db.models import Prefetch
from games.A12.areadata_a12.models import *
from games.A12.areadata_a12.serializers import *
from games.A12.categories_a12.models import *
from games.A12.categories_a12.serializers import *
from games.A12.effects_a12.models import *
from games.A12.effects_a12.serializers import *
from games.A12.items_a12.models import *
from games.A12.items_a12.serializers import *
from games.A12.monsters_a12.models import *
from games.A12.monsters_a12.serializers import *
from games.A12.regions_a12.models import *
from games.A12.regions_a12.serializers import *
from games.A12.traits_a12.models import *
from games.A12.traits_a12.serializers import *
import json
import os


def export_traits():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'traits')
    obj = Trait.objects.all()
    for o in obj:
        data = A12TraitSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_effects():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'effects')
    obj = Effect.objects.all()
    for o in obj:
        data = A12EffectSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_monsters():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'monsters')
    obj = Monster.objects.all()
    for o in obj:
        data = A12MonsterSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_items():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'items')
    obj = Item.objects.all()
    
    for o in obj:
        serializer = A12ItemFullSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_books():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'recipe-books')
    obj = Book.objects.all()
    
    for o in obj:
        serializer = A12BookSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_categories():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'categories')
    obj = Category.objects.all()
    for o in obj:
        data = A12CategoryDataSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_areas():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'totori', 'area')
    obj = Area.objects.all()
    for o in obj:
        data = A12AreaSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.region.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))



export_traits()
export_effects()
export_items()
export_books()
export_categories()
export_monsters()
export_areas()
