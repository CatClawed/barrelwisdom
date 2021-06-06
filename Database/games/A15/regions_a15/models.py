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

"""
class AreaData(models.Model):
    area = models.ForeignKey(Region, on_delete=models.CASCADE)
    subarea = models.Charfield(max_length=20, blank=True, null=True)
    monsters = models.ManyToManyField(Monster, blank=True, null=True)
    items = models.ManyToManyField(Item, blank=True, null=True)
    rare = models.ManyToManyField(Item, blank=True, null=True, related_name='RareItem')
    max = models.ManyToManyField(Item, blank=True, null=True, related_name='MaxItem')
    fieldevent = Models.Charfield(max_length=30, blank=True, null=True)
"""