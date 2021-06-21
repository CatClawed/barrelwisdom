from rest_framework import serializers
from collections import OrderedDict
from games.A12.categories_a12.models import Category
from games.A12.items_a12.models import Item, Ingredient

class A12ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'level']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12IngredientSerializer(serializers.ModelSerializer):
    synthitem = A12ItemSerializer()
    class Meta:
        model = Ingredient
        fields = ['synthitem']

class A12CategorySerializerName(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['name', 'icon_name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A12CategorySerializerLink(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slugname', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A12CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slugname', 'name', 'icon_name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A12CategoryDataSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    item_set = A12ItemSerializer(many=True)
    ingredientcat = A12IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['slugname', 'name', 'icon_name', 'item_set', 'ingredientcat']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name
    def to_representation(self, instance):
        result = super(A12CategoryDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])