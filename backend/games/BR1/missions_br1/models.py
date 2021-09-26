from django.db import models

class Mission(models.Model):
    slugname = models.SlugField(max_length=300, default="")
    name = models.CharField(max_length=300)
    character = models.CharField(max_length=20, default="")
    points = models.IntegerField()
    reward = models.CharField(max_length=500)
    kind = models.CharField(max_length=30)
    details = models.TextField()
    chapter = models.FloatField()
    number = models.IntegerField()
    location = models.CharField(max_length=100)
    class Meta:
        ordering = ['number']