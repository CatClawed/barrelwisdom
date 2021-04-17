from rest_framework import serializers
from games.A22.categories_a22.models import *

class A22Category_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_en
        fields = ['name']

class A22Category_jaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_ja
        fields = ['name']

class A22Category_koSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_ko
        fields = ['name']

class A22Category_frSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_fr
        fields = ['name']

class A22Category_scSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_sc
        fields = ['name']

class A22Category_tcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category_tc
        fields = ['name']

# Full Data
class A22CategorySerializer(serializers.ModelSerializer):
    cat_en = A22Category_enSerializer()
    cat_ja = A22Category_jaSerializer()
    cat_ko = A22Category_koSerializer()
    cat_fr = A22Category_frSerializer()
    cat_sc = A22Category_scSerializer()
    cat_tc = A22Category_tcSerializer()
    class Meta:
        model = Category
        fields = ['slugname', 'cat_en', 'cat_ja', 'cat_ko', 'cat_fr', 'cat_sc', 'cat_tc']
    
    def create(self, validated_data):
        validated_data['cat_en'] = Category_en.objects.create(**validated_data.get('cat_en'))
        validated_data['cat_ja'] = Category_ja.objects.create(**validated_data.get('cat_ja'))
        validated_data['cat_ko'] = Category_ko.objects.create(**validated_data.get('cat_ko'))
        validated_data['cat_fr'] = Category_fr.objects.create(**validated_data.get('cat_fr'))
        validated_data['cat_sc'] = Category_sc.objects.create(**validated_data.get('cat_sc'))
        validated_data['cat_tc'] = Category_tc.objects.create(**validated_data.get('cat_tc'))
        cat = Category.objects.create(**validated_data)
        return cat

# Name Data for single languages
class A22CategorySerializerENName(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_en.name')
    class Meta:
        model = Category
        fields = ['name']
    
class A22CategorySerializerJAName(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_ja.name')
    class Meta:
        model = Category
        fields = ['name']

class A22CategorySerializerKOName(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_ko.name')
    class Meta:
        model = Category
        fields = ['name']

class A22CategorySerializerFRName(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_fr.name')
    class Meta:
        model = Category
        fields = ['name']

class A22CategorySerializerSCName(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_sc.name')
    class Meta:
        model = Category
        fields = ['name']

class A22CategorySerializerTCName(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_tc.name')
    class Meta:
        model = Category
        fields = ['name']

# 'Complete' Data for single languages
class A22CategorySerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_en.name')
    class Meta:
        model = Category
        fields = ['slugname', 'name']
    
class A22CategorySerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_ja.name')
    class Meta:
        model = Category
        fields = ['slugname', 'name']

class A22CategorySerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_ko.name')
    class Meta:
        model = Category
        fields = ['slugname', 'name']

class A22CategorySerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_fr.name')
    class Meta:
        model = Category
        fields = ['slugname', 'name']

class A22CategorySerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_sc.name')
    class Meta:
        model = Category
        fields = ['slugname', 'name']

class A22CategorySerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='cat_tc.name')
    class Meta:
        model = Category
        fields = ['slugname', 'name']