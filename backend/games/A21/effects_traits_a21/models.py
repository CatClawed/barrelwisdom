from django.db import models

class Text_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Text_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Text_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Text_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)
    
class AdvData(models.Model):
    baseAtt = models.CharField(max_length=50, blank=True, default="")
    attTag0 = models.CharField(max_length=50, blank=True, default="")
    actTag0 = models.CharField(max_length=50, blank=True, default="")
    min_1_0 = models.CharField(max_length=50, blank=True, default="")
    max_1_0 = models.CharField(max_length=50, blank=True, default="")
    min_2_0 = models.CharField(max_length=50, blank=True, default="")
    max_2_0 = models.CharField(max_length=50, blank=True, default="")

class Effect(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    index = models.IntegerField()
    eff_en = models.ForeignKey(Text_en, on_delete=models.CASCADE)
    eff_ja = models.ForeignKey(Text_ja, on_delete=models.CASCADE)
    eff_sc = models.ForeignKey(Text_sc, on_delete=models.CASCADE)
    eff_tc = models.ForeignKey(Text_tc, on_delete=models.CASCADE)
    forge  = models.BooleanField(default=False)
    advanced = models.ManyToManyField(AdvData)
    child = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
    class Meta:
        ordering = ['index']

class Trait(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    index = models.IntegerField()
    grade = models.IntegerField()
    trans_atk  = models.BooleanField(default=False)
    trans_heal = models.BooleanField(default=False)
    trans_dbf  = models.BooleanField(default=False)
    trans_buff = models.BooleanField(default=False)
    trans_wpn  = models.BooleanField(default=False)
    trans_arm  = models.BooleanField(default=False)
    trans_acc  = models.BooleanField(default=False)
    trans_syn  = models.BooleanField(default=False)
    trait_en = models.ForeignKey(Text_en, on_delete=models.CASCADE)
    trait_ja = models.ForeignKey(Text_ja, on_delete=models.CASCADE)
    trait_sc = models.ForeignKey(Text_sc, on_delete=models.CASCADE)
    trait_tc = models.ForeignKey(Text_tc, on_delete=models.CASCADE)
    advanced = models.ManyToManyField(AdvData)
    class Meta:
        ordering = ['index']