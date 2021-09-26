from django.db import models
from games.BR1.items_br1.models import Item

class Upgrade(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    num = models.IntegerField()

class Fragment(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    name = models.CharField(max_length=50)
    effect = models.CharField(max_length=500)
    upgrades = models.ManyToManyField(Upgrade)