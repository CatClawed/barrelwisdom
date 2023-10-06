from django.db import models

"""
If I intend to filter on a specific field, this holds localization data.
Also slugs for any assets. Even if it ain't used for filtering, I figure there
is some use for being shoved here.

Kinds:
 * item_type
 * combat_type
 * research
 * role
 * element
 * stat
"""

class Filterable(models.Model):
    slug    = models.SlugField(max_length=20)
    text_en = models.CharField(max_length=20)
    text_ja = models.CharField(max_length=20)
    kind    = models.CharField(max_length=20)

class Name(models.Model):
    text_en = models.CharField(max_length=50) # Heck English
    text_ja = models.CharField(max_length=40, unique=True) # I'd be surprised if JP surpassed 15

class Desc(models.Model):
    text_en = models.CharField(max_length=200)
    text_ja = models.CharField(max_length=200, unique=True)

class Trait(models.Model):
    slug  = models.SlugField(max_length=40, unique=True)
    index = models.IntegerField()
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc  = models.ForeignKey(Desc, on_delete=models.CASCADE)
    kind  = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="trait_kind") # item_type
    cat   = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="trait_cat" ) # combat_type
    trans = models.ManyToManyField(Filterable, related_name="trait_transfer") # combat_type

    val1  = models.IntegerField()
    val2  = models.IntegerField()
    val3  = models.IntegerField()
    val4  = models.IntegerField()
    val5  = models.IntegerField()

class Research(models.Model):
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc  = models.ForeignKey(Desc, on_delete=models.CASCADE)
    val   = models.IntegerField()
    cole  = models.IntegerField()
    level = models.IntegerField()
    kind  = models.ForeignKey(Filterable, on_delete=models.CASCADE) # research
    req   = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="req")
