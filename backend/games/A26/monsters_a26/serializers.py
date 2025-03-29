from rest_framework import serializers
from games.A26.misc_a26.serializers import A26DefaultSerializer, A26CoordinateSerializer, A26ItemSimpleSerializer, A26TraitSimpleSerializer
from games.A26.monsters_a26.models import Monster, Race

class A26RaceSerializer(A26DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Race
        fields = [
            'id', 'name',
        ]

class A26MonsterListSerializer(A26DefaultSerializer):
    name = serializers.SerializerMethodField()
    race = A26RaceSerializer()
    class Meta:
        model = Monster
        fields = [
            'id', 'name', 'race',
        ]

class A26MonsterSerializer(A26DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    race = A26RaceSerializer()
    location = A26CoordinateSerializer(many=True)
    drop = A26ItemSimpleSerializer()
    rare = A26ItemSimpleSerializer()
    trait = A26TraitSimpleSerializer()
    class Meta:
        model = Monster
        fields = [
            'id', 'name', 'desc', 'race',
            'fire', 'ice', 'bolt', 'air',
            'hp', 'atk', 'dfn', 'spd',
            'break_hits', 'break_phys',
            'drop', 'rare', 'trait', 'location',
        ]
