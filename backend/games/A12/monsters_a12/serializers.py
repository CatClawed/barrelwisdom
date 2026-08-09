from rest_framework import serializers
from collections import OrderedDict
from games.A12.monsters_a12.models import Monster
from games.A12.regions_a12.serializers import A12RegionNameSerializer
from games.A12.items_a12.models import Item
from games._helpers.serializer_helper import LegacyTranslatedField

class A12ItemNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name']


class A12MonsterNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="mon", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Monster
        fields = ['id', 'name']

class A12MonsterLevelSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="mon", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Monster
        fields = ['id', 'name', 'level', 'race', 'isDX']

class A12MonsterSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="mon", field_name="name")
    desc = LegacyTranslatedField(obj_prefix="mon", field_name="desc")
    locations = A12RegionNameSerializer(many=True)
    item_set = A12ItemNameSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Monster
        fields = ['id', 'name', 'desc', 'race', 'hp', 'atk', 'defen', 'spd',
            'level', 'note', 'locations', 'item_set', 'isDX', 'index']

    def to_representation(self, instance):
        result = super(A12MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])