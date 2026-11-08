from games.A15.effects_a15.models import *
from games.A15.effects_a15.serializers import *
from games.A15.properties_a15.models import *
from games.A15.properties_a15.serializers import *
from games.A15.items_a15.models import *
from games.A15.items_a15.serializers import *
from games.A15.categories_a15.models import *
from games.A15.categories_a15.serializers import *
from games.A15.regions_a15.models import *
from games.A15.regions_a15.serializers import *
from games.A15.monsters_a15.models import *
from games.A15.monsters_a15.serializers import *
import json
import os
import csv

"""
https://github.com/CatClawed/AtelierDatamining
The data in escha_data is from this repo.
"""


def values_match(first, second):
    if first == second:
        return True
    try:
        return float(first) == float(second)
    except ValueError:
        return False


def effect_advanced_data(effect_row):
    advanced = {}
    equal_min_max_pairs = {
        max_field
        for min_field, max_field in (
            ('min', 'max'),
            ('min_1', 'max_1'),
            ('min_2', 'max_2'),
            ('min_3', 'max_3'),
            ('min_4', 'max_4'),
        )
        if effect_row[min_field].strip()
        and values_match(effect_row[min_field].strip(), effect_row[max_field].strip())
    }
    for field in (
        'actTag', 'actTag2', 'min', 'max', 'min_1', 'max_1',
        'min_2', 'max_2', 'min_3', 'max_3', 'min_4', 'max_4',
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


def export_properties():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'properties')
    item_potential_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'item_potential.tsv')
    item_effect_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'item_effect.tsv')
    with open(item_potential_path, newline='', encoding='utf-8') as item_potential_file:
        item_potential_data = csv.DictReader(item_potential_file, delimiter='\t')
        potentials_by_name = {}
        for row in item_potential_data:
            potentials_by_name.setdefault(row['name_ja'], []).append(row)
    with open(item_effect_path, newline='', encoding='utf-8') as item_effect_file:
        item_effect_data = csv.DictReader(item_effect_file, delimiter='\t')
        effects_by_enum = {}
        for row in item_effect_data:
            effects_by_enum.setdefault(row['ItemEffTag'].strip(), []).append(row)

    exported_properties = []
    for o in Property.objects.all():
        data = A15PropertySerializer(o).data
        name_ja = data.get('name', {}).get('ja')
        matching_rows = potentials_by_name.get(name_ja, [])
        if not name_ja or not matching_rows:
            raise ValueError(f"item_potential.tsv has no property matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            raise ValueError(
                f"item_potential.tsv has multiple entries matching Japanese property name {name_ja!r}"
            )
        potential_row = matching_rows[0]
        enum = potential_row['enum'].strip()
        if not enum:
            raise ValueError(f"item_potential.tsv has no enum for Japanese property {name_ja!r}")
        data['enum'] = enum

        advanced = {}
        for field in ('PotBase', 'PotBase2'):
            value = potential_row[field].strip()
            if not value or value == 'ITEM_SUB_BASE_NONE':
                continue

            advanced[field] = value

        advanced_effects = []
        for min_field, max_field in (('min', 'max'), ('min2', 'max2')):
            value = potential_row[min_field].strip()
            if value:
                try:
                    numeric_value = float(value)
                except ValueError:
                    if value.startswith('RACE'):
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
                if numeric_value != 0:
                    advanced[min_field] = value
            max_value = potential_row[max_field].strip()
            if max_value and not (
                value
                and values_match(value, max_value)
            ):
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

def export_effects():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'effects')
    item_effect_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'item_effect.tsv')
    with open(item_effect_path, newline='', encoding='utf-8') as item_effect_file:
        item_effect_data = csv.DictReader(item_effect_file, delimiter='\t')
        item_effects_by_name = {}
        for row in item_effect_data:
            item_effects_by_name.setdefault(row['name_ja'], []).append(row)

    exported_effects = []
    for o in Effect.objects.all():
        data = A15EffectSerializer(o).data
        name_ja = data.get('name', {}).get('ja')
        matching_rows = item_effects_by_name.get(name_ja, [])
        if not name_ja or not matching_rows:
            raise ValueError(f"item_effect.tsv has no effect matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            raise ValueError(
                f"item_effect.tsv has multiple entries matching Japanese effect name {name_ja!r}"
            )
        enum = matching_rows[0]['ItemEffTag'].strip()
        if not enum:
            raise ValueError(f"item_effect.tsv has no ItemEffTag for Japanese effect {name_ja!r}")
        data['enum'] = enum
        data['advanced'] = effect_advanced_data(matching_rows[0])
        exported_effects.append((o.slug, data))

    for slug, data in exported_effects:
        if not data.get('enum', '').strip():
            raise ValueError(f"Effect {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_monsters():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'monsters')
    obj = Monster.objects.all()
    for o in obj:
        data = A15MonsterSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_items():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'items')
    item_data_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'itemData.tsv')
    item_mat_pot_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'item_mat_pot.tsv')
    shop_data_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'ShopData.tsv')
    hom_data_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'HomData.tsv')
    with open(item_data_path, newline='', encoding='utf-8') as item_data_file:
        item_data = list(csv.DictReader(item_data_file, delimiter='\t'))
    with open(item_mat_pot_path, newline='', encoding='utf-8') as item_mat_pot_file:
        item_mat_pot_data = list(csv.DictReader(item_mat_pot_file, delimiter='\t'))
    with open(shop_data_path, newline='', encoding='utf-8') as shop_data_file:
        shop_data = list(csv.DictReader(shop_data_file, delimiter='\t'))
    with open(hom_data_path, newline='', encoding='utf-8') as hom_data_file:
        hom_data = list(csv.DictReader(hom_data_file, delimiter='\t'))

    item_data_by_name = {}
    for row in item_data:
        name_ja = row['name_ja']
        if name_ja in item_data_by_name:
            raise ValueError(f"Duplicate name_ja in ItemData.tsv: {name_ja}")
        item_data_by_name[name_ja] = row

    traits_by_enum = {}
    for row in item_mat_pot_data:
        enum = row['enum'].strip()
        if enum in traits_by_enum:
            raise ValueError(f"Duplicate enum in item_mat_pot.tsv: {enum}")
        traits_by_enum[enum] = row

    shops_by_item_enum = {}
    for row in shop_data:
        if row['EvStart'].strip() == 'EVENT_ZZ01_010':
            continue
        item_enum = row['ItemTag'].strip()
        shop = {
            language: row[f'name_{language}'].strip()
            for language in ('en', 'ja', 'sc', 'tc')
        }
        shops = shops_by_item_enum.setdefault(item_enum, [])
        if shop not in shops:
            shops.append(shop)

    exported_items_by_enum = {}
    obj = Item.objects.all()
    for o in obj:
        serializer = A15ItemFullSerializer(o)
        data = serializer.data
        item_data_row = item_data_by_name.get(o.item_ja.name)
        if item_data_row is None:
            raise ValueError(f"ItemData.tsv has no item matching {o.item_ja.name!r}")
        enum = item_data_row['enum'].strip()
        if not enum:
            raise ValueError(f"ItemData.tsv has no enum for item {o.item_ja.name!r}")
        if enum in exported_items_by_enum:
            raise ValueError(f"Duplicate exported item enum in ItemData.tsv: {enum}")
        data['enum'] = enum
        data['name']['sc'] = item_data_row['name_sc']
        data['name']['tc'] = item_data_row['name_tc']
        shops = shops_by_item_enum.get(enum, [])
        if len(shops) > 1:
            raise ValueError(
                f"Item {o.item_ja.name!r} ({enum}) is listed in multiple shops: "
                f"{[shop['ja'] for shop in shops]}"
            )
        if shops:
            data['shop'] = shops[0]
        for field, trait_field in (('ESP_00', 'trait1'), ('ESP_01', 'trait2')):
            trait_enum = item_data_row[field].strip()
            if not trait_enum:
                continue
            trait_row = traits_by_enum.get(trait_enum)
            if trait_row is None:
                raise ValueError(
                    f"item_mat_pot.tsv has no trait matching {trait_enum!r} "
                    f"for item {o.item_ja.name!r}"
                )
            data[trait_field] = {
                language: trait_row[f'name_{language}']
                for language in ('en', 'ja', 'sc', 'tc')
            }
        exported_items_by_enum[enum] = (o.slug, data)

    homunculus_items = set()
    for row in hom_data:
        item_enum = row['ItemTag'].strip()
        if item_enum in homunculus_items:
            raise ValueError(f"Duplicate ItemTag in HomData.tsv: {item_enum}")
        homunculus_items.add(item_enum)
        item = exported_items_by_enum.get(item_enum)
        if item is None:
            print(f"HomData.tsv has no exported item matching {item_enum!r}")
            continue

        sweet_enum = row['mat'].strip()
        sweet = exported_items_by_enum.get(sweet_enum)
        if sweet is None:
            raise ValueError(
                f"HomData.tsv has no exported sweet item matching {sweet_enum!r} "
                f"for item {item_enum!r}"
            )
        item[1]['homunculus'] = {
            'days': row['day'],
            'sweet': {
                'id': sweet[0],
                'name': sweet[1]['name'],
            },
        }

    for slug, data in exported_items_by_enum.values():
        if not data.get('enum', '').strip():
            raise ValueError(f"Item {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_books():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'recipe-books')
    item_book_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'item_book.tsv')
    shop_data_path = os.path.join(os.getcwd(), 'scripts', 'escha_data', 'ShopData.tsv')
    with open(item_book_path, newline='', encoding='utf-8') as item_book_file:
        item_book_data = csv.DictReader(item_book_file, delimiter='\t')
        books_by_name = {}
        for row in item_book_data:
            books_by_name.setdefault(row['name_ja'], []).append(row)
    with open(shop_data_path, newline='', encoding='utf-8') as shop_data_file:
        shop_data = csv.DictReader(shop_data_file, delimiter='\t')
        shops_by_item_enum = {}
        for row in shop_data:
            if row['EvStart'].strip() == 'EVENT_ZZ01_010':
                continue
            item_enum = row['ItemTag'].strip()
            shop = {
                language: row[f'name_{language}'].strip()
                for language in ('en', 'ja', 'sc', 'tc')
            }
            shops = shops_by_item_enum.setdefault(item_enum, [])
            if shop not in shops:
                shops.append(shop)

    exported_books = []
    for o in Book.objects.all():
        serializer = A15BookSerializer(o)
        data = serializer.data
        name_ja = data.get('name', {}).get('ja')
        matching_rows = books_by_name.get(name_ja, [])
        if not name_ja or not matching_rows:
            raise ValueError(f"item_book.tsv has no book matching Japanese name {name_ja!r}")
        if len(matching_rows) > 1:
            raise ValueError(
                f"item_book.tsv has multiple entries matching Japanese book name {name_ja!r}"
            )
        book_row = matching_rows[0]
        enum = book_row['BookTag'].strip()
        if not enum:
            raise ValueError(f"item_book.tsv has no BookTag for Japanese book {name_ja!r}")
        data['enum'] = enum
        data['name']['sc'] = book_row['name_sc']
        data['name']['tc'] = book_row['name_tc']
        acquisition = data.get('acquisition')
        if isinstance(acquisition, str) and 'shop' in acquisition.casefold():
            del data['acquisition']

        shops = shops_by_item_enum.get(enum, [])
        if len(shops) > 1:
            raise ValueError(
                f"Book {name_ja!r} ({enum}) is listed in multiple shops: "
                f"{[shop['ja'] for shop in shops]}"
            )
        if shops:
            data['shop'] = shops[0]
        exported_books.append((o.slug, data))

    for slug, data in exported_books:
        if not data.get('enum', '').strip():
            raise ValueError(f"Book {slug!r} has no enum; refusing to export")
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


def export_categories():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'categories')
    obj = Category.objects.all()
    for o in obj:
        data = A15CategoryDataSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

def export_regions():
    OUTPUT_DIR = os.path.join(os.getcwd(), 'scripts', 'exports', 'escha', 'locations')
    obj = RegionData.objects.all()
    for o in obj:
        data = A15RegionDataSerializer(o).data
        file_path = os.path.join(OUTPUT_DIR, f"{o.region.slug}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))


#export_properties()
#export_effects()
#export_items()
#export_categories()
#export_monsters()
#export_regions()
#export_books()