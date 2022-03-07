from games.A23.effects_a23.models import *
from games.A23.traits_a23.models import *
from games.A23.misc_a23.models import *
from games.A23.items_a23.models import *
from games.A23.regions_a23.models import *
from games.A23.monsters_a23.models import *

# python manage.py shell < scripts/import_a23_csv.py

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:
        print(row[0])

    
    
    """
    item = None
        if row[0]:
            item = Item.objects.get(slug=row[0])
        
        for i in range(1,4):
            if row[i]:
                text = RecipeText(
                    item=item,
                    text_en = row[i],
                    text_ja = row[i+3],
                    text_ko = row[i+6],
                    text_sc = row[i+9],
                    text_tc = row[i+12]
                )
                text.save()
    
    
     r = 1
    for row in reader:
        print(row[0])
        char = Character.objects.get(slug=row[0])
        
        ideas = []
        for i in range(1,6):
            if row[i]:
                print(row[i])
                idea = RecipeIdea(
                    item = Item.objects.get(slug=row[i]),
                    char = char,
                    col=i,
                    row=r
                )
                ideas.append(idea)
            else:
                ideas.append(None)
        for i in range(6,10):
            if row[i]:
               ideas[i-6].hor = True
        for i in range(10,15):
            if row[i]:
                ideas[i-10].ver = True
        for idea in ideas:
            if idea:
                idea.save()
        r = r + 1
    
    

    colors = {
        "BLUE":1,
        "GREEN":2,
        "YELLOW":3,
        "RED":4,
        "VIOLET":5
    }
    prevItem = ""
    order = 1
    for row in reader:
        print(f'{row[0]} {order}')
        
        if row[0] != prevItem:
            order = 1
            prevItem = row[0]
        
        item = Item.objects.get(slug=row[0])
        if row[1]:
            item.quantity = row[1]
        if row[2]:
            item.uses = row[2]
        if row[3]:
            item.char = Character.objects.get(slug=row[3])
        item.save()
        
        if row[4]:
            ing = Ingredient(
                quantity=row[5],
                synth=item
            )
            try:
                cat = Category.objects.get(cat_en=row[4])
                ing.cat = cat
            except Category.DoesNotExist:
                it = Item.objects.get(slug=row[4])
                ing.item = it
            ing.save()
        
        if row[6]:
            eline = EffectLines(
                item = item,
                elem = colors[row[6]],
                maxlv = row[17] if row[17] else None,
                restrict = row[18] if row[18] else None,
                order = order
            )
            eline.save()
            
            for i in range(0,10,2):
                if row[7+i]:
                    edata = EffectData(
                        num=row[7+i+1],
                        line=eline
                    )
                    try:
                        eff = Effect.objects.get(slug=row[7+i])
                        edata.effect = eff
                        edata.save()
                    except Effect.DoesNotExist:
                        print(row[7+i])
                        com = Component.objects.get(com_en=row[7+i])
                        edata.component = com
                        edata.save()
                    
            
        order = order + 1
        
    
        lang =  ['en', 'ja', 'ko', 'sc', 'tc']
    langn = [8,11,14,17,20]
    for row in reader:
        #print(row[0])
        output = ""
        for i in range(3,8):
            if row[i].find("<STR") != -1:
                html = row[i]
                for j in range(0,3):
                    if row[j]:
                        o = None
                        try:
                            o = Item.objects.get(slug=row[j])
                            rep = f'<a href="/sophie2/items/{o.slug}/{lang[i-3]}">{row[langn[i-3]+j]}</a>'
                            html = html.replace(f"<STR{j+1}>", rep)
                        except Item.DoesNotExist:
                            o = None
                        if o is None:
                            try:
                                o = Monster.objects.get(slug=row[j])
                                rep = f'<a href="/sophie2/monsters/{o.slug}/{lang[i-3]}">{row[langn[i-3]+j]}</a>'
                                html = html.replace(f"<STR{j+1}>", rep)
                            except Monster.DoesNotExist:
                                o = None
                        if o is None:
                            try:
                                o = Effect.objects.get(slug=row[j])
                                rep = f'<a href="/sophie2/effects/{o.slug}/{lang[i-3]}">{row[langn[i-3]+j]}</a>'
                                html = html.replace(f"<STR{j+1}>", rep)
                            except Effect.DoesNotExist:
                                o = None
                        if o is None:
                            try:
                                o = Category.objects.get(slug=row[j])
                                rep = f'<a href="/sophie2/categories/{o.slug}/{lang[i-3]}">{row[langn[i-3]+j]}</a>'
                                html = html.replace(f"<STR{j+1}>", rep)
                            except Category.DoesNotExist:
                                o = None
                        if o is None:
                            html = html.replace(f"<STR{j+1}>", row[langn[i-3]+j])
                output = output + '\t' + html
            else:
                output = output + '\t' + row[i]
                
        print(output)
        
        
        
        
        
        name = row[2]
        s = ""
        if name:
             try:
                 o = Item.objects.get(slug=name)
                 s = o.item_tc.name
             except Item.DoesNotExist:
                 o = None
             if o is None:
                 try:
                     o = Monster.objects.get(slug=name)
                     s = o.mon_tc.name
                 except Monster.DoesNotExist:
                     o = None
             if o is None:
                 try:
                     o = Effect.objects.get(slug=name)
                     s = o.eff_tc.name
                 except Effect.DoesNotExist:
                     o = None
             if o is None:
                 try:
                     o = Category.objects.get(slug=name)
                     s = o.cat_tc
                 except Category.DoesNotExist:
                     o = None
             if o is None:
                 try:
                     o = Character.objects.get(char_en=name)
                     s = o.char_tc
                 except Character.DoesNotExist:
                     o = None

        
        print(s)
        
        
        if row[0]:
            try:
                o = Component.objects.get(com_en=row[0])
            except Component.DoesNotExist:
                o = Component(
                    com_en=row[0],
                    com_ja=row[1],
                    com_ko=row[2],
                    com_sc=row[3],
                    com_tc=row[4],
                    code=row[5]
                )
                o.save()
        
        
        it = Item.objects.get(slug=row[0])
        for i in range(1,9):
            if row[i]:
                o = Component(
                    code=row[i]
                )
                o.save()
                it.components.add(o)
        
        
        
        
        bk = Book.objects.get(slug=row[0])
        bk.items.add(Item.objects.get(slug=row[1]))
        if row[2]:
            bk.items.add(Item.objects.get(slug=row[2]))
        if row[3]:
            bk.note = row[3]
            bk.save()
        
        
        prevRank = 0
    prevNode = None
    for row in reader:
        print(row[0])
        try:
            climate = Climate2.objects.get(
                loc=Region2.objects.get(slug=Region.objects.get(reg_en=row[1],
                                                                parent=Region.objects.get(slug=row[0])).slug
                                        ),
                weather=row[2]
            )
        except Climate2.DoesNotExist:
            climate = Climate2(
                loc=Region2.objects.get(slug=Region.objects.get(reg_en=row[1],
                                                                parent=Region.objects.get(slug=row[0])).slug
                                        ),
                weather=row[2]
            )
            climate.save()
                
        gatherItem = GatherItem2(
            item=Item.objects.get(slug=row[7]),
            rank=row[5],
            priority=row[8]
        )
        
        
        gatherNode = 0
        
        if prevRank is not int(row[5]):
            print(row[5])
            gatherNode = GatherNode2(
                kind=row[3].lower().replace("_", "-"),
                tool=row[6],
                climate=climate
            )
            gatherNode.save()
            prevNode = gatherNode
        else:
            gatherNode = prevNode
        prevRank = int(row[5]) +1
        gatherItem.node = prevNode
        gatherItem.save()
        
        
        
        
        
        en = Monster_en(
            name=row[3],
            desc1=row[4] if row[4] else None,
            desc2=row[5] if row[5] else None,
            desc3=row[6] if row[6] else None,
            desc4=row[7] if row[7] else None,
        )
        ja = Monster_ja(
            name=row[8],
            desc1=row[9] if row[9] else None,
            desc2=row[10] if row[10] else None,
            desc3=row[11] if row[11] else None,
            desc4=row[12] if row[12] else None,
        )
        ko = Monster_ko(
            name=row[13],
            desc1=row[14] if row[14] else None,
            desc2=row[15] if row[15] else None,
            desc3=row[16] if row[16] else None,
            desc4=row[17] if row[17] else None,
        )
        sc = Monster_sc(
            name=row[18],
            desc1=row[19] if row[19] else None,
            desc2=row[20] if row[20] else None,
            desc3=row[21] if row[21] else None,
            desc4=row[22] if row[22] else None,
        )
        tc = Monster_tc(
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
        
        o = Monster.objects.get(slug=row[0])
        
        o.mon_en=en
        o.mon_ja=ja
        o.mon_ko=ko
        o.mon_sc=sc
        o.mon_tc=tc
        o.save()
        
        
        
        
        o = Monster(
            slug=row[0],
            index=row[1],
            hp_rank=row[2],
            str_rank=row[3],
            def_rank=row[4],
            spd_rank=row[5],
            kind=row[6],
            resist_mag   = row[11] if row[11] else None,
            resist_fire  = row[12] if row[12] else None,
            resist_ice   = row[13] if row[13] else None,
            resist_thun  = row[14] if row[14] else None,
            resist_wind  = row[15] if row[15] else None,
            resist_phys  = row[10] if row[16] else None,
            ailment0  = row[17] if row[17] else 0,
            ailment1  = row[18] if row[18] else 0,
            ailment2  = row[19] if row[19] else 0,
            ailment3  = row[20] if row[20] else 0,
            ailment4  = row[21] if row[21] else 0,
            ailment5  = row[22] if row[22] else 0,
            ailment6  = row[23] if row[23] else 0,
            ailment7  = row[24] if row[24] else 0,
            ailment8  = row[25] if row[25] else 0,
            ailment9  = row[26] if row[26] else 0,
            ailment10 = row[27] if row[27] else 0,
            char1 = Character.objects.get(slug=row[28]) if row[28] else None,
            char2 = Character.objects.get(slug=row[29]) if row[29] else None,
            char3 = Character.objects.get(slug=row[30]) if row[30] else None,
            char4 = Character.objects.get(slug=row[31]) if row[31] else None,
        )
        o.save()
        
        for drop in row[16].split(','):
            if drop:
                it = Item.objects.get(slug=drop)
                o.drops.add(it)
        
        
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