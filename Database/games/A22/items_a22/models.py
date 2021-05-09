from django.db import models
from games.A22.effects_a22.models import Effect
from games.A22.locations_a22.models import Location
from games.A22.categories_a22.models import Category
from games.A22.shops_a22.models import Shop
from games.A22.traits_a22.models import Trait

class Item_en(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Item_ja(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Item_ko(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Item_fr(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Item_sc(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Item_tc(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=270, blank=True)

class Item(models.Model):
    slugname = models.SlugField(max_length=50, unique=True) 
    itemtype = models.CharField(max_length=20, blank=True)
    note = models.CharField(max_length=255, blank=True)
    index = models.IntegerField()
    level = models.IntegerField()
    isDLC = models.BooleanField(default=False)
    ice = models.BooleanField(default=False)
    wind = models.BooleanField(default=False)
    lightning = models.BooleanField(default=False)
    fire = models.BooleanField(default=False)
    elementvalue =  models.IntegerField()
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, blank=True, null=True)
    category = models.ManyToManyField(Category)
    trait =  models.ManyToManyField(Trait, blank=True)
    skilltree = models.BooleanField(default=False)
    location = models.ManyToManyField(Location, blank=True)
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE)
    item_ko = models.OneToOneField(Item_ko, on_delete=models.CASCADE)
    item_fr = models.OneToOneField(Item_fr, on_delete=models.CASCADE)
    item_sc = models.OneToOneField(Item_sc, on_delete=models.CASCADE)
    item_tc = models.OneToOneField(Item_tc, on_delete=models.CASCADE)

## Usable Item Stuff

class UsableItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    wt = models.IntegerField()
    stun = models.IntegerField()
    cc = models.IntegerField()
    cooltime = models.IntegerField()
    effrange = models.CharField(max_length=15)

## Synthesized Item Stuff

class Ingredient(models.Model):
    # order really doesn't matter here, will redo if I ever include images I guess
    synthitem = models.ForeignKey(Item, on_delete=models.CASCADE)
    required = models.BooleanField(default=False)
    item = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientitem')
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientcat')
    ice = models.BooleanField(default=False)
    wind = models.BooleanField(default=False)
    lightning = models.BooleanField(default=False)
    fire = models.BooleanField(default=False)
    unlockelem = models.CharField(max_length=10, null=True, blank=True)
    unlockvalue = models.IntegerField(blank=True, null=True)
    unlockquality = models.IntegerField(blank=True, null=True)

class IngEffects(models.Model):
    # will have either an effect or a morph
    number = models.IntegerField() # to ensure effects are in order, goes to 5
    value = models.IntegerField()
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE, blank=True, null=True)
    noneffect = models.CharField(max_length=20, blank=True, null=True)
    essence = models.BooleanField(default=False)
    morph = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    class Meta:
        ordering = ['number']

# there will be redundant data, it is okay, trees and dbs just aren't happy together
class RecipeMorphs(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    parent = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='morphparent')
    order = models.IntegerField()
    class Meta:
        ordering = ['order']

class EVLinkItems(models.Model):
    result = models.ForeignKey(Item, on_delete=models.CASCADE)
    item1  = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='item1')
    item2  = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='item2')

## General Item Stuff

class EffectLine(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    line = models.IntegerField()
    number = models.IntegerField() # only defaults and material exclusives will be zero
    class Meta:
        ordering = ['line', 'number']

# Don't generally need this data so into another table
class ShopDevelop(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    cat1 = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='shopdevcat1')
    cat2 = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True, related_name='shopdevcat2')
    addProd = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True, related_name='addProd')
    addCat = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True, related_name='addCat')

# Detailed Location Data

class ItemLocations(models.Model):
    rank1 = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="rank1")
    rank2 = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True, related_name="rank2")
    rank3 = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True, related_name="rank3")
    priority1 = models.IntegerField(blank=True, null=True)
    priority2 = models.IntegerField(blank=True, null=True)
    priority3 = models.IntegerField(blank=True, null=True)
    tool = models.CharField(max_length=15, blank=True, null=True)

# tfw you think of how to implement things later
class ItemRegions(models.Model):
    region = models.ForeignKey(Location, on_delete=models.CASCADE)

# patch your mistakes
class ItemAreas(models.Model):
    area = models.ForeignKey(Location, on_delete=models.CASCADE)
    gatherdata = models.ManyToManyField(ItemLocations)
    text = models.TextField(blank=True, null=True)
    areas = models.ForeignKey(ItemRegions, related_name="areas", on_delete=models.CASCADE, blank=True, null=True)

class CategoryItems(models.Model):
    category = models.OneToOneField(Category, on_delete=models.CASCADE)
    items = models.ManyToManyField(Item, related_name='catitems')
    ingredients = models.ManyToManyField(Item, related_name='catings')