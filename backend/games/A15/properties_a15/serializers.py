from rest_framework import serializers
from collections import OrderedDict
from games.A15.properties_a15.models import Property
from games.A15.items_a15.models import Item
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField, LegacyTranslatedField

class A15ItemNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name']

class A15PropertyNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='prop', field_name='name')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Property
        fields = ['id', 'name']

class A15PropertySerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='prop', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='prop', field_name='desc')
    combo1 = A15PropertyNameSerializer()
    combo2 = A15PropertyNameSerializer()
    combo3 = A15PropertyNameSerializer()
    items = A15ItemNameSerializer(many=True, source="item_set")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Property
        fields = ['id', 'name', 'desc', 'grade', 'points',
            'bomb', 'heal', 'buff', 'weapon', 'armor', 'accessory',
            'combo1', 'combo2', 'combo3', 'items', 'index']

    def to_representation(self, instance):
        result = super(A15PropertySerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])