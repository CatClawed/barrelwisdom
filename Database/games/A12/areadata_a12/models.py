from django.db import models
from games.A12.regions_a12.models import Region
from games.A12.monsters_a12.models import Monster
from games.A12.items_a12.models import Item

class Field(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    unlock = models.CharField(max_length=15)
    ingredients = models.ManyToManyField(Item)
    monsters = models.ManyToManyField(Monster)
    note = models.CharField(max_length=400)

class Area(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    fields = models.ManyToManyField(Field)