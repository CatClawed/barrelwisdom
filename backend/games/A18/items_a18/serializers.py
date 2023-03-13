from rest_framework import serializers
from games.A18.items_a18.models import Item, Category, Ingredient, Catalyst, RecipeIdea, RecipeUnlock, RecipeCondition, Equip, MasteryLine, EffectData, EffectLines, Component, ShopSlot
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer
from games.A18.misc_a18.serializers import A18ItemNameSerializer, A18MonsterNameSerializer, A18TraitNameSerializer, A18CharacterSerializer, A18AreaNameSerializer, A18ItemMasterySerializer
from games.A18.monsters_a18.serializers import A18RaceListSerializer
from games.A18.effects_traits_a18.serializers import A18EffectSerializer

class A18CategorySerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slug', 'name', 'icon']

    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.cat_en,
            ja=obj.cat_ja,
            sc=obj.cat_sc,
            tc=obj.cat_tc,
        )

class A18EquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equip
        fields =['hp', 'mp', 'atk', 'dfn', 'spd']

class A18IngredientItemSerializer(DefaultSerializer):
    item = A18ItemNameSerializer()
    cat = A18CategorySerializer()
    class Meta:
        model = Ingredient
        fields =['item', 'cat', 'quantity']

class A18ComponentSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Component
        fields = ['color', 'name', 'value']

    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )

class A18IngredientCategorySerializer(DefaultSerializer):
    synth = A18ItemNameSerializer()
    class Meta:
        model = Ingredient
        fields =['synth']

class A18CategoryItemSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    items = A18ItemNameSerializer(source='item_set', many=True)
    add = A18ItemNameSerializer(source='add_categories', many=True)
    used = A18IngredientCategorySerializer(source='ingredient_set', many=True)
    class Meta:
        model = Category
        fields = ['slug', 'name', 'items', 'used', 'add']

    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.cat_en,
            ja=obj.cat_ja,
            sc=obj.cat_sc,
            tc=obj.cat_tc,
        )

class A18ShopSlotSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.CharField(source='shop.slug')
    class Meta:
        model = ShopSlot
        fields = ['slug', 'name']

    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.shop.shop_en,
            ja=obj.shop.shop_ja,
            sc=obj.shop.shop_sc,
            tc=obj.shop.shop_tc,
        )

class A18CatalystSimpleSerializer(DefaultSerializer):
    color = serializers.SerializerMethodField()
    action = serializers.SerializerMethodField()
    class Meta:
        model = Catalyst
        fields = ['size', 'color', 'action']
    def get_color(self,obj):
        colors = [obj.color1, obj.color2, obj.color3, obj.color4, obj.color5, obj.color6]
        return (color for color in colors if color)
    def get_action(self,obj):
        actions = [obj.action1,obj.action2,obj.action3,obj.action4,obj.action5,obj.action6]
        return DefaultSerializer.language_match(self,
            en=(act.cat_en for act in actions if act ),
            ja=(act.cat_ja for act in actions if act ),
            sc=(act.cat_sc for act in actions if act ),
            tc=(act.cat_tc for act in actions if act ),
        )

class A18ItemCatalystSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    categories = A18CategorySerializer(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'categories']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )

class A18CatalystSerializer(DefaultSerializer):
    item = A18ItemCatalystSerializer()
    color = serializers.SerializerMethodField()
    action = serializers.SerializerMethodField()
    class Meta:
        model = Catalyst
        fields = ['item', 'size', 'color', 'action']
    def get_color(self,obj):
        colors = [obj.color1, obj.color2, obj.color3, obj.color4, obj.color5, obj.color6]
        return (color for color in colors if color)
    def get_action(self,obj):
        actions = [obj.action1,obj.action2,obj.action3,obj.action4,obj.action5,obj.action6]
        return DefaultSerializer.language_match(self,
            en=(act.cat_en for act in actions if act ),
            ja=(act.cat_ja for act in actions if act ),
            sc=(act.cat_sc for act in actions if act ),
            tc=(act.cat_tc for act in actions if act ),
        )


class A18RecipeConditionSerializer(DefaultSerializer):
    monster = A18MonsterNameSerializer()
    item = A18ItemNameSerializer()
    category = A18CategorySerializer()
    race = A18RaceListSerializer()
    condition = serializers.SerializerMethodField()
    class Meta:
        model = RecipeCondition
        fields = ['condition', 'number', 'item', 'monster', 'category', 'race']
    def get_condition(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.condition,
            ja=obj.condition,
            sc=obj.condition_sc,
            tc=obj.condition_tc,
        )

class A18RecipeUnlockSerializer(DefaultSerializer):
    condition = A18RecipeConditionSerializer(source='recipecondition_set', many=True)
    class Meta:
        model = RecipeUnlock
        fields = ['level', 'condition']

class A18RecipeIdeaSerializer(DefaultSerializer):
    unlocks = A18RecipeUnlockSerializer(source='recipeunlock_set', many=True)
    class Meta:
        model = RecipeIdea
        fields = ['unlocks']

class A18RecipeItemSerializer(DefaultSerializer):
    ideas = A18RecipeIdeaSerializer(source='recipeidea_set', many=True)
    name = serializers.SerializerMethodField()
    book = A18ItemNameSerializer()
    class Meta:
        model = Item
        fields = ['slug', 'name', 'ideas', 'book', 'recipe_points']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )

class A18MasteryLineSerializer(DefaultSerializer):
    masteries = A18ItemMasterySerializer(many=True)
    class Meta:
        model = MasteryLine
        fields = ['masteries', 'level']

class A18EffectDataSerializer(DefaultSerializer):
    effect = A18EffectSerializer()
    component = A18ComponentSerializer()
    class Meta:
        model = EffectData
        fields = ['effect', 'component', 'num']
        
class A18EffectLinesSerializer(DefaultSerializer):
    data = A18EffectDataSerializer(many=True, source='effectdata_set')
    class Meta:
        model = EffectLines
        fields = ['color', 'order', 'data']

class A18ItemSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    char = serializers.SerializerMethodField()
    categories = A18CategorySerializer(many=True)
    catalysts = A18CategorySerializer(many=True)
    trait = A18TraitNameSerializer(source='traits')
    chars = A18CharacterSerializer(many=True)
    locations = A18AreaNameSerializer(many=True)
    monsters = A18MonsterNameSerializer(many=True)
    fixed_components = A18ComponentSerializer(many=True)
    random_components = A18ComponentSerializer(many=True)
    book = A18ItemNameSerializer()
    recipes = A18ItemNameSerializer(many=True)
    equip = A18EquipSerializer()
    catalyst = A18CatalystSimpleSerializer()
    ingredients = A18IngredientItemSerializer(many=True)
    effectlines_set = A18EffectLinesSerializer(many=True)
    ideas = A18RecipeIdeaSerializer(source='recipeidea_set', many=True)
    masteryline_set = A18MasteryLineSerializer(many=True)
    shopslot_set = A18ShopSlotSerializer(many=True)

    class Meta:
        model = Item
        fields = ['slug', 'name', 'desc', 'char', 'level', 'trait',
            'uses', 'wt', 'stun', 'range', 'dmin', 'dmax', 'quantity',
            'isDLC', 'isDX', 'chars', 'recipe_points', 'catalysts', 'categories',
            'locations', 'monsters', 'fixed_components', "random_components",
            'book', 'recipes', 'equip', 'catalyst', 'masteryline_set',
            'ingredients', 'effectlines_set', 'ideas', 'shopslot_set'
        ]
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=(obj.text.desc1_en, obj.text.desc2_en, obj.text.desc3_en, obj.text.desc4_en),
            ja=(obj.text.desc1_ja, obj.text.desc2_ja, obj.text.desc3_ja, obj.text.desc4_ja),
            sc=(obj.text.desc1_sc, obj.text.desc2_sc, obj.text.desc3_sc, obj.text.desc4_sc),
            tc=(obj.text.desc1_tc, obj.text.desc2_tc, obj.text.desc3_tc, obj.text.desc4_tc),
        )
    def get_char(self,obj):
        return (
            obj.char1.slug,
            obj.char2.slug if obj.char2 else None,
            obj.char3.slug if obj.char3 else None,
            obj.char4.slug if obj.char4 else None
        )

class A18IngredientNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Ingredient
        fields =['name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.item.text.name_en if obj.item else obj.cat.cat_en,
            ja=obj.item.text.name_ja if obj.item else obj.cat.cat_ja,
            sc=obj.item.text.name_sc if obj.item else obj.cat.cat_sc,
            tc=obj.item.text.name_tc if obj.item else obj.cat.cat_tc,
        )

class A18ItemListSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    categories = A18CategorySerializer(many=True)
    ing = A18IngredientNameSerializer(many=True, source='ingredients')
    class Meta:
        model = Item
        fields = ['slug', 'name', 'categories', 'kind', 'ing', 'isDLC', 'isDX']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )