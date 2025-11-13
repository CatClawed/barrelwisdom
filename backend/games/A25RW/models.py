from django.db import models
from games._helpers.common_fields import GameIdMixin, EnglishMixin, JapaneseMixin, SimplifiedChineseMixin, TraditionalChineseMixin, KoreanMixin, NameMixin, DescMixin, IndexMixin, generate_transfer_mixin, generate_combo_mixin, generate_value_pair_mixin, generate_multi_desc_mixin, generate_stats_mixin

class Text(EnglishMixin, JapaneseMixin, SimplifiedChineseMixin,
           TraditionalChineseMixin, KoreanMixin):
    pass

class FlavorTextMixin(generate_multi_desc_mixin(4)):
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
class Effect(GameIdMixin, NameMixin, DescMixin, IndexMixin,
             generate_value_pair_mixin(5, numeric=True)):
    flag = models.BooleanField()
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
    quantity = models.PositiveSmallIntegerField(null=True, blank=True)
    uses = models.PositiveSmallIntegerField(null=True, blank=True)
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

class RecipeNode(models.Model):
    tree = models.SmallIntegerField(db_index=True)
    ancient = models.BooleanField(default=False)
    char = models.ForeignKey(Text, blank=True, null=True, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE)
    ing = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='recipeingredient')
    row = models.SmallIntegerField()
    col = models.SmallIntegerField()
    down = models.BooleanField(default=False)
    left = models.BooleanField(default=False)
    class Meta:
        unique_together = [['tree', 'row', 'col']]
        ordering = ['tree', 'row', 'col']

# I'm ignoring a lot of elemental combos
class ItemMix(GameIdMixin):
    name = models.ForeignKey(Text, on_delete=models.CASCADE)
    combo = models.ManyToManyField(Item)

class Shop(NameMixin):
    pass

class ShopSlot(IndexMixin):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    price = models.IntegerField()
    grade = models.PositiveSmallIntegerField(blank=True, null=True)
    level_min = models.PositiveSmallIntegerField(blank=True, null=True)
    level_max = models.PositiveSmallIntegerField(blank=True, null=True)
    class Meta:
        ordering = ['index']

class Quest(NameMixin):
    char = models.ForeignKey(Text, on_delete=models.CASCADE, related_name='+')
    items = models.ManyToManyField(Item)


class Enemy(GameIdMixin, NameMixin, IndexMixin, FlavorTextMixin,
            generate_stats_mixin(stats=['hp', 'atk', 'dfn', 'spd',
                'physical', 'magic', 'fire', 'ice', 'air', 'bolt',
                'blind', 'paralysis','poison','burn',
                'taunt', 'sleep', 'daze', 'frostbite'])):
    race = models.ForeignKey(Text, on_delete=models.CASCADE, related_name="+")
    drops = models.ManyToManyField(Item)
    class Meta:
        ordering = ['index']

class EnemyArea(models.Model):
    area = models.ForeignKey(Text, on_delete=models.CASCADE)
    enemy = models.ForeignKey(Enemy, on_delete=models.CASCADE)
    floor_min = models.IntegerField(null=True, blank=True)
    floor_max = models.IntegerField(null=True, blank=True)
