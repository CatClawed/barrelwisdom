from django.db import models

class Property_en(models.Model):
    name = models.CharField(max_length=50, unique=True)
    desc = models.CharField(max_length=500, default="")

class Property_ja(models.Model):
    name = models.CharField(max_length=50, unique=True)
    desc = models.CharField(max_length=500, default="")

class Property(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    prop_en = models.OneToOneField(Property_en, on_delete=models.CASCADE)
    prop_ja = models.OneToOneField(Property_ja, on_delete=models.CASCADE)
    index = models.IntegerField()
    grade = models.IntegerField(blank=True, null=True)
    points = models.IntegerField()
    bomb = models.BooleanField()
    heal = models.BooleanField()
    buff = models.BooleanField()
    weapon = models.BooleanField()
    armor = models.BooleanField()
    accessory = models.BooleanField()
    combo1 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)
    combo2 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name="combo_2")
    combo3 = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name="combo_3")
    class Meta:
        ordering = ['index']