from django.db import models

class Report(models.Model):
    url = models.URLField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=True, null=True)
    
    class Meta:
        ordering = ['created']