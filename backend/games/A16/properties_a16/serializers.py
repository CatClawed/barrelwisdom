from rest_framework import serializers
from collections import OrderedDict
from games.A16.properties_a16.models import Property
from games.A16.items_a16.models import Item
from games._helpers.serializer_helper import LegacyTranslatedField

class A16ItemNameSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    class Meta:
        model = Item
        fields = ['id', 'name']

class A16PropertyNameSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='prop', field_name='name')
    class Meta:
        model = Property
        fields = ['id', 'name']

class A16PropertySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='prop', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='prop', field_name='desc')
    combo1 = A16PropertyNameSerializer()
    combo2 = A16PropertyNameSerializer()
    combo3 = A16PropertyNameSerializer()
    items = A16ItemNameSerializer(many=True, source='item_set')
    class Meta:
        model = Property
        fields = ['id', 'name', 'desc', 'grade', 'points', 'bomb', 'heal', 'weapon', 'armor', 'accessory', 'combo1', 'combo2', 'combo3', 'items']

    def to_representation(self, instance):
        result = super(A16PropertySerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])