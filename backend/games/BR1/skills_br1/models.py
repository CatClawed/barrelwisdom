from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=50)
    effect = models.CharField(max_length=500)
    character = models.CharField(max_length=10)
    rng = models.CharField(max_length=20)
    index = models.IntegerField()
    atk = models.IntegerField(blank=True, null=True)
    dfn = models.IntegerField(blank=True, null=True)
    sup = models.IntegerField(blank=True, null=True)
    tec = models.IntegerField(blank=True, null=True)
    lvl = models.IntegerField(blank=True, null=True)
    wt = models.FloatField()
    mp = models.IntegerField()
    slots = models.IntegerField()
    isRankUp = models.BooleanField(default=False)

    class Meta:
        ordering = ['index']