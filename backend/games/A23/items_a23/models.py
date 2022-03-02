from django.db import models
from games.A23.traits_a23.models import Trait
from games.A23.effects_a23.models import Effect
from games.A23.misc_a23.models import Character, Shop
from games.A23.regions_a23.models import Region

class Category(models.Model):
    slug = models.SlugField(max_length=25)
    cat_en = models.CharField(max_length=25)
    cat_ja = models.CharField(max_length=25)
    cat_ko = models.CharField(max_length=25)
    cat_sc = models.CharField(max_length=25)
    cat_tc = models.CharField(max_length=25)
    icon   = models.CharField(max_length=35)

class Item_en(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=200, null=True, blank=True)
    desc2 = models.CharField(max_length=200, null=True, blank=True)
    desc3 = models.CharField(max_length=200, null=True, blank=True)
    desc4 = models.CharField(max_length=200, null=True, blank=True)

class Item_ja(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=200, null=True, blank=True)
    desc2 = models.CharField(max_length=200, null=True, blank=True)
    desc3 = models.CharField(max_length=200, null=True, blank=True)
    desc4 = models.CharField(max_length=200, null=True, blank=True)
    
class Item_ko(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=200, null=True, blank=True)
    desc2 = models.CharField(max_length=200, null=True, blank=True)
    desc3 = models.CharField(max_length=200, null=True, blank=True)
    desc4 = models.CharField(max_length=200, null=True, blank=True)
    
class Item_sc(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=200, null=True, blank=True)
    desc2 = models.CharField(max_length=200, null=True, blank=True)
    desc3 = models.CharField(max_length=200, null=True, blank=True)
    desc4 = models.CharField(max_length=200, null=True, blank=True)
    
class Item_tc(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=200, null=True, blank=True)
    desc2 = models.CharField(max_length=200, null=True, blank=True)
    desc3 = models.CharField(max_length=200, null=True, blank=True)
    desc4 = models.CharField(max_length=200, null=True, blank=True)

class Item(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    char1 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="chara1")
    char2 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="chara2")
    char3 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="chara3")
    char4 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="chara4")
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE, blank=True, null=True)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE, blank=True, null=True)
    item_ko = models.OneToOneField(Item_ko, on_delete=models.CASCADE, blank=True, null=True)
    item_sc = models.OneToOneField(Item_sc, on_delete=models.CASCADE, blank=True, null=True)
    item_tc = models.OneToOneField(Item_tc, on_delete=models.CASCADE, blank=True, null=True)
    index = models.IntegerField()
    level = models.IntegerField()
    price = models.IntegerField()
    kind = models.CharField(max_length=20)
    traits = models.ManyToManyField(Trait)
    categories = models.ManyToManyField(Category)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, null=True, blank=True)
    chest = models.ForeignKey(Region, on_delete=models.CASCADE, null=True, blank=True)
    class Meta:
        ordering = ['index']

class Book(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    book_en = models.CharField(max_length=50, blank=True, null=True)
    book_ja = models.CharField(max_length=50, blank=True, null=True)
    book_ko = models.CharField(max_length=50, blank=True, null=True)
    book_sc = models.CharField(max_length=50, blank=True, null=True)
    book_tc = models.CharField(max_length=50, blank=True, null=True)
    items = models.ManyToManyField(Item)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, null=True, blank=True)
    chest = models.ForeignKey(Region, on_delete=models.CASCADE, null=True, blank=True)
    index = models.IntegerField()
    class Meta:
        ordering = ['index']

class CharacterEquip(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    chars = models.ManyToManyField(Character)

class Equip(models.Model):
    item  = models.ForeignKey(Item, on_delete=models.CASCADE)
    hp    = models.IntegerField()
    mp    = models.IntegerField()
    atk   = models.IntegerField()
    dfn   = models.IntegerField()
    spd   = models.IntegerField()

class EffectData(models.Model):
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    elem = models.IntegerField()
    num = models.IntegerField(blank=True, null=True)
    class Meta:
        ordering = ['num']

class EffectLines(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    effects = models.ManyToManyField(EffectData)
    elem = models.CharField(max_length=10, blank=True, null=True)
    order = models.IntegerField() # order of elems due to duplicates
    class Meta:
        ordering = ['order']
