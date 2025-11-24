import ast
from scripts.util import import_generic
from games.A26.items_a26.models import *
from games.A26.misc_a26.models import *
from games.A26.monsters_a26.models import *

def turn_to_csv(row, fields):
    for field in fields:
        # remove brackets, unnecessary spaces
        row[field] = row[field][1:-1].replace("'", '').replace(', ', ',')

def eval_objects(row, fields):
    for field in fields:
        row[field] = ast.literal_eval(row[field])

def get_text(row, kind='text'):
    text_en=row[f'{kind}_eng']
    text_ja=row[f'{kind}_jpn']
    text_tc=row[f'{kind}_cht']
    text_sc=row[f'{kind}_chs']
    text_ko=row[f'{kind}_kor']
    text_fr=row[f'{kind}_fra']
    text_ru=row[f'{kind}_rus']
    text_de=row[f'{kind}_deu']
    text_es=row[f'{kind}_spa']
    try:
        obj = Text.objects.get(
            text_en=text_en,
            text_ja=text_ja,
            text_tc=text_tc,
            text_sc=text_sc,
            text_ko=text_ko,
            text_fr=text_fr,
            text_ru=text_ru,
            text_de=text_de,
            text_es=text_es,
        )
    except:
        obj = Text(
            text_en=text_en,
            text_ja=text_ja,
            text_tc=text_tc,
            text_sc=text_sc,
            text_ko=text_ko,
            text_fr=text_fr,
            text_ru=text_ru,
            text_de=text_de,
            text_es=text_es,
        )
        obj.save()
    return obj

def neat_strings(row, index):
    get_text(row, 'text')

def trait(row, index):
    if int(row['disp_flag']) > 0:
        try:
            obj = Trait.objects.get(tag=row['item_id'])
            print("Update Trait: ", row['item_id'], row['text_eng'])
        except:
            obj = Trait(tag=row['item_id'])
            print("Create Trait: ", row['item_id'], row['text_eng'])

        try:
            obj2 = TraitGroup.objects.get(num=row['item_trait_table_tag'])
        except:
            obj2 = TraitGroup(num=row['item_trait_table_tag'])
            obj2.save()

        obj.name  = get_text(row, 'text')
        obj.desc1 = get_text(row, 'desc')
        if row['desc2_eng']:
            obj.desc2 = get_text(row, 'desc2')

        obj.wep  = True if row['wep'] else False
        obj.arm  = True if row['arm'] else False
        obj.acc  = True if row['acc'] else False
        obj.atk  = True if row['atk'] else False
        obj.heal = True if row['heal'] else False
        obj.buff = True if row['supPar'] else False
        obj.dbf  = True if row['supEne'] else False
        obj.fire = True if row['fire'] else False
        obj.ice  = True if row['ice'] else False
        obj.bolt = True if row['bolt'] else False
        obj.air  = True if row['air'] else False

        obj.no_level = True if row['no_level'] else False
        #obj.group = row['item_trait_table_tag']
        obj.group = obj2
        obj.grade_min = row['grade_min_value']
        obj.grade_max = row['grade_max_value'] if row['grade_min_value'] != row['grade_max_value'] else None

        turn_to_csv(row, ['trait_base', 'hash'])
        eval_objects(row, ['lv_min_rand_range_min', 'lv_min_rand_range_max',
            'lv_max_rand_range_min', 'lv_max_rand_range_max'])
        lv_min_rand_range = ''
        lv_max_rand_range = ''

        for i in range(0, 4):
            if row['lv_min_rand_range_min'][i] == row['lv_min_rand_range_max'][i]:
                lv_min_rand_range += str(row['lv_min_rand_range_min'][i])
            else:
                lv_min_rand_range += str(row['lv_min_rand_range_min'][i]) + ' - ' + str(row['lv_min_rand_range_max'][i])
            if row['lv_max_rand_range_min'][i] == row['lv_max_rand_range_max'][i]:
                lv_max_rand_range += str(row['lv_max_rand_range_min'][i])
            else:
                lv_max_rand_range += str(row['lv_max_rand_range_min'][i]) + ' - ' + str(row['lv_max_rand_range_max'][i])
            if i != 3:
                lv_min_rand_range += ','
                lv_max_rand_range += ','

        obj.lv_min_rand_range = lv_min_rand_range if lv_min_rand_range != '0,0,0,0' else None
        obj.lv_max_rand_range = lv_max_rand_range if lv_max_rand_range != '0,0,0,0' else None
        obj.trait_base = row['trait_base'] if row['trait_base'] != ',,,' else None
        obj.trait_hash = row['hash'] if row['hash'] != ',,,' else None

        # it's your girl jank master here
        # run traits with this commented out first xd
        if row['combo_1']:
            obj.combo1 = Trait.objects.get(name__text_en=row['combo_1'])
            obj.combo2 = Trait.objects.get(name__text_en=row['combo_2'])
            obj.combo3 = Trait.objects.get(name__text_en=row['combo_3'])
            obj.combo4 = Trait.objects.get(name__text_en=row['combo_4'])

        obj.save()

def category(row, index):
    try:
        obj = Category.objects.get(tag=row['tag'])
        print("Update Category: ", row['tag'], row['text_eng'])
    except:
        obj = Category(tag=row['tag'])
        print("Create Category: ", row['tag'], row['text_eng'])

    obj.name = get_text(row, kind='text')
    obj.save()

def material(row, index):
    try:
        obj = Material.objects.get(tag=row['tag'])
        print("Update Material: ", row['tag'], row['text_eng'])
    except:
        obj = Material(tag=row['tag'])
        print("Create Material: ", row['tag'], row['text_eng'])

    obj.name = get_text(row, kind='text')
    obj.save()

def race(row, index):
    try:
        obj = Race.objects.get(tag=row['monster_race_id'])
        print("Update Race: ", row['monster_race_id'], row['text_eng'])
    except:
        obj = Race(tag=row['monster_race_id'])
        print("Create Race: ", row['monster_race_id'], row['text_eng'])

    obj.name = get_text(row, kind='text')
    obj.save()

def effect(row, index):
    if int(row['disp_flag']) > 0:
        try:
            obj = Effect.objects.get(tag=row['item_id'])
            print("Update Effect: ", row['item_id'], row['text_eng'])
        except:
            obj = Effect(tag=row['item_id'])
            print("Create Effect: ", row['item_id'], row['text_eng'])

        obj.name  = get_text(row, 'text')
        obj.desc1 = get_text(row, 'desc')
        if row['desc2_eng']:
            obj.desc2 = get_text(row, 'desc2')
        obj.max_level = row['max_lv']

        row['att_tag'] = row['att_tag'].replace('ATT_NONE', '')

        turn_to_csv(row, ['att_tag', 'act_tag', 'hash_name'])
        eval_objects(row,
            ['prm1_lv_min_rand_range_min', 'prm1_lv_min_rand_range_max',
            'prm1_lv_max_rand_range_min', 'prm1_lv_max_rand_range_max',
            'prm2_lv_min_rand_range_min', 'prm2_lv_min_rand_range_max',
            'prm2_lv_max_rand_range_min', 'prm2_lv_max_rand_range_max',]
        )

        prm1_lv_min_rand_range = ''
        prm1_lv_max_rand_range = ''
        prm2_lv_min_rand_range = ''
        prm2_lv_max_rand_range = ''

        for i in range(0, 8):
            if row['prm1_lv_min_rand_range_min'][i] == row['prm1_lv_min_rand_range_max'][i]:
                prm1_lv_min_rand_range += str(row['prm1_lv_min_rand_range_min'][i])
            else:
                prm1_lv_min_rand_range += str(row['prm1_lv_min_rand_range_min'][i]) + ' - ' + str(row['prm1_lv_min_rand_range_max'][i])
            if row['prm1_lv_max_rand_range_min'][i] == row['prm1_lv_max_rand_range_max'][i]:
                prm1_lv_max_rand_range += str(row['prm1_lv_max_rand_range_min'][i])
            else:
                prm1_lv_max_rand_range += str(row['prm1_lv_max_rand_range_min'][i]) + ' - ' + str(row['prm1_lv_max_rand_range_max'][i])

            if row['prm2_lv_min_rand_range_min'][i] == row['prm2_lv_min_rand_range_max'][i]:
                prm2_lv_min_rand_range += str(row['prm2_lv_min_rand_range_min'][i])
            else:
                prm2_lv_min_rand_range += str(row['prm2_lv_min_rand_range_min'][i]) + ' - ' + str(row['prm2_lv_min_rand_range_max'][i])
            if row['prm2_lv_max_rand_range_min'][i] == row['prm2_lv_max_rand_range_max'][i]:
                prm2_lv_max_rand_range += str(row['prm2_lv_max_rand_range_min'][i])
            else:
                prm2_lv_max_rand_range += str(row['prm2_lv_max_rand_range_min'][i]) + ' - ' + str(row['prm2_lv_max_rand_range_max'][i])

            if i != 7:
                prm1_lv_min_rand_range += ','
                prm1_lv_max_rand_range += ','
                prm2_lv_min_rand_range += ','
                prm2_lv_max_rand_range += ','

        obj.prm1_lv_min_rand_range = prm1_lv_min_rand_range if prm1_lv_min_rand_range != ',,,,,,,' else None
        obj.prm1_lv_max_rand_range = prm1_lv_max_rand_range if prm1_lv_max_rand_range != ',,,,,,,' else None
        obj.prm2_lv_min_rand_range = prm2_lv_min_rand_range if prm2_lv_min_rand_range != ',,,,,,,' else None
        obj.prm2_lv_max_rand_range = prm2_lv_max_rand_range if prm2_lv_max_rand_range != ',,,,,,,' else None
        obj.att_tag = row['att_tag'] if row['att_tag'] != ',,,,,,,' else None
        obj.act_tag = row['act_tag'] if row['act_tag'] != ',,,,,,,' else None
        obj.effect_hash = row['hash_name'] if row['hash_name'] != ',,,,,,,' else None

        obj.save()

def item(row, index):
    if '(Interior)' in row['category'] or (row['disp_flag'] and int(row['disp_flag']) > 0):
        try:
            obj = Item.objects.get(tag=row['item_id'])
            print("Update Item: ", row['item_id'], row['text_eng'])
        except:
            obj = Item(tag=row['item_id'])
            print("Create Item: ", row['item_id'], row['text_eng'])

        eval_objects(row, ['category', 'material'])

        obj.name = get_text(row, 'text')
        obj.desc = get_text(row, 'desc') if row['desc_eng'] else None

        if '(Key Items)' not in row['category'] and '(Exploration Equip.)' not in row['category'] and '(Interior)' not in row['category']:
            obj.resonance = row['range']
            print(row['fire'])
            obj.fire = True if row['fire'] == "True" else False
            obj.ice  = True if row['ice']  == "True" else False
            obj.bolt = True if row['bolt'] == "True" else False
            obj.air  = True if row['air']  == "True" else False
        else:
            obj.resonance = 0
            obj.fire = False
            obj.ice  = False
            obj.bolt = False
            obj.air  = False

        obj.isDLC = True if '(Interior)' not in row['category'] and int(row['disp_flag']) > 1 else False
        obj.atk = row['atk'] if row['atk'] else None
        obj.dfn = row['def'] if row['def'] else None
        obj.spd = row['spd'] if row['spd'] else None
        obj.ct  = row['cool_time'] if row['cool_time'] else None
        obj.aoe = True if row['aoe'] == 'SKILL_RANGE_AREA' else None
        obj.index = index

        obj.save()

        for thing in row['category']:
            obj.cats.add(Category.objects.get(name__text_en=thing))
        for thing in row['material']:
            obj.mats.add(Material.objects.get(name__text_en=thing))

def item_status(row, index):
    create = False
    try:
        obj = ItemStatus.objects.get(tag=row['status_id'])
        print("Update ItemStatus: ", row['status_id'], row['text_eng'])
    except:
        obj = ItemStatus(tag=row['status_id'])
        print("Create ItemStatus: ", row['status_id'], row['text_eng'])
        create = True

    eval_objects(row, ['effect', 'effect_lv'])

    try:
        obj.item = Item.objects.get(tag=row['item_id'])
        obj.quality = row['quality']
        obj.rank = row['rank']
        obj.save()

        # this type of data is always annoying to fetch so uh yolo
        if len(row['effect']) > 0 and create:
            for i in range(0,3):
                if row['effect'][i]:
                    obj2 = IngredientEffect(
                        lv=row['effect_lv'][i],
                        eff=Effect.objects.get(tag=row['effect'][i]))
                    obj2.save()
                    obj.eff.add(obj2)
    except:
        # there's dummy data and this is okay
        print("Error fetching item.", row['item_id'])

def item_recipe(row, index):
    if row['text_eng']:
        create = False
        try:
            obj = Recipe.objects.get(item=Item.objects.get(tag=row['item_tag']))
            print("Update Recipe: ", row['item_tag'], row['text_eng'])
        except:
            obj = Recipe(item=Item.objects.get(tag=row['item_tag']))
            print("Create Recipe: ", row['item_tag'], row['text_eng'])
            create = True

        obj.num = row['make_num']
        obj.sp = row['obtain_skill_point']
        obj.kind = row['recipe_category'].split('_')[-1].lower()

        obj.save()

        if create:
            eval_objects(row, ['material_tag', 'effects', 'reward_prm1', 'residue_cost_fire', 'residue_cost_ice', 'residue_cost_thunder', 'residue_cost_air', 'reward'])
            for i in range(0, 4):
                obj2 = None
                if row['material_tag'][i]:
                    if '_CATEGORY_' not in row['material_tag'][i]:
                        obj2 = RecipeEffect(item=Item.objects.get(tag=row['material_tag'][i]))
                    else:
                        obj2 = RecipeEffect(cat=Category.objects.get(tag=row['material_tag'][i]))
                    obj2.order = i
                    if len(row['effects']) > i and row['effects'][i]['effect_name'] != 'No Effect':
                        obj2.eff = Effect.objects.get(tag=row['effects'][i]['effect_tag'])
                    obj2.save()
                    obj.recipe.add(obj2)
            for i in range(0,10):
                if len(row['reward']) > i:
                    obj3 = RecipeLevel(lv=i+1)
                    t = Text.objects.filter(text_en=row['reward'][i])
                    if len(t) > 1:
                        t = t[1] # bruh
                    else:
                        t = t[0]
                    obj3.reward = t
                    obj3.amt = row['reward_prm1'][i] if row['reward_prm1'][i] else None
                    obj3.fire = row['residue_cost_fire'][i]    if row['residue_cost_fire'][i]    > 0 else None
                    obj3.ice  = row['residue_cost_ice'][i]     if row['residue_cost_ice'][i]     > 0 else None
                    obj3.bolt = row['residue_cost_thunder'][i] if row['residue_cost_thunder'][i] > 0 else None
                    obj3.air  = row['residue_cost_air'][i]     if row['residue_cost_air'][i]     > 0 else None
                    obj3.save()
                    obj.level.add(obj3)

# also quick craft
def furniture_recipe(row, index):
    try:
        item = Item.objects.get(tag=row['item_tag'])
        create = False
        try:
            obj = RecipeMaterial.objects.get(item=item)
            print("Update FRecipe: ", row['item_tag'], row['name'])
        except:
            obj = RecipeMaterial(item=item)
            print("Create FRecipe: ", row['item_tag'], row['name'])
            create = True
        obj.core = row['energy_core_cost'] if row['energy_core_cost'] else None
        obj.comfort = row['comfort_level'] if row['comfort_level'] else None
        obj.cost = row['cost'] if row['cost'] else None
        obj.kind = row['category'][24:].lower()
        obj.save()

        if create:
            for i in range(0,3):
                if row[f'need_item_{i}']:
                    obj2  = NecessaryMaterial(
                        mat=Material.objects.get(name__text_en=row[f'need_item_{i}']),
                        num=row[f'need_num_{i}']
                    )
                    obj2.save()
                    obj.recipe.add(obj2)
    except:
        print('error', row['item_tag'], row['name']) # expected for impact orb

def monster(row, index):
    if row['disp_flag'] and int(row['disp_flag']) > 0:
        try:
            obj = Monster.objects.get(tag=row['monster_id'])
            print("Update Monster: ", row['monster_id'], row['text_eng'])
        except:
            obj = Monster(tag=row['monster_id'])
            print("Create Monster: ", row['monster_id'], row['text_eng'])
        obj.name = get_text(row, 'text')
        obj.desc = get_text(row, 'desc')
        obj.race = Race.objects.get(name__text_en=row['race'])
        obj.break_hits =row['break_symbol']
        obj.break_phys = True if row['break_weak_phys'] == 'True' else False
        obj.hp  = row['star_hp']
        obj.atk = row['star_atk']
        obj.dfn = row['star_def']
        obj.spd = row['star_spd']
        obj.fire = row['fire'].lower()
        obj.ice  = row['ice'].lower()
        obj.bolt = row['bolt'].lower()
        obj.air  = row['air'].lower()
        obj.drop = Item.objects.get(tag=row['drop_tag']) if row['drop_tag'] else None
        obj.rare = Item.objects.get(tag=row['rare_drop_tag']) if row['rare_drop_tag'] else None
        obj.trait = Trait.objects.get(tag=row['trait_id']) if row['trait_id'] else None
        obj.save()

def coord(row, index):
    label = {
        'Memory Vial': 0,
        'Gather (Hand)': 1,
        'Gather (Staff)': 2,
        'Gather (Gun)': 3,
        'Chest': 4,
        'Chest (Minigame)': 5,
        'Chest (Gun)': 6,
        'Monsters': 7,
        'Building Area': 8,
        'Fish': 9,
        'Campsite': 10,
        'Well': 11,
        'Gather (Crate)': 12,
        'Shop': 13,
        'Monsters (2)': 14,
        'Gather (Scan)': 15,
        'Animal': 16,
        'NPC': 17,
        'Giant': 18,
    }
    try:
        obj = Coordinate.objects.get(cid=row['id'])
        print("Update Coord: ", row['id'])
    except:
        obj = Coordinate(cid=row['id'])
        print("Create Coord: ", row['id'])
    obj.x = row['x']
    obj.z = row['z']
    obj.label = label[row['note']]
    if 'reward' in row:
        if row['reward']:
            obj.save()
            eval_objects(row, ['reward'])
            if 'housing_area_id' in row['reward']:
                for i in range(0,5):
                    if row['reward']['comfort_reward_name'][i]:
                        # omg cringe using the en name to lookup
                        obj2 = Item.objects.get(name__text_en=row['reward']['comfort_reward_name'][i])
                        obj2.comfort_goal = row['reward']['comfort_goal'][i]
                        obj2.save()
                        obj2.location.add(obj)
            else:
                for thing in row['reward']:
                    if 'potential_0' in thing:
                        obj2 = Trait.objects.get(tag=thing['potential_0'])
                        obj2.chests.add(obj)
                    elif 'craft_recipe' in thing:
                        for c in thing['craft_recipe']:
                            obj2 = Item.objects.get(tag=c)
                            obj2.location.add(obj)
                    else:
                        obj2 = Item.objects.get(tag=thing['item_id'])
                        obj2.location.add(obj)
    elif 'monster' in row:
        if row['monster']:
            obj.save()
            eval_objects(row, ['monster'])
            obj2 = Monster.objects.get(tag=row['monster']['monster_id'])
            obj2.location.add(obj)
    else:
        obj.save()

def hide_fake():
    items = Item.objects.filter(cats=38)
    for i in items:
        try:
            i.recipematerial
            i.hidden = False
            i.save()
        except:
            print("Hiding ", i.name.text_en)
            i.hidden = True
            i.save()

def quest(row, index):
    try:
        obj = QuestData.objects.get(tag=row['id'])
        print("Update Quest: ", row['id'])
    except:
        obj = QuestData(tag=row['id'])
        print("Create Quest: ", row['id'])
    if row['extra']:
        eval_objects(row, ['quest_name', 'extra', 'reward'])
    else:
        eval_objects(row, ['quest_name', 'reward'])
    obj.name  = get_text(row['quest_name'])
    obj.extra = get_text(row['extra']) if row['extra'] else None
    obj.save()
    if type(row['reward']) is dict:
        for r in row['reward']['reward']:
            obj2 = Item.objects.get(tag=r)
            obj2.quest = obj
            obj2.save()
    else:
        for r in row['reward']:
            obj2 = Item.objects.get(tag=r['reward_hash'])
            obj2.quest = obj
            obj2.save()


#import_generic(coord)

#hide_fake()