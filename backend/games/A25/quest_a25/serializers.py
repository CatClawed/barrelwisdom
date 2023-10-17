from rest_framework import serializers
from games.A25.quest_a25.models import Reward, Training, FieldEffect, Tower, ScoreBattleDifficulties, ScoreBattle, Dungeon, DungeonFloor
from games.A25.items_a25.models import Item
from games.A25.misc_a25.serializers import A25DefaultSerializer, A25FilterableSerializer

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

class A25FieldEffectSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = FieldEffect
        fields = ['name', 'desc']

class A25TowerSerializer(A25DefaultSerializer):
    rewards = A25RewardSerializer(many=True)
    effects = A25FieldEffectSerializer(many=True)
    class Meta:
        model = Tower
        fields = ['floor', 'combat_level', 'rewards', 'effects']

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
    class Meta:
        model = ScoreBattle
        fields = ['name', 'chapter', 'section', 'difficulties']

class A25DungeonFloorSerializer(A25DefaultSerializer):
    effects = A25FieldEffectSerializer(many=True)
    rewards = A25RewardSerializer(many=True)
    class Meta:
        model = DungeonFloor
        fields = ['order', 'combat_level', 'effects', 'rewards']

class A25DungeonSerializer(A25DefaultSerializer):
    name_en = serializers.CharField(source='name.text_en')
    name_ja = serializers.CharField(source='name.text_ja')
    floors = A25DungeonFloorSerializer(many=True, source='dungeonfloor_set')
    class Meta:
        model = Dungeon
        fields = ['name_en', 'name_ja', 'floors']

class A25DungeonItemSerializer(A25DefaultSerializer):
    name_en = serializers.CharField(source='name.text_en')
    name_ja = serializers.CharField(source='name.text_ja')
    class Meta:
        model = Dungeon
        fields = ['name_en', 'name_ja']

class A25ScoreBattleItemSerializer(A25DefaultSerializer):
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