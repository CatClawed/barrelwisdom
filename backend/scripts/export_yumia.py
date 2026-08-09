import ast
from scripts.util import import_generic
from games.A26.items_a26.models import *
from games.A26.misc_a26.models import *
from games.A26.monsters_a26.models import *
from django.db.models import Q
import json
import os
from games.A26.items_a26.serializers import *
from games.A26.monsters_a26.serializers import *


def export_items():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'items')
    obj = Item.objects.all().filter(hidden=False)
    
    for o in obj:
        serializer = A26ItemSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_categories():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'categories')
    obj = Category.objects.filter(
        Q(item__isnull=False) | Q(recipeeffect__isnull=False)).distinct()
    for o in obj:
        data = A26CategoryFullSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_materials():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'materials')
    obj = Material.objects.all()
    for o in obj:
        data = A26MaterialSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_traits():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'traits')
    obj = Trait.objects.all()
    for o in obj:
        data = A26TraitSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_monsters():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'monsters')
    obj = Monster.objects.all()
    for o in obj:
        data = A26MonsterSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_races():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'races')
    obj = Race.objects.all()
    for o in obj:
        data = A26RaceSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_effects():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'effects')
    obj = Effect.objects.all()
    for o in obj:
        data = A26EffectSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_maps():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'yumia', 'maps')
    obj = Item.objects.get(id=392)
    data = A26CoordinateSerializer(obj.location.all(), many=True).data
    file_path = os.path.join(OUTPUT_DIR, f"treasure-trove-key-locations.json")
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

    obj = Coordinate.objects.all().filter(label=0)
    data = A26CoordinateSerializer(obj, many=True).data
    file_path = os.path.join(OUTPUT_DIR, f"memory-vial-locations.json")
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


#export_items()
export_categories()
#export_materials()
#export_traits()
#export_monsters()
#export_races()
#export_maps()
#export_effects()