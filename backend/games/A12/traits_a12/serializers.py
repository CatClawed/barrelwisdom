from rest_framework import serializers
from collections import OrderedDict
from games.A12.traits_a12.models import Trait
from games.A12.items_a12.models import Item
from games._helpers.serializer_helper import LegacyTranslatedField

class A12ItemNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12TraitNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="trait", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Trait
        fields = ['id', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        else:
            return obj.trait_en.name

class A12TraitSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="trait", field_name="name")
    desc = LegacyTranslatedField(obj_prefix="trait", field_name="desc")
    item_set = A12ItemNameSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Trait
        fields = ['id', 'name', 'desc', 'cost', 'synth', 'usable', 'ingot',
            'cloth', 'accessory', 'note', 'item_set', 'index']

    def to_representation(self, instance):
        result = super(A12TraitSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])