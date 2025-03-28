from django.db import models

class Text(models.Model):
    text_en = models.CharField(max_length=500, blank=True)
    text_ja = models.CharField(max_length=500, blank=True)
    text_tc = models.CharField(max_length=500, blank=True)
    text_sc = models.CharField(max_length=500, blank=True)
    text_ko = models.CharField(max_length=500, blank=True)
    text_fr = models.CharField(max_length=500, blank=True)
    text_ru = models.CharField(max_length=500, blank=True)
    text_de = models.CharField(max_length=500, blank=True)
    text_es = models.CharField(max_length=500, blank=True)

class Coordinate(models.Model):
    x     = models.FloatField()
    z     = models.FloatField()
    cid   = models.IntegerField(unique=True)
    label = models.IntegerField()

    class Meta:
        indexes = [
            models.Index(fields=['label']),
        ]