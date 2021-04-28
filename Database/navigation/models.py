from django.db import models

class Navigation(models.Model):
    section = models.CharField(max_length=30)
    data = models.TextField()