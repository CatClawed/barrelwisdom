from games.A22.items_a22.models import *
from games.A22.categories_a22.models import Category
from games.A22.effects_a22.models import Effect
"""
categories = Category.objects.all()

for category in categories:
    obj = CategoryItems(category=category)
    obj.save()
    items = Item.objects.filter(category=category)
    ingredients = Ingredient.objects.filter(category=category)
    for item in items:
        obj.items.add(item)
    for ingredient in ingredients:
        obj.ingredients.add(Item.objects.get(id=ingredient.synthitem.id))


categories = CategoryItems.objects.all()
"""
slugs = [
    'add-water',
    'add-plants',
    'add-flowers',
    'add-medicinal',
    'add-poisons',
    'add-elixirs',
    'add-sand',
    'add-stone',
    'add-ore',
    'add-gemstones',
    'add-gunpowder',
    'add-fuel',
    'add-edibles',
    'add-fruit',
    'add-bugs',
    'add-threads',
    'add-lumber',
    'add-gases',
    'add-puniballs',
    'add-animal-products',
    'add-dragon-mat',
    'add-magical',
    'add-neutralizers',
    'add-general-goods',
    'add-metal',
    'add-jewels',
    'add-spices']

catslugs = [
    'water',
    'plants',
    'flowers',
    'medicinal',
    'poisons',
    'elixirs',
    'sand',
    'stone',
    'ore',
    'gemstones',
    'gunpowder',
    'fuel',
    'edibles',
    'fruit',
    'bugs',
    'threads',
    'lumber',
    'gases',
    'puniballs',
    'animal-products',
    'dragon-mat',
    'magical',
    'neutralizers',
    'general-goods',
    'metal',
    'jewels',
    'spices']

for i in range(0, len(slugs)):
    cat = CategoryItems.objects.get(category__slugname=catslugs[i])
    eff = Effect.objects.get(slugname=slugs[i])
    efflines = EffectLine.objects.filter(effect=eff)
    for e in efflines:
        #print(Item.objects.get(id=e.item.id).slugname)
        cat.items.add(Item.objects.get(id=e.item.id))