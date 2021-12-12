from django.db import models
from games.A15.regions_a15.models import Region

class Monster_en(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500, default="")
    race = models.CharField(max_length=20)

class Monster_ja(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500, default="")
    race = models.CharField(max_length=20)

class Monster(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    mon_en = models.OneToOneField(Monster_en, on_delete=models.CASCADE)
    mon_ja = models.OneToOneField(Monster_ja, on_delete=models.CASCADE)
    index = models.IntegerField()
    hp    = models.IntegerField()
    atk   = models.IntegerField()
    defen = models.IntegerField()
    spd   = models.IntegerField()
    fire  = models.IntegerField()
    water = models.IntegerField()
    wind  = models.IntegerField()
    water = models.IntegerField()
    earth = models.IntegerField()
    level = models.IntegerField()
    exp   = models.IntegerField()
    cole  = models.IntegerField()
    note = models.CharField(max_length=200)
    isDLC = models.BooleanField(default=False)
    isDX = models.BooleanField(default=False)
    isStrong = models.BooleanField(default=False)
    locations = models.ManyToManyField(Region)
    class Meta:
        ordering = ['index']