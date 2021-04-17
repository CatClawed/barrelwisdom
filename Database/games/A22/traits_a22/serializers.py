from rest_framework import serializers
from games.A22.traits_a22.models import *
from games.A22.items_a22.models import Item


# to prevent circular dependencies I guess
class A22ItemSerializerSimpleEN(serializers.ModelSerializer):
    name = serializers.CharField(source='item_en.name')
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class A22ItemSerializerSimpleJA(serializers.ModelSerializer):
    name = serializers.CharField(source='item_ja.name')
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class A22ItemSerializerSimpleKO(serializers.ModelSerializer):
    name = serializers.CharField(source='item_ko.name')
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class A22ItemSerializerSimpleFR(serializers.ModelSerializer):
    name = serializers.CharField(source='item_fr.name')
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class A22ItemSerializerSimpleSC(serializers.ModelSerializer):
    name = serializers.CharField(source='item_sc.name')
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class A22ItemSerializerSimpleTC(serializers.ModelSerializer):
    name = serializers.CharField(source='item_tc.name')
    class Meta:
        model = Item
        fields = ['slugname', 'name']

# Just effects + descriptions with no extra data
class A22Trait_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait_en
        fields = ['name', 'description']

class A22Trait_jaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait_ja
        fields = ['name', 'description']

class A22Trait_koSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait_ko
        fields = ['name', 'description']

class A22Trait_frSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait_fr
        fields = ['name', 'description']

class A22Trait_scSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait_sc
        fields = ['name', 'description']

class A22Trait_tcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait_tc
        fields = ['name', 'description']

# Full Data
class A22TraitSerializer(serializers.ModelSerializer):
    trait_en = A22Trait_enSerializer()
    trait_ja = A22Trait_jaSerializer()
    trait_ko = A22Trait_koSerializer()
    trait_fr = A22Trait_frSerializer()
    trait_sc = A22Trait_scSerializer()
    trait_tc = A22Trait_tcSerializer()
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'trait_en', 'trait_ja', 'trait_ko', 'trait_fr', 'trait_sc', 'trait_tc']
    
    def create(self, validated_data):
        validated_data['trait_en'] = Trait_en.objects.create(**validated_data.get('trait_en'))
        validated_data['trait_ja'] = Trait_ja.objects.create(**validated_data.get('trait_ja'))
        validated_data['trait_ko'] = Trait_ko.objects.create(**validated_data.get('trait_ko'))
        validated_data['trait_fr'] = Trait_fr.objects.create(**validated_data.get('trait_fr'))
        validated_data['trait_sc'] = Trait_sc.objects.create(**validated_data.get('trait_sc'))
        validated_data['trait_tc'] = Trait_tc.objects.create(**validated_data.get('trait_tc'))
        trt = Traits.objects.create(**validated_data)
        return trt

# Simple for item view
class A22TraitSerializerSimpleEN(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_en.name')
    description = serializers.CharField(source='trait_en.description')
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'description']

class A22TraitSerializerSimpleJA(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_ja.name')
    description = serializers.CharField(source='trait_ja.description')
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'description']

class A22TraitSerializerSimpleKO(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_ko.name')
    description = serializers.CharField(source='trait_ko.description')
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'description']

class A22TraitSerializerSimpleFR(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_fr.name')
    description = serializers.CharField(source='trait_fr.description')
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'description']

class A22TraitSerializerSimpleSC(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_sc.name')
    description = serializers.CharField(source='trait_sc.description')
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'description']

class A22TraitSerializerSimpleTC(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_tc.name')
    description = serializers.CharField(source='trait_tc.description')
    class Meta:
        model = Trait
        fields = ['slugname', 'name', 'description']

# Complete Data for single languages
class A22TraitSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_en.name')
    description = serializers.CharField(source='trait_en.description')
    item_set = A22ItemSerializerSimpleEN(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'description', 'item_set']

class A22TraitSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_ja.name')
    description = serializers.CharField(source='trait_ja.description')
    item_set = A22ItemSerializerSimpleJA(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'description', 'item_set']

class A22TraitSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_ko.name')
    description = serializers.CharField(source='trait_ko.description')
    item_set = A22ItemSerializerSimpleKO(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'description', 'item_set']

class A22TraitSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_fr.name')
    description = serializers.CharField(source='trait_fr.description')
    item_set = A22ItemSerializerSimpleFR(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'description', 'item_set']

class A22TraitSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_sc.name')
    description = serializers.CharField(source='trait_sc.description')
    item_set = A22ItemSerializerSimpleSC(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'description', 'item_set']

class A22TraitSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='trait_tc.name')
    description = serializers.CharField(source='trait_tc.description')
    item_set = A22ItemSerializerSimpleTC(many=True)
    class Meta:
        model = Trait
        fields = ['slugname', 'index','note', 'grade', 'trans_atk', 'trans_heal', 'trans_dbf', 'trans_buff', 'trans_wpn', 'trans_arm', 'trans_acc', 'name', 'description', 'item_set']