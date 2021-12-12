from django.db import models
from games.BRSL.items_brsl.models import Item
from games.BRSL.demons_brsl.models import Demon

class AreaName(models.Model):
    name_en = models.CharField(max_length=50, unique=False)
    name_ja = models.CharField(max_length=50, unique=False)
    name_sc = models.CharField(max_length=50, unique=False)
    name_tc = models.CharField(max_length=50, unique=False)
    
class DemonArea(models.Model):
    demon = models.ForeignKey(Demon, on_delete=models.CASCADE)
    once = models.BooleanField(default=False)
    
class Area(models.Model):
    slug = models.SlugField(max_length=50, blank=True, null=True)
    map = models.CharField(max_length=250, blank=True, null=True)
    name = models.ForeignKey(AreaName, on_delete=models.CASCADE, blank=True, null=True) # since school has no subzone
    items = models.ManyToManyField(Item)
    demons = models.ManyToManyField(DemonArea)
    
class Region(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    areas = models.ManyToManyField(Area)
    name = models.ForeignKey(AreaName, on_delete=models.CASCADE)
    items = models.ManyToManyField(Item)
    demons = models.ManyToManyField(Demon)