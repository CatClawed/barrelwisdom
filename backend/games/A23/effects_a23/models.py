from django.db import models

class Effect_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_ko(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)

class Effect_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    desc = models.CharField(max_length=250, blank=True)
    
class AdvData(models.Model):
    baseAtt = models.CharField(max_length=50, blank=True, null=True, default="")
    attTag0 = models.CharField(max_length=50, blank=True, null=True, default="")
    actTag0 = models.CharField(max_length=50, blank=True, null=True, default="")
    min_1_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    max_1_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    min_2_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    max_2_0 = models.CharField(max_length=50, blank=True, null=True, default="")

class Effect(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    index = models.IntegerField()
    eff_en = models.OneToOneField(Effect_en, on_delete=models.CASCADE)
    eff_ja = models.OneToOneField(Effect_ja, on_delete=models.CASCADE)
    eff_ko = models.OneToOneField(Effect_ko, on_delete=models.CASCADE)
    eff_sc = models.OneToOneField(Effect_sc, on_delete=models.CASCADE)
    eff_tc = models.OneToOneField(Effect_tc, on_delete=models.CASCADE)
    advanced = models.ManyToManyField(AdvData)
    class Meta:
        ordering = ['index']