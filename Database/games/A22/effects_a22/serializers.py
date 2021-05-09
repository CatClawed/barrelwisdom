from collections import OrderedDict
from rest_framework import serializers
from games.A22.effects_a22.models import Effect, Effect_en, Effect_ja, Effect_fr, Effect_ko, Effect_sc, Effect_tc
from games.A22.items_a22.serializers import A22EffectLineSerializerEN, A22EffectLineSerializerJA, A22EffectLineSerializerKO, A22EffectLineSerializerFR, A22EffectLineSerializerSC, A22EffectLineSerializerTC


# Just effects + descriptions with no extra data
class A22Effect_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect_en
        fields = ['name', 'description']

class A22Effect_jaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect_ja
        fields = ['name', 'description']

class A22Effect_koSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect_ko
        fields = ['name', 'description']

class A22Effect_frSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect_fr
        fields = ['name', 'description']

class A22Effect_scSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect_sc
        fields = ['name', 'description']

class A22Effect_tcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect_tc
        fields = ['name', 'description']

# Full Data
class A22EffectSerializer(serializers.ModelSerializer):
    eff_en = A22Effect_enSerializer()
    eff_ja = A22Effect_jaSerializer()
    eff_ko = A22Effect_koSerializer()
    eff_fr = A22Effect_frSerializer()
    eff_sc = A22Effect_scSerializer()
    eff_tc = A22Effect_tcSerializer()
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'eff_en', 'eff_ja', 'eff_ko', 'eff_fr', 'eff_sc', 'eff_tc']
    
    def create(self, validated_data):
        validated_data['eff_en'] = Effect_en.objects.create(**validated_data.get('eff_en'))
        validated_data['eff_ja'] = Effect_ja.objects.create(**validated_data.get('eff_ja'))
        validated_data['eff_ko'] = Effect_ko.objects.create(**validated_data.get('eff_ko'))
        validated_data['eff_fr'] = Effect_fr.objects.create(**validated_data.get('eff_fr'))
        validated_data['eff_sc'] = Effect_sc.objects.create(**validated_data.get('eff_sc'))
        validated_data['eff_tc'] = Effect_tc.objects.create(**validated_data.get('eff_tc'))
        eff = Effect.objects.create(**validated_data)
        return eff

# Parents and Effects
class A22ExtraSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_en.name')
    desc = serializers.CharField(source='eff_en.description')
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'efftype', 'desc']
    def to_representation(self, instance):
        result = super(A22ExtraSerializerEN, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22ExtraSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_ja.name')
    desc = serializers.CharField(source='eff_ja.description')
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'efftype', 'desc']
    def to_representation(self, instance):
        result = super(A22ExtraSerializerJA, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22ExtraSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_ko.name')
    desc = serializers.CharField(source='eff_ko.description')
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'efftype', 'desc']
    def to_representation(self, instance):
        result = super(A22ExtraSerializerKO, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22ExtraSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_fr.name')
    desc = serializers.CharField(source='eff_fr.description')
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'efftype', 'desc']
    def to_representation(self, instance):
        result = super(A22ExtraSerializerFR, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22ExtraSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_sc.name')
    desc = serializers.CharField(source='eff_sc.description')
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'efftype', 'desc']
    def to_representation(self, instance):
        result = super(A22ExtraSerializerSC, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22ExtraSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_tc.name')
    desc = serializers.CharField(source='eff_tc.description')
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'efftype', 'desc']
    def to_representation(self, instance):
        result = super(A22ExtraSerializerTC, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

# Simplified Data for single languages
class A22EffectSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_en.name')
    description = serializers.CharField(source='eff_en.description')
    effects = A22ExtraSerializerEN(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'efftype', 'note', 'name', 'description', 'effects']

    def to_representation(self, instance):
        result = super(A22EffectSerializerEN, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_ja.name')
    description = serializers.CharField(source='eff_ja.description')
    effects = A22ExtraSerializerJA(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'efftype', 'note', 'name', 'description', 'effects']

    def to_representation(self, instance):
        result = super(A22EffectSerializerJA, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_ko.name')
    description = serializers.CharField(source='eff_ko.description')
    effects = A22ExtraSerializerKO(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'efftype', 'note', 'name', 'description', 'effects']

    def to_representation(self, instance):
        result = super(A22EffectSerializerKO, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_fr.name')
    description = serializers.CharField(source='eff_fr.description')
    effects = A22ExtraSerializerFR(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'efftype', 'note', 'name', 'description', 'effects']

    def to_representation(self, instance):
        result = super(A22EffectSerializerFR, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_sc.name')
    description = serializers.CharField(source='eff_sc.description')
    effects = A22ExtraSerializerSC(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'efftype', 'note', 'name', 'description', 'effects']

    def to_representation(self, instance):
        result = super(A22EffectSerializerSC, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_tc.name')
    description = serializers.CharField(source='eff_tc.description')
    effects = A22ExtraSerializerTC(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'efftype', 'note', 'name', 'description', 'effects']

    def to_representation(self, instance):
        result = super(A22EffectSerializerTC, self).to_representation(instance)
        if(result['efftype'] != 'EV'):
            result['effects'] = []
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])


# Full Data for single languages
class A22EffectSerializerENFull(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_en.name')
    description = serializers.CharField(source='eff_en.description')
    effects = A22ExtraSerializerEN(many=True)
    parent  = A22ExtraSerializerEN(many=True)
    effectline_set = A22EffectLineSerializerEN(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'name', 'description', 'effects', 'parent', 'effectline_set']
    
    def to_representation(self, instance):
        result = super(A22EffectSerializerENFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerJAFull(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_ja.name')
    description = serializers.CharField(source='eff_ja.description')
    effects = A22ExtraSerializerJA(many=True)
    parent  = A22ExtraSerializerJA(many=True)
    effectline_set = A22EffectLineSerializerJA(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'name', 'description', 'effects', 'parent', 'effectline_set']
    
    def to_representation(self, instance):
        result = super(A22EffectSerializerJAFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerKOFull(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_ko.name')
    description = serializers.CharField(source='eff_ko.description')
    effects = A22ExtraSerializerKO(many=True)
    parent  = A22ExtraSerializerKO(many=True)
    effectline_set = A22EffectLineSerializerKO(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'name', 'description', 'effects', 'parent', 'effectline_set']

    def to_representation(self, instance):
        result = super(A22EffectSerializerKOFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerFRFull(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_fr.name')
    description = serializers.CharField(source='eff_fr.description')
    effects = A22ExtraSerializerFR(many=True)
    parent  = A22ExtraSerializerFR(many=True)
    effectline_set = A22EffectLineSerializerFR(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'name', 'description', 'effects', 'parent', 'effectline_set']

    def to_representation(self, instance):
        result = super(A22EffectSerializerFRFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerSCFull(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_sc.name')
    description = serializers.CharField(source='eff_sc.description')
    effects = A22ExtraSerializerSC(many=True)
    parent = A22ExtraSerializerSC(many=True)
    effectline_set = A22EffectLineSerializerSC(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'name', 'description', 'effects', 'parent', 'effectline_set']
  
    def to_representation(self, instance):
        result = super(A22EffectSerializerSCFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A22EffectSerializerTCFull(serializers.ModelSerializer):
    name = serializers.CharField(source='eff_tc.name')
    description = serializers.CharField(source='eff_tc.description')
    effects = A22ExtraSerializerTC(many=True)
    parent  = A22ExtraSerializerTC(many=True)
    effectline_set = A22EffectLineSerializerTC(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'index', 'efftype', 'note', 'name', 'description', 'effects', 'parent', 'effectline_set']

    def to_representation(self, instance):
        result = super(A22EffectSerializerTCFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])