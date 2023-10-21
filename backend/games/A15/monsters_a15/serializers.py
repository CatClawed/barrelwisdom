from rest_framework import serializers
from collections import OrderedDict
from games.A15.monsters_a15.models import Monster
from games.A15.regions_a15.serializers import A15RegionNameSerializer
from games.A15.items_a15.models import Item

class A15ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A15MonsterNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name

class A15MonsterLevelSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slugname', 'name', 'level']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name
        
class A15MonsterSimpleSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    race = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slugname', 'name', 'race', 'isDLC', 'isDX', 'isStrong']
    def to_representation(self, instance):
        result = super(A15MonsterSimpleSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name
    def get_race(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.race
        elif self.context['language'] == 'ja':
            return obj.mon_ja.race
        else:
            return obj.mon_en.race

class A15MonsterSerializer(serializers.ModelSerializer): 
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    race = serializers.SerializerMethodField()
    locations = A15RegionNameSerializer(many=True)
    item_set = A15ItemNameSerializer(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'name', 'desc', 'race', 'hp', 'atk', 'defen', 'spd', 'fire', 'water', 'wind', 'earth', 'level', 'exp', 'cole', 'note', 'isDLC', 'isDX', 'isStrong', 'locations', 'item_set']

    def to_representation(self, instance):
        result = super(A15MonsterSerializer, self).to_representation(instance)
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