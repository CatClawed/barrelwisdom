from django.db import models
from games.A25.misc_a25.models import Name, Desc, Trait, Color, Attribute

class Character(models.Model):
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    title = models.ForeignKey(Name, on_delete=models.CASCADE)
    role  = models.ForeignKey(Name, on_delete=models.CASCADE)

    rarity = models.IntegerField()

    color1 = models.ForeignKey(Color, on_delete=models.CASCADE)
    color2 = models.ForeignKey(Color, on_delete=models.CASCADE)

    trait1 = models.ForeignKey(Trait, on_delete=models.CASCADE)
    trait2 = models.ForeignKey(Trait, on_delete=models.CASCADE)
    trait3 = models.ForeignKey(Trait, on_delete=models.CASCADE)

    elem = models.ForeignKey(Attribute, on_delete=models.CASCADE)

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
        constraints = [
            models.UniqueConstraint(fields=['name', 'title'], name="gacha-char")
        ]

class Skill(models.Model):
    char = models.ForeignKey(Character, on_delete=models.CASCADE)
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc = models.ForeignKey(Desc, on_delete=models.CASCADE)
    elem = models.ForeignKey(Attribute, on_delete=models.CASCADE)
    area = models.ForeignKey(Name, on_delete=models.CASCADE)

    val1  = models.IntegerField()
    val2  = models.IntegerField()

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

class Passive(models.Model):
    char = models.ForeignKey(Character, on_delete=models.CASCADE)
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    desc = models.ForeignKey(Name, on_delete=models.CASCADE)
    val  = models.IntegerField()

# well they are equipped to characters...
class Memoria(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    skill_name = models.ForeignKey(Name, on_delete=models.CASCADE)
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