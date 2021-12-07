from django.db import models

class Effect_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect(models.Model):
    slug   = models.SlugField(max_length=50, unique=True)
    eff_en = models.OneToOneField(Effect_en, on_delete=models.CASCADE)
    eff_ja = models.OneToOneField(Effect_ja, on_delete=models.CASCADE)
    eff_sc = models.OneToOneField(Effect_sc, on_delete=models.CASCADE)
    eff_tc = models.OneToOneField(Effect_tc, on_delete=models.CASCADE)
    # Advanced Data, not interpreted
    attTag0 = models.CharField(max_length=50, blank=True, null=True) #rare
    actTag0 = models.CharField(max_length=50, blank=True, null=True)
    min_1_0 = models.CharField(max_length=50, blank=True, null=True)
    max_1_0 = models.CharField(max_length=50, blank=True, null=True)
    min_2_0 = models.CharField(max_length=50, blank=True, null=True)
    max_2_0 = models.CharField(max_length=50, blank=True, null=True)
    actTag1 = models.CharField(max_length=50, blank=True, null=True)
    min_1_1 = models.CharField(max_length=50, blank=True, null=True)
    max_1_1 = models.CharField(max_length=50, blank=True, null=True)
    
class Unit_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Unit_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Unit_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Unit_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)
    
class Unit(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    char1 = models.CharField(max_length=15)
    char2 = models.CharField(max_length=15)
    char3 = models.CharField(max_length=15)
    char4 = models.CharField(max_length=15)
    index = models.IntegerField()
    unit_en = models.OneToOneField(Unit_en, on_delete=models.CASCADE)
    unit_ja = models.OneToOneField(Unit_ja, on_delete=models.CASCADE)
    unit_sc = models.OneToOneField(Unit_sc, on_delete=models.CASCADE)
    unit_tc = models.OneToOneField(Unit_tc, on_delete=models.CASCADE)

class Category(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    cat_en = models.CharField(max_length=50)
    cat_ja = models.CharField(max_length=50)
    cat_sc = models.CharField(max_length=50)
    cat_tc = models.CharField(max_length=50)

class Item_en(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=270, blank=True)

class Item_ja(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=270, blank=True)

class Item_sc(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=270, blank=True)

class Item_tc(models.Model):
    name = models.CharField(max_length=50, unique=True)
    desc = models.CharField(max_length=270, blank=True)

class Item(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    itemtype = models.CharField(max_length=20, blank=True)
    note = models.CharField(max_length=255, blank=True)
    char = models.CharField(max_length=15)
    index = models.IntegerField()
    isDLC = models.BooleanField(default=False)
    category = models.ManyToManyField(Category)
    item_en = models.OneToOneField(Item_en, on_delete=models.CASCADE)
    item_ja = models.OneToOneField(Item_ja, on_delete=models.CASCADE)
    item_sc = models.OneToOneField(Item_sc, on_delete=models.CASCADE)
    item_tc = models.OneToOneField(Item_tc, on_delete=models.CASCADE)
    class Meta:
        ordering = ['index']
    
class UsableItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    wt = models.IntegerField()
    cc = models.IntegerField()
    cooltime = models.IntegerField()
    effrange = models.CharField(max_length=15)

class LineName(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    line_en = models.CharField(max_length=50, unique=True)
    line_ja = models.CharField(max_length=50, unique=True)
    line_sc = models.CharField(max_length=50, unique=True)
    line_tc = models.CharField(max_length=50, unique=True)

class EffectLine(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    #line = models.IntegerField()
    linename = models.ForeignKey(LineName, on_delete=models.CASCADE)
    number = models.IntegerField()
    class Meta:
        ordering = ['linename', 'number']

class SkillLine(models.Model):
    items = models.ManyToManyField(Item)
    effect1 = models.ForeignKey(Effect, on_delete=models.CASCADE, related_name="eff1")
    effect2 = models.ForeignKey(Effect, on_delete=models.CASCADE, related_name="eff2")
    effect3 = models.ForeignKey(Effect, on_delete=models.CASCADE, related_name="eff3")
    linename = models.ForeignKey(LineName, on_delete=models.CASCADE)
    class Meta:
        ordering = ['linename']

class Ingredient(models.Model):
    synthitem = models.ForeignKey(Item, on_delete=models.CASCADE)
    num = models.IntegerField()
    item = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientitem')
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE, related_name='ingredientcat')