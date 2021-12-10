from games.BRSL.fragments_brsl.models import *
from games.BRSL.items_brsl.models import *
from games.BRSL.facilities_brsl.models import *
from games.BRSL.skills_brsl.models import *
from games.BRSL.demons_brsl.models import *
from games.BRSL.regions_brsl.models import *

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        

    
        
        """
        print(row[1][:-2])
        
        ln = LineName(
            slug=row[1][:-2],
            line_en=row[4],
            line_ja=row[5],
            line_sc=row[6],
            line_tc=row[7]
        )
        ln.save()
        
        obj = SkillLine(
            linename=ln,
            effect1=Effect.objects.get(slugname=row[1]),
            effect2=Effect.objects.get(slugname=row[2]),
            effect3=Effect.objects.get(slugname=row[3]),
        )
        obj.save()
        
        if row[0] == 'Attack':
            items_one = Item.objects.filter(category__cat_en="(Attack - One)")
            items_all = Item.objects.filter(category__cat_en="(Attack - All)")
            for item in items_one:
                obj.items.add(item)
            for item in items_all:
                obj.items.add(item)
        if row[0] == 'Support':
            items_one = Item.objects.filter(category__cat_en="(Support - One)")
            items_all = Item.objects.filter(category__cat_en="(Support - All)")
            for item in items_one:
                obj.items.add(item)
            for item in items_all:
                obj.items.add(item)
        obj.save()
        
        
        n = AreaName(
            name_en=row[4],
            name_ja=row[5],
            name_sc=row[6],
            name_tc=row[7],
        )
        n.save()
        
        obj = Area(
            slug = row[1],
            name=n,
            map=row[8] if row[8] else None
        )
        obj.save()
        
        for item in row[2].split(","):
            if item:
                print(item)
                thing = Item.objects.get(slug=item)
                obj.items.add(thing)
        for demon in row[3].split(","):
            if demon:
                print(demon)
                thing = Demon.objects.get(slug=demon.split("X")[0])
                d = DemonArea(
                    demon = thing,
                    once = True if len(demon.split("X")) > 1 else False
                )
                d.save()
                obj.demons.add(d)
        obj.save()
                
        reg = Region.objects.get(slug=row[0])
        reg.areas.add(obj)
        reg.save()
        
        n = AreaName(
            name_en=row[1],
            name_ja=row[2],
            name_sc=row[3],
            name_tc=row[4],
        )
        n.save()
        
        obj = Region(
            slug=row[0],
            name=n
        )
        obj.save()
        
        
        en = Demon_en(
            name=row[3],
            desc=row[7]
        )
        ja = Demon_ja(
            name=row[4],
            desc=row[8]
        )
        sc = Demon_sc(
            name=row[5],
            desc=row[9]
        )
        tc = Demon_tc(
            name=row[6],
            desc=row[10]
        )
        en.save()
        ja.save()
        sc.save()
        tc.save()
        
        obj = Demon(
            slug = row[2],
            index = row[1],
            char = row[0],
            vit = row[11],
            atk = row[12],
            dfn = row[13],
            slash  = row[14] if row[14] else None,
            pierce = row[15] if row[15] else None,
            shock  = row[16] if row[16] else None,
            tremor = row[17] if row[17] else None,
            warp   = row[18] if row[18] else None,
            isDLC  = True    if row[19] else False,
            demon_en=en,
            demon_ja=ja,
            demon_sc=sc,
            demon_tc=tc
        )
        obj.save()
        
        for item in row[20].split(","):
            if item:
                print(item)
                item = Item.objects.get(slug=item)
                obj.drops.add(item)
                obj.save()
        
        
        en = Skill_en(
            name=row[1],
            desc=row[6]
        )
        ja = Skill_ja(
            name=row[2],
            desc=row[7]
        )
        sc = Skill_sc(
            name=row[3],
            desc=row[8]
        )
        tc = Skill_tc(
            name=row[4],
            desc=row[9]
        )
        en.save()
        ja.save()
        sc.save()
        tc.save()
        
        obj = Skill(
            character = (Character.objects.get(slug=row[0]) if row[0] != 'fragment' else None),
            level     = (row[5]  if row[5]  else None),
            cycle     = (row[10] if row[10] else None),
            ether     = (row[11] if row[11] else None),
            ether_rec = (row[12] if row[12] else None),
            knockback = (row[13] if row[13] else None),
            range = row[14],
            
            attTag0 = (row[15] if row[15] else None),
            actTag0 = (row[16] if row[16] else None),
            min_1_0 = (row[17] if row[17] else None),
            max_1_0 = (row[18] if row[18] else None),
            min_2_0 = (row[19] if row[19] else None),
            max_2_0 = (row[20] if row[20] else None),
            attTag1 = (row[21] if row[21] else None),
            actTag1 = (row[22] if row[22] else None),
            min_1_1 = (row[23] if row[23] else None),
            max_1_1 = (row[24] if row[24] else None),
            min_2_1 = (row[25] if row[25] else None),
            max_2_1 = (row[26] if row[26] else None),

            index = i,
            skill_en=en,
            skill_ja=ja,
            skill_sc=sc,
            skill_tc=tc
        )
        obj.save()
        
        i = i + 1
        
        
        en = Unit_en(
            name=row[5],
            desc=row[9]
        )
        ja = Unit_ja(
            name=row[6],
            desc=row[10]
        )
        sc = Unit_sc(
            name=row[7],
            desc=row[11]
        )
        tc = Unit_tc(
            name=row[8],
            desc=row[12]
        )
        en.save()
        ja.save()
        sc.save()
        tc.save()
        
        obj = Unit(
            slug=row[0],
            char1=row[1],
            char2=row[2],
            char3=row[3],
            char4=row[4],
            index = i,
            unit_en=en,
            unit_ja=ja,
            unit_sc=sc,
            unit_tc=tc
        )
        obj.save()
        i = i + 1




        for i in range(2,6):
            if row[i]:
                obj = FacilityEffectLine(
                    line=row[0],
                    num=i-1,
                    facility=Facility.objects.get(slug=row[1]),
                    effect=FacilityEffect.objects.get(slug=row[i])
                )
                obj.save()
        
        obj = FacilitySet(
            effect=FacilityEffect.objects.get(eff_en__name=row[0]),
            index=row[1]
        )
        obj.save()
        
        for thing in row[2].split(","):
            if thing:
                print(thing)
                o = Facility.objects.get(slug=thing)
                obj.facilities.add(o)
        

        obj = FacilityIngredient(
            level=int(row[0])+1,
            facility=Facility.objects.get(slug=row[1]),
            item=Item.objects.get(slugname=row[3]),
            num=row[4],
            effect=Effect.objects.get(slugname=row[5]) if row[5] else None
        )
        obj.save()
        
        if row[6]:
            obj = FacilityIngredient(
                level=int(row[0])+1,
                facility=Facility.objects.get(slug=row[1]),
                item=Item.objects.get(slugname=row[6]),
                num=row[7],
                effect=Effect.objects.get(slugname=row[8]) if row[8] else None
             )
            obj.save()
        
        
        obj = FacilityIngredient(
            facility=Facility.objects.get(slug=row[0]),
            level=1,
            item=Item.objects.get(slugname=row[2]) if row[2] else None,
            num=row[3],
        )
        obj.save()
        
        if row[6]:
            obj = FacilityIngredient(
                facility=Facility.objects.get(slug=row[0]),
                level=1,
                item=Item.objects.get(slugname=row[5]) if row[5] else None,
                num=row[6],
                category=Category.objects.get(cat_en=row[4]) if row[4] else None,
            )
            obj.save()
        if row[7]:
            obj = FacilityIngredient(
                facility=Facility.objects.get(slug=row[0]),
                level=1,
                item=Item.objects.get(slugname=row[7]) if row[7] else None,
                num=row[8],
            )
            obj.save()
        if row[9]:
            obj = FacilityIngredient(
                facility=Facility.objects.get(slug=row[0]),
                level=1,
                item=Item.objects.get(slugname=row[9]) if row[9] else None,
                num=row[10],
            )
            obj.save()
        

        en = Facility_en(
            name=row[4],
            desc=row[8]
        )
        ja = Facility_ja(
            name=row[5],
            desc=row[9]
        )
        sc = Facility_sc(
            name=row[6],
            desc=row[10]
        )
        tc = Facility_tc(
            name=row[7],
            desc=row[11]
        )
        en.save()
        ja.save()
        sc.save()
        tc.save()
        
        
        obj = Facility(
            slug=row[0],
            index=row[1],
            size=row[2],
            char=row[3],
            facility_en=en,
            facility_ja=ja,
            facility_sc=sc,
            facility_tc=tc
        )
        obj.save()
        

        if row[9]:
            row[4] = row[4].replace("%d%", str(abs(int(row[9]))),1)
            row[5] = row[5].replace("%d%", str(abs(int(row[9]))),1)
            row[6] = row[6].replace("%d%", str(abs(int(row[9]))),1)
            row[7] = row[7].replace("%d%", str(abs(int(row[9]))),1)
        if row[11]:
            row[4] = row[4].replace("%d%", str(abs(int(row[11]))),1)
            row[5] = row[5].replace("%d%", str(abs(int(row[11]))),1)
            row[6] = row[6].replace("%d%", str(abs(int(row[11]))),1)
            row[7] = row[7].replace("%d%", str(abs(int(row[11]))),1)
        if row[13]:
            row[4] = row[4].replace("%d%", str(abs(int(row[13]))),1)
            row[5] = row[5].replace("%d%", str(abs(int(row[13]))),1)
            row[6] = row[6].replace("%d%", str(abs(int(row[13]))),1)
            row[7] = row[7].replace("%d%", str(abs(int(row[13]))),1)
            
        print(row[4])
            
        en = Effect_en(
            name=row[0],
            desc=row[4]
        )
        ja = Effect_ja(
            name=row[1],
            desc=row[5]
        )
        sc = Effect_sc(
            name=row[2],
            desc=row[6]
        )
        tc = Effect_tc(
            name=row[3],
            desc=row[7]
        )
        en.save()
        ja.save()
        sc.save()
        tc.save()
        
        
        obj = FacilityEffect(
            slug=row[14],
            act0=(row[8]  if row[8]  else None),
            act1=(row[10] if row[10] else None),
            act2=(row[12] if row[12] else None),
            val0=(row[9]  if row[9]  else None),
            val1=(row[11] if row[11] else None),
            val2=(row[13] if row[13] else None),
            eff_en=en,
            eff_ja=ja,
            eff_sc=sc,
            eff_tc=tc
        )
        obj.save()




        if row[1]:
            obj = Item.objects.get(slugname=row[0])
            obj.note = row[1]
            obj.save()


        it = Item.objects.get(slugname=row[0])
        if row[3]:
            print(row[3])
            obj = Ingredient(
                synthitem=it,
                num=row[2],
                category=(Category.objects.get(cat_en=row[3]) if row[4] else None),
                item=(Item.objects.get(slugname=row[3]) if not row[4] else None)
            )
            obj.save()

        if row[5]:
            for i in range(6,10):
                obj = EffectLine(
                    item=it,
                    linename=LineName.objects.get(slugname=row[5]),
                    effect=Effect.objects.get(slugname=row[i]),
                    number=i-5,
                )
                obj.save()


        en = Effect_en(
            name=row[1],
            desc=row[5]
        )
        ja = Effect_ja(
            name=row[2],
            desc=row[6]
        )
        sc = Effect_sc(
            name=row[3],
            desc=row[7]
        )
        tc = Effect_tc(
            name=row[4],
            desc=row[8]
        )

        en.save()
        ja.save()
        sc.save()
        tc.save()

        obj = Effect(
            slugname=row[0],
            attTag0=(row[10] if row[10] else None),
            actTag0=(row[11] if row[11] else None),
            min_1_0=(row[12] if row[12] else None),
            max_1_0=(row[13] if row[13] else None),
            min_2_0=(row[14] if row[14] else None),
            max_2_0=(row[15] if row[15] else None),
            actTag1=(row[16] if row[16] else None),
            min_1_1=(row[17] if row[17] else None),
            max_1_1=(row[18] if row[18] else None),
            eff_en=en,
            eff_ja=ja,
            eff_sc=sc,
            eff_tc=tc
        )

        obj.save()


        obj = UsableItem(
            item=Item.objects.get(slugname=row[0]),
            wt=row[1],
            cc=row[2],
            cooltime=row[3],
            effrange=row[4]
        )
        obj.save()


        en = Item_en(
            name=row[2],
            desc=row[6]
        )
        ja = Item_ja(
            name=row[3],
            desc=row[7]
        )
        sc = Item_sc(
            name=row[4],
            desc=row[8]
        )
        tc = Item_tc(
            name=row[5],
            desc=row[9]
        )

        en.save()
        ja.save()
        sc.save()
        tc.save()

        obj = Item(
            slugname=row[0],
            index=row[1],
            char=row[10],
            itemtype=row[11],
            isDLC=(True if row[13] else False),
            item_en=en,
            item_ja=ja,
            item_sc=sc,
            item_tc=tc
        )
        obj.save()

        cats = row[12].split(",")
        for cat in cats:
            if cat:
                c = Category.objects.get(cat_en=cat)
                obj.category.add(c)
                obj.save()


        obj = Category(
            slugname=row[0],
            cat_en=row[1],
            cat_ja=row[2],
            cat_sc=row[3],
            cat_tc=row[4]
        )

        obj.save()

        obj = LineName(
            slugname=row[0],
            line_en=row[1],
            line_ja=row[2],
            line_sc=row[3],
            line_tc=row[4]
        )

        obj.save()


            try:
                print(row[0])
                obj = Fragment.objects.filter(frag_en__eff=row[0])
                for o in obj:
                    o.actTag0 = row[1]
                    o.min1_0  = row[2]
                    o.max1_0  = row[3]
                    o.min2_0  = row[4]
                    o.max2_0  = row[5]
                    o.actTag1 = row[7]
                    o.min1_1  = row[8]
                    o.max1_1  = row[9]
                    o.save()
            except Fragment.DoesNotExist:
                continue


            prev = 0
            i = 0
            en = Fragment_en(name=row[7], eff=row[8], desc=row[9])
            ja = Fragment_ja(name=row[10], eff=row[11], desc=row[12])
            sc = Fragment_sc(name=row[13], eff=row[14], desc=row[15])
            tc = Fragment_tc(name=row[16], eff=row[17], desc=row[18])
            en.save()
            ja.save()
            sc.save()
            tc.save()
            obj2 = Fragment(
                index=i,
                size=row[4],
                gear=row[5],
                frag_en=en,
                frag_ja=ja,
                frag_sc=sc,
                frag_tc=tc,
            )
            obj2.save()
            if prev == row[6]:
                obj = Event.objects.get(index=prev)
                obj.fragment.add(obj2)
                obj.save()
            else:
                obj = Event(
                    index = row[6],
                    isDLC = (True if row[3] else False),
                    location=SchoolLocations.objects.get(loc_en=row[1]) if row[1] else None,
                    character=Character.objects.get(char_en=row[0]) if row[0] else None,
                )
                obj.save()
                obj.fragment.add(obj2)
                if i < 810:
                    for j in range(i, i+6):
                        obj.choices.add(Choice.objects.get(index=i))
                obj.save()
            prev = row[6]
            i = i + 6


            ind = 0
            obj = Choice(
                index = ind,
                choice_en=row[0],
                choice_ja=row[1],
                choice_sc=row[2],
                choice_tc=row[3],
            )
            obj.save()
            ind = ind + 1


            obj = SchoolLocations(
                loc_en=row[0],
                loc_ja=row[1],
                loc_sc=row[2],
                loc_tc=row[3],
            )
            obj.save()

            obj = Character(
                slug=row[0],
                char_en=row[1],
                char_ja=row[2],
                char_sc=row[3],
                char_tc=row[4],
            )
            obj.save()
            
            
    EffLine.objects.all().delete()
    EffData.objects.all().delete()
    efflines = EffectLine.objects.all()
    for effline in efflines:
        try:
            eline = EffLine.objects.get(linename=effline.linename, item=effline.item)
        except EffLine.DoesNotExist:
            eline = EffLine(
                linename=effline.linename,
                item=effline.item
            )
        edata = EffData(
            effect=effline.effect,
            number=effline.number
        )
        eline.save()
        edata.save()
        eline.effectdata.add(edata)
        eline.save()
            """