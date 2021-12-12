from django.db import models

# English, Japanese, Korean, French, Simplified Chinese, Traditional Chinese
# And a slugname in english to bind them I guess

class Effect_en(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=250, blank=True)

class Effect_ja(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=250, blank=True)

class Effect_ko(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=250, blank=True)

class Effect_fr(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=250, blank=True)

class Effect_sc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=250, blank=True)

class Effect_tc(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=250, blank=True)

class Effect(models.Model):
    types = [
        ('Normal', 'Normal'),
        ('Weapon Forge', 'Weapon Forge'),
        ('Armor Forge', 'Armor Forge'),
        ('Accessory Forge', 'Accessory Forge'),
        ('EV', 'EV')
    ]
    slugname = models.SlugField(max_length=50, unique=True)
    efftype = models.CharField(max_length=20, choices=types)
    effsub = models.CharField(max_length=20, blank=True, default="")
    note = models.CharField(max_length=255, blank=True)
    index = models.IntegerField()
    eff_en = models.OneToOneField(Effect_en, on_delete=models.CASCADE)
    eff_ja = models.OneToOneField(Effect_ja, on_delete=models.CASCADE)
    eff_ko = models.OneToOneField(Effect_ko, on_delete=models.CASCADE)
    eff_fr = models.OneToOneField(Effect_fr, on_delete=models.CASCADE)
    eff_sc = models.OneToOneField(Effect_sc, on_delete=models.CASCADE)
    eff_tc = models.OneToOneField(Effect_tc, on_delete=models.CASCADE)
    parent = models.ManyToManyField("self", blank=True, related_name='parent') # Forge and EV
    effects = models.ManyToManyField("self", blank=True, related_name='effects') # EV only
    # Advanced Data, not interpreted
    attTag0 = models.CharField(max_length=50, blank=True, null=True, default="")
    actTag0 = models.CharField(max_length=50, blank=True, null=True, default="")
    min_1_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    max_1_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    min_2_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    max_2_0 = models.CharField(max_length=50, blank=True, null=True, default="")
    attTag1 = models.CharField(max_length=50, blank=True, null=True, default="")
    actTag1 = models.CharField(max_length=50, blank=True, null=True, default="")
    min_1_1 = models.CharField(max_length=50, blank=True, null=True, default="")
    max_1_1 = models.CharField(max_length=50, blank=True, null=True, default="")
    min_2_1 = models.CharField(max_length=50, blank=True, null=True, default="")
    max_2_1 = models.CharField(max_length=50, blank=True, null=True, default="")
    class Meta:
        ordering = ['index']