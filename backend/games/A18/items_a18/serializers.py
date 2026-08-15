from rest_framework import serializers
from games.A18.items_a18.models import Item, Category, Ingredient, Catalyst, RecipeIdea, RecipeUnlock, RecipeCondition, Equip, MasteryLine, EffectData, EffectLines, Component, ShopSlot
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField
from games.A18.misc_a18.serializers import A18ItemNameSerializer, A18MonsterNameSerializer, A18TraitNameSerializer, A18CharacterSerializer, A18AreaNameSerializer, A18ItemMasterySerializer
from games.A18.monsters_a18.serializers import A18RaceListSerializer
from games.A18.effects_traits_a18.serializers import A18EffectSerializer

class A18CategorySerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="cat")
    id = serializers.CharField(source='slug')
    class Meta:
        model = Category
        fields = ['id', 'name', 'icon']

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
    name = DirectTranslatedField(base_name="name")
    class Meta:
        model = Component
        fields = ['color', 'name', 'value']

class A18IngredientCategorySerializer(DefaultSerializer):
    # We remove 'synth' from fields and use a MethodField to flatten
    class Meta:
        model = Ingredient
        fields = [] # We'll add the field via the method

    def to_representation(self, instance):
        # This serializes the underlying 'synth' item directly
        # and returns it, bypassing the 'synth' key wrapper.
        return A18ItemNameSerializer(instance.synth, context=self.context).data


class A18CategoryItemSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="cat")
    in_cat = serializers.SerializerMethodField()
    used = A18IngredientCategorySerializer(source='ingredient_set', many=True)
    id = serializers.CharField(source='slug')

    class Meta:
        model = Category
        fields = ['id', 'name', 'in_cat', 'used']

    def get_in_cat(self, obj):
        items = A18ItemNameSerializer(obj.item_set.all(), many=True, context=self.context).data
        for item in items:
            item['add'] = False

        add_items = A18ItemNameSerializer(obj.add_categories.all(), many=True, context=self.context).data
        for item in add_items:
            item['add'] = True

        return items + add_items


class A18ShopSlotSerializer(DefaultSerializer):
    name =  PathTranslatedField(path="shop", base_name="shop")
    id = serializers.CharField(source='shop.slug')
    class Meta:
        model = ShopSlot
        fields = ['id', 'name']


class A18CatalystSimpleSerializer(DefaultSerializer):
    color = serializers.SerializerMethodField()
    action = serializers.SerializerMethodField()
    class Meta:
        model = Catalyst
        fields = ['size', 'color', 'action']
    def get_color(self,obj):
        colors = [obj.color1, obj.color2, obj.color3, obj.color4, obj.color5, obj.color6]
        return tuple(color for color in colors if color)
    def get_action(self, obj):
        active_actions = [act for act in [obj.action1, obj.action2, obj.action3, obj.action4, obj.action5, obj.action6] if act]
        languages = ['en', 'ja', 'tc', 'sc']
        result = {}
        for lang in languages:
            attr_name = f'cat_{lang}'
            values = tuple(getattr(act, attr_name) for act in active_actions if hasattr(act, attr_name))
            
            if values:
                result[lang] = values
                
        return result


class A18ItemCatalystSerializer(DefaultSerializer):
    id = serializers.CharField(source='slug')
    name =  PathTranslatedField(path="text", base_name="name")
    categories = A18CategorySerializer(many=True)
    class Meta:
        model = Item
        fields = ['id', 'name', 'categories']

class A18CatalystSerializer(DefaultSerializer):
    item = A18ItemCatalystSerializer()
    color = serializers.SerializerMethodField()
    action = serializers.SerializerMethodField()
    class Meta:
        model = Catalyst
        fields = ['item', 'size', 'color', 'action']
    def get_color(self,obj):
        colors = [obj.color1, obj.color2, obj.color3, obj.color4, obj.color5, obj.color6]
        return tuple(color for color in colors if color)
    def get_action(self,obj):
        actions = [obj.action1,obj.action2,obj.action3,obj.action4,obj.action5,obj.action6]
        return DefaultSerializer.language_match(self,
            en=tuple(act.cat_en for act in actions if act ),
            ja=tuple(act.cat_ja for act in actions if act ),
            sc=tuple(act.cat_sc for act in actions if act ),
            tc=tuple(act.cat_tc for act in actions if act ),
        )

class A18RecipeConditionSerializer(DefaultSerializer):
    monster = A18MonsterNameSerializer()
    item = A18ItemNameSerializer()
    category = A18CategorySerializer()
    race = A18RaceListSerializer()
    condition = serializers.SerializerMethodField()
    class Meta:
        model = RecipeCondition
        fields = ['condition', 'number', 'item', 'monster', 'category', 'race', 'index']
    def get_condition(self, obj):
        return {
            "en": obj.condition,
            "ja": obj.condition,
            "sc": obj.condition_sc,
            "tc": obj.condition_tc,
        }

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
    name = PathTranslatedField(path="text", base_name="name")
    book = A18ItemNameSerializer()
    id = serializers.CharField(source='slug')
    class Meta:
        model = Item
        fields = ['id', 'name', 'ideas', 'book', 'recipe_points']

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
    name =  PathTranslatedField(path="text", base_name="name")
    desc1 = PathTranslatedField(path="text", base_name="desc1")
    desc2 = PathTranslatedField(path="text", base_name="desc2")
    desc3 = PathTranslatedField(path="text", base_name="desc3")
    desc4 = PathTranslatedField(path="text", base_name="desc4")
    char1 = serializers.CharField(source="char1.slug", allow_null=True)
    char2 = serializers.CharField(source="char2.slug", allow_null=True)
    char3 = serializers.CharField(source="char3.slug", allow_null=True)
    char4 = serializers.CharField(source="char4.slug", allow_null=True)
    categories = A18CategorySerializer(many=True)
    catalysts = A18CategorySerializer(many=True)
    trait = A18TraitNameSerializer(source='traits')
    chars = serializers.SlugRelatedField(
        many=True, 
        read_only=True, 
        slug_field='slug'
    )
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
    id = serializers.CharField(source='slug')

    class Meta:
        model = Item
        fields = ['id', 'name', 'desc1', 'desc2', 'desc3', 'desc4', 
            'char1', 'char2', 'char3', 'char4', 'level', 'trait',
            'uses', 'wt', 'stun', 'range', 'dmin', 'dmax', 'quantity',
            'isDLC', 'isDX', 'chars', 'recipe_points', 'catalysts', 'categories',
            'locations', 'monsters', 'fixed_components', "random_components",
            'book', 'recipes', 'equip', 'masteryline_set', 'catalyst',
            'ingredients', 'effectlines_set', 'ideas', 'shopslot_set', 'index'
        ]

class A18IngredientNameSerializer(serializers.ModelSerializer):
    name =  PathTranslatedField(path="item.text", base_name="name")
    class Meta:
        model = Ingredient
        fields =['name']

class A18ItemListSerializer(DefaultSerializer):
    name =  PathTranslatedField(path="text", base_name="name")
    categories = A18CategorySerializer(many=True)
    ing = A18IngredientNameSerializer(many=True, source='ingredients')
    id = serializers.CharField(source='slug')
    class Meta:
        model = Item
        fields = ['id', 'name', 'categories', 'kind', 'ing', 'isDLC', 'isDX']
