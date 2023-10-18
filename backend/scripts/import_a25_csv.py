from games.A25.misc_a25.models import *
from games.A25.chara_a25.models import *
from games.A25.items_a25.models import *
from games.A25.quest_a25.models import *
import csv
import codecs
import sys
from scripts.util import import_generic, slug_me

# python manage.py shell < scripts/import_a25_csv.py 

def checkName(text_en, text_ja):
    if text_en and text_ja:
        try:
            return Name.objects.get(text_ja=text_ja)
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
            return Desc.objects.get(text_ja=text_ja.replace('<br>',''))
        except:
            desc = Desc(
                text_ja = text_ja.replace('<br>',''),
                text_en = text_en
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
            text_en = row["Name en"]
        )

        desc = checkDesc(
            text_ja = row["Desc"],
            text_en = row["Desc en"]
        )

        try:
            obj = Trait.objects.get(slug=slug_me(row["Name en"]))
            print('Update', row["Name en"])
            obj.name=name
            obj.desc=desc
            obj.val1=row["EFF 1-1"]
            obj.val2=row["EFF 1-2"]
            obj.val3=row["EFF 1-3"]
            obj.val4=row["EFF 1-4"]
            obj.val5=row["EFF 1-5"]
            obj.index=index
            obj.save()
        except:
            print('Create', row["Name en"])
            obj = Trait(
                slug = slug_me(row["Name en"], Trait.objects),
                name=name,
                desc=desc,
                kind=Filterable.objects.get(slug=kwargs.get("kind"), kind="item_type"),
                cat=Filterable.objects.get(text_en=row["Cat ID"], kind="combat_type"),
                val1=row["EFF 1-1"],
                val2=row["EFF 1-2"],
                val3=row["EFF 1-3"],
                val4=row["EFF 1-4"],
                val5=row["EFF 1-5"],
                index=index
            )
            obj.save()
            # this needs to be changed
            if row["Filter ID"]:
                obj.trans.add(Filterable.objects.get(text_en=row["Filter ID"],  kind="combat_type"))
            if row["Filter ID2"]:
                obj.trans.add(Filterable.objects.get(text_en=row["Filter ID2"], kind="combat_type"))


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
        text_ja = row["Name"],
        text_en = row["EN"]
    )

    skill_name = checkName(
        text_ja = row["Skill jp"],
        text_en = row["Skill en"]
    )

    skill_desc = checkDesc(
        text_ja = row["Eff"],
        text_en = row["Eff en"]
    )

    try:
        obj = Memoria.objects.get(slug=slug_me(row["EN"]))
        print('update', row["EN"])
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
        obj.save()
    except:
        print('Create', row["EN"])
        obj = Memoria(
            slug=slug_me(row["EN"], Memoria.objects),
            name = name,
            skill_name=skill_name,
            skill_desc=skill_desc,
            rarity=row["Rarity"],
            lv1=row["LV1"],
            lv2=row["LV2"],
            lv3=row["LV3"],
            lv4=row["LV4"],
            lv5=row["LV5"],
            hp1    =row["HP 1"],
            spd1   =row["SPD 1"],
            patk1  =row["PATK 1"],
            matk1  =row["MATK 1"],
            pdef1  =row["PDEF 1"],
            mdef1  =row["PDEF 1"],
            hp30   =row["HP 30"],
            spd30  =row["SPD 30"],
            patk30 =row["PATK 30"],
            matk30 =row["MATK 30"],
            pdef30 =row["PDEF 30"],
            mdef30 =row["MDEF 30"],
            limit=limited,
        )
        obj.save()
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
        text_ja = row["TITLE"],
        text_en = row["TITLE_EN"]
    )

    try:
        obj = Character.objects.get(slug=slug_me(f'{row["NAME_EN"]} {row["TITLE_EN"]}'))
        print('Updating', row["NAME_EN"], row["TITLE_EN"])
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
        obj.save()
    except:
        print('Creating', row["NAME_EN"], row["TITLE_EN"])

        obj = Character(
            slug=slug_me(f'{row["NAME_EN"]} {row["TITLE_EN"]}', Character.objects),
            name=name,
            title=title,
            role=Filterable.objects.get(text_en=row["Role"], kind="role"),
            elem=Filterable.objects.get(text_en=row["ATTLIBUTE"], kind="element"),
            rarity=row["RARITY"],
            color1=Filterable.objects.get(text_en=row["Trait"], kind="color"),
            color2=Filterable.objects.get(text_en=row["Support"], kind="color"),
            hp  =row["HP"],
            spd =row["AGI"],
            patk=row["PATK"],
            matk=row["MATK"],
            pdfn=row["PDEF"],
            mdfn=row["MDEF"],
            res_ice=row["Resist ice"],
            res_fir=row["Resist fire"],
            res_imp=row["Resist impact"],
            res_ltn=row["Resist lightning"],
            res_pie=row["Resist piercing"],
            res_sla=row["Resist slashing"],
            res_wnd=row["Resist wind"],
            trait1=Trait.objects.get(name__text_ja=row["GIFT1"]),
            trait2=Trait.objects.get(name__text_ja=row["GIFT2"]),
            trait3=Trait.objects.get(name__text_ja=row["GIFT3"]),
            limit=limited,
        )
        obj.save()
        update = LatestUpdate.objects.first()
        update.characters.add(obj)

def ImpPassive(row, index):
    name = checkName(
        text_ja = row["Name"],
        text_en = row["Name en"]
    )
    desc = checkDesc(
        text_ja = row["Desc"],
        text_en = row["Desc en"]
    )
    try:
        obj = Passive.objects.get(name=name, char=Character.objects.get(name__text_ja=row["Chara"], title__text_ja=row["Title"]))
        print('Updating', row["Name en"])
        obj.name=name
        obj.desc=desc
        obj.val=row["Val"]
        obj.save()
    except Passive.DoesNotExist:
        print('Creating', row["Name en"])
        obj = Passive(
            char=Character.objects.get(name__text_ja=row["Chara"], title__text_ja=row["Title"]),
            name=name,
            desc=desc,
            val=row["Val"]
        )
        obj.save()

def ImpSkill(row, index):
    name = checkName(
        text_ja = row["Name"],
        text_en = row["Name_EN"]
    )
    desc = checkDesc(
        text_ja = row["EFFECT"],
        text_en = row["EFFECT_EN"]
    )
    char = Character.objects.get(name__text_ja=row["CHARACTER"], title__text_ja=row["TITLE"])
    try:
        obj = Skill.objects.get(char=char,name=name)
        print("Updating Skill", row["Name_EN"])
        obj.desc=desc
        obj.elem=Filterable.objects.get(text_en=row["ATTLIBUTE"], kind="element")
        obj.area=Name.objects.get(text_en=row["RANGE"])
        obj.wt=row["WT"]
        obj.index=index
        obj.val0=row["Val 0"] if row["Val 0"] else None
        obj.val1=row["Val 1"] if row["Val 1"] else None
        obj.val2=row["Val 2"] if row["Val 2"] else None
        obj.val3=row["Val 3"] if row["Val 3"] else None
        obj.val4=row["Val 4"] if row["Val 4"] else None
        obj.val5=row["Val 5"] if row["Val 5"] else None
        obj.val6=row["Val 6"] if row["Val 6"] else None
        obj.pow1=row["Pow1"]
        obj.pow2=row["Pow2"]
        obj.pow3=row["Pow3"]
        obj.pow4=row["Pow4"]
        obj.pow5=row["Pow5"]
        obj.break1=row["Break1"]
        obj.break2=row["Break2"]
        obj.break3=row["Break3"]
        obj.break4=row["Break4"]
        obj.break5=row["Break5"]
        obj.save()
    except Skill.DoesNotExist:
        print("Creating Skill", row["Name_EN"])
        obj = Skill(
            char=char,
            name=name,
            desc=desc,
            elem=Filterable.objects.get(text_en=row["ATTLIBUTE"], kind="element"),
            area=Name.objects.get(text_en=row["RANGE"]),
            wt=row["WT"],
            index=index,
            val0=row["Val 0"] if row["Val 0"] else None,
            val1=row["Val 1"] if row["Val 1"] else None,
            val2=row["Val 2"] if row["Val 2"] else None,
            val3=row["Val 3"] if row["Val 3"] else None,
            val4=row["Val 4"] if row["Val 4"] else None,
            val5=row["Val 5"] if row["Val 5"] else None,
            val6=row["Val 6"] if row["Val 6"] else None,
            pow1=row["Pow1"],
            pow2=row["Pow2"],
            pow3=row["Pow3"],
            pow4=row["Pow4"],
            pow5=row["Pow5"],
            break1=row["Break1"],
            break2=row["Break2"],
            break3=row["Break3"],
            break4=row["Break4"],
            break5=row["Break5"],
        )
        obj.save()

def ImpMaterials(row, index):
    limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        text_ja = row["JP"],
        text_en = row["EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )

    try:
        obj = Item.objects.get(slug=slug_me(row["EN"]))
        print('Updating', row["EN"])
        obj.name=name
        obj.desc=desc
        obj.kind=Filterable.objects.get(slug="material")
        obj.rarity=row["Rarity"]
        obj.limit=limited
        obj.save()
        obj = Material.objects.get(item=obj)
        obj.color=Filterable.objects.get(text_en=row["Color"]) if row["Color"] else None
        obj.kind=Filterable.objects.get(text_en=row["Type"])
        obj.save()
    except Item.DoesNotExist:
        print('Creating', row["EN"])
        item = Item(
            slug=slug_me(row["EN"], Item.objects),
            name=name,
            desc=desc,
            kind=Filterable.objects.get(slug="material"),
            rarity=row["Rarity"],
            limit=limited
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
    limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )

    try:
        obj = Item.objects.get(slug=slug_me(row["NAME_EN"]))
        print('Updating', row["NAME_EN"])
        obj.name=name
        obj.desc=desc
        obj.kind=Filterable.objects.get(slug="equipment", kind="item_type")
        obj.rarity=row["RARITY"]
        obj.limit=limited
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
            slug=slug_me(row["NAME_EN"], Item.objects),
            name=name,
            desc=desc,
            kind=Filterable.objects.get(slug="equipment", kind="item_type"),
            rarity=row["RARITY"],
            limit=limited
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
    limited = Desc.objects.get(text_ja=row["Event"]) if row["Event"] else None
    name = checkName(
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )
    try:
        obj = Item.objects.get(slug=slug_me(row["NAME_EN"]))
        print('Updating', row["NAME_EN"])
        obj.name=name
        obj.desc=desc
        obj.kind=Filterable.objects.get(slug="combat", kind="item_type")
        obj.rarity=row["RARITY"]
        obj.limit=limited
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
            slug=slug_me(row["NAME_EN"], Item.objects),
            name=name,
            desc=desc,
            kind=Filterable.objects.get(slug="combat", kind="item_type"),
            rarity=row["RARITY"],
            limit=limited
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

    try:
        rPage = RecipePage.objects.get(book=row["Book"])
    except:
        print("Page Created", row["Book"])
        tab = rStory
        if row["Book"] in [5,6]:
            tab = rExtra
        if row["Book"] in [7]:
            tab = rEvent
        rPage = RecipePage(
            book=row["Book"],
            min_x=row["X"],
            max_x=row["X"],
            tab=tab,
            desc=item.limit if item.limit else None,
        )
        rPage.save()

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
        obj.page=rPage
        obj.item=item
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
        obj.ing1=Item.objects.get(name__text_en=row["ING1"])
        obj.ing2=Item.objects.get(name__text_en=row["ING2"]) if row["ING2"] else None
        obj.ing3=Item.objects.get(name__text_en=row["ING3"]) if row["ING3"] else None
        obj.quant1=row["#1"]
        obj.quant2=row["#2"] if row["#2"] else None
        obj.quant3=row["#3"] if row["#3"] else None
        obj.save()
        rPage.max_x=row["X"]
        rPage.save()
    except Recipe.DoesNotExist:
        print("Creating", row["NAME"])

        obj = Recipe(
            item=item,
            page=rPage,
            x=row["X"],
            y=row["Y"],
            book=row["Book"],
            char1=Character.objects.filter(name__text_ja=row["Support 1"]).last(), # works for now i guess
            char2=Character.objects.filter(name__text_ja=row["Support 2"]).last(),
            char3=Character.objects.filter(name__text_ja=row["Support 3"]).last(),
            color1=Filterable.objects.get(kind="color", text_en=row["Color1"]),
            color2=Filterable.objects.get(kind="color", text_en=row["Color2"]),
            color3=Filterable.objects.get(kind="color", text_en=row["Color3"]),
            unlock1=unlock1,
            unlock2=unlock2,
            unlock3=unlock3,
            ing1=Item.objects.get(name__text_en=row["ING1"]),
            ing2=Item.objects.get(name__text_en=row["ING2"]) if row["ING2"] else None,
            ing3=Item.objects.get(name__text_en=row["ING3"]) if row["ING3"] else None,
            quant1=row["#1"],
            quant2=row["#2"] if row["#2"] else None,
            quant3=row["#3"] if row["#3"] else None,
        )
        obj.save()
        rPage.max_x=row["X"]
        rPage.save()

def GetReward(item, order, quantity=0):
    obj = Reward(
        item=Item.objects.get(name__text_en=item),
        order=order,
        num=quantity if quantity else None
    )
    obj.save()
    return obj


def ImpTraining(row, index):
    if row["Quest Type"] == '1':
        name = checkName(
            text_ja = row["Name"],
            text_en = row["En"]
        )

        print(row["En"], row["Training Quest Name_EN"])

        obj = Training(
            name=name,
            kind=Filterable.objects.get(text_ja=row["Training Quest Name"]),
            combat_level=row["Rec Combat"],
            exp=row["Exp"],
        )
        obj.save()
        for i in range(2,8):
            if row["Reward"+str(i)]:
                reward = GetReward(row["Reward"+str(i)],i-1)
                obj.rewards.add(reward)

def ImpScoreBattle(row, index):
    diff = {
        'Normal': 1,
        'Hard': 2,
        'Very Hard': 3
    }
    if row["Quest Type"] == '2':
        info = row["Score Battle ID"].split('-')
        try:
            sb = ScoreBattle.objects.get(chapter=info[0], section=info[1])
        except ScoreBattle.DoesNotExist:
            print('New Score Battle')
            name = checkName(
                text_ja = row["Name"],
                text_en = row["En"]
            )
            sb = ScoreBattle(
                name=name,
                chapter=info[0],
                section=info[1]
            )
            sb.save()

        print(row["En"], row["Diff"], sb.name.text_en)

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
        floor=int(row['En'].split(' ')[1])
        try:
            obj=Tower.objects.get(floor=floor)
            print("Updating", row['En'])
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
        'I]': 1,
        'II]': 2,
        'III]': 3,
        'IV]': 4,
        'V]': 5,
        'VI]': 6,
        'VII]': 7,
        'VIII]': 8,
        'IX]': 9,
    }
    if row["Quest Type"] == '3':
        data = row['En'].split(' [Danger Level: ')
        floor = heck[data[1]]
        data_jp = row['Name'].split('[')[0]
        data_en = data[0]
        try:
            dun=Dungeon.objects.get(name__text_en=data_en)
            print("Found", data_en, data_jp, floor)
        except:
            print("Creating", data_en, data_jp, floor)
            name = checkName(
                text_ja = data_jp,
                text_en = data_en
            )
            dun = Dungeon(
                name=name,
            )
            dun.save()
        try:
            obj = DungeonFloor.objects.get(dungeon=dun, order=floor)
            print("Updating floor", floor)
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


def fix_traits():
    traits = Trait.objects.all()
    for trait in traits:
        transfer = Filterable.objects.filter(trait_transfer=trait)
        for t in transfer:
            if t.slug == 'attack':  trait.trans_atk  = True 
            if t.slug == 'healing': trait.trans_heal = True 
            if t.slug == 'buff':    trait.trans_buff = True 
            if t.slug == 'debuff':  trait.trans_dbf  = True 
        if trait.kind.slug == 'equipment':  trait.trans_wep  = True 
        if trait.kind.slug == 'equipment':  trait.trans_arm  = True 
        if trait.kind.slug == 'equipment':  trait.trans_acc  = True 
        trait.save()


def fix_recipes():
    recipes = Recipe.objects.all()
    rStory = RecipeTab.objects.get(order=1)
    rExtra = RecipeTab.objects.get(order=2)
    rEvent = RecipeTab.objects.get(order=3)

    page = -1
    rPage = None

    for recipe in recipes:
        if recipe.book != page and not recipe.page:
            tab = rStory
            if page in [4,6]:
                tab = rExtra
            if page in [7]:
                tab = rEvent
            page = recipe.book
            rPage = RecipePage(
                tab=rStory if page in [1,2,3,5] else rExtra,
                min_x=recipe.x,
                max_x=recipe.x
            )
            rPage.save()
        if not recipe.page:
            recipe.page = rPage
            recipe.save()
        else:
            rpage = recipe.page
        rPage.max_x = recipe.x
        rPage.save()        


"""Run me first for any updates holy shit"""
def createUpdate():
    obj = LatestUpdate()
    obj.save()
    print('Update Created')

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
