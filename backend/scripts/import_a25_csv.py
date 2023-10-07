from games.A25.misc_a25.models import *
from games.A25.chara_a25.models import *
from games.A25.items_a25.models import *
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
            return Desc.objects.get(text_ja=text_ja)
        except:
            desc = Desc(
                text_ja = text_ja,
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

        print(row["Name en"])
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
    print(row["EN"])

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
        mdef30 =row["PDEF 30"],
    )
    obj.save()

def ImpChara(row, index):
    name = checkName(
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    title = checkName(
        text_ja = row["TITLE"],
        text_en = row["TITLE_EN"]
    )
    print(row["NAME_EN"], row["TITLE_EN"])

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
        matk=row["PDEF"],
        pdfn=row["MATK"],
        mdfn=row["MDEF"],
        rate_hp  =row["Rate HP"],
        rate_patk=row["Rate ATK"],
        rate_pdfn=row["Rate DEF"],
        rate_matk=row["Rate MATK"],
        rate_mdfn=row["Rate MDEF"],
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
    )
    obj.save()

def ImpPassive(row, index):
    name = checkName(
        text_ja = row["Name"],
        text_en = row["Name en"]
    )
    desc = checkDesc(
        text_ja = row["Desc"],
        text_en = row["Desc en"]
    )
    print(row["Name en"])
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
    obj = Skill(
        char=Character.objects.get(name__text_ja=row["CHARACTER"], title__text_ja=row["TITLE"]),
        name=name,
        desc=desc,
        elem=Filterable.objects.get(text_en=row["ATTLIBUTE"], kind="element"),
        area=Name.objects.get(text_en=row["RANGE"]),
        wt=row["WT"],
        index=index,
        val1=row["Val 1"],
        val2=row["Val 2"] if row["Val 2"] else None,
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
    #obj.save()

def ImpMaterials(row, index):
    name = checkName(
        text_ja = row["JP"],
        text_en = row["EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )
    print(row["EN"])

    item = Item(
        slug=slug_me(row["EN"], Item.objects),
        name=name,
        desc=desc,
        kind=Filterable.objects.get(slug="material"),
        rarity=row["Rarity"]
    )
    item.save()

    obj = Material(
        item=item,
        color=Filterable.objects.get(text_en=row["Color"]) if row["Color"] else None,
        kind=Filterable.objects.get(text_en=row["Type"]), # can be redundant
    )
    obj.save()

    if row["Gift 1"]:
        obj.traits.add(Trait.objects.get(name__text_ja=row["Gift 1"]))
    if row["Gift 2"]:
        obj.traits.add(Trait.objects.get(name__text_ja=row["Gift 2"]))

def ImpEquipment(row, index):
    name = checkName(
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )
    print(row["NAME_EN"])
    
    item = Item(
        slug=slug_me(row["NAME_EN"], Item.objects),
        name=name,
        desc=desc,
        kind=Filterable.objects.get(slug="equipment", kind="item_type"),
        rarity=row["RARITY"]
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

def ImpCombatItem(row, index):
    name = checkName(
        text_ja = row["NAME"],
        text_en = row["NAME_EN"]
    )
    desc = checkDesc(
        text_ja = row["DESC"],
        text_en = row["DESC_EN"]
    )
    print(row["NAME_EN"])
    item = Item(
        slug=slug_me(row["NAME_EN"], Item.objects),
        name=name,
        desc=desc,
        kind=Filterable.objects.get(slug="combat", kind="item_type"),
        rarity=row["RARITY"]
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
    
def ImpRecipe(row, index):
    item = Item.objects.get(name__text_ja=row["NAME"])

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

    print(row["NAME"])

    obj = Recipe(
        item=item,
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

#import_generic(ImpFilter)
#import_generic(ImpTrait, index=100, kind="equipment")
#import_generic(ImpResearch)
#import_generic(ImpMemoria)
#import_generic(ImpChara)
#import_generic(ImpPassive)
#import_generic(ImpMaterials)
#import_generic(ImpEquipment)
#import_generic(ImpCombatItem)
#import_generic(ImpRecipe)