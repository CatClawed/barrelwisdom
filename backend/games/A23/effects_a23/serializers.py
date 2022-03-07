from collections import OrderedDict
from rest_framework import serializers
from games.A23.effects_a23.models import Effect, AdvData
from games.A23.items_a23.models import EffectData

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

class A23EffectDataSerializer(serializers.ModelSerializer):
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
        if self.context['language'] == 'ja':
            return obj.line.item.item_ja.name
        if self.context['language'] == 'ko':
            return obj.line.item.item_ko.name
        if self.context['language'] == 'sc':
            return obj.line.item.item_sc.name
        if self.context['language'] == 'tc':
            return obj.line.item.item_tc.name
        else:
            return obj.line.item.item_en.name

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
    items = A23EffectDataSerializer(many=True, source='effectdata_set')
    advanced = A23AdvDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc', 'advanced', 'items']
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