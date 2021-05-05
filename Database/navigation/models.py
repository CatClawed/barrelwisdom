from django.db import models
from blog.models import Section
from django.dispatch import receiver
from django.db.models.signals import post_save

class Navigation(models.Model):
    section = models.CharField(max_length=30)
    data = models.TextField()

    @receiver(post_save, sender=Section)
    def create_nav(sender, instance, created, **kwargs):
        if created:
            Navigation.objects.create(section=instance.name)