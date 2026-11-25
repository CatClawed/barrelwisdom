from rest_framework import serializers
from games.A16.effects_a16.models import Effect
from games.A16.items_a16.models import EffectLines
from games._helpers.serializer_helper import LegacyTranslatedField

class A16EffectLineSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name', obj_path='item')
    id = serializers.CharField(source='item.slug')
    class Meta:
        model = EffectLines
        fields = ['name', 'id']


class A16EffectSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='eff', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='eff', field_name='desc')
    items = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc', 'items', 'index']

    def get_items(self, obj):
        effectlines = []
        seen_item_ids = set()
        for effect_data in obj.effectdata_set.all():
            for effectline in effect_data.effectlines_set.all():
                if effectline.item_id not in seen_item_ids:
                    seen_item_ids.add(effectline.item_id)
                    effectlines.append(effectline)
        return A16EffectLineSerializer(
            effectlines, many=True, context=self.context
        ).data

class A16EffectSerializerSimple(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='eff', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='eff', field_name='desc')
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc']