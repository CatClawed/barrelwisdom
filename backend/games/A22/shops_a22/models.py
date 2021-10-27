from django.db import models

class Shop_en(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Shop_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Shop_ko(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Shop_fr(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Shop_sc(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Shop_tc(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Shop(models.Model):
    slugname = models.SlugField(max_length=50, unique=True)
    shop_en = models.OneToOneField(Shop_en, on_delete=models.CASCADE)
    shop_ja = models.OneToOneField(Shop_ja, on_delete=models.CASCADE)
    shop_ko = models.OneToOneField(Shop_ko, on_delete=models.CASCADE)
    shop_fr = models.OneToOneField(Shop_fr, on_delete=models.CASCADE)
    shop_sc = models.OneToOneField(Shop_sc, on_delete=models.CASCADE)
    shop_tc = models.OneToOneField(Shop_tc, on_delete=models.CASCADE)