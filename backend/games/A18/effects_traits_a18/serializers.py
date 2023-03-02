from rest_framework import serializers
from games.A18.effects_traits_a18.models import Trait, Effect, AdvData
#from games.A18.items_a18.models import Item, EffectData
from collections import OrderedDict

"""
class A18ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
"""

class A18AdvDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvData
        fields = ['baseAtt','attTag0', 'actTag0', 'min_1_0', 'max_1_0', 'min_2_0', 'max_2_0']
    def to_representation(self, instance):
        result = super(A18AdvDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A18TraitSerializerSimple(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        elif self.context['language'] == 'sc':
            return obj.trait_sc.name
        elif self.context['language'] == 'tc':
            return obj.trait_tc.name
        else:
            return obj.trait_en.name

class A18TraitListSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    #item_set = A18ItemSerializer(many=True)
    class Meta:
        model = Trait
        fields = ['slug', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff',
            'trans_wpn', 'trans_arm', 'trans_acc', 'trans_syn', 'text'#, 'item_set'
        ]
    def get_text(self,obj):
        try:
            match self.context['language']:
                case 'ja':
                    return obj.trait_ja.name, obj.trait_ja.desc
                case 'sc':
                    return obj.trait_sc.name, obj.trait_sc.desc
                case 'tc':
                    return obj.trait_tc.name, obj.trait_tc.desc
                case _:
                    return obj.trait_en.name, obj.trait_en.desc
        except KeyError:
            return obj.trait_en.name, obj.trait_en.desc
    def to_representation(self, instance):
        result = super(A18TraitListSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A18TraitSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    advanced = A18AdvDataSerializer(many=True)
    #item_set = A18ItemSerializer(many=True)
    class Meta:
        model = Trait
        fields = ['slug', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff',
            'trans_wpn', 'trans_arm', 'trans_acc', 'trans_syn', 'text',
            'advanced'#, 'item_set'
        ]
    def get_text(self,obj):
        try:
            match self.context['language']:
                case 'ja':
                    return obj.trait_ja.name, obj.trait_ja.desc
                case 'sc':
                    return obj.trait_sc.name, obj.trait_sc.desc
                case 'tc':
                    return obj.trait_tc.name, obj.trait_tc.desc
                case _:
                    return obj.trait_en.name, obj.trait_en.desc
        except KeyError:
            return obj.trait_en.name, obj.trait_en.desc
    def to_representation(self, instance):
        result = super(A18TraitSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])


class A18EffectSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'text']
    def get_name(self,obj):
        try:
            match self.context['language']:
                case 'ja':
                    return obj.eff_ja.name, obj.eff_ja.desc
                case 'sc':
                    return obj.eff_sc.name, obj.eff_sc.desc
                case 'tc':
                    return obj.eff_tc.name, obj.eff_tc.desc
                case _:
                    return obj.eff_en.name, obj.eff_en.desc
        except KeyError:
            return obj.eff_en.name, obj.eff_en.desc
    def to_representation(self, instance):
        result = super(A18EffectSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

"""
class A18EffectDataSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    class Meta:
        model = EffectData
        fields = ['slug', 'name']
    def get_slug(self,obj):
        return obj.line.item.slug
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.line.item.item_en.name
        elif self.context['language'] == 'ja':
            return obj.line.item.item_ja.name
        elif self.context['language'] == 'sc':
            return obj.line.item.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.line.item.item_tc.name
        else:
            return obj.line.item.item_en.name
"""

class A18EffectSerializerFull(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    #items = A18EffectDataSerializer(many=True, source='effectdata_set')
    advanced = A18AdvDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc', 'advanced']#, 'items']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.desc
        elif self.context['language'] == 'ja':
            return obj.eff_ja.desc
        elif self.context['language'] == 'sc':
            return obj.eff_sc.desc
        elif self.context['language'] == 'tc':
            return obj.eff_tc.desc
        else:
            return obj.eff_en.desc
    def to_representation(self, instance):
        result = super(A18EffectSerializerFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])