from django.db import models

class Trait_en(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250, blank=True)

class Trait_ja(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250, blank=True)

class Trait_ko(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250, blank=True)

class Trait_fr(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250, blank=True)

class Trait_sc(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250, blank=True)

class Trait_tc(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250, blank=True)

class Trait(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    note = models.CharField(max_length=255, blank=True)
    index = models.IntegerField()
    grade = models.IntegerField()
    trans_atk  = models.BooleanField(default=False)
    trans_heal = models.BooleanField(default=False)
    trans_dbf  = models.BooleanField(default=False)
    trans_buff = models.BooleanField(default=False)
    trans_wpn  = models.BooleanField(default=False)
    trans_arm  = models.BooleanField(default=False)
    trans_acc  = models.BooleanField(default=False)
    trait_en = models.OneToOneField(Trait_en, on_delete=models.CASCADE)
    trait_ja = models.OneToOneField(Trait_ja, on_delete=models.CASCADE)
    trait_ko = models.OneToOneField(Trait_ko, on_delete=models.CASCADE)
    trait_fr = models.OneToOneField(Trait_fr, on_delete=models.CASCADE)
    trait_sc = models.OneToOneField(Trait_sc, on_delete=models.CASCADE)
    trait_tc = models.OneToOneField(Trait_tc, on_delete=models.CASCADE)
    class Meta:
        ordering = ['index']