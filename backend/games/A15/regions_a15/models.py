from django.db import models

class Region_en(models.Model):
    name = models.CharField(max_length=50)

class Region_ja(models.Model):
    name = models.CharField(max_length=50)

class Region(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    reg_en = models.OneToOneField(Region_en, on_delete=models.CASCADE)
    reg_ja = models.OneToOneField(Region_ja, on_delete=models.CASCADE)
    display = models.BooleanField(default=True)
    note = models.CharField(max_length=600, blank=True, null=True)
    grade = models.CharField(max_length=10, blank=True, null=True)
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)

class FieldEvent(models.Model):
    name = models.CharField(max_length=100, unique=True)