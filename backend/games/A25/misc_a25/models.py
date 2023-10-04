from django.db import models

class ItemType(models.Model):
    slug = models.SlugField(max_length=10)
    text_en = models.CharField(max_length=10)
    text_ja = models.CharField(max_length=10, unique=True)

class Attribute(models.Model):
    slug = models.SlugField(max_length=10)

class Color(models.Model):
    slug = models.SlugField(max_length=10)

class Name(models.Model):
    text_en = models.CharField(max_length=40)
    text_ja = models.CharField(max_length=40, unique=True)

class Desc(models.Model):
    text_en = models.CharField(max_length=200)
    text_ja = models.CharField(max_length=200, unique=True)

class Trait(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc = models.ForeignKey(Name, on_delete=models.CASCADE)
    kind = models.CharField(max_length=10)
    cat  = models.CharField(max_length=10)
    trans = models.ManyToManyField(ItemType)

    val1  = models.IntegerField()
    val2  = models.IntegerField()
    val3  = models.IntegerField()
    val4  = models.IntegerField()
    val5  = models.IntegerField()