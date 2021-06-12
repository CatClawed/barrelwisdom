from django.db import models
from games.A16.regions_a16.models import Region
from games.A16.monsters_a16.models import Monster
from games.A16.categories_a16.models import Category
from games.A16.properties_a16.models import Property
from games.A16.effects_a16.models import Effect

class Item_en(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500, default="")

class Item_ja(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500, default="")

class Item(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE)
    index = models.IntegerField()
    level = models.IntegerField()
    slots = models.IntegerField()
    evalue = models.IntegerField()
    fire  = models.BooleanField(default=False)
    water = models.BooleanField(default=False)
    wind  = models.BooleanField(default=False)
    earth = models.BooleanField(default=False)
    effect =  models.IntegerField(blank=True, null=True)
    size = models.IntegerField(blank=True, null=True)
    kind = models.CharField(max_length=16)
    locations = models.ManyToManyField(Region)
    monsters = models.ManyToManyField(Monster)
    properties = models.ManyToManyField(Property)
    categories = models.ManyToManyField(Category)
    note = models.CharField(max_length=200, default="")
    class Meta:
        ordering = ['index']

class Book(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE)
    items = models.ManyToManyField(Item)
    note = models.CharField(max_length=200)
    index = models.IntegerField()
    class Meta:
        ordering = ['index']

class Character(models.Model):
    name = models.CharField(max_length=10)

class CharacterEquip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    chars = models.ManyToManyField(Character)

class Equip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    hp    = models.IntegerField()
    mp    = models.IntegerField(default=0)
    atk   = models.IntegerField()
    defen = models.IntegerField()
    spd   = models.IntegerField()

class Disassembly(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    dis = models.ManyToManyField(Item, related_name="disassembleitem")

class Disassembled(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    parent = models.ManyToManyField(Item, related_name="disassembledparent")

class Ingredient(models.Model):
    synthitem = models.ForeignKey(Item, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientitem')
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientcat')
    num = models.IntegerField(blank=True, null=True)


class EffectData(models.Model):
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    min_elem = models.IntegerField()
    max_elem = models.IntegerField()
    number = models.IntegerField(blank=True, null=True)
    class Meta:
        ordering = ['number']

class EffectLines(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    effects = models.ManyToManyField(EffectData)
    elem = models.CharField(max_length=10)
    hidden = models.BooleanField(default=False)
    order = models.IntegerField() # order of elems due to duplicates
    class Meta:
        ordering = ['order']
