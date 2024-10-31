from rest_framework import serializers
from games.A25.quest_a25.models import Reward, Training, Tower, ScoreBattleDifficulties, ScoreBattle, Dungeon, DungeonFloor, Battle, Wave, Enemy, EnemySkill, SkillKind
from games.A25.items_a25.models import Item
from games.A25.misc_a25.models import Desc
from games.A25.misc_a25.serializers import A25DefaultSerializer, A25FilterableSerializer


class A25EnemySkillSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    elem = serializers.CharField(source='elem.slug', read_only=True)
    area = serializers.SerializerMethodField()
    class Meta:
        model = EnemySkill
        fields = ['name', 'elem', 'area', 'wt', 'pow1']
    def get_area(self, obj):
        if obj.area:
            return A25DefaultSerializer.get_text(self,obj.area)

class A25SkillKindSerializer(A25DefaultSerializer):
    skill = A25EnemySkillSerializer()
    class Meta:
        model = SkillKind
        fields = ['kind', 'skill']
    def get_area(self, obj):
        if obj.area:
            return A25DefaultSerializer.get_text(self,obj.area)

class A25EnemySerializer(A25DefaultSerializer):
    base_enemy = serializers.CharField(source='base_enemy.slug')
    name = serializers.SerializerMethodField()
    skills = A25SkillKindSerializer(many=True)
    class Meta:
        model = Enemy
        fields = ['res_ice','res_fir','res_str','res_blt','res_sta','res_sla','res_air',
            'name', 'skills', 'base_enemy']

class A25WaveSerializer(A25DefaultSerializer):
    enemies = A25EnemySerializer(many=True)
    class Meta:
        model = Wave
        fields = ['level', 'enemies']

class A25BattleSerializer(A25DefaultSerializer):
    panels = serializers.SerializerMethodField()
    hints = serializers.SerializerMethodField()
    waves = A25WaveSerializer(many=True)
    class Meta:
        model = Battle
        fields = ['panels', 'hints', 'waves']
    def get_panels(self,obj):
        arr = []
        for panel in obj.panels.all():
            arr.append(panel.slug)
        return arr
    def get_hints(self,obj):
        arr = []
        for hint in obj.hints.all():
            arr.append({"base_enemy": hint.enemy.base_enemy.slug, "desc": A25DefaultSerializer.get_text(self,hint.desc)})
        return arr

class A25ItemNameSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name', 'rarity']

class A25RewardSerializer(A25DefaultSerializer):
    item = A25ItemNameSerializer()
    class Meta:
        model = Reward
        fields = ['item', 'num']

class A25TowerSerializer(A25DefaultSerializer):
    rewards = A25RewardSerializer(many=True)
    effects = serializers.SerializerMethodField()
    battle = A25BattleSerializer()
    class Meta:
        model = Tower
        fields = ['floor', 'combat_level', 'rewards', 'effects', 'battle']
    def get_effects(self,obj):
        arr = []
        for eff in obj.effects.all():
            arr.append(A25DefaultSerializer.get_text(self,eff))
        return arr

class A25TrainingSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    rewards = A25RewardSerializer(many=True)
    kind = A25FilterableSerializer()
    class Meta:
        model = Training
        fields = ['name', 'combat_level', 'rewards', 'kind', 'exp']

class A25ScoreBattleDiffSerializer(A25DefaultSerializer):
    rewards = A25RewardSerializer(many=True)
    class Meta:
        model = ScoreBattleDifficulties
        fields = ['difficulty', 'combat_level', 'rewards', 'exp', 'cole']

class A25ScoreBattleSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    difficulties = A25ScoreBattleDiffSerializer(many=True)
    chapter = serializers.IntegerField(source='chap')
    section = serializers.IntegerField(source='sect')
    class Meta:
        model = ScoreBattle
        fields = ['name', 'chapter', 'section', 'difficulties']

class A25DungeonFloorSerializer(A25DefaultSerializer):
    effects = serializers.SerializerMethodField()
    class Meta:
        model = DungeonFloor
        fields = ['order', 'combat_level', 'effects']
    def get_effects(self,obj):
        arr = []
        for eff in obj.effects.all():
            arr.append(A25DefaultSerializer.get_text(self,eff))
        return arr

class A25DungeonSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    floors = A25DungeonFloorSerializer(many=True, source='dungeonfloor_set')
    rewards = A25RewardSerializer(many=True)
    class Meta:
        model = Dungeon
        fields = ['name', 'floors', 'rewards']

class A25DungeonItemSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Dungeon
        fields = ['name']

class A25ScoreBattleItemSerializer(A25DefaultSerializer):
    chapter = serializers.IntegerField(source='chap')
    section = serializers.IntegerField(source='sect')
    class Meta:
        model = ScoreBattle
        fields = ['chapter', 'section']

class A25ScoreBattleDiffItemSerializer(A25DefaultSerializer):
    scorebattle = A25ScoreBattleItemSerializer(many=True, source='scorebattle_set')
    class Meta:
        model = ScoreBattleDifficulties
        fields = ['scorebattle', 'difficulty']

class A25ItemRewardSerializer(A25DefaultSerializer):
    scorebattle = A25ScoreBattleDiffItemSerializer(many=True, source='scorebattledifficulties_set')
    dungeon = A25DungeonItemSerializer(many=True, source='dungeon_set')
    class Meta:
        model = Reward
        fields = ['scorebattle', 'dungeon']