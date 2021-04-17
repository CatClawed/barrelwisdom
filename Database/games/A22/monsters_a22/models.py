from django.db import models
from games.A22.items_a22.models import Item
from games.A22.locations_a22.models import Location

class Monster_en(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Monster_ja(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Monster_ko(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Monster_fr(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Monster_sc(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Monster_tc(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=270, blank=True)

class Monster(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    montype = models.CharField(max_length=20)
    note = models.CharField(max_length=255, blank=True)
    index = models.IntegerField()
    drops = models.ManyToManyField(Item, blank=True) # simplified!
    isDLC = models.BooleanField(default=False)
    location = models.ManyToManyField(Location)
    size = models.CharField(max_length=10)
    # resistances
    #resist_phys = models.CharField(max_length=10)
    resist_mag = models.CharField(max_length=10)
    resist_fire = models.CharField(max_length=10)
    resist_ice = models.CharField(max_length=10)
    resist_light = models.CharField(max_length=10)
    resist_wind = models.CharField(max_length=10)
    resist_phys = models.CharField(max_length=10)
    # stats
    hp_rank = models.IntegerField()
    str_rank = models.IntegerField()
    def_rank = models.IntegerField()
    spd_rank = models.IntegerField()
    # ailment resistances
    ailment1  = models.IntegerField()
    ailment2  = models.IntegerField()
    ailment3  = models.IntegerField()
    ailment4  = models.IntegerField()
    ailment5  = models.IntegerField()
    ailment6  = models.IntegerField()
    ailment7  = models.IntegerField()
    ailment8  = models.IntegerField()
    ailment9  = models.IntegerField()
    ailment10 = models.IntegerField()
    # language
    mon_en = models.OneToOneField(Monster_en, on_delete=models.CASCADE)
    mon_ja = models.OneToOneField(Monster_ja, on_delete=models.CASCADE)
    mon_ko = models.OneToOneField(Monster_ko, on_delete=models.CASCADE)
    mon_fr = models.OneToOneField(Monster_fr, on_delete=models.CASCADE)
    mon_sc = models.OneToOneField(Monster_sc, on_delete=models.CASCADE)
    mon_tc = models.OneToOneField(Monster_tc, on_delete=models.CASCADE)