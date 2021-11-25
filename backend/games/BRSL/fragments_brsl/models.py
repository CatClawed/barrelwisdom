from django.db import models

class Character(models.Model):
    slug = models.SlugField(max_length=10)
    char_en = models.CharField(max_length=10)
    char_ja = models.CharField(max_length=10)
    char_sc = models.CharField(max_length=10)
    char_tc = models.CharField(max_length=10)

class Fragment_en(models.Model):
    name = models.CharField(max_length=50)
    eff  = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)

class Fragment_ja(models.Model):
    name = models.CharField(max_length=50)
    eff  = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)

class Fragment_sc(models.Model):
    name = models.CharField(max_length=50)
    eff  = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)

class Fragment_tc(models.Model):
    name = models.CharField(max_length=50)
    eff  = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)

class Choice(models.Model):
    choice_en = models.CharField(max_length=200)
    choice_ja = models.CharField(max_length=200)
    choice_sc = models.CharField(max_length=200)
    choice_tc = models.CharField(max_length=200)
    index = models.IntegerField()
    class Meta:
        ordering = ['index']

class SchoolLocations(models.Model):
    loc_en = models.CharField(max_length=40)
    loc_ja = models.CharField(max_length=40)
    loc_sc = models.CharField(max_length=40)
    loc_tc = models.CharField(max_length=40)

class Fragment(models.Model):
    index = models.IntegerField(unique=True)
    size = models.IntegerField()
    gear = models.IntegerField()
    frag_en = models.OneToOneField(Fragment_en, on_delete=models.CASCADE)
    frag_ja = models.OneToOneField(Fragment_ja, on_delete=models.CASCADE)
    frag_sc = models.OneToOneField(Fragment_sc, on_delete=models.CASCADE)
    frag_tc = models.OneToOneField(Fragment_tc, on_delete=models.CASCADE)
    # Advanced data
    actTag0 = models.CharField(max_length=50, null=True, blank=True)
    min1_0  = models.CharField(max_length=50, null=True, blank=True)
    max1_0  = models.CharField(max_length=50, null=True, blank=True)
    min2_0  = models.CharField(max_length=50, null=True, blank=True)
    max2_0  = models.CharField(max_length=50, null=True, blank=True)
    actTag1 = models.CharField(max_length=50, null=True, blank=True)
    min1_1  = models.CharField(max_length=50, null=True, blank=True)
    max1_1  = models.CharField(max_length=50, null=True, blank=True)
    class Meta:
        ordering = ['index']

class Event(models.Model):
    index = models.IntegerField(unique=True)
    fragment = models.ManyToManyField(Fragment)
    isDLC = models.BooleanField(default=False)
    location = models.ForeignKey(SchoolLocations, on_delete=models.CASCADE, null=True, blank=True)
    character = models.ForeignKey(Character, on_delete=models.CASCADE, null=True, blank=True)
    choices = models.ManyToManyField(Choice)
    class Meta:
        ordering = ['index']