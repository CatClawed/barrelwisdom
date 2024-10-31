from rest_framework import serializers
from collections import OrderedDict
from games.A16.monsters_a16.models import Monster
from games.A16.regions_a16.serializers import A16RegionNameSerializer
from games.A16.items_a16.models import Item

class A16ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A16MonsterNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name

class A16MonsterLevelSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'name', 'level', 'kind']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name

class A16MonsterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    race = serializers.SerializerMethodField()
    locations = A16RegionNameSerializer(many=True)
    item_set = A16ItemNameSerializer(many=True)
    class Meta:
        model = Monster
        fields = ['slug', 'name', 'desc', 'race', 'hp', 'atk', 'defen', 'spd', 'level', 'exp', 'cole', 'note', 'locations', 'item_set', 'kind']

    def to_representation(self, instance):
        result = super(A16MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc
        elif self.context['language'] == 'ja':
            return obj.mon_ja.desc
        else:
            return obj.mon_en.desc
    def get_race(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.race
        elif self.context['language'] == 'ja':
            return obj.mon_ja.race
        else:
            return obj.mon_en.race