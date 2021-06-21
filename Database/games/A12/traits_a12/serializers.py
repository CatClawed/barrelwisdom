from rest_framework import serializers
from collections import OrderedDict
from games.A12.traits_a12.models import Trait
from games.A12.items_a12.models import Item

class A12ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12TraitNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        if self.context['language'] == 'ja':
            return obj.trait_ja.name
        else:
            return obj.trait_en.name

class A12TraitSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    item_set = A12ItemNameSerializer(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'desc', 'cost', 'synth', 'usable', 'ingot', 'cloth', 'accessory', 'note', 'item_set']

    def to_representation(self, instance):
        result = super(A12TraitSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        if self.context['language'] == 'ja':
            return obj.trait_ja.name
        else:
            return obj.trait_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.desc
        if self.context['language'] == 'ja':
            return obj.trait_ja.desc
        else:
            return obj.trait_en.desc