from games.BRSL.fragments_brsl.models import *

import csv
import codecs
import sys

with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')
    for row in reader:




        """
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
            """