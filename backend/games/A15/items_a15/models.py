from django.db import models
from games.A15.regions_a15.models import Region, FieldEvent
from games.A15.monsters_a15.models import Monster
from games.A15.categories_a15.models import Category
from games.A15.properties_a15.models import Property
from games.A15.effects_a15.models import Effect

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
    evalue = models.IntegerField()
    fire  = models.BooleanField(default=False)
    water = models.BooleanField(default=False)
    wind  = models.BooleanField(default=False)
    earth = models.BooleanField(default=False)
    effect =  models.IntegerField(blank=True, null=True)
    size = models.IntegerField(blank=True, null=True)
    itype = models.CharField(max_length=15)
    isDLC = models.BooleanField(default=False)
    isDX = models.BooleanField(default=False)
    locations = models.ManyToManyField(Region)
    monsters = models.ManyToManyField(Monster)
    properties = models.ManyToManyField(Property)
    categories = models.ManyToManyField(Category)
    class Meta:
        ordering = ['index']

class Character(models.Model):
    name = models.CharField(max_length=10)

class CharacterEquip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    chars = models.ManyToManyField(Character)

class Book(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE)
    items = models.ManyToManyField(Item)
    acquisition = models.CharField(max_length=200) 
    index = models.IntegerField()
    class Meta:
        ordering = ['index']

class Equip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    hp    = models.IntegerField()
    mp    = models.IntegerField(default=0)
    atk   = models.IntegerField()
    defen = models.IntegerField()
    spd   = models.IntegerField()
    fire  = models.IntegerField()
    wind  = models.IntegerField()
    water = models.IntegerField()
    earth = models.IntegerField()

class Disassemble(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    dis1 = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="disassembly1")
    dis2 = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True, related_name="disassembly2")

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

class EffectLine(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    elem = models.CharField(max_length=5)
    number = models.IntegerField()
    min_elem = models.IntegerField()
    max_elem = models.IntegerField()
    class Meta:
        ordering = ['elem', 'number']

class AreaData(models.Model):
    area = models.ForeignKey(Region, on_delete=models.CASCADE)
    subarea = models.CharField(max_length=20, blank=True, null=True)
    monsters = models.ManyToManyField(Monster)
    items = models.ManyToManyField(Item)
    rare = models.ManyToManyField(Item, related_name='RareItem')
    maxitem = models.ManyToManyField(Item, related_name='MaxItem')
    fieldevent = models.ManyToManyField(FieldEvent)

class RegionData(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    areas = models.ManyToManyField(AreaData)
    strong = models.ManyToManyField(Monster)

class Relic(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    area = models.ManyToManyField(Region, related_name="areas")
    regiondata = models.ForeignKey(RegionData, on_delete=models.CASCADE, blank=True, null=True)
