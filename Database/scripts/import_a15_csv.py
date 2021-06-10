from games.A15.categories_a15.models import *
from games.A15.properties_a15.models import *
from games.A15.effects_a15.models import *
from games.A15.regions_a15.models import *
from games.A15.monsters_a15.models import *
from games.A15.items_a15.models import *

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        it = Item.objects.get(slugname=row[1])
        parent = Item.objects.get(slugname=row[0])

        try:
            i = Disassembled.objects.get(item=it)
        except Disassembled.DoesNotExist:
            i = None 

        if not i:
            obj = Disassembled(
                item=it
            )
            obj.save()
            obj.parent.add(parent)
        else:
            i.parent.add(parent)
        if row[2]:
            it = Item.objects.get(slugname=row[2])
            try:
                i = Disassembled.objects.get(item=it)
            except Disassembled.DoesNotExist:
                i = None
            if not i:
                obj = Disassembled(
                    item=it
                )
                obj.save()
                obj.parent.add(parent)
            else:
                i.parent.add(parent)

        """
        obj = AreaData(
            area=Region.objects.get(slugname=row[1]),
            subarea=(row[2] if row[2] else None),
        )
        obj.save()
        monsters = row[3].split(",")
        for mon in monsters:
            if mon:
                m = Monster.objects.get(slugname=mon)
                obj.monsters.add(m)
        items = row[4].split(",")
        for item in items:
            if item:
                i = Item.objects.get(slugname=item)
                obj.items.add(i)
        items = row[5].split(",")
        for item in items:
            if item:
                i = Item.objects.get(slugname=item)
                obj.rare.add(i)
        items = row[6].split(",")
        for item in items:
            if item:
                i = Item.objects.get(slugname=item)
                obj.maxitem.add(i)
        events = row[7].split(",")
        for event in events:
            if event:
                e = FieldEvent.objects.get(name=event)
                obj.fieldevent.add(e)

        if row[1]:
            obj = EffectLine(
                item = Item.objects.get(slugname=row[0]),
                effect = Effect.objects.get(slugname=row[1]),
                elem = row[5],
                number = 1,
                min_elem=row[6],
                max_elem=row[7]
            )
            obj.save()
        if row[2]:
            obj = EffectLine(
                item = Item.objects.get(slugname=row[0]),
                effect = Effect.objects.get(slugname=row[2]),
                elem = row[5],
                number = 2,
                min_elem=row[8],
                max_elem=row[9]
            )
            obj.save()
        if row[3]:
            obj = EffectLine(
                item = Item.objects.get(slugname=row[0]),
                effect = Effect.objects.get(slugname=row[3]),
                elem = row[5],
                number = 3,
                min_elem=row[10],
                max_elem=row[11]
            )
            obj.save()
        if row[4]:
            obj = EffectLine(
                item = Item.objects.get(slugname=row[0]),
                effect = Effect.objects.get(slugname=row[4]),
                elem = row[5],
                number = 4,
                min_elem=row[12],
                max_elem=row[13]
            )
            obj.save()

        obj = Ingredient(
            synthitem=Item.objects.get(slugname=row[0]),
            item=    (Item.objects.get(slugname=row[2]) if row[1] == 'FALSE' else None),
            category=(Category.objects.get(slugname=row[2]) if row[1] == 'TRUE'  else None),
            num=(row[3] if row[3] else None)
        )
        obj.save()

        obj = Ingredient(
            synthitem=Item.objects.get(slugname=row[0]),
            item=    (Item.objects.get(slugname=row[5]) if (row[4] == 'FALSE' and row[5]) else None),
            category=(Category.objects.get(slugname=row[5]) if (row[4] == 'TRUE'  and row[5]) else None),
            num=(row[6] if row[6] else None)
        )
        obj.save()

        obj = Ingredient(
            synthitem=Item.objects.get(slugname=row[0]),
            item=    (Item.objects.get(slugname=row[8]) if (row[7] == 'FALSE' and row[8]) else None),
            category=(Category.objects.get(slugname=row[8]) if (row[7] == 'TRUE'  and row[8]) else None),
            num=(row[9] if row[9] else None)
        )
        obj.save()

        obj = Ingredient(
            synthitem=Item.objects.get(slugname=row[0]),
            item=    (Item.objects.get(slugname=row[11]) if (row[10] == 'FALSE' and row[11]) else None),
            category=(Category.objects.get(slugname=row[11]) if (row[10] == 'TRUE'  and row[11]) else None),
            num=(row[12] if row[12] else None)
        )
        obj.save()


        obj = Relic(
            item=Item.objects.get(slugname=row[1]),
            region=Region.objects.get(slugname=row[0]),
        )
        obj.save()
        areas = row[2].split(",")
        for area in areas:
            if area:
                a = Region.objects.get(slugname=area)
                obj.area.add(a)
        

        obj = Disassemble(
            item=Item.objects.get(slugname=row[0]),
            dis1=Item.objects.get(slugname=row[1]),
            dis2=(Item.objects.get(slugname=row[2]) if row[2] else None),
        )
        obj.save()

        en = Item_en(name=row[3], desc=row[4])
        ja = Item_ja(name=row[5], desc=row[6])
        en.save()
        ja.save()
        obj = Book(
            slugname=row[0],
            acquisition=row[1],
            item_en = en,
            item_ja = ja,
            index = row[7]
        )
        obj.save()

        items = row[2].split(",")
        for item in items:
            if item:
                i = Item.objects.get(slugname=item)
                obj.items.add(i)

        obj = Item(
            slugname=row[0],
            itype=row[5],
            level=row[7],
            evalue=row[8],
            fire =(True if row[9]== "1"  else False),
            water=(True if row[10]=="1" else False),
            wind =(True if row[11]=="1" else False),
            earth=(True if row[12]=="1" else False),
            effect=(row[14] if row[14] else None),
            size=(row[15] if row[15] else None),
            index=row[28],
            item_en=en,
            item_ja=ja
        )
        obj.save()
        properties = row[6].split(",")
        for prop in properties:
            if prop:
                p = Property.objects.get(slugname=prop)
                obj.properties.add(p)
        categories = row[13].split(",")
        for cat in categories:
            if cat:
                c = Category.objects.get(slugname=cat)
                obj.categories.add(c)
        locations = row[26].split(",")
        for loc in locations:
            if loc:
                l = Region.objects.get(slugname=loc)
                obj.locations.add(l)
        monsters = row[27].split(",")
        for mon in monsters:
            if mon:
                m = Monster.objects.get(slugname=mon)
                obj.monsters.add(m)

        characters = row[16].split(",")
        obj2 = None
        for char in characters:
            if char:
                if not obj2:
                    obj2 = CharacterEquip(
                        item=obj,
                    )
                    obj2.save()
                name=Character.objects.get(name=char)
                obj2.chars.add(name)
        
        if row[5] == 'Equipment':
            obj3 = Equip(
                item=obj,
                hp    = row[17],
                mp    = row[18],
                atk   = row[19],
                defen = row[20],
                spd   = row[21],
                fire  = row[22],
                water = row[23],
                wind  = row[24],
                earth = row[25],
            )
            obj3.save()
        

        
        obj = Monster(
            slugname=row[0],
            hp=int(row[1]),
            atk=int(row[2]),
            defen=int(row[3]),
            spd=int(row[4]),
            fire=int(row[5]),
            water=int(row[6]),
            wind=int(row[7]),
            earth=int(row[8]),
            level=int(row[9]),
            exp=int(row[10]),
            cole=int(row[11]),
            note=row[19],
            isDLC=(True if row[20] else False),
            isDX=(True if row[21] else False),
            isStrong=(True if row[22] else False),
            index=int(row[23]),
            mon_en=en,
            mon_ja=ja
        )
        obj.save()

        loc = row[18].split(',')
        for l in loc:
            if l:
                obj.locations.add(Region.objects.get(slugname=l))

        
        en = Region_en(name=row[3])
        ja = Region_ja(name=row[4])
        en.save()
        ja.save()

        obj = Region(
            slugname=row[0],
            display=(False if row[1] else True),
            region=(None if not row[2] else Region.objects.get(slugname=row[2])),
            reg_en=en,
            reg_ja=ja,
            note=row[5],
            grade=row[6]
        )
        obj.save()

        

        obj = Effect(
            slugname=row[0],
            index=row[1],
            eff_en=en,
            eff_ja=ja
        )
        obj.save()

        obj = Property(
            slugname=row[0],
            index = row[1],
            grade = (row[2] if (row[2] or row[2]=='-1') else None),
            points=row[3],
            bomb=(True if row[4]=='-1' else False),
            heal=(True if row[5]=='-1' else False),
            buff=(True if row[6]=='-1' else False),
            weapon=(True if row[7]=='-1' else False),
            armor=(True if row[8]=='-1' else False),
            accessory=(True if row[9]=='-1' else False),
            combo1=(Property.objects.get(slugname=row[10]) if row[10] else None),
            combo2=(Property.objects.get(slugname=row[11]) if row[11] else None),
            combo3=(Property.objects.get(slugname=row[12]) if row[12] else None),
            prop_en=en,
            prop_ja=ja
        )
        obj.save()


        en = Category_en(name=row[1])
        ja = Category_ja(name=row[2])
        en.save()
        ja.save()

        obj = Category(
            slugname=row[0],
            cat_en=en,
            cat_ja=ja,
            icon_name=row[3]
        )
        obj.save()
        """