from django.db import models

class Region_en(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Region_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Region(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    reg_en = models.OneToOneField(Region_en, on_delete=models.CASCADE)
    reg_ja = models.OneToOneField(Region_ja, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)