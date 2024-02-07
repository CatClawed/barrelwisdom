from django.db import models
from games.A25.misc_a25.models import Name, Desc, Filterable
from games.A25.items_a25.models import Item

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
    class Meta:
        ordering = [
            "kind",
        ]

class Tower(models.Model):
    floor = models.IntegerField(unique=True)
    combat_level = models.IntegerField()
    rewards = models.ManyToManyField(Reward)
    effects = models.ManyToManyField(Desc)

class ScoreBattleDifficulties(models.Model):
    difficulty = models.IntegerField(default=0)
    cole = models.IntegerField(default=0)
    combat_level = models.IntegerField(default=0)
    exp = models.IntegerField(default=0)
    rewards = models.ManyToManyField(Reward)
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
    class Meta:
        ordering = [
            "order",
        ]