from games.A16.effects_a16.models import *
from games.A16.effects_a16.serializers import *
from games.A16.properties_a16.models import *
from games.A16.properties_a16.serializers import *
from games.A16.items_a16.models import *
from games.A16.items_a16.serializers import *
from games.A16.categories_a16.models import *
from games.A16.categories_a16.serializers import *
from games.A16.areadata_a16.models import *
from games.A16.areadata_a16.serializers import *
from games.A16.monsters_a16.models import *
from games.A16.monsters_a16.serializers import *
import json
import os
import csv

"""
https://github.com/CatClawed/AtelierDatamining
The data in shallie_data is from this repo.
"""


def read_tsv_rows(filename):
    path = os.path.join(os.getcwd(), 'scripts', 'shallie_data', filename)
    with open(path, newline='', encoding='utf-8') as tsv_file:
        return list(csv.DictReader(tsv_file, delimiter='\t'))


def localized_name(row):
    return {
        language: row[f'name_{language}'].strip()
        for language in ('en', 'ja', 'sc', 'tc')
    }


def effect_advanced_data(effect_row):
    advanced = {}
    equal_min_max_pairs = {
        max_field
        for min_field, max_field in (
            ('min_1', 'max_1'),
            ('min_2', 'max_2'),
            ('min_3', 'max_3'),
            ('min_4', 'max_4'),
        )
        if effect_row[min_field].strip()
        and values_match(effect_row[min_field].strip(), effect_row[max_field].strip())
    }
    for field in (
        'actTag', 'actTag2', 'min_1', 'max_1', 'min_2', 'max_2',
        'min_3', 'max_3', 'min_4', 'max_4',
    ):
        value = effect_row[field].strip()
        if field in equal_min_max_pairs:
            continue
        if not value or (field in ('actTag', 'actTag2') and value == 'ACT_NONE'):
            continue
        try:
            if float(value) == 0:
                continue
        except ValueError:
            pass
        advanced[field] = value
    return advanced


def values_match(first, second):
    if first == second:
        return True
    try:
        return float(first) == float(second)
    except ValueError:
        return False


def export_areadata():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'locations')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for o in Area.objects.all():
        data = A16AreaSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.region.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_effects():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'effects')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    effects_by_name = {}
    for row in read_tsv_rows('item_effect.tsv'):
        effects_by_name.setdefault(row['name_ja'], []).append(row)

    exported_effects = []
    for o in Effect.objects.all():
        data = A16EffectSerializer(o).data
        name_ja = o.eff_ja.name
        matching_rows = effects_by_name.get(name_ja, [])
        if not matching_rows:
            raise ValueError(f"item_effect.tsv has no effect matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            print(
                f"Warning: multiple effects match Japanese name {name_ja!r}; "
                f"using first TSV match ({matching_rows[0]['ItemEffTag']})"
            )
        row = matching_rows[0]
        enum = row['ItemEffTag'].strip()
        if not enum:
            raise ValueError(f"item_effect.tsv has no ItemEffTag for Japanese effect {name_ja!r}")
        data['name'] = localized_name(row)
        data['enum'] = enum
        data['advanced'] = effect_advanced_data(row)
        exported_effects.append((o.slug, data))

    for slug, data in exported_effects:
        if not data.get('enum', '').strip():
            raise ValueError(f"Effect {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_properties():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'properties')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    potentials_by_name = {}
    for row in read_tsv_rows('item_potential.tsv'):
        potentials_by_name.setdefault(row['name_ja'], []).append(row)
    effects_by_enum = {}
    for row in read_tsv_rows('item_effect.tsv'):
        effects_by_enum.setdefault(row['ItemEffTag'].strip(), []).append(row)

    exported_properties = []
    for o in Property.objects.all():
        data = A16PropertySerializer(o).data
        name_ja = o.prop_ja.name
        matching_rows = potentials_by_name.get(name_ja, [])
        if not matching_rows:
            raise ValueError(f"item_potential.tsv has no property matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            raise ValueError(f"item_potential.tsv has multiple properties matching Japanese name {name_ja!r}")
        row = matching_rows[0]
        enum = row['enum'].strip()
        if not enum:
            raise ValueError(f"item_potential.tsv has no enum for Japanese property {name_ja!r}")
        data['name'] = localized_name(row)
        data['enum'] = enum

        advanced = {}
        for field in ('PotBase', 'PotBase2'):
            value = row[field].strip()
            if value and value != 'ITEM_SUB_BASE_NONE':
                advanced[field] = value
        advanced_effects = []
        for min_field, max_field in (('min', 'max'), ('min2', 'max2')):
            value = row[min_field].strip()
            if value:
                try:
                    min_value = float(value)
                except ValueError:
                    if value.startswith(('RACE', 'ELEMENT_')):
                        advanced[min_field] = value
                        continue
                    matching_effects = effects_by_enum.get(value, [])
                    if not matching_effects:
                        raise ValueError(
                            f"item_effect.tsv has no effect matching {min_field} enum "
                            f"{value!r} for property {name_ja!r}"
                        )
                    if len(matching_effects) > 1:
                        raise ValueError(
                            f"item_effect.tsv has multiple effects matching {min_field} enum "
                            f"{value!r} for property {name_ja!r}"
                        )
                    advanced_effects.append({
                        'advanced': effect_advanced_data(matching_effects[0]),
                    })
                    continue
                if min_value != 0:
                    advanced[min_field] = value
            max_value = row[max_field].strip()
            if max_value and not (value and values_match(value, max_value)):
                try:
                    if float(max_value) != 0:
                        advanced[max_field] = max_value
                except ValueError:
                    advanced[max_field] = max_value
        if advanced_effects:
            advanced['effects'] = advanced_effects
        data['advanced'] = advanced
        exported_properties.append((o.slug, data))

    for slug, data in exported_properties:
        if not data.get('enum', '').strip():
            raise ValueError(f"Property {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_items():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'items')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    items_by_name = {}
    for row in read_tsv_rows('itemData.tsv'):
        items_by_name.setdefault(row['name_ja'], []).append(row)

    exported_items = []
    for o in Item.objects.all():
        data = A16ItemFullSerializer(o).data
        name_ja = o.item_ja.name
        matching_rows = items_by_name.get(name_ja, [])
        if not matching_rows:
            raise ValueError(f"itemData.tsv has no item matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            raise ValueError(f"itemData.tsv has multiple items matching Japanese name {name_ja!r}")
        row = matching_rows[0]
        enum = row['enum'].strip()
        if not enum:
            raise ValueError(f"itemData.tsv has no enum for Japanese item {name_ja!r}")
        data['name'] = localized_name(row)
        data['enum'] = enum
        exported_items.append((o.slug, data))

    for slug, data in exported_items:
        if not data.get('enum', '').strip():
            raise ValueError(f"Item {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_categories():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'categories')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for o in Category.objects.all():
        data = A16CategoryDataSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_monsters():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'monsters')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for o in Monster.objects.all():
        data = A16MonsterSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_books():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'shallie', 'recipe-books')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    books_by_name = {}
    for row in read_tsv_rows('item_book.tsv'):
        books_by_name.setdefault(row['name_ja'], []).append(row)

    exported_books = []
    for o in Book.objects.all():
        data = A16BookSerializer(o).data
        name_ja = o.item_ja.name
        matching_rows = books_by_name.get(name_ja, [])
        if not matching_rows:
            raise ValueError(f"item_book.tsv has no book matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            raise ValueError(f"item_book.tsv has multiple books matching Japanese name {name_ja!r}")
        row = matching_rows[0]
        enum = row['BookTag'].strip()
        if not enum:
            raise ValueError(f"item_book.tsv has no BookTag for Japanese book {name_ja!r}")
        data['name'] = localized_name(row)
        data['enum'] = enum
        exported_books.append((o.slug, data))

    for slug, data in exported_books:
        if not data.get('enum', '').strip():
            raise ValueError(f"Book {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


export_properties()
export_effects()
export_items()
export_categories()
export_monsters()
export_areadata()
export_books()