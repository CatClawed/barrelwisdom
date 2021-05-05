from rest_framework import serializers
from games.A22.locations_a22.models import *
from collections import OrderedDict

class A22Location_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location_en
        fields = ['id', 'name']

class A22Location_jaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location_ja
        fields = ['id', 'name']

class A22Location_koSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location_ko
        fields = ['id', 'name']

class A22Location_frSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location_fr
        fields = ['id', 'name']

class A22Location_scSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location_sc
        fields = ['id', 'name']

class A22Location_tcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location_tc
        fields = ['id', 'name']

# Full Data
class A22LocationSerializer(serializers.ModelSerializer):
    loc_en = A22Location_enSerializer()
    loc_ja = A22Location_jaSerializer()
    loc_ko = A22Location_koSerializer()
    loc_fr = A22Location_frSerializer()
    loc_sc = A22Location_scSerializer()
    loc_tc = A22Location_tcSerializer()
    region_slug = serializers.CharField(source="region.slugname")
    class Meta:
        model = Location
        fields = ['id', 'slugname', 'loc_en', 'loc_ja', 'loc_ko', 'loc_fr', 'loc_sc', 'loc_tc', 'region_slug']
    
    def create(self, validated_data):
        validated_data['loc_en'] =    Location_en.objects.create(**validated_data.get('loc_en'))
        validated_data['loc_ja'] =    Location_ja.objects.create(**validated_data.get('loc_ja'))
        validated_data['loc_ko'] =    Location_ko.objects.create(**validated_data.get('loc_ko'))
        validated_data['loc_fr'] =    Location_fr.objects.create(**validated_data.get('loc_fr'))
        validated_data['loc_sc'] = Location_sc.objects.create(**validated_data.get('loc_sc'))
        validated_data['loc_tc'] = Location_tc.objects.create(**validated_data.get('loc_tc'))
        loc = Location.objects.create(**validated_data)
        return loc

# Complete Data for single languages
class A22LocationSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_en.name')
    reg = serializers.CharField(source='region.slugname', allow_blank=True, allow_null=True)
    class Meta:
        model = Location
        fields = ['slugname', 'name', 'reg']
    def to_representation(self, instance):
        result = super(A22LocationSerializerEN, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])
    
class A22LocationSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_ja.name')
    reg = serializers.CharField(source='region.slugname', allow_blank=True, allow_null=True)
    class Meta:
        model = Location
        fields = ['slugname', 'name', 'reg']
    def to_representation(self, instance):
        result = super(A22LocationSerializerJA, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22LocationSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_ko.name')
    reg = serializers.CharField(source='region.slugname', allow_blank=True, allow_null=True)
    class Meta:
        model = Location
        fields = ['slugname', 'name', 'reg']
    def to_representation(self, instance):
        result = super(A22LocationSerializerKO, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22LocationSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_fr.name')
    reg = serializers.CharField(source='region.slugname', allow_blank=True, allow_null=True)
    class Meta:
        model = Location
        fields = ['slugname', 'name', 'reg']
    def to_representation(self, instance):
        result = super(A22LocationSerializerFR, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22LocationSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_sc.name')
    reg = serializers.CharField(source='region.slugname', allow_blank=True, allow_null=True)
    class Meta:
        model = Location
        fields = ['slugname', 'name', 'reg']
    def to_representation(self, instance):
        result = super(A22LocationSerializerSC, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22LocationSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_tc.name')
    reg = serializers.CharField(source='region.slugname', allow_blank=True, allow_null=True)
    class Meta:
        model = Location
        fields = ['slugname', 'name', 'reg']
    def to_representation(self, instance):
        result = super(A22LocationSerializerTC, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])