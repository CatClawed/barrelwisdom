from django.db import models

# Create your models here.

# SECTION_CHOICES = ['Blog', 'Totori', 'Escha & Logy', 'Shallie', 'Firis', 'Ryza', 'Blue Reflection']

class Blog(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField()
    # section = models.CharField(choices=SECTION_CHOICES, max_length=100)

    class Meta:
        ordering = ['created']