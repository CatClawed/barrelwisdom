from rest_framework import serializers
from collections import OrderedDict
from games.A12.monsters_a12.models import Monster
from games.A12.regions_a12.serializers import A12RegionNameSerializer
from games.A12.items_a12.models import Item

class A12ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12MonsterNameSerializer(serializers.ModelSerializer):
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

class A12MonsterLevelSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slugname', 'name', 'level', 'race', 'isDX']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        if self.context['language'] == 'ja':
            return obj.mon_ja.name
        else:
            return obj.mon_en.name

class A12MonsterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    locations = A12RegionNameSerializer(many=True)
    item_set = A12ItemNameSerializer(many=True)
    class Meta:
        model = Monster
        fields = ['slugname', 'name', 'desc', 'race', 'hp', 'atk', 'defen', 'spd', 'level', 'note', 'locations', 'item_set', 'isDX']

    def to_representation(self, instance):
        result = super(A12MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
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