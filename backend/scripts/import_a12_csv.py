from games.A12.traits_a12.models import *
from games.A12.effects_a12.models import *
from games.A12.categories_a12.models import *
from games.A12.regions_a12.models import *
from games.A12.monsters_a12.models import *
from games.A12.items_a12.models import *
from games.A12.areadata_a12.models import *

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:

        item = Item.objects.get(slugname=row[0])
        item.item_type = "Equipment"
        item.item_subtype = "Weapon"
        item.save()

        """
        obj = Field(
            region=Region.objects.get(slugname=row[0]),
            unlock=row[2],
            note=row[5]
        )
        obj.save()

        ings = row[3].split(",")
        for thing in ings:
            if thing:
                o = Item.objects.get(slugname=thing)
                obj.ingredients.add(o)

        mons = row[4].split(",")
        for thing in mons:
            if thing:
                o = Monster.objects.get(slugname=thing)
                obj.monsters.add(o)
        

        obj2 = None
        try:
            obj2 = Area.objects.get(region=Region.objects.get(slugname=row[1]))
        except Area.DoesNotExist:
            obj2 = Area(
                region=Region.objects.get(slugname=row[1])
            )
            obj2.save()
        obj2.fields.add(obj)

        en = Item_en(name=row[5], desc=row[6])
        ja = Item_ja(name=row[7], desc=row[8])
        en.save()
        ja.save()

        obj = Book(
            slugname=row[0],
            isDX=(True if row[2] else False),
            index=row[1],
            note=row[3],
            item_en=en,
            item_ja=ja
        )
        obj.save()

        items = row[4].split(",")
        for thing in items:
            if thing:
                print(thing)
                o = Item.objects.get(slugname=thing)
                obj.items.add(o)

        obj = Item(
            slugname=row[0],
            isDLC=(True if row[2] else False),
            isDX=(True if row[3] else False),
            item_en=en,
            item_ja=ja,
            index=row[1],
            item_type="Equipment",
            item_subtype="Armor"
        )
        obj.save()

        obj2 = Equip(
            item=obj,
            hp   =(row[5]  if row[5] else None),
            mp   =(row[6]  if row[6] else None),
            lp   =(row[7]  if row[7] else None),
            atk  =(row[8]  if row[8] else None),
            defen=(row[9]  if row[9] else None),
            spd  =(row[10] if row[10] else None)
        )
        obj2.save()

        materials = row[4].split(",")
        for mat in materials:
            if mat:
                o = Item.objects.get(slugname=mat)
                obj2.material.add(o)


        chars = row[11].split(",")
        for c in chars:
            if c:
                o = Character.objects.get(name=c)
                obj2.chars.add(o)
                


        item = Item.objects.get(slugname=row[0])
        print(row[1])
        isCat1 = (True if row[2] else False)
        if isCat1:
            obj = Ingredient(
                synthitem=item,
                category=Category.objects.get(slugname=row[1]),
                itemnum=1,
                num=row[3]
            )
            obj.save()
        else:
            obj = Ingredient(
                synthitem=item,
                item=Item.objects.get(slugname=row[1]),
                itemnum=1,
                num=row[3]
            )
            obj.save()

        effects1 = row[4].split(",")
        i = 0
        for thing in effects1:
            if thing:
                obj = EffectLine(
                    item=item,
                    effect=Effect.objects.get(slugname=thing),
                    itemnum=1,
                    number=i
                )
                obj.save()
                i = i + 1

        isCat2 = (True if row[6] else False)
        if row[5]:
            if isCat2:
                obj = Ingredient(
                    synthitem=item,
                    category=Category.objects.get(slugname=row[5]),
                    itemnum=2,
                    num=row[7]
                )
                obj.save()
            else:
                obj = Ingredient(
                    synthitem=item,
                    item=Item.objects.get(slugname=row[5]),
                    itemnum=2,
                    num=row[7]
                )
                obj.save()
            effects2 = row[8].split(",")
            i = 0
            for thing in effects2:
                if thing:
                    obj = EffectLine(
                        item=item,
                        effect=Effect.objects.get(slugname=thing),
                        itemnum=2,
                        number=i
                    )
                    obj.save()
                    i = i + 1

        isCat3 = (True if row[10] else False)
        print(row[9])
        if row[9]:
            if isCat3:
                obj = Ingredient(
                    synthitem=item,
                    category=Category.objects.get(slugname=row[9]),
                    itemnum=3,
                    num=row[11]
                )
                obj.save()
            else:
                obj = Ingredient(
                    synthitem=item,
                    item=Item.objects.get(slugname=row[9]),
                    itemnum=3,
                    num=row[11]
                )
                obj.save()
            effects3 = row[12].split(",")
            i = 0
            for thing in effects3:
                if thing:
                    obj = EffectLine(
                        item=item,
                        effect=Effect.objects.get(slugname=thing),
                        itemnum=3,
                        number=i
                    )
                    obj.save()
                    i = i + 1

        if row[13]:
            print(row[13])
            isCat4 = (True if row[14] else False)
            if isCat4:
                obj = Ingredient(
                    synthitem=item,
                    category=Category.objects.get(slugname=row[13]),
                    itemnum=4,
                    num=row[15]
                )
                obj.save()
            else:
                obj = Ingredient(
                    synthitem=item,
                    item=Item.objects.get(slugname=row[13]),
                    itemnum=4,
                    num=row[15]
                )
                obj.save()



        
        en = Item_en(name=row[2], desc=row[3])
        ja = Item_ja(name=row[4], desc=row[5])
        en.save()
        ja.save()
        #Synth
        obj = Item(
            slugname=row[0],
            index=row[1],
            time=row[6],
            mp=row[7],
            price=row[8],
            uses=(row[9] if row[9] else None),
            item_subtype=row[10],
            level=row[12],
            item_en=en,
            item_ja=ja
        )
        obj.save()

        categories = row[11].split(",")
        for thing in categories:
            if thing:
                o = Category.objects.get(slugname=thing)
                obj.categories.add(o)
        
        # Ingredients
        obj = Item(
            slugname=row[0],
            level=row[1],
            isDX=(True if row[6] else False),
            note=row[7],
            item_type="Ingredient",
            index=row[12],
            item_en=en,
            item_ja=ja
        )
        obj.save()

        categories = row[2].split(",")
        for thing in categories:
            if thing:
                o = Category.objects.get(slugname=thing)
                obj.categories.add(o)

        regions = row[3].split(",")
        for thing in regions:
            if thing:
                o = Region.objects.get(slugname=thing)
                obj.locations.add(o)

        monsters = row[4].split(",")
        for thing in monsters:
            if thing:
                o = Monster.objects.get(slugname=thing)
                obj.monsters.add(o)


        obj = Monster(
            slugname=row[0],
            mon_en=en,
            mon_ja=ja,
            isDX=(True if row[1] else False),
            note=row[2],
            race=row[4],
            level=row[5],
            hp=row[6],
            atk=row[7],
            defen=row[8],
            spd=row[9],
            index=row[14]
        )
        obj.save()

        locations = row[3].split(",")
        for loc in locations:
            if loc:
                l = Region.objects.get(slugname=loc)
                obj.locations.add(l)


        obj = Category(
            slugname=row[0],
            cat_en=en,
            cat_ja=ja,
            icon_name=row[3]
        )
        obj.save()


        obj = Effect(
            slugname=row[0],
            eff_en=en,
            eff_ja=ja,
            index=row[5]
        )

        obj = Trait(
            slugname=row[0],
            trait_en=en,
            trait_ja=ja,
            cost=row[1],
            note=row[3],
            synth=(True if row[4] else False),
            usable=(True if row[5] else False),
            ingot=(True if row[6] else False),
            cloth=(True if row[7] else False),
            accessory=(True if row[8] else False),
            index=row[13]
        )
        obj.save()
        """