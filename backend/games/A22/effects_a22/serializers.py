from collections import OrderedDict
from rest_framework import serializers
from games.A22.effects_a22.models import Effect
from games.A22.items_a22.models import EffectLine

# parents and effects
class A22ExtraSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'efftype', 'effsub', 'desc']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.description
        elif self.context['language'] == 'ja':
            return obj.eff_ja.description
        elif self.context['language'] == 'ko':
            return obj.eff_ko.description
        elif self.context['language'] == 'fr':
            return obj.eff_fr.description
        elif self.context['language'] == 'sc':
            return obj.eff_sc.description
        elif self.context['language'] == 'tc':
            return obj.eff_tc.description
        else:
            return obj.eff_en.description
    def to_representation(self, instance):
        result = super(A22ExtraSerializer, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
# parents and effects
class A22SimpleExtraSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name

# Simplified Data for single languages
class A22EffectSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'effsub', 'name', 'desc']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.description
        elif self.context['language'] == 'ja':
            return obj.eff_ja.description
        elif self.context['language'] == 'ko':
            return obj.eff_ko.description
        elif self.context['language'] == 'fr':
            return obj.eff_fr.description
        elif self.context['language'] == 'sc':
            return obj.eff_sc.description
        elif self.context['language'] == 'tc':
            return obj.eff_tc.description
        else:
            return obj.eff_en.description
    def to_representation(self, instance):
        result = super(A22EffectSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
# Simplified Data for single languages
class A22EVEffectSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    effects = A22ExtraSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slug', 'effsub', 'name', 'desc', 'effects']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.description
        elif self.context['language'] == 'ja':
            return obj.eff_ja.description
        elif self.context['language'] == 'ko':
            return obj.eff_ko.description
        elif self.context['language'] == 'fr':
            return obj.eff_fr.description
        elif self.context['language'] == 'sc':
            return obj.eff_sc.description
        elif self.context['language'] == 'tc':
            return obj.eff_tc.description
        else:
            return obj.eff_en.description
    def to_representation(self, instance):
        result = super(A22EVEffectSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
class A22EffectLineSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='item.slugname')
    name = serializers.SerializerMethodField()
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item.item_en.name
        elif self.context['language'] == 'ko':
            return obj.item.item_en.name
        elif self.context['language'] == 'fr':
            return obj.item.item_en.name
        elif self.context['language'] == 'sc':
            return obj.item.item_en.name
        elif self.context['language'] == 'tc':
            return obj.item.item_en.name
        else:
            return obj.item.item_en.name
    class Meta:
        model = EffectLine
        fields = ['slug', 'name']


# Full Data for single languages
class A22EffectSerializerFull(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    effects = A22ExtraSerializer(many=True)
    parent  = A22SimpleExtraSerializer(many=True)
    effectline_set = A22EffectLineSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slug', 'efftype', 'effsub', 'note', 'name', 'desc', 'effects', 'parent', 'effectline_set', 'attTag0', 'actTag0', 'min_1_0', 'max_1_0', 'min_2_0', 'max_2_0','attTag1', 'actTag1', 'min_1_1', 'max_1_1', 'min_2_1', 'max_2_1']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.description
        elif self.context['language'] == 'ja':
            return obj.eff_ja.description
        elif self.context['language'] == 'ko':
            return obj.eff_ko.description
        elif self.context['language'] == 'fr':
            return obj.eff_fr.description
        elif self.context['language'] == 'sc':
            return obj.eff_sc.description
        elif self.context['language'] == 'tc':
            return obj.eff_tc.description
        else:
            return obj.eff_en.description
    def to_representation(self, instance):
        result = super(A22EffectSerializerFull, self).to_representation(instance)
        if result['efftype'] != 'EV':
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])