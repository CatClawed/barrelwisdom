from rest_framework import serializers
from games.A25.chara_a25.models import Character, Memoria, Passive, Skill
from collections import OrderedDict
from games.A25.misc_a25.serializers import A25DefaultSerializer, A25TraitSimpleSerializer

class A25PassiveSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model =  Passive
        fields = ['name', 'desc', 'val']

class A25CharaUpdateSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    class Meta:
        model = Character
        fields = [
            'slug', 'name', 'title'
        ]
    def get_title(self, obj):
        return A25DefaultSerializer.get_text(self,obj.title)

class A25CharaListSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    role = serializers.CharField(source='role.slug')
    elem = serializers.CharField(source='elem.slug')
    class Meta:
        model = Character
        fields = [
            'slug', 'name', 'title', 'role', 'elem', 'rarity',
        ]
    def get_title(self, obj):
        return A25DefaultSerializer.get_text(self,obj.title)

class A25CharaSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    role = serializers.CharField(source='role.slug')
    elem = serializers.CharField(source='elem.slug')
    color1 = serializers.CharField(source='color1.slug')
    color2 = serializers.CharField(source='color2.slug')
    trait1 = A25TraitSimpleSerializer()
    trait2 = A25TraitSimpleSerializer()
    trait3 = A25TraitSimpleSerializer()
    passives = A25PassiveSerializer(source='passive_set', many=True)
    class Meta:
        model = Character
        fields = [
            'slug', 'name', 'title', 'role', 'elem', 'rarity', 'color1', 'color2',
            'trait1', 'trait2', 'trait3',
            'hp', 'spd', 'patk', 'pdfn', 'matk', 'mdfn',
            "passives",
        ]
    def get_title(self, obj):
        return A25DefaultSerializer.get_text(self,obj.title)

class A25MemoriaListSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Memoria
        fields = [
            'slug', 'name', 'rarity',
        ]

class A25MemoriaSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    skill_name = serializers.SerializerMethodField()
    skill_desc = serializers.SerializerMethodField()
    class Meta:
        model = Memoria
        fields = [
            'slug', 'name', 'skill_name', 'skill_desc', 'rarity',
            'lv1', 'lv2', 'lv3', 'lv4', 'lv5',
            "hp1", "spd1", "patk1", "pdef1", "matk1", "mdef1",
            "hp30", "spd30", "patk30", "pdef30", "matk30", "mdef30",
        ]
    def get_skill_name(self, obj):
        return A25DefaultSerializer.get_text(self,obj.skill_name)
    def get_skill_desc(self, obj):
        return A25DefaultSerializer.get_text(self,obj.skill_desc)