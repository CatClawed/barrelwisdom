from django.db import models
from games.A12.regions_a12.models import Region

class Monster_en(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500)

class Monster_ja(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500)

class Monster(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    mon_en = models.OneToOneField(Monster_en, on_delete=models.CASCADE)
    mon_ja = models.OneToOneField(Monster_ja, on_delete=models.CASCADE)
    index = models.IntegerField()
    locations = models.ManyToManyField(Region)
    race = models.CharField(max_length=50)
    level = models.IntegerField()
    atk = models.IntegerField()
    defen = models.IntegerField()
    spd = models.IntegerField()
    hp = models.IntegerField()
    note = models.CharField(max_length=400)
    isDX = models.BooleanField(default=False)