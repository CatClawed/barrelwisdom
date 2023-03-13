from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from blog.models import Section

class Navigation(models.Model):
    section = models.CharField(max_length=30)
    data = models.TextField()

    @receiver(post_save, sender=Section)
    def create_nav(sender, instance, created, **kwargs):
        if created and not kwargs.get('raw', False):
            Navigation.objects.create(section=instance.name)