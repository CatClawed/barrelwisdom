from django.db import models
from games.BR1.areas_br1.models import Area

class Demon(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    name = models.CharField(max_length=50)
    race = models.CharField(max_length=20)
    hp = models.IntegerField()
    atk = models.IntegerField()
    dfn = models.IntegerField()
    agi = models.IntegerField()
    luk = models.IntegerField()
    index = models.IntegerField(default=-1)
    locations = models.ManyToManyField(Area)
    slash  = models.CharField(max_length=15, blank=True, null=True)
    impact = models.CharField(max_length=15, blank=True, null=True)
    pierce = models.CharField(max_length=15, blank=True, null=True)
    heart  = models.CharField(max_length=15, blank=True, null=True)
    flavor = models.CharField(max_length=500)
    class Meta:
        ordering = ['index']