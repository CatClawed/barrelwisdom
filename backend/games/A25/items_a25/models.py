from django.db import models
from games.A25.misc_a25.models import Name, Desc, Trait, Filterable
from games.A25.chara_a25.models import Character, Memoria

class Item(models.Model):
    slug   = models.CharField(max_length=50) #oops
    name   = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc   = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True)
    kind   = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    rarity = models.IntegerField()
    note  = models.CharField(max_length=200, blank=True)
    limit = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="item_limited")
    gbl   = models.BooleanField(default=False)

    class Meta:
        ordering = [
            "-rarity",
        ]

class Material(models.Model):
    item   = models.ForeignKey(Item, on_delete=models.CASCADE)
    color  = models.ForeignKey(Filterable, on_delete=models.CASCADE, blank=True, null=True, related_name="mat_color")
    kind   = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="mat_type")
    traits = models.ManyToManyField(Trait)

class CombatItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    kind = models.ForeignKey(Filterable, on_delete=models.CASCADE)

    val_good = models.IntegerField(default=0)
    val_bad  = models.IntegerField(default=0)
    val2_good = models.IntegerField(blank=True, null=True, default=None)
    val2_bad  = models.IntegerField(blank=True, null=True, default=None)
    pow_good = models.IntegerField(default=0)
    pow_bad  = models.IntegerField(default=0)
    uses     = models.IntegerField()

    elem = models.ForeignKey(Filterable, on_delete=models.CASCADE, blank=True, null=True, related_name="combat_elem")
    area = models.ForeignKey(Name, on_delete=models.CASCADE)

class Equipment(models.Model):
    item   = models.ForeignKey(Item, on_delete=models.CASCADE)
    kind   = models.ForeignKey(Filterable, on_delete=models.CASCADE)

    val_good = models.IntegerField(blank=True, null=True)
    val_bad  = models.IntegerField(blank=True, null=True)
    val2_good = models.IntegerField(blank=True, null=True, default=None)
    val2_bad  = models.IntegerField(blank=True, null=True, default=None)

    good_hp   = models.IntegerField(default=0)
    good_spd  = models.IntegerField(default=0)
    good_patk = models.IntegerField(default=0)
    good_matk = models.IntegerField(default=0)
    good_pdef = models.IntegerField(default=0)
    good_mdef = models.IntegerField(default=0)

    bad_hp   = models.IntegerField(default=0)
    bad_spd  = models.IntegerField(default=0)
    bad_patk = models.IntegerField(default=0)
    bad_matk = models.IntegerField(default=0)
    bad_pdef = models.IntegerField(default=0)
    bad_mdef = models.IntegerField(default=0)


class RecipeTab(models.Model):
    name   = models.ForeignKey(Name, on_delete=models.CASCADE)
    order  = models.IntegerField()
    class Meta:
        ordering = [
                "order"
            ]

class RecipePage(models.Model):
    desc = models.ForeignKey(Desc, on_delete=models.CASCADE, null=True, blank=True) # events
    tab  = models.ForeignKey(RecipeTab, on_delete=models.CASCADE)
    book = models.IntegerField(default=0)
    gbl  = models.BooleanField(default=False)
    class Meta:
        ordering = [
                "book"
            ]

class Recipe(models.Model):
    page  = models.ForeignKey(RecipePage, on_delete=models.CASCADE, null=True, blank=True)
    item  = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.IntegerField(default=0)
    book  = models.IntegerField()

    color1 = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="recipe_color1")
    color2 = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="recipe_color2")
    color3 = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="recipe_color3")

    unlock1 = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="unlock1")
    unlock2 = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="unlock2")
    unlock3 = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="unlock3")

    ing1 = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="ing1")
    ing2 = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True, related_name="ing2")
    ing3 = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True, related_name="ing3")

    quant1 = models.IntegerField()
    quant2 = models.IntegerField(blank=True, null=True)
    quant3 = models.IntegerField(blank=True, null=True)

    class Meta:
        ordering = [
            "book",
            "order"
        ]

# dirty or not it's coming here
class LatestUpdate(models.Model):
    time       = models.DateTimeField(auto_now_add=True)
    items      = models.ManyToManyField(Item)
    characters = models.ManyToManyField(Character)
    memoria    = models.ManyToManyField(Memoria)
    class Meta:
        ordering = [
            "-time"
        ]

class LatestUpdateGBL(models.Model):
    time       = models.DateTimeField(auto_now_add=True)
    items      = models.ManyToManyField(Item)
    characters = models.ManyToManyField(Character)
    memoria    = models.ManyToManyField(Memoria)
    class Meta:
        ordering = [
            "-time"
        ]