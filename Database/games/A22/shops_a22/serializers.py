from rest_framework import serializers
from games.A22.shops_a22.models import *

class A22Shop_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop_en
        fields = ['id', 'name']

class A22Shop_jaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop_ja
        fields = ['id', 'name']

class A22Shop_koSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop_ko
        fields = ['id', 'name']

class A22Shop_frSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop_fr
        fields = ['id', 'name']

class A22Shop_scSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop_sc
        fields = ['id', 'name']

class A22Shop_tcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop_tc
        fields = ['id', 'name']

# Full Data
class A22ShopSerializer(serializers.ModelSerializer):
    shop_en = A22Shop_enSerializer()
    shop_ja = A22Shop_jaSerializer()
    shop_ko = A22Shop_koSerializer()
    shop_fr = A22Shop_frSerializer()
    shop_sc = A22Shop_scSerializer()
    shop_tc = A22Shop_tcSerializer()
    class Meta:
        model = Shop
        fields = ['id', 'slugname', 'shop_en', 'shop_ja', 'shop_ko', 'shop_fr', 'shop_sc', 'shop_tc']
    
    def create(self, validated_data):
        validated_data['shop_en'] =    Shop_en.objects.create(**validated_data.get('shop_en'))
        validated_data['shop_ja'] =    Shop_ja.objects.create(**validated_data.get('shop_ja'))
        validated_data['shop_ko'] =    Shop_ko.objects.create(**validated_data.get('shop_ko'))
        validated_data['shop_fr'] =    Shop_fr.objects.create(**validated_data.get('shop_fr'))
        validated_data['shop_sc'] = Shop_sc.objects.create(**validated_data.get('shop_sc'))
        validated_data['shop_tc'] = Shop_tc.objects.create(**validated_data.get('shop_tc'))
        loc = Shop.objects.create(**validated_data)
        return loc

# Complete Data for single languages
class A22ShopSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='shop_en.name')
    class Meta:
        model = Shop
        fields = ['slugname', 'name']
    
class A22ShopSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='shop_ja.name')
    class Meta:
        model = Shop
        fields = ['slugname', 'name']

class A22ShopSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='shop_ko.name')
    class Meta:
        model = Shop
        fields = ['slugname', 'name']

class A22ShopSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='shop_fr.name')
    class Meta:
        model = Shop
        fields = ['slugname', 'name']

class A22ShopSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='shop_sc.name')
    class Meta:
        model = Shop
        fields = ['slugname', 'name']

class A22ShopSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='shop_tc.name')
    class Meta:
        model = Shop
        fields = ['slugname', 'name']