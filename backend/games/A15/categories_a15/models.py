from django.db import models

class Category_en(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Category(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    cat_en = models.OneToOneField(Category_en, on_delete=models.CASCADE)
    cat_ja = models.OneToOneField(Category_ja, on_delete=models.CASCADE)
    icon_name = models.SlugField(max_length=150, default='')