from django.db import models
from games.A25.misc_a25.models import Name, Desc, Trait, Filterable
from games.A25.chara_a25.models import Character, Memoria

class Item(models.Model):
    slug   = models.CharField(max_length=50) #oops
    name   = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc   = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True)
    kind   = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    rarity = models.IntegerField()
    limited = models.BooleanField(default=False)

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


class Recipe(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    x    = models.IntegerField()
    y    = models.IntegerField()
    book = models.IntegerField()

    char1 = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="recipe_char1")
    char2 = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="recipe_char2")
    char3 = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="recipe_char3")

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
            "x",
            "y",
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