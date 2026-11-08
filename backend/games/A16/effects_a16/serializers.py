from rest_framework import serializers
from games.A16.effects_a16.models import Effect
from games.A16.items_a16.models import EffectLines, EffectData
from games._helpers.serializer_helper import LegacyTranslatedField

class A16EffectLineSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name', obj_path='item')
    id = serializers.CharField(source='item.slug')
    class Meta:
        model = EffectLines
        fields = ['name', 'id']


class A16EffectDataSerializer(serializers.ModelSerializer):
    effectlines_set = A16EffectLineSerializer(many=True)
    class Meta:
        model = EffectData
        fields = ['effectlines_set']

class A16EffectSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='eff', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='eff', field_name='desc')
    effectdata_set = A16EffectDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc', "effectdata_set"]

class A16EffectSerializerSimple(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='eff', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='eff', field_name='desc')
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc']