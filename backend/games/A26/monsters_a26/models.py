from django.db import models
from games.A26.misc_a26.models import Text, Coordinate
from games.A26.items_a26.models import Item, Trait

class Race(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name  = models.ForeignKey(Text, on_delete=models.CASCADE)

class Monster(models.Model):
    tag = models.CharField(max_length=70, unique=True)
    name = models.ForeignKey(Text, on_delete=models.CASCADE)
    desc = models.ForeignKey(Text, on_delete=models.CASCADE, related_name="mdesc")
    race = models.ForeignKey(Race, on_delete=models.CASCADE)

    break_hits = models.IntegerField()
    break_phys = models.BooleanField()

    fire = models.CharField(max_length=10, blank=True)
    ice  = models.CharField(max_length=10, blank=True)
    bolt = models.CharField(max_length=10, blank=True)
    air  = models.CharField(max_length=10, blank=True)

    hp  = models.IntegerField()
    atk = models.IntegerField()
    dfn = models.IntegerField()
    spd = models.IntegerField()

    drop = models.ForeignKey(Item, null=True, blank=True, on_delete=models.CASCADE)
    rare = models.ForeignKey(Item, null=True, blank=True, on_delete=models.CASCADE, related_name='raredrop')
    trait = models.ForeignKey(Trait, null=True, blank=True, on_delete=models.CASCADE)

    location = models.ManyToManyField(Coordinate)