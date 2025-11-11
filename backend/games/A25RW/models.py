from django.db import models
from games._helpers.common_fields import GameIdMixin, EnglishMixin, JapaneseMixin, SimplifiedChineseMixin, TraditionalChineseMixin, KoreanMixin, NameMixin, DescMixin, IndexMixin, generate_transfer_mixin, generate_combo_mixin, generate_value_pair_mixin

class Text(EnglishMixin, JapaneseMixin, SimplifiedChineseMixin,
           TraditionalChineseMixin, KoreanMixin):
    pass

class FlavorTextMixin(models.Model):
    desc1 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_desc1')
    desc2 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_desc2')
    desc3 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_desc3')
    desc4 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_desc4')
    char1 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_char1')
    char2 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_char2')
    char3 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_char3')
    char4 = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE, related_name='%(class)s_char4')
    class Meta:
        abstract = True

class Category(GameIdMixin, IndexMixin, NameMixin):
    class Meta:
        ordering = ['index']

class Trait(GameIdMixin, NameMixin, DescMixin, IndexMixin,
            generate_transfer_mixin(['syn', 'com', 'res', 'inh', 'boo',
                                     'wep', 'arm', 'acc', 'sta', 'exp']),
            generate_combo_mixin(2),
            generate_value_pair_mixin(2, numeric=True)):
    grade  = models.IntegerField()
    gatherable = models.BooleanField(default=True)
    icon = models.CharField()

    class Meta:
        ordering = ['index']

class Gift(GameIdMixin):
    character = models.ForeignKey(Text, on_delete=models.CASCADE)
    rc = models.SlugField()
    lc = models.SlugField()
    trait = models.ForeignKey(Trait, on_delete=models.CASCADE, related_name='%(class)s_set')

# Can also be skill
class Effect(GameIdMixin, NameMixin, DescMixin, IndexMixin):
    flag = models.BooleanField()
    val0_1 = models.IntegerField()
    val0_2 = models.IntegerField(blank=True, null=True)
    val1_1 = models.IntegerField(blank=True, null=True)
    val1_2 = models.IntegerField(blank=True, null=True)
    val2_1 = models.IntegerField(blank=True, null=True)
    val2_2 = models.IntegerField(blank=True, null=True)
    val3_1 = models.IntegerField(blank=True, null=True)
    val3_2 = models.IntegerField(blank=True, null=True)
    val4_1 = models.IntegerField(blank=True, null=True)
    val4_2 = models.IntegerField(blank=True, null=True)
    dlc = models.BooleanField(default=False)
    usable = models.BooleanField()
    class Meta:
        ordering = ['usable', 'index']


class Item(GameIdMixin, NameMixin, IndexMixin, FlavorTextMixin):
    categories = models.ManyToManyField(Category)
    # colors
    c1l = models.SlugField(max_length=10, blank=True)
    c1r = models.SlugField(max_length=10, blank=True)
    c2l = models.SlugField(max_length=10, blank=True)
    c2r = models.SlugField(max_length=10, blank=True)
    c3l = models.SlugField(max_length=10, blank=True)
    c3r = models.SlugField(max_length=10, blank=True)
    c4l = models.SlugField(max_length=10, blank=True)
    c4r = models.SlugField(max_length=10, blank=True)
    c5l = models.SlugField(max_length=10, blank=True)
    c5r = models.SlugField(max_length=10, blank=True)
    book = models.ForeignKey("self", on_delete=models.CASCADE, null=True, blank=True, related_name="recipebook")
    icon = models.SlugField(blank=True)
    visible = models.BooleanField(default=True)
    dlc = models.BooleanField(default=False)
    effects = models.ManyToManyField(Effect, through='ItemEffect')
    trait = models.OneToOneField(Trait, null=True, blank=True, on_delete=models.CASCADE)
    class Meta:
        ordering = ['index']

class ItemEffect(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.PositiveSmallIntegerField()
    effect = models.ForeignKey(Effect, on_delete=models.CASCADE)
    class Meta:
        ordering = ['order']
        unique_together = ['item', 'order']

class GatherData(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    area = models.ForeignKey(Text, on_delete=models.CASCADE)
    tool = models.SlugField(max_length=20)
    rank = models.PositiveSmallIntegerField()
    floor_min = models.PositiveSmallIntegerField(null=True, blank=True)
    floor_max = models.PositiveSmallIntegerField(null=True, blank=True)
    class Meta:
        ordering = ['area', 'tool', 'rank']

class Ingredient(models.Model):
    cat = models.ForeignKey(Category, null=True, blank=True, on_delete=models.CASCADE)
    ing = models.ForeignKey(Item, null=True, blank=True, on_delete=models.CASCADE, related_name='required_ingredient')
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='recipe')
    order = models.PositiveSmallIntegerField()
    class Meta:
        ordering = ['order']
        unique_together = [['item', 'order']]

"""
class RecipeTree(models.Model):
    index = models.IntegerField()
    items = models.ManyToManyField(Item)
    class Meta:
        ordering = ['index']

class RecipeNode(models.Model):
    tree = models.ForeignKey(RecipeTree, on_delete=models.CASCADE)
    ancient = models.BooleanField(default=False)
    char = models.ForeignKey(SlugText, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE)
    ing = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='recipeingredient')
    row = models.IntegerField()
    col = models.IntegerField()
    down = models.BooleanField(default=False)
    left = models.BooleanField(default=False)
    class Meta:
        ordering = ['row', 'col']

# I'm ignoring a lot of elemental combos
class ItemMix(GameIdMixin):
    skill = models.ForeignKey(Text, on_delete=models.CASCADE)
    combo = models.ManyToManyField(Item)

class Shop(models.Model):
    name = models.ForeignKey(Text, on_delete=models.CASCADE)

class ShopSlot(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    index = models.IntegerField()
    price = models.IntegerField()
    grade = models.IntegerField()
    level_min = models.IntegerField()
    level_max = models.IntegerField()
    class Meta:
        ordering = ['index']

class Quest(models.Model):
    name = models.ForeignKey(Text, on_delete=models.CASCADE)
    char = models.ForeignKey(SlugText, on_delete=models.CASCADE, related_name='char1')
    items = models.ManyToManyField(Item)

class Race(GameIdMixin):
    index = models.IntegerField()
    name = models.ForeignKey(Text, on_delete=models.CASCADE)
    class Meta:
        ordering = ['index']

class Enemy(GameIdMixin):
    name = models.ForeignKey(Text, on_delete=models.CASCADE)
    index = models.IntegerField()
    flavor = models.ForeignKey(FlavorText, on_delete=models.CASCADE)
    race = models.ForeignKey(Race, on_delete=models.CASCADE)
    drops = models.ManyToManyField(Item)
    hp  = models.IntegerField()
    atk = models.IntegerField()
    dfn = models.IntegerField()
    spd = models.IntegerField()
    e1 = models.IntegerField()
    e2 = models.IntegerField()
    e3 = models.IntegerField()
    e4 = models.IntegerField()
    e5 = models.IntegerField()
    e6 = models.IntegerField()
    a1 = models.IntegerField()
    a2 = models.IntegerField()
    a3 = models.IntegerField()
    a4 = models.IntegerField()
    a5 = models.IntegerField()
    a6 = models.IntegerField()
    a7 = models.IntegerField()
    a8 = models.IntegerField()
    class Meta:
        ordering = ['index']

class EnemyArea(models.Model):
    area = models.ForeignKey(Text, on_delete=models.CASCADE)
    enemy = models.ForeignKey(Enemy, on_delete=models.CASCADE)
    floor_min = models.IntegerField(null=True, blank=True)
    floor_max = models.IntegerField(null=True, blank=True)
"""