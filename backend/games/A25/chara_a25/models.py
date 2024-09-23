from django.db import models
from games.A25.misc_a25.models import Name, Desc, Trait, Filterable

class Character(models.Model):
    slug  = models.SlugField(max_length=50, unique=True)
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    title = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="chara_title")
    limit = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True)
    role  = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    elem  = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="chara_elem")
    note  = models.CharField(max_length=200, blank=True)
    gbl   = models.BooleanField(default=False)

    leader_skill_name = models.ForeignKey(Name, on_delete=models.CASCADE, blank=True, null=True, related_name="leader_name")
    leader_skill_desc = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="leader_desc")
    leader_skill_tag  = models.ForeignKey(Filterable, on_delete=models.CASCADE, blank=True, null=True, related_name="skill_tag")
    tags = models.ManyToManyField(Filterable, related_name="chara_tags")

    rarity = models.IntegerField()

    color1 = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="char_color1")
    color2 = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="char_color2")

    trait1 = models.ForeignKey(Trait, on_delete=models.CASCADE, related_name="chara_trait1")
    trait2 = models.ForeignKey(Trait, on_delete=models.CASCADE, related_name="chara_trait2")
    trait3 = models.ForeignKey(Trait, on_delete=models.CASCADE, related_name="chara_trait3")

    hp    = models.IntegerField()
    spd   = models.IntegerField()
    patk  = models.IntegerField()
    pdfn  = models.IntegerField()
    matk  = models.IntegerField()
    mdfn  = models.IntegerField()

    res_ice = models.IntegerField(default=0)
    res_fir = models.IntegerField(default=0)
    res_imp = models.IntegerField(default=0)
    res_ltn = models.IntegerField(default=0)
    res_pie = models.IntegerField(default=0)
    res_sla = models.IntegerField(default=0)
    res_wnd = models.IntegerField(default=0)

    class Meta:
        ordering = [
            "-rarity",
            "role",
            "name__text_en"
        ]

class Skill(models.Model):
    char = models.ForeignKey(Character, on_delete=models.CASCADE)
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc = models.ForeignKey(Desc, on_delete=models.CASCADE)
    elem = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    area = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="skill_area")

    wt = models.IntegerField(default=0)
    index = models.IntegerField(default=0)

    # currently up to 3 is used but might as well futureproof
    val0  = models.IntegerField(blank=True, null=True)
    val1  = models.IntegerField(blank=True, null=True)
    val2  = models.IntegerField(blank=True, null=True)
    val3  = models.IntegerField(blank=True, null=True)
    val4  = models.IntegerField(blank=True, null=True)
    val5  = models.IntegerField(blank=True, null=True)
    val6  = models.IntegerField(blank=True, null=True)

    val0_2  = models.IntegerField(blank=True, null=True)
    val1_2  = models.IntegerField(blank=True, null=True)
    val2_2  = models.IntegerField(blank=True, null=True)
    val3_2  = models.IntegerField(blank=True, null=True)
    val4_2  = models.IntegerField(blank=True, null=True)
    val5_2  = models.IntegerField(blank=True, null=True)
    val6_2  = models.IntegerField(blank=True, null=True)

    pow1  = models.IntegerField()
    pow2  = models.IntegerField()
    pow3  = models.IntegerField()
    pow4  = models.IntegerField()
    pow5  = models.IntegerField()

    break1  = models.IntegerField()
    break2  = models.IntegerField()
    break3  = models.IntegerField()
    break4  = models.IntegerField()
    break5  = models.IntegerField()

    class Meta:
        ordering = [
            "char",
            "index"
        ]

class Passive(models.Model):
    char = models.ForeignKey(Character, on_delete=models.CASCADE)
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc = models.ForeignKey(Desc, on_delete=models.CASCADE)
    val  = models.IntegerField()
    val2  = models.IntegerField(blank=True, null=True)
    val3  = models.IntegerField(blank=True, null=True)
    val4  = models.IntegerField(blank=True, null=True)
    num   = models.IntegerField(default=3) # heck resna and val

    class Meta:
        ordering = [
            "num"
        ]

# well they are equipped to characters...
class Memoria(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    skill_name = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="memoria_skill")
    skill_desc = models.ForeignKey(Desc, on_delete=models.CASCADE)
    limit = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True, related_name="memoria_limited")
    rarity = models.IntegerField()
    note  = models.CharField(max_length=200, blank=True)
    gbl   = models.BooleanField(default=False)

    lv1  = models.IntegerField()
    lv2  = models.IntegerField()
    lv3  = models.IntegerField()
    lv4  = models.IntegerField()
    lv5  = models.IntegerField()

    hp30   = models.IntegerField()
    spd30  = models.IntegerField()
    patk30 = models.IntegerField()
    matk30 = models.IntegerField()
    pdef30 = models.IntegerField()
    mdef30 = models.IntegerField()

    class Meta:
        ordering = [
            "-rarity",
            "name__text_en"
        ]

class Emblem(models.Model):
    index = models.IntegerField()
    eid   = models.IntegerField()
    kind  = models.IntegerField()
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc  = models.ForeignKey(Desc, on_delete=models.CASCADE)
    gbl   = models.BooleanField(default=False)

    # bronze silver gold
    lv1 = models.IntegerField()
    lv2 = models.IntegerField()
    lv3 = models.IntegerField()
    acquisition1 = models.ForeignKey(Desc, on_delete=models.CASCADE, related_name="emblem_acquisition1")
    acquisition2 = models.ForeignKey(Desc, on_delete=models.CASCADE, related_name="emblem_acquisition2")
    acquisition3 = models.ForeignKey(Desc, on_delete=models.CASCADE, related_name="emblem_acquisition3")

    class Meta:
        ordering = [
            "kind",
            "index"
        ]