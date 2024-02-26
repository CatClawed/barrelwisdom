from django.db import models
from games.A25.misc_a25.models import Name, Desc, Filterable
from games.A25.items_a25.models import Item


class EnemySkill(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE, blank=True, null=True)
    desc = models.ForeignKey(Desc, on_delete=models.CASCADE, blank=True, null=True)
    elem = models.ForeignKey(Filterable, on_delete=models.CASCADE, blank=True, null=True)
    area = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="enemy_skill_area", blank=True, null=True)
    wt   = models.IntegerField(default=0)
    s_id = models.IntegerField(default=0)
    pow1 = models.IntegerField()

class SkillKind(models.Model):
    skill = models.ForeignKey(EnemySkill, on_delete=models.CASCADE)
    kind = models.CharField(max_length=30)

class Enemy(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    species = models.ForeignKey(Name, on_delete=models.CASCADE, related_name="enemy_species")
    base_enemy = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    e_id   = models.IntegerField()
    skills = models.ManyToManyField(SkillKind)

    res_ice = models.IntegerField(default=0)
    res_fir = models.IntegerField(default=0)
    res_str = models.IntegerField(default=0)
    res_blt = models.IntegerField(default=0)
    res_sta = models.IntegerField(default=0)
    res_sla = models.IntegerField(default=0)
    res_air = models.IntegerField(default=0)

# Wave 2 is so seldom used.
class Wave(models.Model):
    order = models.IntegerField(default=1)
    level = models.IntegerField()
    enemies = models.ManyToManyField(Enemy)
    w_id   = models.IntegerField(default=0)

    class Meta:
        ordering = [
            "order"
        ]

class Hint(models.Model):
    desc  = models.ForeignKey(Desc, on_delete=models.CASCADE)
    enemy = models.ForeignKey(Enemy, on_delete=models.CASCADE)

class Battle(models.Model):
    panels = models.ManyToManyField(Filterable)
    waves = models.ManyToManyField(Wave)
    hints = models.ManyToManyField(Hint)
    b_id = models.IntegerField(default=0)

class Reward(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    num = models.IntegerField(blank=True, null=True)
    order = models.IntegerField()
    class Meta:
        ordering = [
            "order",
        ]

class Training(models.Model):
    name  = models.ForeignKey(Name, on_delete=models.CASCADE)
    combat_level = models.IntegerField()
    rewards = models.ManyToManyField(Reward)
    kind = models.ForeignKey(Filterable, on_delete=models.CASCADE)
    exp = models.IntegerField(default=0)
    gbl = models.BooleanField(default=True)
    q_id = models.IntegerField(default=0)
    class Meta:
        ordering = [
            "kind",
        ]

class Tower(models.Model):
    kind = models.ForeignKey(Filterable, on_delete=models.CASCADE, null=True, blank=True)
    floor = models.IntegerField()
    combat_level = models.IntegerField()
    rewards = models.ManyToManyField(Reward)
    effects = models.ManyToManyField(Desc)
    q_id = models.IntegerField(default=0)
    gbl = models.BooleanField(default=True)
    battle = models.ForeignKey(Battle, on_delete=models.CASCADE, null=True, blank=True)
    class Meta:
        ordering = [
            "kind",
            "floor"
        ]

class ScoreBattleDifficulties(models.Model):
    difficulty = models.IntegerField(default=0)
    cole = models.IntegerField(default=0)
    combat_level = models.IntegerField(default=0)
    exp = models.IntegerField(default=0)
    rewards = models.ManyToManyField(Reward)
    q_id = models.IntegerField(default=0)
    battle = models.ForeignKey(Battle, on_delete=models.CASCADE, null=True, blank=True)
    class Meta:
        ordering = [
            "difficulty",
        ]

class ScoreBattle(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    chapter = models.CharField(max_length=10)
    section = models.CharField(max_length=10)
    difficulties = models.ManyToManyField(ScoreBattleDifficulties)
    gbl = models.BooleanField(default=False)
    class Meta:
        ordering = [
            "chapter",
            "section"
        ]
        constraints = [
            models.UniqueConstraint(fields=['chapter', 'section'], name='score_section')
        ]

class Dungeon(models.Model):
    name = models.ForeignKey(Name, on_delete=models.CASCADE)
    rewards = models.ManyToManyField(Reward)
    gbl = models.BooleanField(default=False)

class DungeonFloor(models.Model):
    dungeon = models.ForeignKey(Dungeon, on_delete=models.CASCADE)
    order = models.IntegerField()
    rewards = models.ManyToManyField(Reward)
    combat_level = models.IntegerField()
    effects = models.ManyToManyField(Desc)
    q_id = models.IntegerField(default=0)
    class Meta:
        ordering = [
            "order",
        ]