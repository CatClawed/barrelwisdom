from rest_framework import serializers
from collections import OrderedDict
from games.A12.items_a12.models import Item, EffectLine, Ingredient, Book, Equip, Character, CharacterEquip
from games.A12.regions_a12.serializers import A12RegionNameSerializer
from games.A12.monsters_a12.serializers import A12MonsterNameSerializer
from games.A12.traits_a12.serializers import A12TraitNameSerializer
from games.A12.categories_a12.serializers import A12CategorySerializerName, A12CategorySerializer, A12CategorySerializerLink
from games.A12.effects_a12.serializers import A12EffectSerializerSimple

class A12ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

# for easy filtering by ingredient
class A12IngredientSimpleSerializer(serializers.ModelSerializer):
    ing = serializers.SerializerMethodField()
    class Meta:
        model = Ingredient
        fields = ['ing']

    def to_representation(self, instance):
        result = super(A12IngredientSimpleSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_ing(self,obj):
        if obj.category is None:
            if self.context['language'] == 'ja':
                return obj.item.item_ja.name
            else:
              return obj.item.item_en.name
        else:
            if self.context['language'] == 'ja':
                return obj.category.cat_ja.name
            else:
                return obj.category.cat_en.name

class A12IngredientSerializer(serializers.ModelSerializer):
    item = A12ItemNameSerializer()
    category = A12CategorySerializerLink()
    class Meta:
        model = Ingredient
        fields = ['item', 'category', 'num']

    def to_representation(self, instance):
        result = super(A12IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A12CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name']

class A12EquipSerializer(serializers.ModelSerializer):
    chars = A12CharacterSerializer(many=True)
    material = A12ItemNameSerializer(many=True)
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'lp', 'atk', 'defen', 'spd', 'chars', 'material']


class A12EffectLineSerializer(serializers.ModelSerializer):
    effect = A12EffectSerializerSimple()
    class Meta:
        model = EffectLine
        fields = ['effect', 'number', 'itemnum', 'min_elem', 'max_elem']
    def to_representation(self, instance):
        result = super(A12EffectLineSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A12BookNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A12CategorySerializerName(many=True)
    ingredient_set = A12IngredientSimpleSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['slugname', 'name', 'level', 'categories', 'ingredient_set', 'isDX', 'isDLC', 'item_type']

    def to_representation(self, instance):
        result = super(A12ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12ItemFullSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    locations = A12RegionNameSerializer(many=True)
    monsters = A12MonsterNameSerializer(many=True)
    traits = A12TraitNameSerializer()
    categories = A12CategorySerializer(many=True)
    ingredient_set = A12IngredientSerializer(many=True)
    equip_set = A12EquipSerializer(many=True)
    effectline_set = A12EffectLineSerializer(many=True)
    book_set = A12BookNameSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'desc', 'note', 'level', 'locations', 'monsters', 'traits', 'categories', 'ingredient_set', 'equip_set', 'effectline_set', 'book_set', 'isDX', 'isDLC', 'time', 'mp', 'price', 'uses', 'item_type', 'item_subtype']

    def to_representation(self, instance):
        result = super(A12ItemFullSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc
        if self.context['language'] == 'ja':
            return obj.item_ja.desc
        else:
            return obj.item_en.desc

class A12BookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    items = A12ItemNameSerializer(many=True)
    class Meta:
        model = Book
        fields = ['slugname', 'name', 'desc', 'items', 'note', 'isDLC', 'isDX']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc
        if self.context['language'] == 'ja':
            return obj.item_ja.desc
        else:
            return obj.item_en.desc
