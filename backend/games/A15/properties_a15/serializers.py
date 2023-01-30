from rest_framework import serializers
from collections import OrderedDict
from games.A15.properties_a15.models import *
from games.A15.items_a15.models import Item

class A15ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A15PropertyNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Property
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.prop_en.name
        elif self.context['language'] == 'ja':
            return obj.prop_ja.name
        else:
            return obj.prop_en.name

class A15PropertySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    combo1 = A15PropertyNameSerializer()
    combo2 = A15PropertyNameSerializer()
    combo3 = A15PropertyNameSerializer()
    item_set = A15ItemNameSerializer(many=True)
    class Meta:
        model = Property
        fields = ['slugname', 'name', 'desc', 'grade', 'points', 'bomb', 'heal', 'buff', 'weapon', 'armor', 'accessory', 'combo1', 'combo2', 'combo3', 'item_set']

    def to_representation(self, instance):
        result = super(A15PropertySerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.prop_en.name
        elif self.context['language'] == 'ja':
            return obj.prop_ja.name
        else:
            return obj.prop_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.prop_en.desc
        elif self.context['language'] == 'ja':
            return obj.prop_ja.desc
        else:
            return obj.prop_en.desc