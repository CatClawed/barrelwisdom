from rest_framework import serializers
from collections import OrderedDict
from games.A16.categories_a16.models import Category
from games.A16.items_a16.models import Item, Ingredient

class A16ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'level', 'evalue', 'fire', 'water', 'wind', 'earth', 'slots']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A16IngredientSerializer(serializers.ModelSerializer):
    synthitem = A16ItemSerializer()
    class Meta:
        model = Ingredient
        fields = ['synthitem']

class A16CategorySerializerName(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['name', 'icon_name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A16CategorySerializerLink(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slugname', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A16CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slugname', 'name', 'icon_name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A16CategoryDataSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    item_set = A16ItemSerializer(many=True)
    ingredientcat = A16IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['slugname', 'name', 'icon_name', 'item_set', 'ingredientcat']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name
    def to_representation(self, instance):
        result = super(A16CategoryDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])