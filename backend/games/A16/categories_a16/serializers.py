from rest_framework import serializers
from collections import OrderedDict
from games.A16.categories_a16.models import Category
from games.A16.items_a16.models import Item, Ingredient
from games._helpers.serializer_helper import LegacyTranslatedField

class A16ItemSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    class Meta:
        model = Item
        fields = ['id', 'name', 'level', 'evalue', 'fire', 'water', 'wind', 'earth', 'slots']

class A16IngredientSerializer(serializers.ModelSerializer):
    synthitem = A16ItemSerializer()
    class Meta:
        model = Ingredient
        fields = ['synthitem']

class A16CategorySerializerName(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix='cat', field_name='name')
    icon = serializers.CharField(source='icon_name')
    class Meta:
        model = Category
        fields = ['name', 'icon']

class A16CategorySerializerLink(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='cat', field_name='name')
    class Meta:
        model = Category
        fields = ['id', 'name']

class A16CategorySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='cat', field_name='name')
    icon = serializers.CharField(source='icon_name')

    class Meta:
        model = Category
        fields = ['id', 'name', 'icon']

class A16CategoryDataSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='cat', field_name='name')
    icon = serializers.CharField(source='icon_name')
    in_cat = A16ItemSerializer(many=True, source='item_set')
    used = A16IngredientSerializer(many=True, read_only=True, source='ingredientcat')

    class Meta:
        model = Category
        fields = ['id', 'name', 'icon', 'in_cat', 'used']

    def to_representation(self, instance):
        result = super(A16CategoryDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])