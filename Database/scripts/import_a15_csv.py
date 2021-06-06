from games.A15.categories_a15.models import *
from games.A15.properties_a15.models import *
from games.A15.effects_a15.models import *
from games.A15.regions_a15.models import *
from games.A15.monsters_a15.models import *
import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        en = Monster_en(name=row[12], desc=row[13], race=row[14])
        ja = Monster_ja(name=row[15], desc=row[16], race=row[17])
        en.save()
        ja.save()

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

        """
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