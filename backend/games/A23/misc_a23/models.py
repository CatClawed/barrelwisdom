from django.db import models

class Character(models.Model):
    slug = models.SlugField(max_length=15)
    char_en = models.CharField(max_length=15)
    char_ja = models.CharField(max_length=15)
    char_ko = models.CharField(max_length=15)
    char_sc = models.CharField(max_length=15)
    char_tc = models.CharField(max_length=15)
    
class Shop(models.Model):
    slug = models.SlugField(max_length=30)
    shop_en = models.CharField(max_length=30)
    shop_ja = models.CharField(max_length=30)
    shop_ko = models.CharField(max_length=30)
    shop_sc = models.CharField(max_length=30)
    shop_tc = models.CharField(max_length=30)