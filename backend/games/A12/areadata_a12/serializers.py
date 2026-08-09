from rest_framework import serializers
from collections import OrderedDict
from games.A12.areadata_a12.models import Field, Area
from games.A12.items_a12.serializers import A12ItemNameSerializer
from games.A12.monsters_a12.serializers import A12MonsterNameSerializer
from games._helpers.serializer_helper import LegacyTranslatedField

class A12FieldSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='region')
    id = serializers.SerializerMethodField()
    ingredients = A12ItemNameSerializer(many=True)
    monsters = A12MonsterNameSerializer(many=True)
    class Meta:
        model = Field
        fields = ['id', 'name', 'unlock', 'ingredients', 'monsters', 'note']

    def to_representation(self, instance):
        result = super(A12FieldSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_id(self,obj):
        return obj.region.slug


class A12AreaSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='region')
    id = serializers.SerializerMethodField()
    fields = A12FieldSerializer(many=True)

    class Meta:
        model = Area
        fields = ['id', 'name', 'fields']
    def to_representation(self, instance):
        result = super(A12AreaSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

    def get_id(self,obj):
        return obj.region.slug
