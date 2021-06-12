from django.db import models
from games.BR1.demons_br1.models import Demon
from games.BR1.areas_br1.models import Area
from games.BR1.missions_br1.models import Mission

class Item(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    index = models.IntegerField(default=-1)
    effect = models.CharField(max_length=200)
    acquisition = models.CharField(max_length=200)
    kind = models.CharField(max_length=30)
    demons = models.ManyToManyField(Demon)
    missions = models.ManyToManyField(Mission)
    locations = models.ManyToManyField(Area)

class Ingredient(models.Model):
    craftitem = models.ForeignKey(Item, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="ingredientitem")
    num = models.IntegerField()