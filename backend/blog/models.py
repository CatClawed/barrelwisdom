from django.db import models
from django.conf import settings
from django.utils.text import slugify

class Section(models.Model):
    slug = models.SlugField(max_length=30, unique=True)
    name = models.CharField(unique=True, blank=True)

    def __str__(self):
        return self.name

class Tags(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Blog(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=200, blank=True)
    body = models.TextField()
    image = models.CharField(max_length=255, default='', blank=True)
    desc = models.CharField(max_length=200, default='')
    authorlock = models.BooleanField(default=False)
    author = models.ManyToManyField(settings.AUTH_USER_MODEL)
    tags = models.ManyToManyField(Tags, blank=True,)
    section = models.ForeignKey(Section, on_delete=models.CASCADE, default="1")
    closed = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created']
        unique_together = ['slug', 'section']

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            while Blog.objects.filter(slug=slug, section=self.section).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True) # if I need it
    body = models.TextField()
    approved = models.BooleanField(default=False)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, blank=True, null=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=50, blank=True)

    class Meta:
        ordering = ['created']

    def save(self, **kwargs):
        """Only top level comments may have replies."""
        if self.parent:
            if self.parent.parent:
                self.parent = self.parent.parent
        return super().save(**kwargs)

