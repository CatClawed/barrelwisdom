from rest_framework import serializers
from collections import OrderedDict
from games.A15.categories_a15.models import Category
from games.A15.items_a15.models import Item, Ingredient
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField, LegacyTranslatedField

class A15ItemSerializer(DefaultSerializer):
    id = serializers.CharField(source='slug')
    name =  LegacyTranslatedField(obj_prefix="item", field_name="name")
    class Meta:
        model = Item
        fields = ['id', 'name', 'level', 'evalue', 'fire', 'water', 'wind', 'earth']


class A15IngredientSerializer(DefaultSerializer):
    synthitem = A15ItemSerializer()
    class Meta:
        model = Ingredient
        fields = ['synthitem']
    def to_representation(self, instance):
        return A15ItemSerializer(instance.synthitem, context=self.context).data


class A15CategorySerializerName(DefaultSerializer):
    name =  LegacyTranslatedField(obj_prefix="cat", field_name="name")
    icon = serializers.CharField(source="icon_name")
    class Meta:
        model = Category
        fields = ['name', 'icon']

class A15CategorySerializerLink(DefaultSerializer):
    name =  LegacyTranslatedField(obj_prefix="cat", field_name="name")
    id = serializers.CharField(source='slug')
    class Meta:
        model = Category
        fields = ['id', 'name']

class A15CategorySerializer(DefaultSerializer):
    name =  LegacyTranslatedField(obj_prefix="cat", field_name="name")
    id = serializers.CharField(source='slug')
    icon = serializers.CharField(source="icon_name")
    class Meta:
        model = Category
        fields = ['id', 'name', 'icon']


class A15CategoryDataSerializer(DefaultSerializer):
    name =  LegacyTranslatedField(obj_prefix="cat", field_name="name")
    id = serializers.CharField(source='slug')
    in_cat = A15ItemSerializer(many=True, source="item_set")
    used = A15IngredientSerializer(many=True, read_only=True, source="ingredientcat")
    icon = serializers.CharField(source="icon_name")
    class Meta:
        model = Category
        fields = ['id', 'name', 'icon', 'in_cat', 'used']
