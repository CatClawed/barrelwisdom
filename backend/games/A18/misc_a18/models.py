from django.db import models

class Character(models.Model):
    slug = models.SlugField(max_length=15)
    char_en = models.CharField(max_length=15)
    char_ja = models.CharField(max_length=15)
    char_sc = models.CharField(max_length=15)
    char_tc = models.CharField(max_length=15)
    
class Shop(models.Model):
    slug = models.SlugField(max_length=30)
    shop_en = models.CharField(max_length=30)
    shop_ja = models.CharField(max_length=30)
    shop_sc = models.CharField(max_length=30)
    shop_tc = models.CharField(max_length=30)

class BasicText(models.Model):
    name_en = models.CharField(max_length=50)
    desc1_en = models.CharField(max_length=200, null=True, blank=True)
    desc2_en = models.CharField(max_length=200, null=True, blank=True)
    desc3_en = models.CharField(max_length=200, null=True, blank=True)
    desc4_en = models.CharField(max_length=200, null=True, blank=True)
    name_ja = models.CharField(max_length=50, blank=True)
    desc1_ja = models.CharField(max_length=200, null=True, blank=True)
    desc2_ja = models.CharField(max_length=200, null=True, blank=True)
    desc3_ja = models.CharField(max_length=200, null=True, blank=True)
    desc4_ja = models.CharField(max_length=200, null=True, blank=True)
    name_sc = models.CharField(max_length=50, blank=True)
    desc1_sc = models.CharField(max_length=200, null=True, blank=True)
    desc2_sc = models.CharField(max_length=200, null=True, blank=True)
    desc3_sc = models.CharField(max_length=200, null=True, blank=True)
    desc4_sc = models.CharField(max_length=200, null=True, blank=True)
    name_tc = models.CharField(max_length=50, blank=True)
    desc1_tc = models.CharField(max_length=200, null=True, blank=True)
    desc2_tc = models.CharField(max_length=200, null=True, blank=True)
    desc3_tc = models.CharField(max_length=200, null=True, blank=True)
    desc4_tc = models.CharField(max_length=200, null=True, blank=True)

class ItemMastery(models.Model):
    desc_en = models.CharField(max_length=30)
    desc_ja = models.CharField(max_length=30)
    desc_sc = models.CharField(max_length=30)
    desc_tc = models.CharField(max_length=30)

class AreaName(models.Model):
    slug = models.SlugField(max_length=35)
    name_en = models.CharField(max_length=35)
    name_ja = models.CharField(max_length=25)
    name_sc = models.CharField(max_length=25)
    name_tc = models.CharField(max_length=25)