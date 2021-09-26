from django.db import models
from games.A12.regions_a12.models import Region
from games.A12.categories_a12.models import Category
from games.A12.monsters_a12.models import Monster
from games.A12.effects_a12.models import Effect
from games.A12.traits_a12.models import Trait

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
    level = models.IntegerField(null=True, blank=True)
    locations = models.ManyToManyField(Region)
    categories = models.ManyToManyField(Category)
    monsters = models.ManyToManyField(Monster)
    traits = models.ForeignKey(Trait, blank=True, null=True, on_delete=models.CASCADE)
    note = models.CharField(max_length=400)
    isDX = models.BooleanField(default=False)
    isDLC = models.BooleanField(default=False)
    time = models.FloatField(null=True, blank=True)
    mp = models.IntegerField(null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    uses = models.IntegerField(null=True, blank=True)
    item_type= models.CharField(max_length=15)
    item_subtype= models.CharField(max_length=15, null=True, blank=True)
    class Meta:
        ordering = ['index']

class Book(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE)
    index = models.IntegerField()
    note = models.CharField(max_length=400)
    isDX = models.BooleanField(default=False)
    isDLC = models.BooleanField(default=False)
    items = models.ManyToManyField(Item)
    class Meta:
        ordering = ['index']

class Character(models.Model):
    name = models.CharField(max_length=10)

class CharacterEquip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    chars = models.ManyToManyField(Character)

class Equip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    hp    = models.IntegerField(null=True, blank=True)
    mp    = models.IntegerField(null=True, blank=True)
    lp    = models.IntegerField(null=True, blank=True)
    atk   = models.IntegerField(null=True, blank=True)
    defen = models.IntegerField(null=True, blank=True)
    spd   = models.IntegerField(null=True, blank=True)
    material = models.ManyToManyField(Item, related_name="equip_materials")
    chars = models.ManyToManyField(Character)

class Ingredient(models.Model):
    synthitem = models.ForeignKey(Item, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientitem')
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientcat')
    num = models.IntegerField(blank=True, null=True)
    itemnum = models.IntegerField()
    class Meta:
        ordering = ['synthitem', 'itemnum']

class EffectLine(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    number = models.IntegerField()
    itemnum = models.IntegerField()
    min_elem = models.IntegerField(blank=True, null=True)
    max_elem = models.IntegerField(blank=True, null=True)
    class Meta:
        ordering = ['item', 'itemnum', 'number']