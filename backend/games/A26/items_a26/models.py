from django.db import models
from games.A26.misc_a26.models import Text, Coordinate, QuestData

# hello yes ez prefetching where you at
class TraitGroup(models.Model):
    num = models.IntegerField(unique=True)

class Trait(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name  = models.ForeignKey(Text, on_delete=models.CASCADE)
    desc1 = models.ForeignKey(Text, on_delete=models.CASCADE, related_name='tdesc1')
    desc2 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='tdesc2')
    wep  = models.BooleanField(default=False)
    arm  = models.BooleanField(default=False)
    acc  = models.BooleanField(default=False)
    atk  = models.BooleanField(default=False)
    heal = models.BooleanField(default=False)
    buff = models.BooleanField(default=False)
    dbf  = models.BooleanField(default=False)
    fire = models.BooleanField(default=False)
    ice  = models.BooleanField(default=False)
    bolt = models.BooleanField(default=False)
    air  = models.BooleanField(default=False)
    no_level = models.BooleanField(default=False)
    group = models.ForeignKey(TraitGroup, blank=True, null=True, on_delete=models.CASCADE)
    grade_min = models.IntegerField()
    grade_max = models.IntegerField(blank=True, null=True)
    combo1 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name='tcombo1')
    combo2 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name='tcombo2')
    combo3 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name='tcombo3')
    combo4 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name='tcombo4')
    # These all have four values. They will be treated as CSV style values
    # can you tell I don't wanna make dedicated DB values for this trash
    lv_min_rand_range = models.CharField(blank=True, null=True)
    lv_max_rand_range = models.CharField(blank=True, null=True)
    trait_base        = models.CharField(blank=True, null=True)
    trait_hash        = models.CharField(blank=True, null=True)
    chests = models.ManyToManyField(Coordinate)

class Effect(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name  = models.ForeignKey(Text, on_delete=models.CASCADE)
    desc1 = models.ForeignKey(Text, on_delete=models.CASCADE, related_name='edesc1')
    desc2 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='edesc2')
    max_level = models.IntegerField()

    # eight values each, same as trait trash I don't wanna db this out
    prm1_lv_min_rand_range = models.CharField(blank=True, null=True)
    prm1_lv_max_rand_range = models.CharField(blank=True, null=True)
    prm2_lv_min_rand_range = models.CharField(blank=True, null=True)
    prm2_lv_max_rand_range = models.CharField(blank=True, null=True)
    att_tag                = models.CharField(blank=True, null=True)
    act_tag                = models.CharField(blank=True, null=True)
    effect_hash            = models.CharField(blank=True, null=True)

class Category(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name  = models.ForeignKey(Text, on_delete=models.CASCADE)

class Material(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name  = models.ForeignKey(Text, on_delete=models.CASCADE)

class Item(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name = models.ForeignKey(Text, on_delete=models.CASCADE)
    desc = models.ForeignKey(Text, null=True, blank=True, on_delete=models.CASCADE, related_name="idesc")
    resonance = models.IntegerField()

    atk = models.IntegerField(blank=True, null=True)
    dfn = models.IntegerField(blank=True, null=True)
    spd = models.IntegerField(blank=True, null=True)

    ct   = models.IntegerField(blank=True, null=True)
    aoe  = models.BooleanField(blank=True, null=True)

    fire = models.BooleanField(default=False)
    ice  = models.BooleanField(default=False)
    bolt = models.BooleanField(default=False)
    air  = models.BooleanField(default=False)

    cats = models.ManyToManyField(Category)
    mats = models.ManyToManyField(Material)
    isDLC = models.BooleanField(default=False)

    location = models.ManyToManyField(Coordinate)
    comfort_goal = models.IntegerField(blank=True, null=True)
    hidden = models.BooleanField(default=False)

    quest = models.ForeignKey(QuestData, blank=True, null=True, on_delete=models.CASCADE)

class IngredientEffect(models.Model):
    lv = models.IntegerField()
    eff = models.ForeignKey(Effect, on_delete=models.CASCADE)

class ItemStatus(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    rank = models.CharField(max_length=1)
    eff = models.ManyToManyField(IngredientEffect)
    quality = models.IntegerField()

    class Meta:
        ordering = ['item', 'quality']

class RecipeLevel(models.Model):
    lv = models.IntegerField()
    reward = models.ForeignKey(Text, on_delete=models.CASCADE)
    amt  = models.IntegerField(blank=True, null=True)
    fire = models.IntegerField(blank=True, null=True)
    ice  = models.IntegerField(blank=True, null=True)
    bolt = models.IntegerField(blank=True, null=True)
    air  = models.IntegerField(blank=True, null=True)
    class Meta:
        ordering = ['lv']

class RecipeEffect(models.Model):
    item = models.ForeignKey(Item, null=True, blank=True, on_delete=models.CASCADE)
    cat  = models.ForeignKey(Category, null=True, blank=True, on_delete=models.CASCADE)
    eff = models.ForeignKey(Effect, null=True, blank=True, on_delete=models.CASCADE)
    order = models.IntegerField()
    class Meta:
        ordering = ['order']

class Recipe(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    num = models.IntegerField(default=1)
    sp  = models.IntegerField()
    kind = models.CharField(max_length=30)
    recipe = models.ManyToManyField(RecipeEffect)
    level = models.ManyToManyField(RecipeLevel)

class NecessaryMaterial(models.Model):
    mat = models.ForeignKey(Material, on_delete=models.CASCADE)
    num = models.IntegerField()

class RecipeMaterial(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE, related_name='recipematerial')
    core    = models.IntegerField(blank=True, null=True)
    comfort = models.IntegerField(blank=True, null=True)
    cost    = models.IntegerField(blank=True, null=True)
    recipe = models.ManyToManyField(NecessaryMaterial)
    kind = models.CharField(max_length=50)

