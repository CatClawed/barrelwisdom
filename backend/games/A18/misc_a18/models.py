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
    name = models.CharField(max_length=50)
    desc1 = models.CharField(max_length=200, null=True, blank=True)
    desc2 = models.CharField(max_length=200, null=True, blank=True)
    desc3 = models.CharField(max_length=200, null=True, blank=True)
    desc4 = models.CharField(max_length=200, null=True, blank=True)

class ItemMastery(models.Model):
    desc_en = models.CharField(max_length=30)
    desc_ja = models.CharField(max_length=30)
    desc_sc = models.CharField(max_length=30)
    desc_tc = models.CharField(max_length=30)