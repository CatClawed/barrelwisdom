from rest_framework import serializers
from games.A23.traits_a23.models import Trait
from games.A23.items_a23.models import Item
from collections import OrderedDict

class A23ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name

# Simple for item view
class A23TraitSerializerSimple(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        elif self.context['language'] == 'ko':
            return obj.trait_ko.name
        elif self.context['language'] == 'sc':
            return obj.trait_sc.name
        elif self.context['language'] == 'tc':
            return obj.trait_tc.name
        else:
            return obj.trait_en.name

# Complete Data for single languages
class A23TraitSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    item_set = A23ItemSerializer(many=True)
    combo1 = A23TraitSerializerSimple()
    combo2 = A23TraitSerializerSimple()
    class Meta:
        model = Trait
        fields = ['slug', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'trans_tal', 'trans_syn', 'trans_exp', 'name', 'desc', 'item_set',"combo1", "combo2"]
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        elif self.context['language'] == 'ko':
            return obj.trait_ko.name
        elif self.context['language'] == 'sc':
            return obj.trait_sc.name
        elif self.context['language'] == 'tc':
            return obj.trait_tc.name
        else:
            return obj.trait_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.desc
        elif self.context['language'] == 'ja':
            return obj.trait_ja.desc
        elif self.context['language'] == 'ko':
            return obj.trait_ko.desc
        elif self.context['language'] == 'sc':
            return obj.trait_sc.desc
        elif self.context['language'] == 'tc':
            return obj.trait_tc.desc
        else:
            return obj.trait_en.desc
    def to_representation(self, instance):
        result = super(A23TraitSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])