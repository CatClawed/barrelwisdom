import ast
from scripts.util import import_generic
from games.A25RW.models import *

def desc_replace(row, values, values2, kind='desc'):
    langs = ['ENG', 'JPN', 'CHT', 'CHS', 'KOR']
    for lang in langs:
        for i in range(0, len(values)):
            if values[i] != values2[i]:
                row[f'{kind}_{lang}'] = row[f'{kind}_{lang}'].replace('{'+str(i)+'}', f'{abs(values[i])}~{abs(values2[i])}')
            else:
                row[f'{kind}_{lang}'] = row[f'{kind}_{lang}'].replace('{'+str(i)+'}', f'{abs(values[i])}')

def eval_objects(row, fields):
    for field in fields:
        row[field] = ast.literal_eval(row[field])

def get_text(row, kind='text'):
    text_en=row[f'{kind}_ENG']
    text_ja=row[f'{kind}_JPN']
    text_tc=row[f'{kind}_CHT']
    text_sc=row[f'{kind}_CHS']
    text_ko=row[f'{kind}_KOR']
    try:
        obj = Text.objects.get(
            text_en=text_en,
            text_ja=text_ja,
            text_tc=text_tc,
            text_sc=text_sc,
            text_ko=text_ko,
        )
    except:
        obj = Text(
            text_en=text_en,
            text_ja=text_ja,
            text_tc=text_tc,
            text_sc=text_sc,
            text_ko=text_ko,
        )
        obj.save()
    return obj

def neat_strings(row, index):
    get_text(row, 'text')

def category(row, index):
    if row['text_ENG']:
        try:
            obj = Category.objects.get(gid=row['CategoryId'])
            print("Update Category: ", row['CategoryId'], row['text_ENG'])
        except:
            obj = Category(
                gid=row['CategoryId'],
                index=index-1
            )
            print("Create Category: ", row['CategoryId'], row['text_ENG'])

        obj.name = get_text(row)
        obj.save()

def trait(row, index):
    if row['text_ENG'] and row['EnabledFlag'] == '1' and row['DlcId'] == '0':
        try:
            obj = Trait.objects.get(gid=row['TraitId'])
            print("Update Trait: ", row['TraitId'], row['text_ENG'])
        except:
            obj = Trait(
                gid=row['TraitId']
            )
            print("Create Trait: ", row['TraitId'], row['text_ENG'])

        eval_objects(row, ['Value1_1', 'Value1_2', 'Value2_1', 'Value2_2'])
        desc_replace(row,
            [row['Value1_1'], row['Value2_1']],
            [row['Value1_2'], row['Value2_1']]
        )
        obj.name = get_text(row)
        obj.desc = get_text(row, 'desc')
        obj.grade  = row['Grade']
        obj.val1_1 = row['Value1_1']
        obj.val1_2 = row['Value1_2'] if row['Value1_2'] != row['Value1_1'] else None
        obj.val2_1 = row['Value2_1'] if row['Value2_1'] != 0 else None
        obj.val2_2 = row['Value2_2'] if row['Value2_2'] != row['Value2_1'] else None
        obj.syn = True if row['Synthesis'] == '1' else False
        obj.com = True if row['Combat'] == '1' else False
        obj.res = True if row['Restoratives'] == '1' else False
        obj.inh = True if row['Inhibitor'] == '1' else False
        obj.boo = True if row['Boost'] == '1' else False
        obj.wep = True if row['Weapons'] == '1' else False
        obj.arm = True if row['Armor'] == '1' else False
        obj.acc = True if row['Accessories'] == '1' else False
        obj.sta = True if row['Starpearls'] == '1' else False
        obj.exp = True if row['Exploration'] == '1' else False
        obj.gatherable = True if row['GatherableFlag'] == '0' else False
        obj.icon = row['Icon']
        obj.index = row['Index']
        if row['Combo1']:
            try:
                obj.combo1 = Trait.objects.get(name__text_en=row['Combo1'])
                obj.combo2 = Trait.objects.get(name__text_en=row['Combo2'])
            except:
                pass # probably just run twice
        obj.save()

def gift(row, index):
    if row['text_ENG']:
        try:
            obj = Gift.objects.get(gid=row['ReinforceTalentId'])
            print("Update Gift: ", row['ReinforceTalentId'], row['TraitName'])
        except:
            obj = Gift(
                gid=row['ReinforceTalentId']
            )
            print("Create Gift: ", row['ReinforceTalentId'], row['TraitName'])
        obj.character = get_text(row)
        obj.trait = Trait.objects.get(gid=row['TraitId'])
        obj.lc = row['Color1'].lower()
        obj.rc = row['Color2'].lower()
        obj.save()

def usable_effect(row, index):
    if row['Index'] != '0' and row['text_ENG']:
        try:
            obj = Effect.objects.get(gid=row['SkillId'], usable=True)
            print("Update UsableEffect: ", row['SkillId'], row['text_ENG'])
        except:
            obj = Effect(
                gid=row['SkillId'],
                usable=True,
            )
            print("Create UsableEffect: ", row['SkillId'], row['text_ENG'])
        obj.name = get_text(row)
        eval_objects(row, ['Values1', 'Values2'])
        desc_replace(row,
            [row['Values1'][0],row['Values1'][2],row['Values1'][4],row['Values1'][6],row['Values1'][8],],
            [row['Values2'][0],row['Values2'][2],row['Values2'][4],row['Values2'][6],row['Values2'][8],]
        )
        obj.desc = get_text(row, 'desc')
        obj.val0_1 = row['Values1'][0]
        obj.val0_2 = row['Values2'][0] if row['Values1'][0] != row['Values2'][0] else None
        obj.val1_1 = row['Values1'][2] if row['Values1'][2] else None
        obj.val1_2 = row['Values2'][2] if row['Values1'][2] != row['Values2'][2] else None
        obj.val2_1 = row['Values1'][4] if row['Values1'][4] else None
        obj.val2_2 = row['Values2'][4] if row['Values1'][4] != row['Values2'][4] else None
        obj.val3_1 = row['Values1'][6] if row['Values1'][6] else None
        obj.val3_2 = row['Values2'][6] if row['Values1'][6] != row['Values2'][6] else None
        obj.val4_1 = row['Values1'][8] if row['Values1'][8] else None
        obj.val4_2 = row['Values2'][8] if row['Values1'][8] != row['Values2'][8] else None
        obj.flag = True if row['Flag'] != '0' else False
        obj.index = row['Index']
        obj.save()

def other_effect(row, index):
    if row['text_ENG'] == 'Learn Recipe':
        pass
    elif row['text_ENG'] == 'No Effect':
        try:
            obj = Effect.objects.get(name__text_en='No Effect', usable=False)
            print("Update OtherEffect: ", row['EffectId'], row['text_ENG'])
        except:
            obj = Effect(
                gid=row['EffectId'],
                usable=False,
            )
            print("Create OtherEffect: ", row['EffectId'], row['text_ENG'])
        obj.name = get_text(row)
        obj.desc = get_text(row, 'desc')
        obj.val0_1 = 0
        obj.index = 0
        obj.flag = False
        obj.save()
    elif row['Index'] != '0' and row['desc_ENG']:
        try:
            obj = Effect.objects.get(gid=row['EffectId'], usable=True)
            print("Update OtherEffect: ", row['EffectId'], row['text_ENG'])
        except:
            obj = Effect(
                gid=row['EffectId'],
                usable=True,
            )
            print("Create OtherEffect: ", row['EffectId'], row['text_ENG'])
        obj.name = get_text(row)
        if row['ValueTag0'] != 'CHANGE_COLOR':
            eval_objects(row, ['Value0_1', 'Value0_2',
                               'Value1_1', 'Value1_2',
                               'Value2_1', 'Value2_2',
                               'Value3_1', 'Value3_2',])
            obj.val0_1 = row['Value0_1']
            obj.val0_2 = row['Value0_2'] if row['Value0_1'] != row['Value0_2'] else None
            obj.val1_1 = row['Value1_1'] if row['Value1_1'] else None
            obj.val1_2 = row['Value1_2'] if row['Value1_1'] != row['Value1_2'] else None
            obj.val2_1 = row['Value2_1'] if row['Value2_1'] else None
            obj.val2_2 = row['Value2_2'] if row['Value2_1'] != row['Value2_2'] else None
            obj.val3_1 = row['Value3_1'] if row['Value3_1'] else None
            obj.val3_2 = row['Value3_2'] if row['Value3_1'] != row['Value3_2'] else None

            desc_replace(row,
                [row['Value0_1'],row['Value1_1'],row['Value2_1'],row['Value3_1'],],
                [row['Value0_2'],row['Value1_2'],row['Value2_2'],row['Value3_2'],]
            )
        else:
            obj.val0_1 = 0
        obj.desc = get_text(row, 'desc')

        obj.flag = True if row['Flag'] != '0' else False
        obj.index = row['Index']
        obj.dlc = True if row['DlcId'] else False
        obj.save()

def item(row, index):
    if row['text_ENG']:
        try:
            obj = Item.objects.get(gid=row['ItemId'])
            print("Update Item: ", row['ItemId'], row['text_ENG'])
        except:
            obj = Item(gid=row['ItemId'])
            print("Create Item: ", row['ItemId'], row['text_ENG'])

        eval_objects(row, ['FlavorText'])
        obj.index = row['Index']
        obj.visible = True if row['Flag4'] == '1' else False
        obj.dlc = True if row['DLC'] else False
        obj.name = get_text(row)
        obj.icon = row['Type']

        if row['Type'] == 'guide-ingredients':
            obj.c1l = row['Color3'].lower()
            obj.c1r = row['Color4'].lower()
            obj.c2l = row['Color5'].lower()
            obj.c2r = row['Color6'].lower()
            obj.c3l = row['Color7'].lower()
            obj.c3r = row['Color8'].lower()
            obj.c4l = row['Color9'].lower()
            obj.c4r = row['Color10'].lower()
            obj.c5l = row['Color11'].lower()
            obj.c5r = row['Color12'].lower()
        elif row['Type'] == 'category-41' and 'Iris' not in row['text_ENG']:
            obj.c1l = row['Color1'].lower()
            obj.c1r = row['Color2'].lower()
        elif row['Type'] and row['Type'] != 'category-41' and row['Type'] != 'guide-important-color':
            obj.c1l = row['Color1'].lower()
            obj.c1r = row['Color2'].lower()

        if 'flavor1' in row['FlavorText']:
            obj.desc1 = get_text(row['FlavorText']['flavor1'])
            obj.char1 = Text.objects.get(text_en=row['FlavorText']['char1'])
        if 'flavor2' in row['FlavorText']:
            obj.desc2 = get_text(row['FlavorText']['flavor2'])
            obj.char2 = Text.objects.get(text_en=row['FlavorText']['char2'])
        if 'flavor3' in row['FlavorText']:
            obj.desc3 = get_text(row['FlavorText']['flavor3'])
            obj.char3 = Text.objects.get(text_en=row['FlavorText']['char3'])
        if 'flavor4' in row['FlavorText']:
            obj.desc4 = get_text(row['FlavorText']['flavor4'])
            obj.char4 = Text.objects.get(text_en=row['FlavorText']['char4'])
        obj.save()

        for i in range(1,5):
            if row[f'Category{i}']:
                o = Category.objects.get(name__text_en=row[f'Category{i}'])
                obj.categories.add(o)

def itemeffect(row, index):
    if row['Item'] and row['Name1'] != 'Learn Recipe':
        item = Item.objects.get(gid=row['ItemId'])
        efftype = 'Skill' if row['SkillId1'] else 'Effect'
        dlc = True if row['DlcId'] != 0 else False
        for i in range(1,6):
            if row[f'{efftype}Id{i}']:
                eff = Effect.objects.get(gid=row[f'{efftype}Id{i}']) if row[f'Name{i}'] != 'No Effect' else Effect.objects.get(name__text_en='No Effect')
                if dlc:
                    eff.dlc = dlc
                    eff.save()
                try:
                    obj = ItemEffect.objects.get(item=item, order=i)
                    print("Update ItemEffect: ", row['ItemId'], row['Item'], row[f'Name{i}'])
                except:
                    obj = ItemEffect(item=item, order=i)
                    print("Create ItemEffect: ", row['ItemId'], row['Item'], row[f'Name{i}'])
                obj.effect = eff
                obj.save()

def gatherdata(row, index):
    if row['Area']:
        if row['Floors']:
            eval_objects(row, ['Floors'])
        for i in range(1,4):
            if row[f'ItemName{i}']:
                item = Item.objects.get(gid=row[f'ItemId{i}'])
                if row[f'TraitName{i}']:
                    trait = Trait.objects.get(name__text_en=row[f'TraitName{i}'])
                    item.trait = trait
                    item.save()
                try:
                    obj = GatherData.objects.get(
                        area__text_en=row['Area'],
                        item=item,
                        rank=i,
                        tool=row['GatherType'].lower(),
                        floor_min=row['Floors'][0] if row['Floors'] else None,
                        floor_max=row['Floors'][1] if row['Floors'] else None,
                    )
                except:
                    obj = GatherData(
                        area=Text.objects.get(text_en=row['Area']),
                        item=item,
                        rank=i,
                        tool=row['GatherType'].lower(),
                        floor_min=row['Floors'][0] if row['Floors'] else None,
                        floor_max=row['Floors'][1] if row['Floors'] else None,
                    )
                    obj.save()
                    print("Create GatherData: ", row['Area'], row[f'ItemName{i}'])

def neat_strings(row, index):
    get_text(row, 'text')

import_generic()
