from django.db import models
from games.BRSL.fragments_brsl.models import Character

class Skill_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Skill_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Skill_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Skill_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Skill(models.Model):
    skill_en = models.OneToOneField(Skill_en, on_delete=models.CASCADE)
    skill_ja = models.OneToOneField(Skill_ja, on_delete=models.CASCADE)
    skill_sc = models.OneToOneField(Skill_sc, on_delete=models.CASCADE)
    skill_tc = models.OneToOneField(Skill_tc, on_delete=models.CASCADE)
    character = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True)
    level = models.CharField(max_length=3, blank=True, null=True)
    ether = models.IntegerField(null=True, blank=True)
    ether_rec = models.IntegerField(null=True, blank=True)
    knockback = models.IntegerField(null=True, blank=True)
    range = models.CharField(max_length=15)
    index = models.IntegerField()
    cycle = models.IntegerField(null=True, blank=True)
    
    # Advanced Data, not interpreted
    attTag0 = models.CharField(max_length=50, blank=True, null=True)
    actTag0 = models.CharField(max_length=50, blank=True, null=True)
    min_1_0 = models.CharField(max_length=50, blank=True, null=True)
    max_1_0 = models.CharField(max_length=50, blank=True, null=True)
    min_2_0 = models.CharField(max_length=50, blank=True, null=True)
    max_2_0 = models.CharField(max_length=50, blank=True, null=True)
    attTag1 = models.CharField(max_length=50, blank=True, null=True)
    actTag1 = models.CharField(max_length=50, blank=True, null=True)
    min_1_1 = models.CharField(max_length=50, blank=True, null=True)
    max_1_1 = models.CharField(max_length=50, blank=True, null=True)
    min_2_1 = models.CharField(max_length=50, blank=True, null=True)
    max_2_1 = models.CharField(max_length=50, blank=True, null=True)
    class Meta:
        ordering = ['character', 'index']