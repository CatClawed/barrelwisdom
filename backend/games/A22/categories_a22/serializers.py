from rest_framework import serializers
from collections import OrderedDict
from games.A22.categories_a22.models import Category
from games.A22.items_a22.models import Item, Ingredient

class A22ItemSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        if self.context['language'] == 'ko':
            return obj.item_ko.name
        if self.context['language'] == 'fr':
            return obj.item_fr.name
        if self.context['language'] == 'sc':
            return obj.item_sc.name
        if self.context['language'] == 'tc':
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
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slug', 'name']
    
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        if self.context['language'] == 'ko':
            return obj.cat_ko.name
        if self.context['language'] == 'fr':
            return obj.cat_fr.name
        if self.context['language'] == 'sc':
            return obj.cat_sc.name
        if self.context['language'] == 'tc':
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
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        if self.context['language'] == 'ko':
            return obj.cat_ko.name
        if self.context['language'] == 'fr':
            return obj.cat_fr.name
        if self.context['language'] == 'sc':
            return obj.cat_sc.name
        if self.context['language'] == 'tc':
            return obj.cat_tc.name
        else:
            return obj.cat_en.name
        
class A22CategoryDataSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='slugname')
    name = serializers.SerializerMethodField()
    item_set = A22ItemSerializer(many=True)
    ingredientcat = A22IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['slug', 'name', 'item_set', 'ingredientcat']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        if self.context['language'] == 'ko':
            return obj.cat_ko.name
        if self.context['language'] == 'fr':
            return obj.cat_fr.name
        if self.context['language'] == 'sc':
            return obj.cat_sc.name
        if self.context['language'] == 'tc':
            return obj.cat_tc.name
        else:
            return obj.cat_en.name
    def to_representation(self, instance):
        result = super(A22CategoryDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])