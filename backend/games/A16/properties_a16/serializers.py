from rest_framework import serializers
from collections import OrderedDict
from games.A16.properties_a16.models import Property
from games.A16.items_a16.models import Item

class A16ItemNameSerializer(serializers.ModelSerializer):
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

class A16PropertyNameSerializer(serializers.ModelSerializer):
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

class A16PropertySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    combo1 = A16PropertyNameSerializer()
    combo2 = A16PropertyNameSerializer()
    combo3 = A16PropertyNameSerializer()
    item_set = A16ItemNameSerializer(many=True)
    class Meta:
        model = Property
        fields = ['slugname', 'name', 'desc', 'grade', 'points', 'bomb', 'heal', 'weapon', 'armor', 'accessory', 'combo1', 'combo2', 'combo3', 'item_set']

    def to_representation(self, instance):
        result = super(A16PropertySerializer, self).to_representation(instance)
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