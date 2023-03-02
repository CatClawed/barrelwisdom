from django.db import models
    
class AdvData(models.Model):
    attTag0 = models.CharField(max_length=50, blank=True, default="")
    actTag0 = models.CharField(max_length=50, blank=True, default="")
    min_1_0 = models.CharField(max_length=50, blank=True, default="")
    max_1_0 = models.CharField(max_length=50, blank=True, default="")
    min_2_0 = models.CharField(max_length=50, blank=True, default="")
    max_2_0 = models.CharField(max_length=50, blank=True, default="")

class Effect(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    index = models.IntegerField()
    name_en = models.CharField(max_length=50)
    desc_en = models.CharField(max_length=250, blank=True)
    name_ja = models.CharField(max_length=50)
    desc_ja = models.CharField(max_length=250, blank=True)
    name_sc = models.CharField(max_length=50)
    desc_sc = models.CharField(max_length=250, blank=True)
    name_tc = models.CharField(max_length=50)
    desc_tc = models.CharField(max_length=250, blank=True)
    advanced = models.ManyToManyField(AdvData)
    class Meta:
        ordering = ['index']

class Trait(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    index = models.IntegerField()
    grade = models.IntegerField()
    trans_atk  = models.BooleanField(default=False)
    trans_heal = models.BooleanField(default=False)
    trans_wpn  = models.BooleanField(default=False)
    trans_arm  = models.BooleanField(default=False)
    trans_acc  = models.BooleanField(default=False)
    trans_syn  = models.BooleanField(default=False)
    name_en = models.CharField(max_length=50)
    desc_en = models.CharField(max_length=250, blank=True)
    name_ja = models.CharField(max_length=50)
    desc_ja = models.CharField(max_length=250, blank=True)
    name_sc = models.CharField(max_length=50)
    desc_sc = models.CharField(max_length=250, blank=True)
    name_tc = models.CharField(max_length=50)
    desc_tc = models.CharField(max_length=250, blank=True)
    combo1 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)
    combo2 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name="combo_2")
    advanced = models.ManyToManyField(AdvData)
    class Meta:
        ordering = ['index']