from games.BR1.missions_br1.models import *
from games.BR1.skills_br1.models import *
from games.BR1.demons_br1.models import *
from games.BR1.areas_br1.models import *
from games.BR1.items_br1.models import *
from games.BR1.fragments_br1.models import *

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        if row[1]:
            obj = Upgrade(
                item = Item.objects.get(name=row[1]),
                num = row[2]
            )
            obj.save()
            frag = Fragment.objects.get(slugname=row[0])
            frag.upgrades.add(obj)


        """
        obj = Fragment(
            slugname=row[0],
            name=row[1],
            effect=row[2]
        )
        obj.save()

        if row[1]:
            print(row[1])
            obj = Ingredient(
                craftitem=Item.objects.get(name=row[0]),
                item=Item.objects.get(name=row[1]),
                num = row[2]
            )
            obj.save()

        obj = Item(
            index=row[0],
            slugname=row[1],
            name=row[2],
            description=row[3],
            kind=row[4],
            effect=row[5],
            acquisition=row[9]
        )
        obj.save()

        demons = row[6].split(";")
        for thing in demons:
            if thing:
                o = Demon.objects.get(name=thing)
                obj.demons.add(o)
        missions = row[7].split(";")
        for thing in missions:
            if thing:
                o = Mission.objects.get(name=thing)
                obj.missions.add(o)
        locations = row[8].split(";")
        for thing in locations:
            if thing:
                o = Area.objects.get(name=thing)
                obj.locations.add(o)

        obj = Demon(
            slugname=row[1],
            index=row[0],
            name=row[2],
            race=row[3],
            hp=row[4],
            atk=row[5],
            dfn=row[6],
            agi=row[7],
            luk=row[8],
            impact=(row[11] if row[11] else None),
            pierce=(row[12] if row[12] else None),
            heart= (row[13] if row[13] else None),
            flavor=row[14],
            slash= (row[9]  if row[9] else None)
        )
        obj.save()
        locations = row[10].split(",")
        for thing in locations:
            if thing:
                o = Area.objects.get(name=thing)
                obj.locations.add(o)

        obj = Skill(
            index=row[0],
            character=row[1],
            name=row[2],
            effect=row[3],
            rng=row[4],
            wt=row[5],
            mp=row[6],
            slots=row[7],
            lvl  =(row[8]  if row[8] else None),
            atk  =(row[9]  if row[9] else None),
            dfn  =(row[10] if row[10] else None),
            sup  =(row[11] if row[11] else None),
            tec  =(row[12] if row[12] else None),
            isRankUp=(True if row[14] else False),
        )
        obj.save()


        obj = Mission(
            slugname=row[0],
            name=row[1],
            character=row[2],
            points=row[3],
            reward=row[4],
            kind=row[5],
            chapter=row[6],
            location=row[7],
            details=row[8],
            number=row[9]
        )
        obj.save()
        """