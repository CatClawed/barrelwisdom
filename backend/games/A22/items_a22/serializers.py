from rest_framework import serializers
from games.A22.items_a22.models import Item, IngEffects, Ingredient, EffectLine, RecipeMorphs, EVLinkItems, UsableItem, ItemLocations, ShopDevelop, ItemRegions, ItemAreas, CategoryItems
from games.A22.traits_a22.serializers import A22TraitSerializerSimple
from games.A22.locations_a22.serializers import A22LocationSerializer
from games.A22.categories_a22.serializers import A22CategorySerializer
from games.A22.shops_a22.serializers import A22ShopSerializer
from games.A22.monsters_a22.serializers import A22MonsterSerializerName
from collections import OrderedDict

# Effect Lines

class A22EffectLineSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source='effect.slug')
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.effect.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.effect.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.effect.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.effect.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.effect.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.effect.eff_tc.name
        else:
            return obj.effect.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.effect.eff_en.desc
        elif self.context['language'] == 'ja':
            return obj.effect.eff_ja.desc
        elif self.context['language'] == 'ko':
            return obj.effect.eff_ko.desc
        elif self.context['language'] == 'fr':
            return obj.effect.eff_fr.desc
        elif self.context['language'] == 'sc':
            return obj.effect.eff_sc.desc
        elif self.context['language'] == 'tc':
            return obj.effect.eff_tc.desc
        else:
            return obj.effect.eff_en.desc
    class Meta:
        model = EffectLine
        fields = ['slug', 'name', 'desc', 'line', 'number']


# Simple Ingredient View, for filtering...

class A22IngredientSerializerSimple(serializers.ModelSerializer):
    ing = serializers.SerializerMethodField()
    def get_ing(self,obj):
        if not obj.item:
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
        else:
            if 'language' not in self.context:
                return obj.item.item_en.name
            elif self.context['language'] == 'ja':
                return obj.item.item_ja.name
            elif self.context['language'] == 'ko':
                return obj.item.item_ko.name
            elif self.context['language'] == 'fr':
                return obj.item.item_fr.name
            elif self.context['language'] == 'sc':
                return obj.item.item_sc.name
            elif self.context['language'] == 'tc':
                return obj.item.item_tc.name
            else:
                return obj.item.item_en.name
        
    class Meta:
        model = Ingredient
        fields = [ 'ing']


class A22ItemSerializerSimple(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
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
    class Meta:
        model = Item
        fields = ['slug', 'name']

# Ing Effects

class A22IngEffectsSerializer(serializers.ModelSerializer):
    effect = serializers.SerializerMethodField()
    morph = A22ItemSerializerSimple(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def get_effect(self,obj):
        if not obj.effect:
            return None
        if 'language' not in self.context:
            return obj.effect.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.effect.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.effect.eff_ko.name
        elif self.context['language'] == 'fr':
            return obj.effect.eff_fr.name
        elif self.context['language'] == 'sc':
            return obj.effect.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.effect.eff_tc.name
        else:
            return obj.effect.eff_en.name
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

# Full Ingredient View

class A22IngredientSerializer(serializers.ModelSerializer):
    item = A22ItemSerializerSimple()
    category = A22CategorySerializer()
    ingeffects_set = A22IngEffectsSerializer(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
# EV Link

class A22EVLink(serializers.ModelSerializer):
    result = A22ItemSerializerSimple()
    item1 = A22ItemSerializerSimple()
    item2 = A22ItemSerializerSimple()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']

# Recipe Morph

class A22RecipeMorph(serializers.ModelSerializer):
    parent = A22ItemSerializerSimple()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']

# Listing All Data for single languages
class A22ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    category = A22CategorySerializer(many=True)
    ingredient_set = A22IngredientSerializerSimple(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']
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
                           if v not in [None, [], '', {}, False])
    
class A22UsableItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsableItem
        fields = ['wt', 'stun', 'cc', 'cooltime', 'effrange']

# Full data individual view
class A22ItemSerializerFull(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    category = A22CategorySerializer(many=True)
    ingredient_set = A22IngredientSerializer(many=True)
    shop = A22ShopSerializer()
    trait = A22TraitSerializerSimple(many=True)
    location = A22LocationSerializer(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializer(many=True)
    evlinkitems_set = A22EVLink(many=True)
    recipemorphs_set = A22RecipeMorph(many=True)
    monster_set = A22MonsterSerializerName(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'desc', 'level', 'itemtype', 'isDLC',
            'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait',
            'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set',
            'evlinkitems_set', 'recipemorphs_set', 'monster_set', 'note'
        ]
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
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc
        elif self.context['language'] == 'ko':
            return obj.item_ko.desc
        elif self.context['language'] == 'fr':
            return obj.item_fr.desc
        elif self.context['language'] == 'sc':
            return obj.item_sc.desc
        elif self.context['language'] == 'tc':
            return obj.item_tc.desc
        else:
            return obj.item_en.desc
    def to_representation(self, instance):
        result = super(A22ItemSerializerFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}, False])


# Item Locations
class A22ItemLocationSerializer(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimple()
    rank2 = A22ItemSerializerSimple(read_only=True)
    rank3 = A22ItemSerializerSimple(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']
    def to_representation(self, instance):
        result = super(A22ItemLocationSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}, False])

# Areas
class A22ItemAreasSerlaizer(serializers.ModelSerializer):
    slug = serializers.CharField(source="area.slug")
    name = serializers.SerializerMethodField()
    gatherdata = A22ItemLocationSerializer(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slug', 'name', 'gatherdata', 'text']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.area.loc_en.name
        elif self.context['language'] == 'ja':
            return obj.area.loc_ja.name
        elif self.context['language'] == 'ko':
            return obj.area.loc_ko.name
        elif self.context['language'] == 'fr':
            return obj.area.loc_fr.name
        elif self.context['language'] == 'sc':
            return obj.area.loc_sc.name
        elif self.context['language'] == 'tc':
            return obj.area.loc_tc.name
        else:
            return obj.area.loc_en.name
    def to_representation(self, instance):
        result = super(A22ItemAreasSerlaizer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}, False])

# regions 

class A22ItemRegionSerializer(serializers.ModelSerializer):
    slug = serializers.CharField(source="region.slug")
    name = serializers.SerializerMethodField()
    areas = A22ItemAreasSerlaizer(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slug', 'name', 'areas']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.region.loc_en.name
        elif self.context['language'] == 'ja':
            return obj.region.loc_ja.name
        elif self.context['language'] == 'ko':
            return obj.region.loc_ko.name
        elif self.context['language'] == 'fr':
            return obj.region.loc_fr.name
        elif self.context['language'] == 'sc':
            return obj.region.loc_sc.name
        elif self.context['language'] == 'tc':
            return obj.region.loc_tc.name
        else:
            return obj.region.loc_en.name


# Shop Develop 

class A22ShopDevelopSerializer(serializers.ModelSerializer):
    item = A22ItemSerializerSimple()
    cat1 = A22CategorySerializer()
    cat2 = A22CategorySerializer()
    addProd = A22ItemSerializerSimple()
    addCat = A22CategorySerializer()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']
    def to_representation(self, instance):
        result = super(A22ShopDevelopSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}, False])

# Category info
class A22ItemCatSerializer(serializers.ModelSerializer):
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