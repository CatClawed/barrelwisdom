from django.db import models
from games.BRSL.items_brsl.models import Item

class Demon_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Demon_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Demon_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Demon_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Demon(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    demon_en = models.OneToOneField(Demon_en, on_delete=models.CASCADE)
    demon_ja = models.OneToOneField(Demon_ja, on_delete=models.CASCADE)
    demon_sc = models.OneToOneField(Demon_sc, on_delete=models.CASCADE)
    demon_tc = models.OneToOneField(Demon_tc, on_delete=models.CASCADE)
    char = models.CharField(max_length=15)
    index = models.IntegerField()
    vit = models.IntegerField()
    atk = models.IntegerField()
    dfn = models.IntegerField()
    slash  = models.CharField(max_length=4, null=True, blank=True)
    pierce = models.CharField(max_length=4, null=True, blank=True)
    shock  = models.CharField(max_length=4, null=True, blank=True)
    tremor = models.CharField(max_length=4, null=True, blank=True)
    warp   = models.CharField(max_length=4, null=True, blank=True)
    drops = models.ManyToManyField(Item)
    isDLC = models.BooleanField(default=False)
    class Meta:
        ordering = ['index']