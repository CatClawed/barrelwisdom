from games.BRSL.facilities_brsl.models import Facility, FacilityEffect, FacilitySet, FacilityEffData, FacilityEffLine, FacilityIng, IngData
from games.BRSL.items_brsl.serializers import BRSLEffectSerializer, BRSLCategorySerializer, BRSLItemNameSerializer
from rest_framework import serializers
from collections import OrderedDict

class BRSLFacilityEffectSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = FacilityEffect
        fields = ['name', 'desc']#, 'act0', 'val0','act1', 'val1','act2', 'val2']
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
        result = super(BRSLFacilityEffectSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class BRSLFacilityEffDataSerializer(serializers.ModelSerializer):
    effect = BRSLFacilityEffectSerializer()
    class Meta:
        model = FacilityEffData
        fields = ['effect']

class BRSLFacilityEffLineSerializer(serializers.ModelSerializer):
    effectdata = BRSLFacilityEffDataSerializer(many=True)
    class Meta:
        model = FacilityEffLine
        fields = ['effectdata', 'line']
        
class BRSLIngDatSerializer(serializers.ModelSerializer):
    effect = BRSLEffectSerializer()
    item = BRSLItemNameSerializer()
    category = BRSLCategorySerializer()
    class Meta:
        model = IngData
        fields = ['num', 'item', 'category', 'effect']
    def to_representation(self, instance):
        result = super(BRSLIngDatSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class BRSLFacilityIngSerializer(serializers.ModelSerializer):
    data = BRSLIngDatSerializer(many=True)
    class Meta:
        model = FacilityIng
        fields = ['level', 'data']
    def to_representation(self, instance):
        result = super(BRSLFacilityIngSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        

class BRSLFacilityNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Facility
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.facility_en.name
        elif self.context['language'] == 'ja':
            return obj.facility_ja.name
        elif self.context['language'] == 'sc':
            return obj.facility_sc.name
        elif self.context['language'] == 'tc':
            return obj.facility_tc.name
        else:
            return obj.facility_en.name
        
class BRSLFacilitySimpleSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Facility
        fields = ['slug', 'name', 'size', 'isDLC']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.facility_en.name
        elif self.context['language'] == 'ja':
            return obj.facility_ja.name
        elif self.context['language'] == 'sc':
            return obj.facility_sc.name
        elif self.context['language'] == 'tc':
            return obj.facility_tc.name
        else:
            return obj.facility_en.name
    def to_representation(self, instance):
        result = super(BRSLFacilitySimpleSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class BRSLFacilitySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    facilityeffline_set = BRSLFacilityEffLineSerializer(many=True)
    facilitying_set = BRSLFacilityIngSerializer(many=True)
    class Meta:
        model = Facility
        fields = ['slug', 'name', 'desc', 'char', 'size', 'isDLC', 'facilityeffline_set', 'facilitying_set']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.facility_en.name
        elif self.context['language'] == 'ja':
            return obj.facility_ja.name
        elif self.context['language'] == 'sc':
            return obj.facility_sc.name
        elif self.context['language'] == 'tc':
            return obj.facility_tc.name
        else:
            return obj.facility_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.facility_en.desc
        elif self.context['language'] == 'ja':
            return obj.facility_ja.desc
        elif self.context['language'] == 'sc':
            return obj.facility_sc.desc
        elif self.context['language'] == 'tc':
            return obj.facility_tc.desc
        else:
            return obj.facility_en.desc
    def to_representation(self, instance):
        result = super(BRSLFacilitySerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class BRSLFacilitySetSerializer(serializers.ModelSerializer):
    effect = BRSLFacilityEffectSerializer()
    facilities = BRSLFacilityNameSerializer(many=True)
    class Meta:
        model = FacilitySet
        fields = ['effect', 'facilities']