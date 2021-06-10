from django.db import models

class Trait_en(models.Model):
    name = models.CharField(max_length=50, unique=True)
    desc = models.CharField(max_length=500, default="")

class Trait_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)
    desc = models.CharField(max_length=500, default="")

class Trait(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    trait_en = models.OneToOneField(Trait_en, on_delete=models.CASCADE)
    trait_ja = models.OneToOneField(Trait_ja, on_delete=models.CASCADE)
    index = models.IntegerField()
    cost = models.IntegerField()
    synth = models.BooleanField()
    usable = models.BooleanField()
    ingot = models.BooleanField()
    cloth = models.BooleanField()
    accessory = models.BooleanField()
    note = models.CharField(max_length=400)