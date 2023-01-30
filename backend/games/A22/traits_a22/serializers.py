from rest_framework import serializers
from games.A22.traits_a22.models import Trait
from games.A22.items_a22.models import Item
from collections import OrderedDict

# to prevent circular dependencies I guess
class A22ItemSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
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
        elif self.context['language'] == 'fr':
            return obj.item_fr.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name

# Simple for item view
class A22TraitSerializerSimple(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    slug = serializers.CharField(source='slugname')
    class Meta:
        model = Trait
        fields = ['slug', 'name', 'desc']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        elif self.context['language'] == 'ko':
            return obj.trait_ko.name
        elif self.context['language'] == 'fr':
            return obj.trait_fr.name
        elif self.context['language'] == 'sc':
            return obj.trait_sc.name
        elif self.context['language'] == 'tc':
            return obj.trait_tc.name
        else:
            return obj.trait_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.description
        elif self.context['language'] == 'ja':
            return obj.trait_ja.description
        elif self.context['language'] == 'ko':
            return obj.trait_ko.description
        elif self.context['language'] == 'fr':
            return obj.trait_fr.description
        elif self.context['language'] == 'sc':
            return obj.trait_sc.description
        elif self.context['language'] == 'tc':
            return obj.trait_tc.description
        else:
            return obj.trait_en.description

# Complete Data for single languages
class A22TraitSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    slug = serializers.CharField(source='slugname')
    item_set = A22ItemSerializer(many=True)
    class Meta:
        model = Trait
        fields = ['slug','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'desc', 'item_set']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        elif self.context['language'] == 'ko':
            return obj.trait_ko.name
        elif self.context['language'] == 'fr':
            return obj.trait_fr.name
        elif self.context['language'] == 'sc':
            return obj.trait_sc.name
        elif self.context['language'] == 'tc':
            return obj.trait_tc.name
        else:
            return obj.trait_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.description
        elif self.context['language'] == 'ja':
            return obj.trait_ja.description
        elif self.context['language'] == 'ko':
            return obj.trait_ko.description
        elif self.context['language'] == 'fr':
            return obj.trait_fr.description
        elif self.context['language'] == 'sc':
            return obj.trait_sc.description
        elif self.context['language'] == 'tc':
            return obj.trait_tc.description
        else:
            return obj.trait_en.description
    def to_representation(self, instance):
        result = super(A22TraitSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])