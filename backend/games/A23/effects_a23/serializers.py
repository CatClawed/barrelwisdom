from collections import OrderedDict
from rest_framework import serializers
from games.A23.effects_a23.models import Effect, AdvData
from games.A23.items_a23.models import EffectLines, EffectData

class A23EffectSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        if self.context['language'] == 'ja':
            return obj.eff_ja.name
        if self.context['language'] == 'ko':
            return obj.eff_ko.name
        if self.context['language'] == 'sc':
            return obj.eff_sc.name
        if self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.desc
        if self.context['language'] == 'ja':
            return obj.eff_ja.desc
        if self.context['language'] == 'ko':
            return obj.eff_ko.desc
        if self.context['language'] == 'sc':
            return obj.eff_sc.desc
        if self.context['language'] == 'tc':
            return obj.eff_tc.desc
        else:
            return obj.eff_en.desc
    def to_representation(self, instance):
        result = super(A23EffectSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A23EffectLineSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='item.slug')
    name = serializers.SerializerMethodField()
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item.item_en.name
        if self.context['language'] == 'ja':
            return obj.item.item_en.name
        if self.context['language'] == 'ko':
            return obj.item.item_en.name
        if self.context['language'] == 'sc':
            return obj.item.item_en.name
        if self.context['language'] == 'tc':
            return obj.item.item_en.name
        else:
            return obj.item.item_en.name
    class Meta:
        model = EffectLines
        fields = ['slug', 'name']

class A23EffectDataSerializer(serializers.ModelSerializer):
    effectlines_set = A23EffectLineSerializer(many=True)
    class Meta:
        model = EffectData
        fields = ['effectlines_set']

class A23AdvDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvData
        fields = ['baseAtt','attTag0', 'actTag0', 'min_1_0', 'max_1_0', 'min_2_0', 'max_2_0']
    def to_representation(self, instance):
        result = super(A23AdvDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A23EffectSerializerFull(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    effectdata_set = A23EffectDataSerializer(many=True)
    advanced = A23AdvDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc', 'effectdata_set', 'advanced']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        if self.context['language'] == 'ja':
            return obj.eff_ja.name
        if self.context['language'] == 'ko':
            return obj.eff_ko.name
        if self.context['language'] == 'sc':
            return obj.eff_sc.name
        if self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.desc
        if self.context['language'] == 'ja':
            return obj.eff_ja.desc
        if self.context['language'] == 'ko':
            return obj.eff_ko.desc
        if self.context['language'] == 'sc':
            return obj.eff_sc.desc
        if self.context['language'] == 'tc':
            return obj.eff_tc.desc
        else:
            return obj.eff_en.desc
    def to_representation(self, instance):
        result = super(A23EffectSerializerFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])