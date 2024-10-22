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
    text_en = models.CharField(max_length=40)
    text_ja = models.CharField(max_length=20)
    text_tc = models.CharField(max_length=20, blank=True)
    text_sc = models.CharField(max_length=20, blank=True)
    kind    = models.CharField(max_length=20)

class Name(models.Model):
    text_en = models.CharField(max_length=100, blank=True) # Heck English
    text_ja = models.CharField(max_length=40, unique=True) # I'd be surprised if JP surpassed 15
    text_tc = models.CharField(max_length=40, blank=True)
    text_sc = models.CharField(max_length=40, blank=True)

class Desc(models.Model):
    text_en = models.CharField(max_length=1000, blank=True)
    text_ja = models.CharField(max_length=500, unique=True)
    text_tc = models.CharField(max_length=500, blank=True)
    text_sc = models.CharField(max_length=500, blank=True)

class Trait(models.Model):
    slug  = models.SlugField(max_length=50, unique=True)
    index = models.IntegerField()
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc  = models.ForeignKey(Desc, on_delete=models.CASCADE)
    kind  = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="trait_kind") # item_type
    cat   = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="trait_cat" ) # combat_type
    note  = models.CharField(max_length=200, blank=True)
    gbl   = models.BooleanField(default=True)

    val1  = models.IntegerField()
    val2  = models.IntegerField()
    val3  = models.IntegerField()
    val4  = models.IntegerField()
    val5  = models.IntegerField()

    trans_atk  = models.BooleanField(default=False)
    trans_heal = models.BooleanField(default=False)
    trans_buff = models.BooleanField(default=False)
    trans_dbf  = models.BooleanField(default=False)
    trans_wep  = models.BooleanField(default=False)
    trans_arm  = models.BooleanField(default=False)
    trans_acc  = models.BooleanField(default=False)

class Research(models.Model):
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc  = models.ForeignKey(Desc, on_delete=models.CASCADE)
    val   = models.IntegerField()
    cole  = models.IntegerField()
    level = models.IntegerField()
    kind  = models.ForeignKey(Filterable, on_delete=models.CASCADE) # research
    req   = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="req")