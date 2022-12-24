from django.db import models

class Category(models.Model):
    slug   = models.SlugField(max_length=25)
    cat_en = models.CharField(max_length=25)
    cat_ja = models.CharField(max_length=25)
    cat_sc = models.CharField(max_length=25)
    cat_tc = models.CharField(max_length=25)
    icon   = models.CharField(max_length=35)