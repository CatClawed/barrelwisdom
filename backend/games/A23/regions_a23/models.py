from django.db import models

class Region(models.Model):
    slug = models.SlugField(max_length=30)
    reg_en = models.CharField(max_length=30)
    reg_ja = models.CharField(max_length=30)
    reg_ko = models.CharField(max_length=30)
    reg_sc = models.CharField(max_length=30)
    reg_tc = models.CharField(max_length=30)
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)