from django.db import models

class Effect_en(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500, default="")

class Effect_ja(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500, default="")

class Effect(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    eff_en = models.OneToOneField(Effect_en, on_delete=models.CASCADE)
    eff_ja = models.OneToOneField(Effect_ja, on_delete=models.CASCADE)
    index = models.IntegerField()