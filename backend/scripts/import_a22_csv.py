# python manage.py shell < scripts/import_a22_csv.py
# write it here so I can't forget again

from games.A22.items_a22.models import *
from games.A22.effects_a22.models import *
from games.A22.locations_a22.models import Location
from games.A22.categories_a22.models import Category
from games.A22.shops_a22.models import Shop
from games.A22.traits_a22.models import *
from games.A22.monsters_a22.models import *
import csv
import codecs
import sys


with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
	reader = csv.reader(csvfile, delimiter='\t')
	for row in reader:
		obj = Effect.objects.get(slugname=row[0])
		

	"""
		try:
			obj = Trait.objects.get(slugname=row[0])
			obj.index = row[1]
			obj.save()
		except:
			print(row[0])

			en = Trait_en(name=row[2],  description=row[3])
			ja = Trait_ja(name=row[4],  description=row[5])
			ko = Trait_ko(name=row[6],  description=row[7])
			fr = Trait_fr(name=row[8],  description=row[9])
			sc = Trait_sc(name=row[10], description=row[11])
			tc = Trait_tc(name=row[12], description=row[13])

			en.save()
			ja.save()
			ko.save()
			fr.save()
			sc.save()
			tc.save()

			obj = Trait(
				slugname=row[0],
				index=row[1],
				grade=row[14],
				trans_atk= (True if row[15] else False),
				trans_heal=(True if row[16] else False),
				trans_dbf= (True if row[17] else False),
				trans_buff=(True if row[18] else False),
				trans_wpn= (True if row[19] else False),
				trans_arm= (True if row[20] else False),
				trans_acc= (True if row[21] else False),
				trait_en=en,
				trait_ja=ja,
				trait_ko=ko,
				trait_fr=fr,
				trait_sc=sc,
				trait_tc=tc)
			obj.save()

		obj = Effect.objects.get(slugname=row[0])
		if row[1]:
			obj.attTag0 = row[1]
		if row[2]:
			obj.actTag0 = row[2]
		if row[3]:
			obj.max_1_0 = ""
			if row[4] != row[3]:
				obj.max_1_0 = row[4]
			obj.min_1_0 = row[3]
		if row[5]:
			obj.attTag1 = row[5]
		if row[6]:
			obj.actTag1 = row[6]
		if row[7]:
			obj.max_1_1 = ""
			if row[8] != row[7]:
				obj.max_1_1 = row[8]
			obj.min_1_1 = row[7]
		if row[9]:
			obj.max_2_1 = ""
			if row[10] != row[9]:
				obj.max_2_1 = row[10]
			obj.min_2_1 = row[9]
		if row[11]:
			obj.max_2_0 = ""
			if row[12] != row[11]:
				obj.max_2_0 = row[12]
			obj.min_2_0 = row[11]
		obj.save()


		obj = Effect.objects.get(slugname=row[0])
		print(row[0])
		obj.parent.clear()
		parents = row[1].split(',')
		for p in parents:
			if p:
				print(p)
				p1 = Effect.objects.get(slugname=p)
				obj.parent.add(p1)
		obj.save()


		en = Effect_en(name=row[3],  description=row[4])
		ja = Effect_ja(name=row[5],  description=row[6])
		ko = Effect_ko(name=row[7],  description=row[8])
		fr = Effect_fr(name=row[9],  description=row[10])
		sc = Effect_sc(name=row[11], description=row[12])
		tc = Effect_tc(name=row[13], description=row[14])

		en.save()
		ja.save()
		ko.save()
		fr.save()
		sc.save()
		tc.save()

		obj = Effect(
			slugname=row[0],
			index=row[1],
			efftype=row[2],
			eff_en=en,
			eff_ja=ja,
			eff_ko=ko,
			eff_fr=fr,
			eff_sc=sc,
			eff_tc=tc)

		obj.save()


		area = Location.objects.get(slugname=row[0])
		rank1 = (Item.objects.get(slugname=row[1]) if row[1] else None)
		rank2 = (Item.objects.get(slugname=row[2]) if row[2] else None)
		rank3 = (Item.objects.get(slugname=row[3]) if row[3] else None)
		priority1 = (int(row[4]) if row[4] else None)
		priority2 = (int(row[5]) if row[5] else None)
		priority3 = (int(row[6]) if row[6] else None)
		tool = row[7]

		print(row[0])

		obj = ItemLocations(
			area=area,
			rank1=rank1,
			rank2=rank2,
			rank3=rank3,
			priority1=priority1,
			priority2=priority2,
			priority3=priority3,
			tool=tool
		)
		obj.save()

		
		synthitem = Item.objects.get(slugname=row[0])
		required = (True if (row[1] == "TRUE") else False)
		isCategory = (True if (row[3] == "yes") else False)
		item = None
		category = None
		if isCategory:
			category = Category.objects.get(slugname=row[2])
		else:
			item = Item.objects.get(slugname=row[2])
		ice = (True if (row[4] == "Ice") else False)
		wind = (True if (row[4] == "Wind") else False)
		lightning = (True if (row[4] == "Lightning") else False)
		fire = (True if (row[4] == "Fire") else False)
		v1 = ( row[5] if  row[5] else None)
		v2 = ( row[7] if  row[7] else None)
		v3 = (row[10] if row[10] else None)
		v4 = (row[13] if row[13] else None)
		v5 = (row[16] if row[16] else None)
		e1 = ( row[6] if  row[6] else None)
		e2 = ( row[8] if  row[8] else None)
		e3 = (row[11] if row[11] else None)
		e4 = (row[14] if row[14] else None)
		e5 = (row[17] if row[17] else None)
		s2 = (True if ( row[9] == "TRUE") else False)
		s3 = (True if (row[12] == "TRUE") else False)
		s4 = (True if (row[15] == "TRUE") else False)
		s5 = (True if (row[18] == "TRUE") else False)
		unlockelem = row[19]
		unlockvalue = (int(row[20]) if row[20] else None)
		unlockquality = (int(row[21]) if row[21] else None)
		isRecipeMorph = (True if (row[22] != "0") else False)


		print(row[0] + "\t" + row[2])

		ing = Ingredient(
			synthitem=synthitem,
			required=required,
			item=item,
			category=category,
			ice=ice,
			wind=wind,
			lightning=lightning,
			fire=fire,
			unlockelem=unlockelem,
			unlockvalue=unlockvalue,
			unlockquality=unlockquality
		)
		ing.save()

		if isRecipeMorph:
			obj = IngEffects(
				number = 1,
				value = v1,
				morph = Item.objects.get(slugname=e1),
				ingredient = ing
			)
			obj.save()
			continue
		
		if v1:
			eff = None
			noneff = None
			try: 
				eff = Effect.objects.get(slugname=e1)
			except Effect.DoesNotExist:
				noneff = e1
			obj = IngEffects(
				number = 1,
				value = int(v1),
				effect = eff,
				noneffect=noneff,
				ingredient = ing
			)
			obj.save()
		if v2:
			eff = None
			noneff = None
			try: 
				eff = Effect.objects.get(slugname=e2)
			except Effect.DoesNotExist:
				noneff = e2
			obj = IngEffects(
				number = 2,
				value = int(v2),
				effect = eff,
				noneffect = noneff,
				essence = s2,
				ingredient = ing
			)
			obj.save()
		if v3:
			eff = None
			noneff = None
			try: 
				eff = Effect.objects.get(slugname=e3)
			except Effect.DoesNotExist:
				noneff = e3
			obj = IngEffects(
				number = 3,
				value = int(v3),
				effect = eff,
				noneffect = noneff,
				essence = s3,
				ingredient = ing
			)
			obj.save()
		if v4:
			eff = None
			noneff = None
			try: 
				eff = Effect.objects.get(slugname=e4)
			except Effect.DoesNotExist:
				noneff = e4
			obj = IngEffects(
				number = 4,
				value = int(v4),
				effect = eff,
				noneffect = noneff,
				essence = s4,
				ingredient = ing
			)
			obj.save()
		if v5:
			eff = None
			noneff = None
			try: 
				eff = Effect.objects.get(slugname=e5)
			except Effect.DoesNotExist:
				noneff = e5
			obj = IngEffects(
				number = 5,
				value = int(v5),
				effect = eff,
				noneffect = noneff,
				essence = s5,
				ingredient = ing
			)
			obj.save()


		
		slug = row[0]
		level = row[1]
		elemval = row[2]
		thun = (True if (row[3] == "-1") else False)
		fire = (True if (row[4] == "-1") else False)
		air  = (True if (row[5] == "-1") else False)
		ice  = (True if (row[6] == "-1") else False)
		kind = row[7]
		cat0 = row[8]
		cat1 = row[9]
		cat2 = row[10]
		cat3 = row[11]
		isDLC = (True if (row[12] == "-1") else False)
		note = row[14]
		shop = row[15]
		index = row[16]
		n_en = row[17]
		d_en = row[18]
		n_ja = row[19]
		d_ja = row[20]
		n_ko = row[21]
		d_ko = row[22]
		n_fr = row[23]
		d_fr = row[24]
		n_sc = row[25]
		d_sc = row[26]
		n_tc = row[27]
		d_tc = row[28]
		skilltree = (True if (row[29] == "yes") else False)
		trait1 = row[30]
		trait2 = row[31]
		locations = row[32].split(",")

		print(slug)

		en = Item_en(name=n_en, description=d_en)
		ja = Item_ja(name=n_ja, description=d_ja)
		ko = Item_ko(name=n_ko, description=d_ko)
		fr = Item_fr(name=n_fr, description=d_fr)
		sc = Item_sc(name=n_sc, description=d_sc)
		tc = Item_tc(name=n_tc, description=d_tc)

		en.save()
		ja.save()
		ko.save()
		fr.save()
		sc.save()
		tc.save()

		obj = Item(
			slugname=slug,
			itemtype=kind,
			note = note,
			index = index,
			level=level,
			isDLC=isDLC,
			ice=ice,
			wind=air,
			lightning=thun,
			fire=fire,
			elementvalue=elemval,
			skilltree=skilltree,
			item_en=en,
			item_ja=ja,
			item_ko=ko,
			item_fr=fr,
			item_sc=sc,
			item_tc=tc)
		if shop:
			obj.shop = Shop.objects.get(slugname=shop)
		obj.save()

		if cat0:
			obj.category.add(Category.objects.get(slugname=cat0))
		if cat1:
			obj.category.add(Category.objects.get(slugname=cat1))
		if cat2:
			obj.category.add(Category.objects.get(slugname=cat2))
		if cat3:
			obj.category.add(Category.objects.get(slugname=cat3))
		if trait1:
			obj.trait.add(Trait.objects.get(slugname=trait1))
		if trait2:
			obj.trait.add(Trait.objects.get(slugname=trait2))

		for i in range(0, len(locations)):
			if locations[i]:
				obj.location.add(Location.objects.get(slugname=locations[i]))
		"""