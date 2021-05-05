from rest_framework import serializers
from games.A22.items_a22.models import Item, IngEffects, Ingredient, EffectLine, RecipeMorphs, EVLinkItems, UsableItem, ItemLocations, ShopDevelop, ItemRegions, ItemAreas
from games.A22.traits_a22.serializers import A22TraitSerializerSimpleEN, A22TraitSerializerSimpleJA, A22TraitSerializerSimpleKO, A22TraitSerializerSimpleFR, A22TraitSerializerSimpleSC, A22TraitSerializerSimpleTC, A22ItemSerializerSimpleEN, A22ItemSerializerSimpleJA, A22ItemSerializerSimpleKO, A22ItemSerializerSimpleFR, A22ItemSerializerSimpleSC, A22ItemSerializerSimpleTC
from games.A22.locations_a22.serializers import A22LocationSerializerEN, A22LocationSerializerJA, A22LocationSerializerKO, A22LocationSerializerFR, A22LocationSerializerSC, A22LocationSerializerTC
from games.A22.categories_a22.serializers import A22CategorySerializerEN, A22CategorySerializerJA, A22CategorySerializerKO, A22CategorySerializerFR, A22CategorySerializerSC, A22CategorySerializerTC
from games.A22.shops_a22.serializers import A22ShopSerializerEN, A22ShopSerializerJA, A22ShopSerializerKO, A22ShopSerializerFR, A22ShopSerializerSC, A22ShopSerializerTC
from games.A22.monsters_a22.serializers import A22MonsterSerializerENName, A22MonsterSerializerJAName, A22MonsterSerializerKOName, A22MonsterSerializerFRName, A22MonsterSerializerSCName, A22MonsterSerializerTCName
from collections import OrderedDict

# Effect Lines

class A22EffectLineSerializerEN(serializers.ModelSerializer):
    itemslug = serializers.CharField(source='item.slugname')
    itemname = serializers.CharField(source='item.item_en.name')
    effslug = serializers.CharField(source='effect.slugname')
    effname = serializers.CharField(source='effect.eff_en.name')
    effdescription = serializers.CharField(source='effect.eff_en.description')
    class Meta:
        model = EffectLine
        fields = ['itemslug', 'itemname', 'effslug', 'effname', 'effdescription', 'line', 'number']

class A22EffectLineSerializerJA(serializers.ModelSerializer):
    itemslug = serializers.CharField(source='item.slugname')
    itemname = serializers.CharField(source='item.item_ja.name')
    effslug = serializers.CharField(source='effect.slugname')
    effname = serializers.CharField(source='effect.eff_ja.name')
    effdescription = serializers.CharField(source='effect.eff_ja.description')
    class Meta:
        model = EffectLine
        fields = ['itemslug', 'itemname', 'effslug', 'effname', 'effdescription', 'line', 'number']

class A22EffectLineSerializerFR(serializers.ModelSerializer):
    itemslug = serializers.CharField(source='item.slugname')
    itemname = serializers.CharField(source='item.item_fr.name')
    effslug = serializers.CharField(source='effect.slugname')
    effname = serializers.CharField(source='effect.eff_fr.name')
    effdescription = serializers.CharField(source='effect.eff_fr.description')
    class Meta:
        model = EffectLine
        fields = ['itemslug', 'itemname', 'effslug', 'effname', 'effdescription', 'line', 'number']

class A22EffectLineSerializerKO(serializers.ModelSerializer):
    itemslug = serializers.CharField(source='item.slugname')
    itemname = serializers.CharField(source='item.item_ko.name')
    effslug = serializers.CharField(source='effect.slugname')
    effname = serializers.CharField(source='effect.eff_ko.name')
    effdescription = serializers.CharField(source='effect.eff_ko.description')
    class Meta:
        model = EffectLine
        fields = ['itemslug', 'itemname', 'effslug', 'effname', 'effdescription', 'line', 'number']

class A22EffectLineSerializerSC(serializers.ModelSerializer):
    itemslug = serializers.CharField(source='item.slugname')
    itemname = serializers.CharField(source='item.item_sc.name')
    effslug = serializers.CharField(source='effect.slugname')
    effname = serializers.CharField(source='effect.eff_sc.name')
    effdescription = serializers.CharField(source='effect.eff_sc.description')
    class Meta:
        model = EffectLine
        fields = ['itemslug', 'itemname', 'effslug', 'effname', 'effdescription', 'line', 'number']

class A22EffectLineSerializerTC(serializers.ModelSerializer):
    itemslug = serializers.CharField(source='item.slugname')
    itemname = serializers.CharField(source='item.item_tc.name')
    effslug = serializers.CharField(source='effect.slugname')
    effname = serializers.CharField(source='effect.eff_tc.name')
    effdescription = serializers.CharField(source='effect.eff_tc.description')
    class Meta:
        model = EffectLine
        fields = ['itemslug', 'itemname', 'effslug', 'effname', 'effdescription', 'line', 'number']

# Simple Ingredient View, for filtering...

class A22IngredientSerializerENSimple(serializers.ModelSerializer):
    item = serializers.CharField(source='item.item_en.name', read_only=True)
    category = serializers.CharField(source='category.cat_en.name', read_only=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category']

class A22IngredientSerializerJASimple(serializers.ModelSerializer):
    item = serializers.CharField(source='item.item_ja.name', read_only=True)
    category = serializers.CharField(source='category.cat_ja.name', read_only=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category']

class A22IngredientSerializerKOSimple(serializers.ModelSerializer):
    item = serializers.CharField(source='item.item_ko.name', read_only=True)
    category = serializers.CharField(source='category.cat_ko.name', read_only=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category']

class A22IngredientSerializerFRSimple(serializers.ModelSerializer):
    item = serializers.CharField(source='item.item_fr.name', read_only=True)
    category = serializers.CharField(source='category.cat_fr.name', read_only=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category']

class A22IngredientSerializerSCSimple(serializers.ModelSerializer):
    item = serializers.CharField(source='item.item_sc.name', read_only=True)
    category = serializers.CharField(source='category.cat_sc.name', read_only=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category']

class A22IngredientSerializerTCSimple(serializers.ModelSerializer):
    item = serializers.CharField(source='item.item_tc.name', read_only=True)
    category = serializers.CharField(source='category.cat_tc.name', read_only=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category']


# Ing Effects

class A22IngEffectsSerializerEN(serializers.ModelSerializer):
    effect = serializers.CharField(source='effect.eff_en.name', read_only=True)
    morph = A22ItemSerializerSimpleEN(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializerEN, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngEffectsSerializerJA(serializers.ModelSerializer):
    effect = serializers.CharField(source='effect.eff_ja.name', read_only=True)
    morph = A22ItemSerializerSimpleJA(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializerJA, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngEffectsSerializerKO(serializers.ModelSerializer):
    effect = serializers.CharField(source='effect.eff_ko.name', read_only=True)
    morph = A22ItemSerializerSimpleKO(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializerKO, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngEffectsSerializerFR(serializers.ModelSerializer):
    effect = serializers.CharField(source='effect.eff_fr.name', read_only=True)
    morph = A22ItemSerializerSimpleFR(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializerFR, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngEffectsSerializerSC(serializers.ModelSerializer):
    effect = serializers.CharField(source='effect.eff_sc.name', read_only=True)
    morph = A22ItemSerializerSimpleSC(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializerSC, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngEffectsSerializerTC(serializers.ModelSerializer):
    effect = serializers.CharField(source='effect.eff_tc.name', read_only=True)
    morph = A22ItemSerializerSimpleTC(read_only=True)
    class Meta:
        model = IngEffects
        fields = ['number', 'value', 'effect', 'noneffect', 'essence', 'morph']
    def to_representation(self, instance):
        result = super(A22IngEffectsSerializerTC, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

# Full Ingredient View

class A22IngredientSerializerEN(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleEN()
    category = A22CategorySerializerEN()
    ingeffects_set = A22IngEffectsSerializerEN(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializerEN, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngredientSerializerJA(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleJA()
    category = A22CategorySerializerJA()
    ingeffects_set = A22IngEffectsSerializerJA(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializerJA, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngredientSerializerKO(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleKO()
    category = A22CategorySerializerKO()
    ingeffects_set = A22IngEffectsSerializerKO(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializerKO, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngredientSerializerFR(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleFR()
    category = A22CategorySerializerFR()
    ingeffects_set = A22IngEffectsSerializerFR(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializerFR, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngredientSerializerSC(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleSC()
    category = A22CategorySerializerSC()
    ingeffects_set = A22IngEffectsSerializerSC(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializerSC, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

class A22IngredientSerializerTC(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleTC()
    category = A22CategorySerializerTC()
    ingeffects_set = A22IngEffectsSerializerTC(many=True)
    class Meta:
        model = Ingredient
        fields = [ 'item', 'category', 'required', 'ice', 'wind', 'lightning', 'fire', 'unlockelem', 'unlockvalue', 'unlockquality', 'ingeffects_set']
    def to_representation(self, instance):
        result = super(A22IngredientSerializerTC, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None])

# EV Link

class A22EVLinkEN(serializers.ModelSerializer):
    result = A22ItemSerializerSimpleEN()
    item1 = A22ItemSerializerSimpleEN()
    item2 = A22ItemSerializerSimpleEN()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']

class A22EVLinkJA(serializers.ModelSerializer):
    result = A22ItemSerializerSimpleJA()
    item1 =  A22ItemSerializerSimpleJA()
    item2 =  A22ItemSerializerSimpleJA()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']

class A22EVLinkKO(serializers.ModelSerializer):
    result = A22ItemSerializerSimpleKO()
    item1 =  A22ItemSerializerSimpleKO()
    item2 =  A22ItemSerializerSimpleKO()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']

class A22EVLinkFR(serializers.ModelSerializer):
    result = A22ItemSerializerSimpleFR()
    item1 =  A22ItemSerializerSimpleFR()
    item2 =  A22ItemSerializerSimpleFR()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']

class A22EVLinkSC(serializers.ModelSerializer):
    result = A22ItemSerializerSimpleSC()
    item1 =  A22ItemSerializerSimpleSC()
    item2 =  A22ItemSerializerSimpleSC()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']

class A22EVLinkTC(serializers.ModelSerializer):
    result = A22ItemSerializerSimpleTC()
    item1 =  A22ItemSerializerSimpleTC()
    item2 =  A22ItemSerializerSimpleTC()
    class Meta:
        model = EVLinkItems
        fields = ['result', 'item1', 'item2']


# Recipe Morph

class A22RecipeMorphEN(serializers.ModelSerializer):
    parent = A22ItemSerializerSimpleEN()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']

class A22RecipeMorphJA(serializers.ModelSerializer):
    parent =  A22ItemSerializerSimpleJA()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']

class A22RecipeMorphKO(serializers.ModelSerializer):
    parent =  A22ItemSerializerSimpleKO()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']

class A22RecipeMorphFR(serializers.ModelSerializer):
    parent =  A22ItemSerializerSimpleFR()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']

class A22RecipeMorphSC(serializers.ModelSerializer):
    parent =  A22ItemSerializerSimpleSC()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']

class A22RecipeMorphTC(serializers.ModelSerializer):
    parent =  A22ItemSerializerSimpleTC()
    class Meta:
        model = RecipeMorphs
        fields = ['parent', 'order']


# Listing All Data for single languages
class A22ItemSerializerEN(serializers.ModelSerializer):
    name = serializers.CharField(source='item_en.name')
    category = A22CategorySerializerEN(many=True)
    ingredient_set = A22IngredientSerializerENSimple(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'index', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']
    
class A22ItemSerializerJA(serializers.ModelSerializer):
    name = serializers.CharField(source='item_ja.name')
    category = A22CategorySerializerJA(many=True)
    ingredient_set = A22IngredientSerializerJASimple(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'index', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']

class A22ItemSerializerKO(serializers.ModelSerializer):
    name = serializers.CharField(source='item_ko.name')
    category = A22CategorySerializerKO(many=True)
    ingredient_set = A22IngredientSerializerKOSimple(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'index', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']

class A22ItemSerializerFR(serializers.ModelSerializer):
    name = serializers.CharField(source='item_fr.name')
    category = A22CategorySerializerFR(many=True)
    ingredient_set = A22IngredientSerializerFRSimple(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'index', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']

class A22ItemSerializerSC(serializers.ModelSerializer):
    name = serializers.CharField(source='item_sc.name')
    category = A22CategorySerializerSC(many=True)
    ingredient_set = A22IngredientSerializerSCSimple(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'index', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']

class A22ItemSerializerTC(serializers.ModelSerializer):
    name = serializers.CharField(source='item_tc.name')
    category = A22CategorySerializerTC(many=True)
    ingredient_set = A22IngredientSerializerTCSimple(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'index', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'ingredient_set']

class A22UsableItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsableItem
        fields = ['wt', 'stun', 'cc', 'cooltime', 'effrange']

# Full data individual view
class A22ItemSerializerENFull(serializers.ModelSerializer):
    name = serializers.CharField(source='item_en.name')
    description = serializers.CharField(source='item_en.description')
    category = A22CategorySerializerEN(many=True)
    ingredient_set = A22IngredientSerializerEN(many=True)
    shop = A22ShopSerializerEN()
    trait = A22TraitSerializerSimpleEN(many=True)
    location = A22LocationSerializerEN(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializerEN(many=True)
    evlinkitems_set = A22EVLinkEN(many=True)
    recipemorphs_set = A22RecipeMorphEN(many=True)
    monster_set = A22MonsterSerializerENName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'index', 'level', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait', 'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set', 'evlinkitems_set', 'recipemorphs_set', 'monster_set']

class A22ItemSerializerJAFull(serializers.ModelSerializer):
    name = serializers.CharField(source='item_ja.name')
    description = serializers.CharField(source='item_ja.description')
    category = A22CategorySerializerJA(many=True)
    ingredient_set = A22IngredientSerializerJA(many=True)
    shop = A22ShopSerializerJA()
    trait = A22TraitSerializerSimpleJA(many=True)
    location = A22LocationSerializerJA(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializerJA(many=True)
    evlinkitems_set = A22EVLinkJA(many=True)
    recipemorphs_set = A22RecipeMorphJA(many=True)
    monster_set = A22MonsterSerializerJAName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'index', 'level', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait', 'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set', 'evlinkitems_set', 'recipemorphs_set', 'monster_set']

class A22ItemSerializerKOFull(serializers.ModelSerializer):
    name = serializers.CharField(source='item_ko.name')
    description = serializers.CharField(source='item_ko.description')
    category = A22CategorySerializerKO(many=True)
    ingredient_set = A22IngredientSerializerKO(many=True)
    shop = A22ShopSerializerKO()
    trait = A22TraitSerializerSimpleKO(many=True)
    location = A22LocationSerializerKO(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializerKO(many=True)
    evlinkitems_set = A22EVLinkKO(many=True)
    recipemorphs_set = A22RecipeMorphKO(many=True)
    monster_set = A22MonsterSerializerKOName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'index', 'level', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait', 'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set', 'evlinkitems_set', 'recipemorphs_set', 'monster_set']

class A22ItemSerializerFRFull(serializers.ModelSerializer):
    name = serializers.CharField(source='item_fr.name')
    description = serializers.CharField(source='item_fr.description')
    category = A22CategorySerializerFR(many=True)
    ingredient_set = A22IngredientSerializerFR(many=True)
    shop = A22ShopSerializerFR()
    trait = A22TraitSerializerSimpleFR(many=True)
    location = A22LocationSerializerFR(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializerFR(many=True)
    evlinkitems_set = A22EVLinkFR(many=True)
    recipemorphs_set = A22RecipeMorphFR(many=True)
    monster_set = A22MonsterSerializerFRName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'index', 'level', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait', 'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set', 'evlinkitems_set', 'recipemorphs_set', 'monster_set']

class A22ItemSerializerSCFull(serializers.ModelSerializer):
    name = serializers.CharField(source='item_sc.name')
    description = serializers.CharField(source='item_sc.description')
    category = A22CategorySerializerSC(many=True)
    ingredient_set = A22IngredientSerializerSC(many=True)
    shop = A22ShopSerializerSC()
    trait = A22TraitSerializerSimpleSC(many=True)
    location = A22LocationSerializerSC(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializerSC(many=True)
    evlinkitems_set = A22EVLinkSC(many=True)
    recipemorphs_set = A22RecipeMorphSC(many=True)
    monster_set = A22MonsterSerializerSCName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'index', 'level', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait', 'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set', 'evlinkitems_set', 'recipemorphs_set', 'monster_set']

class A22ItemSerializerTCFull(serializers.ModelSerializer):
    name = serializers.CharField(source='item_tc.name')
    description = serializers.CharField(source='item_tc.description')
    category = A22CategorySerializerTC(many=True)
    ingredient_set = A22IngredientSerializerTC(many=True)
    shop = A22ShopSerializerTC()
    trait = A22TraitSerializerSimpleTC(many=True)
    location = A22LocationSerializerTC(many=True)
    usableitem_set = A22UsableItemSerializer(read_only=True, many=True)
    effectline_set = A22EffectLineSerializerTC(many=True)
    evlinkitems_set = A22EVLinkTC(many=True)
    recipemorphs_set = A22RecipeMorphTC(many=True)
    monster_set = A22MonsterSerializerTCName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'index', 'level', 'itemtype', 'isDLC', 'ice', 'wind', 'lightning', 'fire', 'elementvalue', 'category', 'shop', 'trait', 'skilltree', 'location', 'ingredient_set', 'usableitem_set', 'effectline_set', 'evlinkitems_set', 'recipemorphs_set', 'monster_set']


# Item Locations
class A22ItemLocationSerializerEN(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimpleEN()
    rank2 = A22ItemSerializerSimpleEN(read_only=True)
    rank3 = A22ItemSerializerSimpleEN(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']

class A22ItemLocationSerializerJA(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimpleJA()
    rank2 = A22ItemSerializerSimpleJA(read_only=True)
    rank3 = A22ItemSerializerSimpleJA(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']

class A22ItemLocationSerializerKO(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimpleKO()
    rank2 = A22ItemSerializerSimpleKO(read_only=True)
    rank3 = A22ItemSerializerSimpleKO(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']

class A22ItemLocationSerializerFR(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimpleFR()
    rank2 = A22ItemSerializerSimpleFR(read_only=True)
    rank3 = A22ItemSerializerSimpleFR(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']

class A22ItemLocationSerializerSC(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimpleSC()
    rank2 = A22ItemSerializerSimpleSC(read_only=True)
    rank3 = A22ItemSerializerSimpleSC(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']

class A22ItemLocationSerializerTC(serializers.ModelSerializer):
    rank1 = A22ItemSerializerSimpleTC()
    rank2 = A22ItemSerializerSimpleTC(read_only=True)
    rank3 = A22ItemSerializerSimpleTC(read_only=True)
    class Meta:
        model = ItemLocations
        fields = ['rank1', 'rank2', 'rank3', 'priority1', 'priority2', 'priority3', 'tool']

# Areas
class A22ItemAreasSerlaizerEN(serializers.ModelSerializer):
    slugname = serializers.CharField(source="area.slugname")
    name = serializers.CharField(source="area.loc_en.name")
    gatherdata = A22ItemLocationSerializerEN(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slugname', 'name', 'gatherdata', 'text']

class A22ItemAreasSerlaizerJA(serializers.ModelSerializer):
    slugname = serializers.CharField(source="area.slugname")
    name = serializers.CharField(source="area.loc_ja.name")
    gatherdata = A22ItemLocationSerializerJA(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slugname', 'name', 'gatherdata', 'text']

class A22ItemAreasSerlaizerKO(serializers.ModelSerializer):
    slugname = serializers.CharField(source="area.slugname")
    name = serializers.CharField(source="area.loc_ko.name")
    gatherdata = A22ItemLocationSerializerKO(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slugname', 'name', 'gatherdata', 'text']

class A22ItemAreasSerlaizerFR(serializers.ModelSerializer):
    slugname = serializers.CharField(source="area.slugname")
    name = serializers.CharField(source="area.loc_fr.name")
    gatherdata = A22ItemLocationSerializerFR(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slugname', 'name', 'gatherdata', 'text']

class A22ItemAreasSerlaizerSC(serializers.ModelSerializer):
    slugname = serializers.CharField(source="area.slugname")
    name = serializers.CharField(source="area.loc_sc.name")
    gatherdata = A22ItemLocationSerializerSC(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slugname', 'name', 'gatherdata', 'text']

class A22ItemAreasSerlaizerTC(serializers.ModelSerializer):
    slugname = serializers.CharField(source="area.slugname")
    name = serializers.CharField(source="area.loc_tc.name")
    gatherdata = A22ItemLocationSerializerTC(many=True)
    class Meta:
        model = ItemAreas
        fields = ['slugname', 'name', 'gatherdata', 'text']

# regions 

class A22ItemRegionSerializerEN(serializers.ModelSerializer):
    slugname = serializers.CharField(source="region.slugname")
    name = serializers.CharField(source="region.loc_en.name")
    areas = A22ItemAreasSerlaizerEN(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slugname', 'name', 'areas']

class A22ItemRegionSerializerJA(serializers.ModelSerializer):
    slugname = serializers.CharField(source="region.slugname")
    name = serializers.CharField(source="region.loc_ja.name")
    areas = A22ItemAreasSerlaizerJA(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slugname', 'name', 'areas']

class A22ItemRegionSerializerKO(serializers.ModelSerializer):
    slugname = serializers.CharField(source="region.slugname")
    name = serializers.CharField(source="region.loc_ko.name")
    areas = A22ItemAreasSerlaizerKO(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slugname', 'name', 'areas']

class A22ItemRegionSerializerFR(serializers.ModelSerializer):
    slugname = serializers.CharField(source="region.slugname")
    name = serializers.CharField(source="region.loc_fr.name")
    areas = A22ItemAreasSerlaizerFR(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slugname', 'name', 'areas']

class A22ItemRegionSerializerSC(serializers.ModelSerializer):
    slugname = serializers.CharField(source="region.slugname")
    name = serializers.CharField(source="region.loc_sc.name")
    areas = A22ItemAreasSerlaizerSC(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slugname', 'name', 'areas']

class A22ItemRegionSerializerTC(serializers.ModelSerializer):
    slugname = serializers.CharField(source="region.slugname")
    name = serializers.CharField(source="region.loc_tc.name")
    areas = A22ItemAreasSerlaizerTC(many=True)
    class Meta:
        model = ItemRegions
        fields = ['slugname', 'name', 'areas']

# Shop Develop 

class A22ShopDevelopSerializerEN(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleEN()
    cat1 = A22CategorySerializerEN()
    cat2 = A22CategorySerializerEN()
    addProd = A22ItemSerializerSimpleEN()
    addCat = A22CategorySerializerEN()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']

class A22ShopDevelopSerializerJA(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleJA()
    cat1 = A22CategorySerializerJA()
    cat2 = A22CategorySerializerJA()
    addProd = A22ItemSerializerSimpleJA()
    addCat = A22CategorySerializerJA()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']

class A22ShopDevelopSerializerKO(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleKO()
    cat1 = A22CategorySerializerKO()
    cat2 = A22CategorySerializerKO()
    addProd = A22ItemSerializerSimpleKO()
    addCat = A22CategorySerializerKO()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']

class A22ShopDevelopSerializerFR(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleFR()
    cat1 = A22CategorySerializerFR()
    cat2 = A22CategorySerializerFR()
    addProd = A22ItemSerializerSimpleFR()
    addCat = A22CategorySerializerFR()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']

class A22ShopDevelopSerializerSC(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleSC()
    cat1 = A22CategorySerializerSC()
    cat2 = A22CategorySerializerSC()
    addProd = A22ItemSerializerSimpleSC()
    addCat = A22CategorySerializerSC()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']

class A22ShopDevelopSerializerTC(serializers.ModelSerializer):
    item = A22ItemSerializerSimpleTC()
    cat1 = A22CategorySerializerTC()
    cat2 = A22CategorySerializerTC()
    addProd = A22ItemSerializerSimpleTC()
    addCat = A22CategorySerializerTC()
    class Meta:
        model = ShopDevelop
        fields = ['item', 'cat1', 'cat2', 'addProd', 'addCat']