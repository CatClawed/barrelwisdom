from django.db import models
from games.A25.misc_a25.models import Name, Desc, Trait, Color, Attribute
from games.A25.chara_a25.models import Character

class Item(models.Model):
    name   = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc   = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True)
    kind   = models.CharField(max_length=10)
    rarity = models.IntegerField()

class Material(models.Model):
    item   = models.ForeignKey(Item, on_delete=models.CASCADE)
    color  = models.ForeignKey(Color, on_delete=models.CASCADE)
    kind   = models.CharField(max_length=10)
    traits = models.ManyToManyField(Trait)

class CombatItem(models.Model):
    item   = models.ForeignKey(Item, on_delete=models.CASCADE)
    kind   = models.CharField(max_length=10)
    traits = models.ManyToManyField(Trait)

    val_good = models.IntegerField(default=0)
    val_bad  = models.IntegerField(default=0)
    pow_good = models.IntegerField(default=0)
    pow_bad  = models.IntegerField(default=0)
    uses     = models.IntegerField()

    elem = models.ForeignKey(Attribute, on_delete=models.CASCADE, blank=True, null=True)
    area = models.ForeignKey(Name, on_delete=models.CASCADE)

class Equipment(models.Model):
    item   = models.ForeignKey(Item, on_delete=models.CASCADE)
    kind   = models.CharField(max_length=10)

    val_good = models.IntegerField(default=0)
    val_bad  = models.IntegerField(default=0)

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
    page = models.IntegerField()
    book = models.IntegerField()

    char1 = models.ForeignKey(Char, on_delete=models.CASCADE)
    char2 = models.ForeignKey(Char, on_delete=models.CASCADE)
    char3 = models.ForeignKey(Char, on_delete=models.CASCADE)

    color1 = models.ForeignKey(Color, on_delete=models.CASCADE)
    color2 = models.ForeignKey(Color, on_delete=models.CASCADE)
    color3 = models.ForeignKey(Color, on_delete=models.CASCADE)

    unlock1 = models.ForeignKey(Desc, on_delete=models.CASCADE)
    unlock2 = models.ForeignKey(Desc, on_delete=models.CASCADE)
    unlock3 = models.ForeignKey(Desc, on_delete=models.CASCADE)
