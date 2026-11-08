from rest_framework import serializers
from games.A15.effects_a15.models import Effect
from games.A15.items_a15.models import EffectLine
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField, LegacyTranslatedField


class A15EffectLineerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name', obj_path='item')
    id = serializers.CharField(source='item.slug')
    class Meta:
        model = EffectLine
        fields = ['name', 'id']

class A15EffectSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix="eff", field_name="name")
    desc = LegacyTranslatedField(obj_prefix="eff", field_name="desc")
    items = A15EffectLineerializer(many=True, source="effectline_set")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc', "items"]

class A15EffectSerializerSimple(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix="eff", field_name="name")
    desc = LegacyTranslatedField(obj_prefix="eff", field_name="desc")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc']
