from django.db import models
from games.A23.items_a23.models import Item
from games.A23.regions_a23.models import Region
from games.A23.misc_a23.models import Character

class Monster_en(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=270, blank=True, null=True)
    desc2 = models.CharField(max_length=270, blank=True, null=True)
    desc3 = models.CharField(max_length=270, blank=True, null=True)
    desc4 = models.CharField(max_length=270, blank=True, null=True)

class Monster_ja(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=270, blank=True, null=True)
    desc2 = models.CharField(max_length=270, blank=True, null=True)
    desc3 = models.CharField(max_length=270, blank=True, null=True)
    desc4 = models.CharField(max_length=270, blank=True, null=True)

class Monster_ko(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=270, blank=True, null=True)
    desc2 = models.CharField(max_length=270, blank=True, null=True)
    desc3 = models.CharField(max_length=270, blank=True, null=True)
    desc4 = models.CharField(max_length=270, blank=True, null=True)

class Monster_sc(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=270, blank=True, null=True)
    desc2 = models.CharField(max_length=270, blank=True, null=True)
    desc3 = models.CharField(max_length=270, blank=True, null=True)
    desc4 = models.CharField(max_length=270, blank=True, null=True)

class Monster_tc(models.Model):
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=270, blank=True, null=True)
    desc2 = models.CharField(max_length=270, blank=True, null=True)
    desc3 = models.CharField(max_length=270, blank=True, null=True)
    desc4 = models.CharField(max_length=270, blank=True, null=True)

class Monster(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    kind = models.CharField(max_length=15)
    index = models.IntegerField()
    drops = models.ManyToManyField(Item, blank=True) # simplified!
    isDLC = models.BooleanField(default=False)
    location = models.ManyToManyField(Region)
    char1 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char1")
    char2 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char2")
    char3 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char3")
    char4 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="char4")
    # resistances
    resist_mag   = models.CharField(max_length=15, null=True, blank=True)
    resist_fire  = models.CharField(max_length=15, null=True, blank=True)
    resist_ice   = models.CharField(max_length=15, null=True, blank=True)
    resist_thun  = models.CharField(max_length=15, null=True, blank=True)
    resist_wind  = models.CharField(max_length=15, null=True, blank=True)
    resist_phys  = models.CharField(max_length=15, null=True, blank=True)
    # stats
    hp_rank  = models.IntegerField()
    str_rank = models.IntegerField()
    def_rank = models.IntegerField()
    spd_rank = models.IntegerField()
    # ailment resistances
    ailment0  = models.IntegerField(default=0)
    ailment1  = models.IntegerField(default=0)
    ailment2  = models.IntegerField(default=0)
    ailment3  = models.IntegerField(default=0)
    ailment4  = models.IntegerField(default=0)
    ailment5  = models.IntegerField(default=0)
    ailment6  = models.IntegerField(default=0)
    ailment7  = models.IntegerField(default=0)
    ailment8  = models.IntegerField(default=0)
    ailment9  = models.IntegerField(default=0)
    ailment10 = models.IntegerField(default=0)
    # language
    mon_en = models.OneToOneField(Monster_en, on_delete=models.CASCADE, null=True, blank=True)
    mon_ja = models.OneToOneField(Monster_ja, on_delete=models.CASCADE, null=True, blank=True)
    mon_ko = models.OneToOneField(Monster_ko, on_delete=models.CASCADE, null=True, blank=True)
    mon_sc = models.OneToOneField(Monster_sc, on_delete=models.CASCADE, null=True, blank=True)
    mon_tc = models.OneToOneField(Monster_tc, on_delete=models.CASCADE, null=True, blank=True)
    
    class Meta:
        ordering = ['index']