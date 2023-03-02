from games.A18.effects_traits_a18.models import *
from games.A18.misc_a18.models import *
from games.A18.items_a18.models import *
import csv
import codecs
import sys


def import_effects(row, index):
    if row[0]:
        print(row[0])
        eff = Effect(
            slug=row[0],
            index=index,
            name_en = row[1],
            desc_en = row[2],
            name_ja = row[3],
            desc_ja = row[4],
            name_sc = row[5],
            desc_sc = row[6],
            name_tc = row[7],
            desc_tc = row[8],
        )
        eff.save()
        if row[10]:
            adv = AdvData(
                attTag0 = row[9],
                actTag0 = row[10],
                min_1_0 = row[11] if row[11] else '',
                max_1_0 = row[12] if row[12] != row[11] else '',
                min_2_0 = row[13] if row[13] else '',
                max_2_0 = row[14] if row[13] != row[13] else '',
            )
            adv.save()
            eff.advanced.add(adv)
        if row[16]:
            adv = AdvData(
                attTag0 = row[15] if row[15] else '',
                actTag0 = row[16],
                min_1_0 = row[17] if row[17] else '',
                max_1_0 = row[18] if row[18] != row[17] else '',
                min_2_0 = row[19] if row[19] else '',
                max_2_0 = row[20] if row[20] != row[19] else '',
            )
            adv.save()
            eff.advanced.add(adv)            

def import_traits(row, index):
    if row[0]:
        print(row[0], row[1], row[2])
        eff = Trait(
            slug=row[0],
            index=index,
            combo1 = Trait.objects.get(slug=row[1]) if row[1] else None,
            combo2 = Trait.objects.get(slug=row[2]) if row[2] else None,
            name_en = row[3],
            desc_en = row[4],
            name_ja = row[5],
            desc_ja = row[6],
            name_sc = row[7],
            desc_sc = row[8],
            name_tc = row[9],
            desc_tc = row[10],
            grade=row[11],
            trans_syn =True if row[12] else False,
            trans_atk =True if row[13] else False,
            trans_heal=True if row[14] else False,
            trans_wpn =True if row[15] else False,
            trans_arm =True if row[16] else False,
            trans_acc =True if row[17] else False,
        )
        eff.save()
        if not row[29]:
            adv = AdvData(
                actTag0 = row[18],
                min_1_0 = row[19] if row[19] else '',
                max_1_0 = row[20] if row[20] != row[19] else '',
            )
            adv.save()
            eff.advanced.add(adv)
        else:
            adv = AdvData(
                attTag0 = row[28] if row[28] else '',
                actTag0 = row[29],
                min_1_0 = row[30] if row[30] else '',
                max_1_0 = row[31] if row[31] and row[31] != row[30] else '',
                min_2_0 = row[32] if row[32] else '',
                max_2_0 = row[33] if row[33] and row[33] != row[32] else '',
            )
            adv.save()
            eff.advanced.add(adv)
        if not row[35]:
            if row[21]:
                adv = AdvData(
                    actTag0 = row[21],
                    min_1_0 = row[22] if row[22] else '',
                    max_1_0 = row[23] if row[23] != row[22] else '',
                )
                adv.save()
                eff.advanced.add(adv)
        else:
            adv = AdvData(
                attTag0 = row[34] if row[34] else '',
                actTag0 = row[35],
                min_1_0 = row[36] if row[36] else '',
                max_1_0 = row[37] if row[37] and row[36] != row[37] else '',
                min_2_0 = row[38] if row[38] else '',
                max_2_0 = row[39] if row[39] and row[38] != row[39] else '',
            )
            adv.save()
            eff.advanced.add(adv)

def import_shop(row, index):
    if row[0]:
        print(row[0])
        shop = Shop(
            slug = row[0],
            shop_en = row[1],
            shop_ja = row[2],
            shop_sc = row[3],
            shop_tc = row[4]
        )
        shop.save()

def import_character(row, index):
    if row[0]:
        print(row[0])
        obj = Character(
            slug = row[0],
            char_en = row[1],
            char_ja = row[2],
            char_sc = row[3],
            char_tc = row[4]
        )
        obj.save()

def import_catalyst_action(row, index):
    if row[0]:
        print(row[0])
        obj = CatalystAction(
            cat_en = row[0],
            cat_ja = row[1],
            cat_sc = row[2],
            cat_tc = row[3]
        )
        obj.save()

def import_component(row, index):
    if row[0]:
        print(row[0])
        obj = Component(
            name_en = row[0],
            name_ja = row[1],
            name_sc = row[2],
            name_tc = row[3],
            color = row[4].lower(),
            value = row[5]
        )
        obj.save()

def import_category(row, index):
    if row[0]:
        print(row[0])
        obj = Category(
            slug = row[0],
            cat_en = row[1],
            cat_ja = row[2],
            cat_sc = row[3],
            cat_tc = row[4],
            icon = row[5]
        )
        obj.save()

def add_category_item():
    items = {
        "neutralizer-r": "fuel",
        "neutralizer-b": "poison-mat",
        "neutralizer-y": "medicine-mat",
        "neutralizer-g": "foodstuff",
    }
    for k, v in items.items():
        item = Item.objects.get(slug=k)
        category = Category.objects.get(slug=v)
        item.add.add(category)

def import_item(row, index):
    if row[0]:
        print(row[0])
        obj = Item(
            slug = row[0],
            kind = row[2],
            level = row[3],
            dmin = row[14] if row[14] else None,
            dmax = row[15] if row[15] else None,
            traits = Trait.objects.get(slug=row[16]) if row[16] else None,
            isDLC = True if row[24] else False,
            isDX  = True if row[25] else False,
            index = index
        )
        obj.save()

        for i in range(4,8):
            if row[i]:
                cat = Category.objects.get(cat_en=row[i])
                obj.categories.add(cat)
        
        if row[8]:
            chars = row[8].split(',')
            for char in chars:
                c = Character.objects.get(slug=char)
                obj.chars.add(c)

        if row[9] or row[10] or row[11] or row[12] or row[13]:
            obj2 = Equip(
                item = obj,
                hp  = row[9]  if row[9]  else 0,
                mp  = row[10] if row[10] else 0,
                atk = row[11] if row[11] else 0,
                dfn = row[12] if row[12] else 0,
                spd = row[13] if row[13] else 0,
            )
            obj2.save()

        for i in range(17, 19):
            if row[i]:
                comp = Component.objects.get(name_en=row[i])
                obj.fixed_components.add(comp)

        for i in range(19, 24):
            if row[i]:
                comp = Component.objects.get(name_en=row[i])
                obj.random_components.add(comp)

def import_item_library(row, index):
    if row[0]:
        print(row[0])
        item = Item.objects.get(slug=row[0])
        item.char1 = Character.objects.get(slug=row[6]) if row[6] else None
        item.char2 = Character.objects.get(slug=row[7]) if row[7] else None
        item.char3 = Character.objects.get(slug=row[8]) if row[8] else None
        item.char4 = Character.objects.get(slug=row[9]) if row[9] else None

        en = BasicText(
            name = row[1],
            desc1 = row[11] if row[11] else "",
            desc2 = row[12] if row[12] else "",
            desc3 = row[13] if row[13] else "",
            desc4 = row[14] if row[14] else "",
        )
        en.save()

        ja = BasicText(
            name = row[2],
            desc1 = row[15] if row[15] else "",
            desc2 = row[16] if row[16] else "",
            desc3 = row[17] if row[17] else "",
            desc4 = row[18] if row[18] else "",
        )
        ja.save()

        sc = BasicText(
            name = row[3],
            desc1 = row[19] if row[19] else "",
            desc2 = row[20] if row[20] else "",
            desc3 = row[21] if row[21] else "",
            desc4 = row[22] if row[22] else "",
        )
        sc.save()

        tc = BasicText(
            name = row[4],
            desc1 = row[23] if row[23] else "",
            desc2 = row[24] if row[24] else "",
            desc3 = row[25] if row[25] else "",
            desc4 = row[26] if row[26] else "",
        )
        tc.save()

        item.item_en = en
        item.item_ja = ja
        item.item_sc = sc
        item.item_tc = tc

        item.save()

def import_shop_data(row, index):
    if row[0]:
        print(row[0])
        obj = ShopSlot(
            item = Item.objects.get(slug=row[2]),
            index = index,
            shop = Shop.objects.get(slug=row[0]),
            random = True if row[1] else False
        )
        obj.save()

def import_catalyst(row, index):
    if row[0]:
        print(row[0])
        obj = Catalyst(
            item = Item.objects.get(slug=row[0]),
            size = row[1],
            action1 = CatalystAction.objects.get(cat_en=row[2]),
            action2 = CatalystAction.objects.get(cat_en=row[4])  if row[4]  else None,
            action3 = CatalystAction.objects.get(cat_en=row[6])  if row[6]  else None,
            action4 = CatalystAction.objects.get(cat_en=row[8])  if row[8]  else None,
            action5 = CatalystAction.objects.get(cat_en=row[10]) if row[10] else None,
            action6 = CatalystAction.objects.get(cat_en=row[12]) if row[12] else None,
            color1 = row[3].lower(),
            color2 = row[5].lower()  if row[5]  else "",
            color3 = row[7].lower()  if row[7]  else "",
            color4 = row[9].lower()  if row[9]  else "",
            color5 = row[11].lower() if row[11] else "",
            color6 = row[13].lower() if row[13] else "",
        )
        obj.save()

def import_book(row, index):
    if row[0]:
        print(row[0])
        obj = Book(
            book = Item.objects.get(slug=row[0])
        )
        obj.save()
        for i in range(1,7):
            if row[i]:
                item = Item.objects.get(slug=row[i])
                obj.recipes.add(item)

def import_mastery(row, index):
    if row[0]:
        print(row[0])
        obj = ItemMastery(
            desc_en = row[0],
            desc_ja = row[1],
            desc_sc = row[2],
            desc_tc = row[3],
        )
        obj.save()

def import_recipe_data():
    with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter='\t')
        line_num = 0
        prev_item = None
        for row in reader:
            if row[0]:
                item = Item.objects.get(slug=row[0])
                if item != prev_item:
                    prev_item = item
                    line_num = 1
                print(row[0], line_num)

                if row[2]:
                    try:
                        ing = Ingredient(
                            item=Item.objects.get(slug=row[2]),
                            quantity = row[1],
                            synth = item
                        )
                        ing.save()
                    except:
                        ing = Ingredient(
                            cat=Category.objects.get(cat_en=row[2]),
                            quantity = row[1],
                            synth = item
                        )
                        ing.save()
                if row[3]:
                    eline = EffectLines(
                        item = item,
                        color = row[3].lower(),
                        order = line_num
                    )
                    eline.save()
                    for i in range(4,12,2):
                        if row[i]:
                            try:
                                data = EffectData(
                                    effect = Effect.objects.get(slug=row[i]),
                                    num = row[i+1],
                                    line = eline
                                )
                                data.save()
                            except:
                                data = EffectData(
                                    component = Component.objects.get(name_en=row[i]),
                                    num = row[i+1],
                                    line = eline
                                )
                                data.save()
                if row[12]:
                    cat = Category.objects.get(cat_en=row[12])
                    item.catalysts.add(cat)
                
                if row[13] and row[13] != 0:
                    item.wt = row[13]
                    item.stun = row[14]
                if row[15]:
                    item.quantity = row[15]
                if row[16] and row[16] != 0:
                    item.uses = row[16]
                if row[17] and row[13] and row[13] != 0:
                    item.range = row[17].title()
                
                if row[18]:
                    masL = MasteryLine(
                        item = item,
                        level= line_num,
                    )
                    masL.save()
                    for i in range(18,23):
                        if row[i]:
                            mastery = ItemMastery.objects.get(desc_en=row[i])
                            masL.masteries.add(mastery)

                item.save()
                line_num = line_num + 1


def import_generic(function):
    with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter='\t')
        index = 1
        for row in reader:
            function(row, index)
            index = index + 1

#import_generic(import_mastery)
#add_category_item()
#import_recipe_data()