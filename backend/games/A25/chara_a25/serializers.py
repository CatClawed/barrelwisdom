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

class A25SkillSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    elem = serializers.CharField(source='elem.slug')
    area = serializers.SerializerMethodField()
    class Meta:
        model =  Skill
        fields = ['name', 'desc', 'elem', 'area', 'wt',
            'val0','val1','val2','val3','val4','val5','val6',
            'val0_2','val1_2','val2_2','val3_2','val4_2','val5_2','val6_2',
            'break1','break2','break3','break4','break5',
            'pow1','pow2','pow3','pow4','pow5',
        ]
    def get_area(self, obj):
        return A25DefaultSerializer.get_text(self,obj.area)

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
    limit = serializers.SerializerMethodField()
    role = serializers.CharField(source='role.slug')
    elem = serializers.CharField(source='elem.slug')
    color1 = serializers.CharField(source='color1.slug')
    color2 = serializers.CharField(source='color2.slug')
    trait1 = A25TraitSimpleSerializer()
    trait2 = A25TraitSimpleSerializer()
    trait3 = A25TraitSimpleSerializer()
    passives = A25PassiveSerializer(source='passive_set', many=True)
    skills = A25SkillSerializer(source='skill_set', many=True)
    class Meta:
        model = Character
        fields = [
            'slug', 'name', 'title', 'role', 'elem', 'rarity', 'color1', 'color2',
            'trait1', 'trait2', 'trait3',
            'hp', 'spd', 'patk', 'pdfn', 'matk', 'mdfn',
            "passives", 'limit', 'skills', 'note'
        ]
    def get_title(self, obj):
        return A25DefaultSerializer.get_text(self,obj.title)
    def get_limit(self, obj):
        if obj.limit:
            return A25DefaultSerializer.get_text(self,obj.limit)

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
    limit = serializers.SerializerMethodField()
    class Meta:
        model = Memoria
        fields = [
            'slug', 'name', 'skill_name', 'skill_desc', 'rarity', 'limit',
            'note', 'lv1', 'lv2', 'lv3', 'lv4', 'lv5',
            "hp30", "spd30", "patk30", "pdef30", "matk30", "mdef30",
        ]
    def get_skill_name(self, obj):
        return A25DefaultSerializer.get_text(self,obj.skill_name)
    def get_skill_desc(self, obj):
        return A25DefaultSerializer.get_text(self,obj.skill_desc)
    def get_limit(self, obj):
        if obj.limit:
            return A25DefaultSerializer.get_text(self,obj.limit)