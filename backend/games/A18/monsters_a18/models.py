from django.db import models
from games.A18.misc_a18.models import Character, BasicText, AreaName

class Race(models.Model):
    race_en = models.CharField(max_length=25)
    race_ja = models.CharField(max_length=25)
    race_sc = models.CharField(max_length=25)
    race_tc = models.CharField(max_length=25)
    icon   = models.CharField(max_length=35)

class Monster(models.Model):
    slug = models.SlugField(max_length=50)
    text = models.OneToOneField(BasicText, on_delete=models.CASCADE, blank=True, null=True, related_name="mon_en")
    char1 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="mchar1")
    char2 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="mchar2")
    char3 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="mchar3")
    char4 = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True, related_name="mchar4")
    kind = models.ForeignKey(Race, on_delete=models.CASCADE, null=True, blank=True)
    level = models.IntegerField(default=0)
    index = models.IntegerField(default=0)
    hp    = models.IntegerField(default=0)
    atk   = models.IntegerField(default=0)
    defen = models.IntegerField(default=0)
    spd   = models.IntegerField(default=0)
    level = models.IntegerField(default=0)
    exp   = models.IntegerField(default=0)
    cole  = models.IntegerField(default=0)
    slash  = models.IntegerField(default=1)
    impact = models.IntegerField(default=1)
    pierce = models.IntegerField(default=1)
    magic  = models.IntegerField(default=1)
    fire   = models.IntegerField(default=1)
    ice    = models.IntegerField(default=1)
    light  = models.IntegerField(default=1)
    ail    = models.IntegerField(default=1)
    note = models.CharField(max_length=200, blank=True)
    isDX = models.BooleanField(default=False)
    locations = models.ManyToManyField(AreaName)
    class Meta:
        ordering = ['index']