from games.A21.effects_traits_a21.models import *
import csv
import codecs
import sys


def import_effects(row, index):
    if row[0]:
        print(row[0])
        en = Text_en(name=row[1], desc=row[2])
        ja = Text_ja(name=row[3], desc=row[4])
        sc = Text_sc(name=row[5], desc=row[6])
        tc = Text_tc(name=row[7], desc=row[8])
        en.save()
        ja.save()
        sc.save()
        tc.save()
        eff = Effect(
            slug=row[0],
            index=index,
            eff_en=en,
            eff_ja=ja,
            eff_sc=sc,
            eff_tc=tc,
        )
        eff.save()
        if row[11] != 'ACT_NONE' and row[11]:
            adv = AdvData(
                baseAtt = row[9] if row[9] != 'ATT_NONE' else '',
                attTag0 = row[10] if row[10] != 'ATT_NONE' else '',
                actTag0 = row[11],
                min_1_0 = row[12] if row[12] else '',
                max_1_0 = row[13] if row[13] else '',
                min_2_0 = row[14] if row[14] else '',
                max_2_0 = row[15] if row[15] else '',
            )
            adv.save()
            eff.advanced.add(adv)
        if row[17] != 'ACT_NONE' and row[17]:
            adv = AdvData(
                baseAtt = '',
                attTag0 = row[16] if row[16] != 'ATT_NONE' else '',
                actTag0 = row[17],
                min_1_0 = row[18] if row[18] else '',
                max_1_0 = row[19] if row[19] else '',
                min_2_0 = row[20] if row[20] else '',
                max_2_0 = row[21] if row[21] else '',
            )
            adv.save()
            eff.advanced.add(adv)

def import_forge(row, index):
    print(row[0])
    dest = Effect.objects.get(slug=row[0])
    for i in range(1,3):
        if row[i]:
            src = Effect.objects.get(slug=row[i])
            src.child = dest
            src.save()
            dest.forge = True
            dest.save()
            

def import_traits(row, index):
    if row[0]:
        print(row[0])
        en = Text_en(name=row[1], desc=row[2])
        ja = Text_ja(name=row[3], desc=row[4])
        sc = Text_sc(name=row[5], desc=row[6])
        tc = Text_tc(name=row[7], desc=row[8])
        en.save()
        ja.save()
        sc.save()
        tc.save()
        eff = Trait(
            slug=row[0],
            index=index,
            trait_en=en,
            trait_ja=ja,
            trait_sc=sc,
            trait_tc=tc,
            grade=row[9],
            trans_syn =True if row[10] else False,
            trans_atk =True if row[11] else False,
            trans_heal=True if row[12] else False,
            trans_dbf =True if row[13] else False,
            trans_buff=True if row[14] else False,
            trans_wpn =True if row[15] else False,
            trans_arm =True if row[16] else False,
            trans_acc =True if row[17] else False,
        )
        eff.save()
        if not row[24]:
            adv = AdvData(
                actTag0 = row[20],
                min_1_0 = row[18] if row[18] else '',
                max_1_0 = row[19] if row[19] != row[18] else '',
            )
            adv.save()
            eff.advanced.add(adv)
        else:
            adv = AdvData(
                attTag0 = row[24] if row[24] != 'ATT_NONE' else '',
                actTag0 = row[25],
                min_1_0 = row[26] if row[26] else '',
                max_1_0 = row[27] if row[27] and row[27] != row[26] else '',
                min_2_0 = row[28] if row[28] else '',
                max_2_0 = row[29] if row[29] and row[28] != row[29] else '',
            )
            adv.save()
            eff.advanced.add(adv)
        if not row[30]:
            if row[23] != 'ITEM_SUB_BASE_NONE':
                adv = AdvData(
                    actTag0 = row[23],
                    min_1_0 = row[21] if row[21] else '',
                    max_1_0 = row[22] if row[21] != row[22] else '',
                )
                adv.save()
                eff.advanced.add(adv)
        elif row[31] != 'ACT_NONE':
            adv = AdvData(
                attTag0 = row[30] if row[30] != 'ATT_NONE' else '',
                actTag0 = row[31],
                min_1_0 = row[32] if row[32] else '',
                max_1_0 = row[33] if row[33] and row[32] != row[33] else '',
                min_2_0 = row[34] if row[34] else '',
                max_2_0 = row[35] if row[35] and row[34] != row[35] else '',
            )
            adv.save()
            eff.advanced.add(adv)
    

def import_generic(function):
    with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter='\t')
        index = 1
        for row in reader:
            function(row, index)
            index = index + 1

#import_generic(import_forge)