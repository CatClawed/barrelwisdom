from rest_framework import serializers
from collections import OrderedDict
from games.A15.monsters_a15.models import Monster
from games.A15.regions_a15.serializers import A15RegionNameSerializer
from games.A15.items_a15.models import Item
from games._helpers.serializer_helper import LegacyTranslatedField, DefaultSerializer

class A15ItemNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    id = serializers.CharField(source='slug')
    class Meta:
        model = Item
        fields = ['id', 'name']

class A15MonsterNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    id = serializers.CharField(source='slug')
    class Meta:
        model = Monster
        fields = ['id', 'name']

class A15MonsterLevelSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    id = serializers.CharField(source='slug')
    class Meta:
        model = Monster
        fields = ['id', 'name', 'level']
        
class A15MonsterSimpleSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    race = LegacyTranslatedField(obj_prefix='mon', field_name='race')
    id = serializers.CharField(source='slug')
    class Meta:
        model = Monster
        fields = ['id', 'name', 'race', 'isDLC', 'isDX', 'isStrong']


class A15MonsterSerializer(serializers.ModelSerializer): 
    name = LegacyTranslatedField(obj_prefix='mon', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='mon', field_name='desc')
    race = LegacyTranslatedField(obj_prefix='mon', field_name='race')
    locations = A15RegionNameSerializer(many=True)
    drops = A15ItemNameSerializer(many=True, source="item_set")
    id = serializers.CharField(source='slug')
    class Meta:
        model = Monster
        fields = ['id', 'name', 'desc', 'race',
            'hp', 'atk', 'defen', 'spd', 'fire', 'water', 'wind', 'earth',
            'level', 'exp', 'cole', 'note', 'isDLC', 'isDX', 'isStrong',
            'locations', 'drops', 'index']
