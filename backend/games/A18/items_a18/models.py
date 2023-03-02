from django.db import models
from games.A18.misc_a18.models import Character, BasicText, Shop, ItemMastery
from games.A18.effects_traits_a18.models import Trait, Effect

class Component(models.Model):
    color   = models.CharField(max_length=10)
    name_en = models.CharField(max_length=50)
    name_ja = models.CharField(max_length=50)
    name_sc = models.CharField(max_length=50)
    name_tc = models.CharField(max_length=50)
    value   = models.IntegerField()

class Category(models.Model):
    slug = models.SlugField(max_length=25)
    cat_en = models.CharField(max_length=25)
    cat_ja = models.CharField(max_length=25)
    cat_sc = models.CharField(max_length=25)
    cat_tc = models.CharField(max_length=25)
    icon   = models.CharField(max_length=35)

class Item(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    item_en = models.OneToOneField(BasicText, on_delete=models.CASCADE, blank=True, null=True, related_name="item_en")
    item_ja = models.OneToOneField(BasicText, on_delete=models.CASCADE, blank=True, null=True, related_name="item_ja")
    item_sc = models.OneToOneField(BasicText, on_delete=models.CASCADE, blank=True, null=True, related_name="item_sc")
    item_tc = models.OneToOneField(BasicText, on_delete=models.CASCADE, blank=True, null=True, related_name="item_tc")
    char1 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char1")
    char2 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char2")
    char3 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char3")
    char4 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char4")
    index = models.IntegerField()
    level = models.IntegerField()
    kind = models.CharField(max_length=20)
    traits = models.ForeignKey(Trait, on_delete=models.CASCADE, null=True, blank=True)
    categories = models.ManyToManyField(Category)
    catalysts = models.ManyToManyField(Category, related_name="catalysts")
    add = models.ManyToManyField(Category, related_name="add_categories")
    quantity = models.IntegerField(null=True, blank=True)
    uses = models.IntegerField(null=True, blank=True)
    wt = models.IntegerField(null=True, blank=True)
    stun = models.IntegerField(null=True, blank=True)
    range = models.CharField(max_length=15, blank=True)
    dmin  = models.IntegerField(null=True)
    dmax  = models.IntegerField(null=True)
    fixed_components = models.ManyToManyField(Component)
    random_components = models.ManyToManyField(Component, related_name="rdm_components")
    isDLC = models.BooleanField(default=False)
    isDX  = models.BooleanField(default=False)
    chars = models.ManyToManyField(Character)
    class Meta:
        ordering = ['index']

class Book(models.Model):
    book  = models.OneToOneField(Item, on_delete=models.CASCADE, related_name="book")
    note = models.CharField(max_length=200, blank=True, null=True)
    recipes = models.ManyToManyField(Item, related_name="recipes")

class Equip(models.Model):
    item  = models.OneToOneField(Item, on_delete=models.CASCADE)
    hp    = models.IntegerField()
    mp    = models.IntegerField()
    atk   = models.IntegerField()
    dfn   = models.IntegerField()
    spd   = models.IntegerField()

class CatalystAction(models.Model):
    cat_en = models.CharField(max_length=80)
    cat_ja = models.CharField(max_length=80)
    cat_sc = models.CharField(max_length=80)
    cat_tc = models.CharField(max_length=80)

class Catalyst(models.Model):
    item  = models.OneToOneField(Item, on_delete=models.CASCADE) 
    size = models.IntegerField()
    color1  = models.CharField(max_length=10, blank=True)
    color2  = models.CharField(max_length=10, blank=True)
    color3  = models.CharField(max_length=10, blank=True)
    color4  = models.CharField(max_length=10, blank=True)
    color5  = models.CharField(max_length=10, blank=True)
    color6  = models.CharField(max_length=10, blank=True)
    action1 = models.ForeignKey(CatalystAction, null=True, blank=True, on_delete=models.CASCADE, related_name="action1")
    action2 = models.ForeignKey(CatalystAction, null=True, blank=True, on_delete=models.CASCADE, related_name="action2")
    action3 = models.ForeignKey(CatalystAction, null=True, blank=True, on_delete=models.CASCADE, related_name="action3")
    action4 = models.ForeignKey(CatalystAction, null=True, blank=True, on_delete=models.CASCADE, related_name="action4")
    action5 = models.ForeignKey(CatalystAction, null=True, blank=True, on_delete=models.CASCADE, related_name="action5")
    action6 = models.ForeignKey(CatalystAction, null=True, blank=True, on_delete=models.CASCADE, related_name="action6")

class ShopSlot(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    index = models.IntegerField()
    random = models.BooleanField(default=False)

class MasteryLine(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    level = models.IntegerField()
    masteries = models.ManyToManyField(ItemMastery)
    class Meta:
        ordering = ['item', 'level']

class Ingredient(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True)
    cat = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    quantity = models.IntegerField()
    synth = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="ingredients")   

class EffectLines(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    color = models.CharField(max_length=10, blank=True)
    order = models.IntegerField()
    class Meta:
        ordering = ['order']

class EffectData(models.Model):
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE, blank=True, null=True)
    component = models.ForeignKey(Component, on_delete=models.CASCADE, blank=True, null=True)
    num = models.IntegerField(blank=True, null=True)
    line = models.ForeignKey(EffectLines, on_delete=models.CASCADE, blank=True, null=True)
    class Meta:
        ordering = ['num']