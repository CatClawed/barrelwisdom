from rest_framework import serializers
from games.A12.effects_a12.models import Effect
from games.A12.items_a12.models import EffectLine
from games._helpers.serializer_helper import LegacyTranslatedField

class A12EffectLineSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name', obj_path='item')
    id = serializers.CharField(source='item.slug')
    class Meta:
        model = EffectLine
        fields = ['name', 'id']

class A12EffectSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='eff', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='eff', field_name='desc')
    effectline_set = A12EffectLineSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc', "effectline_set", "index"]


class A12EffectSerializerSimple(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='eff', field_name='name')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Effect
        fields = ['id', 'name']
