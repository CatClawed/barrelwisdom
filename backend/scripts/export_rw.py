from django.db.models import Prefetch
from games.A25RW.models import *
import json
import os
from games.A25RW.serializers import *

def export_traits():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'traits')
    obj = Trait.objects.all()
    for o in obj:
        data = A25RWTraitSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_effects():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'effects')
    obj = Effect.objects.all().prefetch_related(
        Prefetch('item_set',
            queryset=Item.objects.select_related('name').distinct())
        ).filter(flag=True)
    for o in obj:
        data = A25RWEffectSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_monsters():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'monsters')
    obj = Enemy.objects.all()
    for o in obj:
        data = A25RWEnemySerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_items():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'items')
    obj = Item.objects.all().filter(visible=True)
    
    for o in obj:
        serializer = A25RWItemSerializer(o)
        data = serializer.data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_categories():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'categories')
    obj = Category.objects.all()
    for o in obj:
        data = A25RWCategorySerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_shops():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'shops')
    obj = Shop.objects.all()
    for o in obj:
        data = A25RWShopSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_trees():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'rw', 'recipe-trees')
    obj = RecipeTree.objects.all().prefetch_related(Prefetch('recipenode_set',
        queryset=RecipeNode.objects.filter(hide=False)))
    for o in obj:
        data = A25RWRecipeTreeSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

#export_traits()
#export_effects()
#export_items()
#export_categories()
#export_monsters()
#export_shops()
#export_trees()