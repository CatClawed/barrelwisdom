from rest_framework import serializers
from collections import OrderedDict
from games.A12.categories_a12.models import Category
from games.A12.items_a12.models import Item, Ingredient
from games._helpers.serializer_helper import LegacyTranslatedField

class A12ItemSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name', 'level', 'isDX', 'isDLC']

class A12IngredientSerializer(serializers.ModelSerializer):
    synthitem = A12ItemSerializer()
    class Meta:
        model = Ingredient
        fields = ['synthitem']

class A12CategorySerializerName(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="cat", field_name="name")
    icon = serializers.CharField(source="icon_name")
    class Meta:
        model = Category
        fields = ['name', 'icon']

class A12CategorySerializerLink(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="cat", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Category
        fields = ['id', 'name']

class A12CategorySerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="cat", field_name="name")
    id = serializers.CharField(source="slug")
    icon = serializers.CharField(source="icon_name")
    class Meta:
        model = Category
        fields = ['id', 'name', 'icon']

class A12CategoryDataSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="cat", field_name="name")
    in_cat = A12ItemSerializer(many=True, source="item_set")
    used = serializers.SerializerMethodField()
    
    id = serializers.CharField(source="slug")
    icon = serializers.CharField(source="icon_name")

    class Meta:
        model = Category
        fields = ['id', 'name', 'icon', 'in_cat', 'used']

    def get_used(self, obj):
        items = [ing.synthitem for ing in obj.ingredientcat.all() if ing.synthitem]
        return A12ItemSerializer(items, many=True, context=self.context).data

    def to_representation(self, instance):
        result = super(A12CategoryDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])