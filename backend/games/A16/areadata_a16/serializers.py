from rest_framework import serializers
from collections import OrderedDict
from games.A16.areadata_a16.models import Field, Area
from games.A16.items_a16.serializers import A16ItemNameSerializer
from games.A16.monsters_a16.serializers import A16MonsterNameSerializer
from games._helpers.serializer_helper import LegacyTranslatedField


class A16FieldSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='region')
    id = serializers.CharField(source='region.slug')
    ingredients = A16ItemNameSerializer(many=True)
    rare = A16ItemNameSerializer(many=True)
    relics = A16ItemNameSerializer(many=True)
    monsters = A16MonsterNameSerializer(many=True)
    class Meta:
        model = Field
        fields = ['id', 'name', 'ingredients', 'rare', 'relics', 'monsters', 'note']

    def to_representation(self, instance):
        result = super(A16FieldSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A16AreaSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='region')
    id = serializers.CharField(source='region.slug')
    fields = A16FieldSerializer(many=True)

    class Meta:
        model = Area
        fields = ['id', 'name', 'fields']
    def to_representation(self, instance):
        result = super(A16AreaSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])