from django.db import models
from games.A23.items_a23.models import Item,Book
#from games.A23.monsters_a23.models import Item,Book

class Region(models.Model):
    slug = models.SlugField(max_length=30)
    reg_en = models.CharField(max_length=30)
    reg_ja = models.CharField(max_length=30)
    reg_ko = models.CharField(max_length=30)
    reg_sc = models.CharField(max_length=30)
    reg_tc = models.CharField(max_length=30)
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)
    
class GatherItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    rank = models.IntegerField()
    priority = models.IntegerField()
    class Meta:
        ordering = ['rank']

class GatherNode(models.Model):
    kind = models.CharField(max_length=35)
    tool = models.CharField(max_length=10)
    items = models.ManyToManyField(GatherItem)
    class Meta:
        ordering = ['tool']
    
class Chest(models.Model):
    item = models.ForeignKey(Item, blank=True, null=True, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, blank=True, null=True, on_delete=models.CASCADE)
    loc = models.ForeignKey(Region, on_delete=models.CASCADE)
     
class Climate(models.Model):
    loc = models.ForeignKey(Region, on_delete=models.CASCADE)
    map = models.CharField(max_length=250)
    weather = models.CharField(max_length=10)
    node = models.ManyToManyField(GatherNode)  
    # mons = models.ManyToManyField(Monster)
    class Meta:
        ordering = ['loc']