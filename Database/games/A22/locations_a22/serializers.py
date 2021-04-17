from rest_framework import serializers
from games.A22.locations_a22.models import *

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
    class Meta:
        model = Location
        fields = ['id', 'slugname', 'loc_en', 'loc_ja', 'loc_ko', 'loc_fr', 'loc_sc', 'loc_tc']
    
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
    class Meta:
        model = Location
        fields = ['slugname', 'name']
    
class A22LocationSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_ja.name')
    class Meta:
        model = Location
        fields = ['slugname', 'name']

class A22LocationSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_ko.name')
    class Meta:
        model = Location
        fields = ['slugname', 'name']

class A22LocationSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_fr.name')
    class Meta:
        model = Location
        fields = ['slugname', 'name']

class A22LocationSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_sc.name')
    class Meta:
        model = Location
        fields = ['slugname', 'name']

class A22LocationSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='loc_tc.name')
    class Meta:
        model = Location
        fields = ['slugname', 'name']