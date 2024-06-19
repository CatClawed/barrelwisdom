from rest_framework import serializers
from collections import OrderedDict
from games.A22.categories_a22.models import Category
from games.A22.items_a22.models import Item, Ingredient, CategoryItems

class A22ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'fr':
            return obj.item_fr.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def to_representation(self, instance):
        result = super(A22ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A22IngredientSerializer(serializers.ModelSerializer):
    synthitem = A22ItemSerializer()
    class Meta:
        model = Ingredient
        fields = ['synthitem']

# Full Data
class A22CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slug', 'name']
    
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        elif self.context['language'] == 'ko':
            return obj.cat_ko.name
        elif self.context['language'] == 'fr':
            return obj.cat_fr.name
        elif self.context['language'] == 'sc':
            return obj.cat_sc.name
        elif self.context['language'] == 'tc':
            return obj.cat_tc.name
        else:
            return obj.cat_en.name
        
# Full Data
class A22CategorySerializerName(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['name']
    
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        elif self.context['language'] == 'ko':
            return obj.cat_ko.name
        elif self.context['language'] == 'fr':
            return obj.cat_fr.name
        elif self.context['language'] == 'sc':
            return obj.cat_sc.name
        elif self.context['language'] == 'tc':
            return obj.cat_tc.name
        else:
            return obj.cat_en.name
        
class A22CategoryDataSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    item_set = A22ItemSerializer(many=True)
    ing = A22IngredientSerializer(source='item_set__ingredientcat', many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['slug', 'name', 'item_set', 'ing']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.cat_ja.name
        elif self.context['language'] == 'ko':
            return obj.cat_ko.name
        elif self.context['language'] == 'fr':
            return obj.cat_fr.name
        elif self.context['language'] == 'sc':
            return obj.cat_sc.name
        elif self.context['language'] == 'tc':
            return obj.cat_tc.name
        else:
            return obj.cat_en.name
    def to_representation(self, instance):
        result = super(A22CategoryDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
        
class A22CTSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.CharField(source='category.slug')
    items = A22ItemSerializer(many=True, read_only=True)
    ingredients = A22ItemSerializer(many=True, read_only=True)
    class Meta:
        model = CategoryItems
        fields = ['slug', 'name', 'items', 'ingredients']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.category.cat_en.name
        elif self.context['language'] == 'ja':
            return obj.category.cat_ja.name
        elif self.context['language'] == 'ko':
            return obj.category.cat_ko.name
        elif self.context['language'] == 'fr':
            return obj.category.cat_fr.name
        elif self.context['language'] == 'sc':
            return obj.category.cat_sc.name
        elif self.context['language'] == 'tc':
            return obj.category.cat_tc.name
        else:
            return obj.category.cat_en.name