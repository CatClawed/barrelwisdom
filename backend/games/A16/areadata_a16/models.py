from django.db import models
from games.A16.regions_a16.models import Region
from games.A16.monsters_a16.models import Monster
from games.A16.items_a16.models import Item

class Field(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    ingredients = models.ManyToManyField(Item)
    rare = models.ManyToManyField(Item, related_name="rareitems")
    relics = models.ManyToManyField(Item, related_name="relicitems")
    monsters = models.ManyToManyField(Monster)
    note = models.TextField()

class Area(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    fields = models.ManyToManyField(Field)