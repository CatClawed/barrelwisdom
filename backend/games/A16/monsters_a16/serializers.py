from rest_framework import serializers
from collections import OrderedDict
from games.A16.monsters_a16.models import Monster
from games.A16.regions_a16.serializers import A16RegionNameSerializer
from games.A16.items_a16.models import Item
from games._helpers.serializer_helper import LegacyTranslatedField

class A16ItemNameSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    class Meta:
        model = Item
        fields = ['id', 'name']

class A16MonsterNameSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    class Meta:
        model = Monster
        fields = ['id', 'name']

class A16MonsterLevelSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    class Meta:
        model = Monster
        fields = ['id', 'name', 'level', 'kind']

class A16MonsterSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='mon', field_name='desc')
    race = LegacyTranslatedField(obj_prefix='mon', field_name='race')
    locations = A16RegionNameSerializer(many=True)
    item_set = A16ItemNameSerializer(many=True)
    class Meta:
        model = Monster
        fields = ['id', 'name', 'desc', 'race', 'hp', 'atk', 'defen', 'spd', 'level', 'exp', 'cole', 'note', 'locations', 'item_set', 'kind']

    def to_representation(self, instance):
        result = super(A16MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])