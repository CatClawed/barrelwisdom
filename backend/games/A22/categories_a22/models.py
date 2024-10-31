from django.db import models

class Category_en(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category_ko(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category_fr(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category_sc(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category_tc(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    cat_en = models.OneToOneField(Category_en, on_delete=models.CASCADE)
    cat_ja = models.OneToOneField(Category_ja, on_delete=models.CASCADE)
    cat_ko = models.OneToOneField(Category_ko, on_delete=models.CASCADE)
    cat_fr = models.OneToOneField(Category_fr, on_delete=models.CASCADE)
    cat_sc = models.OneToOneField(Category_sc, on_delete=models.CASCADE)
    cat_tc = models.OneToOneField(Category_tc, on_delete=models.CASCADE)