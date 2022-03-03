from games.A23.effects_a23.models import *
from games.A23.traits_a23.models import *
from games.A23.misc_a23.models import *
from games.A23.items_a23.models import *
from games.A23.regions_a23.models import *

# python manage.py shell < scripts/import_a23_csv.py

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        print(row[0])
        
        
        
        """
        loc = Region.objects.get(parent=Region.objects.get(slug=row[0]),
                                 reg_en=row[1])
        try:
            item = Item.objects.get(slug=row[7])
            o = Chest(item=item, loc=loc)
            o.save()
        except Item.DoesNotExist:
            book = Book.objects.get(slug=row[7])
            o = Chest(book=book, loc=loc)
            o.save()
        
        
        prevRank = 0
    prevNode = None

    for row in reader:
        print(row[0])
        try:
            climate = Climate.objects.get(
                loc=Region.objects.get(parent=Region.objects.get(slug=row[0]),
                                       reg_en=row[1]),
                weather=row[2])
        except Climate.DoesNotExist:
            climate = Climate(
                loc=Region.objects.get(parent=Region.objects.get(slug=row[0]),
                                       reg_en=row[1]),
                weather=row[2]
            )
            climate.save()
                
        gatherItem = GatherItem(
            item=Item.objects.get(slug=row[7]),
            rank=row[5],
            priority=row[8]
        )
        gatherItem.save()
        
        gatherNode = 0
        
        if prevRank is not int(row[5]):
            print(row[5])
            gatherNode = GatherNode(
                kind=row[3].lower().replace("_", "-"),
                tool=row[6]
            )
            gatherNode.save()
            climate.node.add(gatherNode)
            prevNode = gatherNode
        else:
            gatherNode = prevNode
        prevRank = int(row[5]) +1
        gatherNode.items.add(gatherItem)
        if row[0]:
            o = Item.objects.get(slug=row[0])
            
            en = Item_en(
                name=row[3],
                desc1=row[4] if row[4] else None,
                desc2=row[5] if row[5] else None,
                desc3=row[6] if row[6] else None,
                desc4=row[7] if row[7] else None,
            )
            ja = Item_ja(
                name=row[8],
                desc1=row[9] if row[9] else None,
                desc2=row[10] if row[10] else None,
                desc3=row[11] if row[11] else None,
                desc4=row[12] if row[12] else None,
            )
            ko = Item_ko(
                name=row[13],
                desc1=row[14] if row[14] else None,
                desc2=row[15] if row[15] else None,
                desc3=row[16] if row[16] else None,
                desc4=row[17] if row[17] else None,
            )
            sc = Item_sc(
                name=row[18],
                desc1=row[19] if row[19] else None,
                desc2=row[20] if row[20] else None,
                desc3=row[21] if row[21] else None,
                desc4=row[22] if row[22] else None,
            )
            tc = Item_tc(
                name=row[23],
                desc1=row[24] if row[24] else None,
                desc2=row[25] if row[25] else None,
                desc3=row[26] if row[26] else None,
                desc4=row[27] if row[27] else None,
            )
            
            en.save()
            ja.save()
            ko.save()
            sc.save()
            tc.save()
            
            o.item_en=en
            o.item_ja=ja
            o.item_ko=ko
            o.item_sc=sc
            o.item_tc=tc
            o.save()
        
        
        
        o = Item.objects.get(slug=row[0])
        if row[13] != ',,,,,':
            c = CharacterEquip(item=o)
            c.save()
            for it in row[13].split(","):
                if it:
                    c.chars.add(Character.objects.get(slug=it))
        if row[14] or row[15] or row[16] or row[17] or row[18]:
            e = Equip(item=o)
            e.hp = row[17] if row[17] else 0
            e.mp = row[16] if row[16] else 0
            e.atk = row[14] if row[14] else 0
            e.dfn = row[18] if row[18] else 0
            e.spd = row[15] if row[15] else 0
            e.save()
        
        
        o = Item(
            slug=row[0],
            index=row[1],
            price=row[3],
            kind=row[4].lower(),
            char1=Character.objects.get(slug=row[21]) if row[21] else None,
            char2=Character.objects.get(slug=row[22]) if row[22] else None,
            char3=Character.objects.get(slug=row[23]) if row[23] else None,
            char4=Character.objects.get(slug=row[24]) if row[24] else None,
            level=row[2]
        )
        o.save()
        
        for i in range(5,9):
            if row[i]:
                o.categories.add(Category.objects.get(slug=row[i]))
        
        for i in range(9,11):
            if row[i]:
                o.traits.add(Trait.objects.get(slug=row[i]))
                
        if row[11]:
            l = EffectLines(
                item=o,
                order=1
            )
            l.save()
            d = EffectData(
                effect=Effect.objects.get(slug=row[11]),
                num=1,
                elem=0
            )
            d.save()
            l.effects.add(d)
            if row[12]:
                d = EffectData(
                    effect=Effect.objects.get(slug=row[11]),
                    num=1,
                    elem=0
                )
                d.save()
                l.effects.add(d)
        
        
        
        o = Trait.objects.get(slug=row[0])
        o.trans_exp = True if row[3] else False
        o.trans_syn = True if row[4] else False
        o.trans_atk = True if row[5] else False
        o.trans_heal = True if row[6] else False
        o.trans_dbf = True if row[7] else False
        o.trans_buff = True if row[8] else False
        o.trans_wep = True if row[9] else False
        o.trans_arm = True if row[10] else False
        o.trans_acc = True if row[11] else False
        o.trans_tal = True if row[11] else False
        o.save()
        
        # Combos after because some important ones are at the bottom
        o = Trait.objects.get(slug=row[0])
        if row[13]:
            o.combo1 = Trait.objects.get(slug=row[13])
            o.combo2 = Trait.objects.get(slug=row[14])
            o.save()
        
        
        en = Trait_en(
            name=row[15],
            desc=row[16]
        )
        ja = Trait_ja(
            name=row[17],
            desc=row[18]
        )
        ko = Trait_ko(
            name=row[19],
            desc=row[20]
        )
        sc = Trait_sc(
            name=row[21],
            desc=row[22]
        )
        tc = Trait_tc(
            name=row[23],
            desc=row[24]
        )
        en.save()
        ja.save()
        ko.save()
        sc.save()
        tc.save()
        
        o = Trait(
            trait_en=en,
            trait_ja=ja,
            trait_ko=ko,
            trait_sc=sc,
            trait_tc=tc,
            slug=row[0],
            index=row[1],
            grade=row[2],
        )
        o.save()
        
        
        
        
        en = Effect_en(
            name=row[3],
            desc=row[4]
        )
        ja = Effect_ja(
            name=row[5],
            desc=row[6]
        )
        ko = Effect_ko(
            name=row[7],
            desc=row[8]
        )
        sc = Effect_sc(
            name=row[9],
            desc=row[10]
        )
        tc = Effect_tc(
            name=row[11],
            desc=row[12]
        )
        en.save()
        ja.save()
        ko.save()
        sc.save()
        tc.save()
        
        o = Effect(
            eff_en=en,
            eff_ja=ja,
            eff_ko=ko,
            eff_sc=sc,
            eff_tc=tc,
            index=row[2],
            slug=row[0]
        )
        o.save()
        
        i=15
        for j in range(0,4): # I'm glad I neatened this out
            adv = AdvData(
                baseAtt=row[14] if j==0 and row[14] else None,
                attTag0=row[i+j*6] if row[i+j*6] else None,
                actTag0=row[i+1+j*6] if row[i+1+j*6] else None,
                min_1_0=row[i+2+j*6] if row[i+2+j*6] else None,
                max_1_0=row[i+3+j*6] if row[i+3+j*6] else None,
                min_2_0=row[i+4+j*6] if row[i+4+j*6] else None,
                max_2_0=row[i+5+j*6] if row[i+5+j*6] else None,
            )
            adv.save()
            o.advanced.add(adv)
            o.save()
        
        """