from rest_framework import serializers
from collections import OrderedDict
from games.A15.monsters_a15.models import *
from games.A15.regions_a15.serializers import A15RegionNameSerializer

class A15MonsterNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        if self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name

class A15MonsterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    race = serializers.SerializerMethodField()
    locations = A15RegionNameSerializer(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'name', 'desc', 'race', 'hp', 'atk', 'defen', 'spd', 'fire', 'water', 'wind', 'earth', 'level', 'exp', 'cole', 'note', 'isDLC', 'isDX', 'isStrong', 'locations']

    def to_representation(self, instance):
        result = super(A15MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        if self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc
        if self.context['language'] == 'ja':
            return obj.mon_ja.desc
        else:
            return obj.mon_en.desc
    def get_race(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.race
        if self.context['language'] == 'ja':
            return obj.mon_ja.race
        else:
            return obj.mon_en.race