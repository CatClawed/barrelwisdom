from django.db import models

class Location_en(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Location_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Location_ko(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Location_fr(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Location_sc(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Location_tc(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Location(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    region = models.ForeignKey("self", blank=True, null=True, on_delete=models.CASCADE)
    isDLC = models.BooleanField(default=False)
    loc_en = models.OneToOneField(Location_en, on_delete=models.CASCADE)
    loc_ja = models.OneToOneField(Location_ja, on_delete=models.CASCADE)
    loc_ko = models.OneToOneField(Location_ko, on_delete=models.CASCADE)
    loc_fr = models.OneToOneField(Location_fr, on_delete=models.CASCADE)
    loc_sc = models.OneToOneField(Location_sc, on_delete=models.CASCADE)
    loc_tc = models.OneToOneField(Location_tc, on_delete=models.CASCADE)