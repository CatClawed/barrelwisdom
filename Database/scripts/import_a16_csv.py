from games.A16.categories_a16.models import *
from games.A16.regions_a16.models import *
from games.A16.effects_a16.models import *
from games.A16.properties_a16.models import *
from games.A16.monsters_a16.models import *
from games.A16.items_a16.models import *

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        print(row[0])
        en = Item_en(name=row[23], desc=row[24])
        ja = Item_ja(name=row[25], desc=row[26])
        en.save()
        ja.save()


        """

        obj = Item(
            slugname=row[0],
            index=row[1],
            kind=row[2],
            slots=row[4],
            level=row[5],
            effect=(row[6] if (row[2] == "Material") else None),
            evalue=row[7],
            fire=(True if row[8] else False),
            earth=(True if row[9] else False),
            water=(True if row[10] else False),
            wind=(True if row[11] else False),
            size=(row[13] if row[13] else None),
            note=row[22],
            item_en=en,
            item_ja=ja
        )
        obj.save()

        properties = row[3].split(",")
        for thing in properties:
            if thing:
                o = Property.objects.get(slugname=thing)
                obj.properties.add(o)

        categories = row[12].split(",")
        for thing in categories:
            if thing:
                o = Category.objects.get(slugname=thing)
                obj.categories.add(o)

        characters = row[14].split(",")
        cequp = None
        for thing in characters:
            if thing:
                if cequp:
                    o = Character.objects.get(name=thing)
                    cequp.chars.add(o)
                else:
                    cequp = CharacterEquip(
                        item=obj
                    )
                    cequp.save()
                    o = Character.objects.get(name=thing)
                    cequp.chars.add(o)

        locations = row[20].split(",")
        for thing in locations:
            if thing:
                o = Region.objects.get(slugname=thing)
                obj.locations.add(o)

        monsters = row[21].split(",")
        for thing in monsters:
            if thing:
                o = Monster.objects.get(slugname=thing)
                obj.monsters.add(o)


        if row[15] or row[16] or row[17] or row[18] or row[19]:
            obj2 = Equip(
                item=obj,
                hp = (row[15] if row[15] else 0),
                mp = (row[16] if row[16] else 0),
                atk = (row[17] if row[17] else 0),
                defen = (row[18] if row[18] else 0),
                spd = (row[19] if row[19] else 0)
            )
            obj2.save()

        obj = Monster(
            slugname=row[0],
            index=row[1],
            kind=row[2],
            level=row[3],
            exp=row[4],
            cole=row[5],
            hp=row[6],
            atk=row[7],
            defen=row[8],
            spd=row[9],
            note=row[11],
            mon_en=en,
            mon_ja=ja
        )
        obj.save()

        locations = row[10].split(",")
        for thing in locations:
            if thing:
                o = Region.objects.get(slugname=thing)
                obj.locations.add(o)

]        obj = Property(
            slugname=row[0],
            combo1=(Property.objects.get(slugname=row[1]) if row[1] else None),
            combo2=(Property.objects.get(slugname=row[2]) if row[2] else None),
            combo3=(Property.objects.get(slugname=row[3]) if row[3] else None),
            prop_en=en,
            prop_ja=ja,
            index=row[8],
            grade=row[9]
            points=row[10],
            bomb=(True if row[11] else False),
            heal=(True if row[12] else False),
            weapon=(True if row[13] else False),
            armor=(True if row[14] else False),
            accessory=(True if row[15] else False),
        )
        obj.save()

        obj = Effect(
            slugname=row[0],
            eff_en=en,
            eff_ja=ja,
            index=row[1]
        )
        obj.save()

        obj = Region(
            slugname=row[1],
            parent=Region.objects.get(slugname=row[0]),
            reg_en=en,
            reg_ja=ja
        )
        obj.save()


        obj = Category(
            slugname=row[0],
            icon_name=row[3],
            cat_en=en,
            cat_ja=ja
        )
        obj.save()
        """