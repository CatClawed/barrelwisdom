from django.db import models
from games.BRSL.items_brsl.models import Item, Category, Effect

class Effect_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class FacilityEffect(models.Model):
    slug = models.SlugField(max_length=50,unique=True, blank=True, null=True)
    eff_en = models.OneToOneField(Effect_en, on_delete=models.CASCADE)
    eff_ja = models.OneToOneField(Effect_ja, on_delete=models.CASCADE)
    eff_sc = models.OneToOneField(Effect_sc, on_delete=models.CASCADE)
    eff_tc = models.OneToOneField(Effect_tc, on_delete=models.CASCADE)
    # Advanced Data, not interpreted
    act0 = models.CharField(max_length=50, blank=True, null=True)
    val0 = models.IntegerField(blank=True, null=True)
    act1 = models.CharField(max_length=50, blank=True, null=True)
    val1 = models.IntegerField(blank=True, null=True)
    act2 = models.CharField(max_length=50, blank=True, null=True)
    val2 = models.IntegerField(blank=True, null=True)

class Facility_en(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=270, blank=True)

class Facility_ja(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=270, blank=True)

class Facility_sc(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=270, blank=True)

class Facility_tc(models.Model):
    name = models.CharField(max_length=50, unique=True)
    desc = models.CharField(max_length=270, blank=True)

class Facility(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    char = models.CharField(max_length=15)
    index = models.IntegerField()
    size = models.IntegerField()
    isDLC = models.BooleanField(default=False)
    facility_en = models.OneToOneField(Facility_en, on_delete=models.CASCADE)
    facility_ja = models.OneToOneField(Facility_ja, on_delete=models.CASCADE)
    facility_sc = models.OneToOneField(Facility_sc, on_delete=models.CASCADE)
    facility_tc = models.OneToOneField(Facility_tc, on_delete=models.CASCADE)
    class Meta:
        ordering = ['index']
        
class FacilitySet(models.Model):
    facilities = models.ManyToManyField(Facility)
    effect = models.ForeignKey(FacilityEffect, on_delete=models.CASCADE)
    index = models.IntegerField()

class FacilityEffectLine(models.Model):
    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)
    effect = models.ForeignKey(FacilityEffect, on_delete=models.CASCADE, related_name="facility_effect")
    line = models.IntegerField()
    num = models.IntegerField()
    class Meta:
        ordering = ['line', 'num']

class FacilityIngredient(models.Model):
    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)
    level = models.IntegerField()
    num = models.IntegerField()
    item = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE, related_name='facility_item')
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE, related_name='facility_cat')
    effect = models.ForeignKey(Effect, blank=True, null=True, on_delete=models.CASCADE)
    class Meta:
        ordering = ['level']