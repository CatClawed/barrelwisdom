from games.A25.misc_a25.models import *
from games.A25.chara_a25.models import *
from games.A25.items_a25.models import *
from games.A25.quest_a25.models import *
import csv
import codecs
import sys
from scripts.util import import_generic, slug_me

# python manage.py shell < scripts/import_a25_csv.py 

def replaceNewline(text):
    return text.replace('\r', '').replace('\n', '<br>')

# Some names can be changed, some can't (without manual input), hence volatile.
def checkName(text_en, text_ja, volatile=False):
    if text_en and text_ja:
        try:
            name = Name.objects.get(text_ja=text_ja)
            if volatile:
                name.text_en = text_en
                name.save()
            return name
        except:
            name = Name(
                text_ja = text_ja,
                text_en = text_en
            )
            name.save()
            return name
    return None

def checkDesc(text_en, text_ja):
    if text_en and text_ja:
        try:
            desc = Desc.objects.get(text_ja=text_ja.replace('\r', '').replace('\n', '<br>'))
            desc.text_en = text_en.replace('\r', '').replace('\n', '<br>')
            desc.save()
            return desc
        except:
            desc = Desc(
                text_ja = text_ja.replace('\r', '').replace('\n', '<br>'),
                text_en = text_en.replace('\r', '').replace('\n', '<br>')
            )
            desc.save()
            return desc
    return None


def ImpFilter(row, index):
    if row["JP"]:
        print(row["EN"])
        obj = Filterable(
            slug = slug_me(row["EN"]),
            text_en=row["EN"],
            text_ja=row["JP"],
            kind=row["kind"],
        )
        obj.save()

# expected kwarg: kind (combat/equipment)
def ImpTrait(row, index, **kwargs):
    if row["Name"]:

        name = checkName(
            text_ja = row["Name"],
            text_en = row["Name en"],
            volatile=True
        )

        desc = checkDesc(
            text_ja = row["Desc"],
            text_en = row["Desc en"]
        )

        try:
            obj = Trait.objects.get(slug=row["Slug"])
            print('Update', row["Name en"])
        except:
            print('Create', row["Name en"])
            obj = Trait(
                slug = row["Slug"],
                kind=Filterable.objects.get(slug=kwargs.get("kind"), kind="item_type"),
                cat=Filterable.objects.get(text_en=row["Cat ID"], kind="combat_type"),
            )
        obj.name=name
        obj.desc=desc
        obj.val1=row["EFF 1-1"]
        obj.val2=row["EFF 1-2"]
        obj.val3=row["EFF 1-3"]
        obj.val4=row["EFF 1-4"]
        obj.val5=row["EFF 1-5"]
        obj.note=row["Notes"]
        obj.index=index
        obj.save()
        # this needs to be changed
        """
        if row["Filter ID"]:
            obj.trans.add(Filterable.objects.get(text_en=row["Filter ID"],  kind="combat_type"))
        if row["Filter ID2"]:
            obj.trans.add(Filterable.objects.get(text_en=row["Filter ID2"], kind="combat_type"))
        """


def ImpResearch(row, index):
    name = checkName(
        text_ja = row["Name"],
        text_en = row["Name en"]
    )

    desc = checkDesc(
        text_ja = row["Desc"],
        text_en = row["Desc en"]
    )

    req = checkDesc(
        text_ja = row["Req"],
        text_en = row["Req en"]
    )

    print(row["Name"])
    obj = Research(
        name=name,
        desc=desc,
        val=row["Research Val"],
        cole=row["Cole"],
        level=row["Lv"],
        kind=Filterable.objects.get(text_en=row["Type"], kind="research"),
        req=req
    )
    obj.save()

def ImpMemoria(row, index):
    limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        volatile=True,
        text_ja = row["Name"],
        text_en = row["EN"]
    )

    skill_name = checkName(
        text_ja = row["Skill jp"],
        text_en = row["Skill en"],
        volatile=True
    )

    skill_desc = checkDesc(
        text_ja = row["Eff"],
        text_en = row["Eff en"]
    )

    try:
        obj = Memoria.objects.get(slug=row["Slug"])
        create = False
        print('update', row["EN"])
    except:
        print('Create', row["EN"])
        create = True
        obj = Memoria(
            slug=row["Slug"],
        )
    obj.name = name
    obj.skill_name=skill_name
    obj.skill_desc=skill_desc
    obj.rarity=row["Rarity"]
    obj.lv1=row["LV1"]
    obj.lv2=row["LV2"]
    obj.lv3=row["LV3"]
    obj.lv4=row["LV4"]
    obj.lv5=row["LV5"]
    obj.hp1    =row["HP 1"]
    obj.spd1   =row["SPD 1"]
    obj.patk1  =row["PATK 1"]
    obj.matk1  =row["MATK 1"]
    obj.pdef1  =row["PDEF 1"]
    obj.mdef1  =row["MDEF 1"]
    obj.hp30   =row["HP 30"]
    obj.spd30  =row["SPD 30"]
    obj.patk30 =row["PATK 30"]
    obj.matk30 =row["MATK 30"]
    obj.pdef30 =row["PDEF 30"]
    obj.mdef30 =row["MDEF 30"]
    obj.limit=limited
    obj.note=replaceNewline(row["Notes"])
    obj.gbl=True if row["Global"] else False
    obj.save()
    if create:
        update = LatestUpdate.objects.first()
        update.memoria.add(obj)

"""Add new events first."""
def ImpChara(row, index):
    limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    title = checkName(
        volatile=True,
        text_ja = row["TITLE"],
        text_en = row["TITLE_EN"]
    )

    try:
        obj = Character.objects.get(slug=row["Slug"])
        print('Updating', row["NAME_EN"], row["TITLE_EN"])
        create = False
        
    except:
        print('Creating', row["NAME_EN"], row["TITLE_EN"])
        create = True
        obj = Character(
            slug=row["Slug"],
        )
    obj.name=name
    obj.title=title
    obj.role=Filterable.objects.get(text_en=row["Role"], kind="role")
    obj.elem=Filterable.objects.get(text_en=row["ATTLIBUTE"], kind="element")
    obj.rarity=row["RARITY"]
    obj.color1=Filterable.objects.get(text_en=row["Trait"], kind="color")
    obj.color2=Filterable.objects.get(text_en=row["Support"], kind="color")
    obj.hp  =row["HP"]
    obj.spd =row["AGI"]
    obj.patk=row["PATK"]
    obj.matk=row["MATK"]
    obj.pdfn=row["PDEF"]
    obj.mdfn=row["MDEF"]
    obj.res_ice=row["Resist ice"]
    obj.res_fir=row["Resist fire"]
    obj.res_imp=row["Resist impact"]
    obj.res_ltn=row["Resist lightning"]
    obj.res_pie=row["Resist piercing"]
    obj.res_sla=row["Resist slashing"]
    obj.res_wnd=row["Resist wind"]
    obj.trait1=Trait.objects.get(name__text_ja=row["GIFT1"])
    obj.trait2=Trait.objects.get(name__text_ja=row["GIFT2"])
    obj.trait3=Trait.objects.get(name__text_ja=row["GIFT3"])
    obj.limit=limited
    obj.note=replaceNewline(row["Notes"])
    obj.gbl=True if row["Global"] else False
    obj.save()
    if create:
        update = LatestUpdate.objects.first()
        update.characters.add(obj)

def ImpPassive(row, index):
    name = checkName(
        text_ja = row["Name"],
        text_en = row["Name en"],
        volatile=True
    )
    desc = checkDesc(
        text_ja = row["Desc"],
        text_en = row["Desc en"]
    )
    char=Character.objects.get(name__text_ja=row["Chara"], title__text_ja=row["Title"])
    try:
        obj = Passive.objects.get(name=name, char=char)
        print('Updating', row["Name en"])
    except Passive.DoesNotExist:
        print('Creating', row["Name en"])
        obj = Passive(
            char=char,
        )
    obj.name=name
    obj.desc=desc
    obj.val=row["Val"]
    obj.save()

def ImpSkill(row, index):
    name = checkName(
        text_ja = row["Name"],
        text_en = row["Name_EN"],
        volatile=True
    )
    desc = checkDesc(
        text_ja = row["EFFECT"],
        text_en = row["EFFECT_EN"]
    )
    char = Character.objects.get(name__text_ja=row["CHARACTER"], title__text_ja=row["TITLE"])
    v0 = row["Val 0"].split('-')
    v1 = row["Val 1"].split('-')
    v2 = row["Val 2"].split('-')
    v3 = row["Val 3"].split('-')
    v4 = row["Val 4"].split('-')
    v5 = row["Val 5"].split('-')
    v6 = row["Val 6"].split('-')
    try:
        obj = Skill.objects.get(char=char,name=name)
        print("Updating Skill", row["Name_EN"])
        
    except Skill.DoesNotExist:
        print("Creating Skill", row["Name_EN"])
        obj = Skill(
            char=char,
            name=name,
        )
    obj.desc=desc
    obj.elem=Filterable.objects.get(text_en=row["ATTLIBUTE"], kind="element")
    obj.area=Name.objects.get(text_en=row["RANGE"])
    obj.wt=int(row["WT"])+200
    obj.index=index
    obj.val0=v0[0] if v0[0] else None
    obj.val1=v1[0] if v1[0] else None
    obj.val2=v2[0] if v2[0] else None
    obj.val3=v3[0] if v3[0] else None
    obj.val4=v4[0] if v4[0] else None
    obj.val5=v5[0] if v5[0] else None
    obj.val6=v6[0] if v6[0] else None
    obj.val0_2=v0[1] if v0[0] != v0[1] else None
    obj.val1_2=v1[1] if v1[0] != v1[1] else None
    obj.val2_2=v2[1] if v2[0] != v2[1] else None
    obj.val3_2=v3[1] if v3[0] != v3[1] else None
    obj.val4_2=v4[1] if v4[0] != v4[1] else None
    obj.val5_2=v5[1] if v5[0] != v5[1] else None
    obj.val6_2=v6[1] if v6[0] != v6[1] else None
    obj.pow1=row["Pow1"] if not row["Pow6"] else row["Pow3"]
    obj.pow2=row["Pow2"] if not row["Pow6"] else row["Pow4"]
    obj.pow3=row["Pow3"] if not row["Pow6"] else row["Pow5"]
    obj.pow4=row["Pow4"] if not row["Pow6"] else row["Pow6"]
    obj.pow5=row["Pow5"] if not row["Pow6"] else row["Pow7"]
    obj.break1=row["Break1"] if not row["Break6"] else row["Break3"]
    obj.break2=row["Break2"] if not row["Break6"] else row["Break4"]
    obj.break3=row["Break3"] if not row["Break6"] else row["Break5"]
    obj.break4=row["Break4"] if not row["Break6"] else row["Break6"]
    obj.break5=row["Break5"] if not row["Break6"] else row["Break7"]
    obj.save()

def ImpMaterials(row, index):
    limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        volatile=True,
        text_ja = row["JP"],
        text_en = row["EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )

    try:
        obj = Item.objects.get(slug=row["Slug"])
        print('Updating', row["EN"])
        obj.name=name
        obj.desc=desc
        obj.kind=Filterable.objects.get(slug="material")
        obj.rarity=row["Rarity"]
        obj.limit=limited
        obj.note=replaceNewline(row["Notes"])
        obj.gbl=True if row["Global"] else False
        obj.save()
        obj = Material.objects.get(item=obj)
        obj.color=Filterable.objects.get(text_en=row["Color"]) if row["Color"] else None
        obj.kind=Filterable.objects.get(text_en=row["Type"])
        obj.save()
    except Item.DoesNotExist:
        print('Creating', row["EN"])
        item = Item(
            slug=row["Slug"],
            name=name,
            desc=desc,
            kind=Filterable.objects.get(slug="material"),
            rarity=row["Rarity"],
            note=replaceNewline(row["Notes"]),
            limit=limited,
            gbl=True if row["Global"] else False
        )
        item.save()
        obj = Material(
            item=item,
            color=Filterable.objects.get(text_en=row["Color"]) if row["Color"] else None,
            kind=Filterable.objects.get(text_en=row["Type"]), # can be redundant
        )
        obj.save()
        update = LatestUpdate.objects.first()
        update.items.add(item)

        if row["Gift 1"]:
            obj.traits.add(Trait.objects.get(name__text_ja=row["Gift 1"]))
        if row["Gift 2"]:
            obj.traits.add(Trait.objects.get(name__text_ja=row["Gift 2"]))

def ImpEquipment(row, index):
    name = checkName(
        volatile=True,
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )

    try:
        obj = Item.objects.get(slug=row["Slug"])
        print('Updating', row["NAME_EN"])
        obj.name=name
        obj.desc=desc
        obj.kind=Filterable.objects.get(slug="equipment", kind="item_type")
        obj.rarity=row["RARITY"]
        obj.note=replaceNewline(row["Notes"])
        obj.gbl=True if row["Global"] else False
        obj.save()
        obj = Equipment.objects.get(item=obj)
        obj.kind=Filterable.objects.get(text_en=row["TYPE"], kind="equipment")
        obj.val_good=row["VAL"]  if row["VAL"]  else None
        obj.val_bad= row["VAL2"] if row["VAL2"] else None
        obj.good_hp   = row["Good1"] if row["Stat 1"] == "HP"   else (row["Good2"] if row["Stat 2"] == "HP"   else 0)
        obj.good_spd  = row["Good1"] if row["Stat 1"] == "AGI"  else (row["Good2"] if row["Stat 2"] == "AGI"  else 0)
        obj.good_patk = row["Good1"] if row["Stat 1"] == "PATK" else (row["Good2"] if row["Stat 2"] == "PATK" else 0)
        obj.good_matk = row["Good1"] if row["Stat 1"] == "MATK" else (row["Good2"] if row["Stat 2"] == "MATK" else 0)
        obj.good_pdef = row["Good1"] if row["Stat 1"] == "PDEF" else (row["Good2"] if row["Stat 2"] == "PDEF" else 0)
        obj.good_mdef = row["Good1"] if row["Stat 1"] == "MDEF" else (row["Good2"] if row["Stat 2"] == "MDEF" else 0)
        obj.bad_hp    = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "HP"   else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "HP"   else 0)
        obj.bad_spd   = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "AGI"  else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "AGI"  else 0)
        obj.bad_patk  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "PATK" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "PATK" else 0)
        obj.bad_matk  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "MATK" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "MATK" else 0)
        obj.bad_pdef  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "PDEF" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "PDEF" else 0)
        obj.bad_mdef  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "MDEF" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "MDEF" else 0)
        obj.save()

    except Item.DoesNotExist:
        print('Creating', row["NAME_EN"])
        item = Item(
            slug=row["Slug"],
            name=name,
            desc=desc,
            kind=Filterable.objects.get(slug="equipment", kind="item_type"),
            rarity=row["RARITY"],
            note=replaceNewline(row["Notes"]),
            gbl=True if row["Global"] else False
        )
        item.save()

        obj = Equipment(
            item=item,
            kind=Filterable.objects.get(text_en=row["TYPE"], kind="equipment"),
            val_good=row["VAL"]  if row["VAL"]  else None,
            val_bad= row["VAL2"] if row["VAL2"] else None,
            good_hp   = row["Good1"] if row["Stat 1"] == "HP"   else (row["Good2"] if row["Stat 2"] == "HP"   else 0),
            good_spd  = row["Good1"] if row["Stat 1"] == "AGI"  else (row["Good2"] if row["Stat 2"] == "AGI"  else 0),
            good_patk = row["Good1"] if row["Stat 1"] == "PATK" else (row["Good2"] if row["Stat 2"] == "PATK" else 0),
            good_matk = row["Good1"] if row["Stat 1"] == "MATK" else (row["Good2"] if row["Stat 2"] == "MATK" else 0),
            good_pdef = row["Good1"] if row["Stat 1"] == "PDEF" else (row["Good2"] if row["Stat 2"] == "PDEF" else 0),
            good_mdef = row["Good1"] if row["Stat 1"] == "MDEF" else (row["Good2"] if row["Stat 2"] == "MDEF" else 0),
            bad_hp    = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "HP"   else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "HP"   else 0),
            bad_spd   = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "AGI"  else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "AGI"  else 0),
            bad_patk  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "PATK" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "PATK" else 0),
            bad_matk  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "MATK" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "MATK" else 0),
            bad_pdef  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "PDEF" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "PDEF" else 0),
            bad_mdef  = row["Crap1"] if row["Crap1"] and row["Stat 1"] == "MDEF" else (row["Crap2"] if row["Crap2"] and row["Stat 2"] == "MDEF" else 0),
        )
        obj.save()
        update = LatestUpdate.objects.first()
        update.items.add(item)

def ImpCombatItem(row, index):
    #limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        volatile=True,
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )
    try:
        obj = Item.objects.get(slug=row["Slug"])
        print('Updating', row["NAME_EN"])
        obj.name=name
        obj.desc=desc
        obj.kind=Filterable.objects.get(slug="combat", kind="item_type")
        obj.rarity=row["RARITY"]
        obj.gbl=True if row["Global"] else False
        obj.save()
        obj = CombatItem.objects.get(item=obj)
        obj.kind=Filterable.objects.get(text_en=row["Filter Trait"], kind="combat_type")
        obj.elem=Filterable.objects.get(text_en=row["Element"], kind="element") if row["Element"] else None
        obj.area=Name.objects.get(text_en=row["Range"])
        obj.val_good=row["valSSR"] if row["valSSR"] else 0
        obj.val_bad=row["valSR"] if row["valSR"] else 0
        obj.pow_good=row["Power 1"] if row["Power 1"] else 0
        obj.pow_bad=row["Power 2"] if row["Power 2"] else 0
        obj.uses=row["USES"]
        obj.save()
    except Item.DoesNotExist:
        print('Creating', row["NAME_EN"])
        item = Item(
            slug=row["Slug"],
            name=name,
            desc=desc,
            kind=Filterable.objects.get(slug="combat", kind="item_type"),
            rarity=row["RARITY"],
            gbl=True if row["Global"] else False
        )
        item.save()

        obj = CombatItem(
            item=item,
            kind=Filterable.objects.get(text_en=row["Filter Trait"], kind="combat_type"),
            elem=Filterable.objects.get(text_en=row["Element"], kind="element") if row["Element"] else None,
            area=Name.objects.get(text_en=row["Range"]),
            val_good=row["valSSR"] if row["valSSR"] else 0,
            val_bad=row["valSR"] if row["valSR"] else 0,
            pow_good=row["Power 1"] if row["Power 1"] else 0,
            pow_bad=row["Power 2"] if row["Power 2"] else 0,
            uses=row["USES"],
        )
        obj.save()
        update = LatestUpdate.objects.first()
        update.items.add(item)
    
def ImpRecipe(row, index):
    rStory = RecipeTab.objects.get(order=1)
    rExtra = RecipeTab.objects.get(order=2)
    rEvent = RecipeTab.objects.get(order=3)
    item = Item.objects.get(name__text_ja=row["NAME"])
    gbl = True if row["Global"] else False
    limited = row["Page Name"] if len(row["Page Name"]) > 1 else None
    if limited:
        print(limited)
        limited = Desc.objects.get(text_ja=limited)
    tab = rStory
    if row["Page Type"] == '2':
        tab = rExtra
    if row["Page Type"] == '3':
        tab = rEvent
    try:
        rPage = RecipePage.objects.get(book=row["Book"])
    except:
        print("Page Created", row["Book"])
        rPage = RecipePage(
            book=row["Book"],
            min_x=row["X"],
            max_x=row["X"],
            tab=tab,
            desc=limited,
        )
    rPage.tab=tab
    rPage.gbl=gbl
    rPage.save()

    # TODO: ensure gbl flips adds items to update.
    item.gbl=gbl
    item.limit=limited
    item.save()

    unlock1 = checkDesc(
        text_ja = row["UNLOCK1"],
        text_en = row["UNLOCK1_EN"]
    )
    unlock2 = checkDesc(
        text_ja = row["UNLOCK2"],
        text_en = row["UNLOCK2_EN"]
    )
    unlock3 = checkDesc(
        text_ja = row["UNLOCK3"],
        text_en = row["UNLOCK3_EN"]
    )

    try:
        obj = Recipe.objects.get(item=item)
        print("Updating", row["NAME"])
    except Recipe.DoesNotExist:
        print("Creating", row["NAME"])
        obj = Recipe(item=item)

    obj.page=rPage
    obj.x=row["X"]
    obj.y=row["Y"]
    obj.book=row["Book"]
    obj.char1=Character.objects.filter(name__text_ja=row["Support 1"]).last()
    obj.char2=Character.objects.filter(name__text_ja=row["Support 2"]).last()
    obj.char3=Character.objects.filter(name__text_ja=row["Support 3"]).last()
    obj.color1=Filterable.objects.get(kind="color", text_en=row["Color1"])
    obj.color2=Filterable.objects.get(kind="color", text_en=row["Color2"])
    obj.color3=Filterable.objects.get(kind="color", text_en=row["Color3"])
    obj.unlock1=unlock1
    obj.unlock2=unlock2
    obj.unlock3=unlock3
    obj.ing1=Item.objects.get(name__text_ja=row["ING1"])
    obj.ing2=Item.objects.get(name__text_ja=row["ING2"]) if row["ING2"] else None
    obj.ing3=Item.objects.get(name__text_ja=row["ING3"]) if row["ING3"] else None
    obj.quant1=row["#1"]
    obj.quant2=row["#2"] if row["#2"] else None
    obj.quant3=row["#3"] if row["#3"] else None
    obj.save()
    rPage.max_x=row["X"]
    rPage.save()

def GetReward(item, order, quantity=0):
    obj = Reward(
        item=Item.objects.get(name__text_ja=item),
        order=order,
        num=quantity if quantity else None
    )
    obj.save()
    return obj


def ImpTraining(row, index):
    if row["Quest Type"] == '1':
        name = checkName(
            text_ja = row["Name"],
            text_en = row["En"],
            volatile=True
        )

        print(row["En"], row["Training Quest Name_EN"])

        obj = Training(
            name=name,
            kind=Filterable.objects.get(text_en=row["Training Quest Name"]),
            combat_level=row["Rec Combat"],
            exp=row["Exp"],
        )
        obj.save()
        for i in range(2,8):
            if row["Reward"+str(i)]:
                reward = GetReward(row["Reward"+str(i)],i-1)
                obj.rewards.add(reward)

## Only Show New Content because you suck at coding
def ImpScoreBattle(row, index):
    diff = {
        'Normal': 1,
        'Hard': 2,
        'Very Hard': 3
    }
    if row["Quest Type"] == '2':
        info = row["Score Battle ID"].split('-')
        name = checkName(
            text_ja = row["Name"],
            text_en = row["En"],
            volatile=True
        )
        try:
            sb = ScoreBattle.objects.get(chapter=info[0], section=info[1])
            sb.gbl=True if row["Global"] else False
            sb.save()
        except ScoreBattle.DoesNotExist:
            sb = ScoreBattle(
                name=name,
                chapter=info[0],
                section=info[1],
                gbl=True if row["Global"] else False
            )
            sb.save()

        print(row["En"], row["Diff"], sb.name.text_en)

        obj = sb.difficulties.filter(difficulty=diff[row['Diff']])

        if len(obj) == 0:
            print("New Difficulty")
            obj = ScoreBattleDifficulties(
                combat_level=row["Rec Combat"],
                exp=row["Exp"],
                cole=row["SB#5-1"],
                difficulty=diff[row['Diff']]
            )
            obj.save()
            for i in range(2,6):
                if row["SB Reward 5-"+str(i)]:
                    reward = GetReward(row["SB Reward 5-"+str(i)],i-1,row["SB#5-"+str(i)])
                    obj.rewards.add(reward)
            sb.difficulties.add(obj)
        

def ImpTower(row, index):
    if row["Quest Type"] == '4':
        floor=int(row['En'].split(' ')[0])
        try:
            obj=Tower.objects.get(floor=floor)
        except:
            print("Creating", row['En'])
            obj = Tower(
                floor=floor,
                combat_level=row["Rec Combat"],
            )
            obj.save()
            for i in range(2,6):
                if row["Tower"+str(i)]:
                    reward = GetReward(row["Tower"+str(i)],i-1,row["T#"+str(i)])
                    obj.rewards.add(reward)
        
def ImpDungeon(row, index):
    heck = {
        "I]": 1,
        "II]": 2,
        "III]": 3,
        "IV]": 4,
        "V]": 5,
        "VI]": 6,
        "VII]": 7,
        "VIII]": 8,
        "IX]": 9,
        "X]": 10,
    }
    if row["Quest Type"] == '3':
        floor = heck[row['Name'].split('：')[1]]
        data_jp = row['Name'].split('[')[0]
        data_en = row['En'].split(' [Risk ')[0]
        name = checkName(
            text_ja = data_jp,
            text_en = data_en,
            volatile=True
        )
        try:
            dun=Dungeon.objects.get(name__text_ja=data_jp)
            dun.gbl = True if row["Global"] else False
            dun.save()
            print("Found", data_en, data_jp, floor)
        except:
            print("Creating", data_en, data_jp, floor)
            dun = Dungeon(
                name=name,
                gbl = True if row["Global"] else False
            )
            dun.save()
        try:
            obj = DungeonFloor.objects.get(dungeon=dun, order=floor)
            obj.save()
            print("Old floor", floor)
        except:
            print("Creating Floor", floor)
            obj = DungeonFloor(
                dungeon=dun,
                order=floor,
                combat_level=row["Rec Combat"],
            )
            obj.save()
            for i in range(1,7):
                if row["Dungeon"+str(i)]:
                    reward = GetReward(row["Dungeon"+str(i)],i)
                    obj.rewards.add(reward)
                    if floor == 1 or floor == 9:
                        dun.rewards.add(reward)


"""Run me first for any updates holy shit"""
def createUpdate():
    obj = LatestUpdate()
    obj.save()

    obj = LatestUpdateGBL()
    obj.save()

    print('Update Created')

def print_skill_data():
    skills = Skill.objects.all()

    attackers = []
    defenders = []
    supporters = []
    breakers = []

    for skill in skills:
        arr = [skill.char.name.text_en, skill.char.role.text_en, skill.name.text_en if skill.char.gbl else skill.name.text_ja, skill.pow5, skill.break5]
        match skill.char.role.slug:
            case 'attacker':
                attackers.append(arr)
            case 'defender':
                defenders.append(arr)
            case 'supporter':
                supporters.append(arr)
            case _:
                breakers.append(arr)

    print('Name\tRole\tSkill\tPower\tStun')
    for o in attackers:
        print(f'{o[0]}\t{o[1]}\t{o[2]}\t{o[3]}\t{o[4]}\t')
    for o in defenders:
        print(f'{o[0]}\t{o[1]}\t{o[2]}\t{o[3]}\t{o[4]}\t')
    for o in supporters:
        print(f'{o[0]}\t{o[1]}\t{o[2]}\t{o[3]}\t{o[4]}\t')
    for o in breakers:
        print(f'{o[0]}\t{o[1]}\t{o[2]}\t{o[3]}\t{o[4]}\t')

"""
Checklist
1. createUpdate
2. add events
3. trait -> char/item
4. char -> skill/passive
5. items -> recipes -> quest
6. fuck quest
"""

#createUpdate()

#import_generic(ImpFilter)
#import_generic(ImpTrait, index=1, kind="combat")
#import_generic(ImpTrait, index=100, kind="equipment")
#import_generic(ImpResearch)
#import_generic(ImpMemoria)
#import_generic(ImpChara)
#import_generic(ImpPassive)
#import_generic(ImpSkill)
#import_generic(ImpMaterials)
#import_generic(ImpEquipment)
#import_generic(ImpCombatItem)
#import_generic(ImpRecipe)
#import_generic(ImpTraining)
#import_generic(ImpScoreBattle)
#import_generic(ImpTower)
#import_generic(ImpDungeon)