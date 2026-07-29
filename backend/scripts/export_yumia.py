import ast
from scripts.util import import_generic
from games.A26.items_a26.models import *
from games.A26.misc_a26.models import *
from games.A26.monsters_a26.models import *

import json
import os
from games.A26.items_a26.serializers import A26ItemSerializer, A26CategoryFullSerializer, A26MaterialSerializer


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
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'yumia', 'categories')
    obj = Category.objects.all()
    for o in obj:
        data = A26CategoryFullSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_materials():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'yumia', 'materials')
    obj = Material.objects.all()
    for o in obj:
        data = A26MaterialSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

export_items()
export_categories()
export_materials()
