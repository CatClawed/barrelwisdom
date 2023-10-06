from django.db import models
from games.A25.misc_a25.models import Name, Desc, Trait, Filterable

class Character(models.Model):
    slug  = models.SlugField(max_length=50, unique=True)
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    title = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="chara_title")
    role  = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    elem  = models.ForeignKey(Filterable, on_delete=models.CASCADE, related_name="chara_elem")

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

    # spd never increases
    rate_hp    = models.IntegerField()
    rate_patk  = models.IntegerField()
    rate_pdfn  = models.IntegerField()
    rate_matk  = models.IntegerField()
    rate_mdfn  = models.IntegerField()

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

    val1  = models.IntegerField()
    val2  = models.IntegerField(blank=True, null=True)

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

# well they are equipped to characters...
class Memoria(models.Model):
    slug = models.SlugField(max_length=50, unique=True)
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    skill_name = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="memoria_skill")
    skill_desc = models.ForeignKey(Desc, on_delete=models.CASCADE)
    rarity = models.IntegerField()

    lv1  = models.IntegerField()
    lv2  = models.IntegerField()
    lv3  = models.IntegerField()
    lv4  = models.IntegerField()
    lv5  = models.IntegerField()

    hp1    = models.IntegerField()
    hp30   = models.IntegerField()
    spd1   = models.IntegerField()
    spd30  = models.IntegerField()
    patk1  = models.IntegerField()
    patk30 = models.IntegerField()
    matk1  = models.IntegerField()
    matk30 = models.IntegerField()
    pdef1  = models.IntegerField()
    pdef30 = models.IntegerField()
    mdef1  = models.IntegerField()
    mdef30 = models.IntegerField()

    class Meta:
        ordering = [
            "-rarity",
            "name__text_en"
        ]