from rest_framework import serializers
from games.A26.misc_a26.serializers import A26DefaultSerializer2, A26CoordinateSerializer, A26ItemSimpleSerializer, A26TraitSimpleSerializer, A26MonsterSimpleSerializer, A26QuestDataSerializer
from games.A26.items_a26.models import Trait, TraitGroup, Effect, Item, IngredientEffect, Category, Material, ItemStatus, Recipe, RecipeEffect, RecipeLevel, RecipeMaterial, NecessaryMaterial

class A26TraitGroupSerializer(A26DefaultSerializer2):
    traits = A26TraitSimpleSerializer(source='trait_set', many=True)
    class Meta:
        model = TraitGroup
        fields = [
            'traits'
        ]

class A26TraitListSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    combo1 = A26TraitSimpleSerializer()
    combo2 = A26TraitSimpleSerializer()
    combo3 = A26TraitSimpleSerializer()
    combo4 = A26TraitSimpleSerializer()
    group  = A26TraitGroupSerializer()
    class Meta:
        model = Trait
        fields = ['id', 'name', 'desc1', 'desc2',
            'wep', 'arm', 'acc', 'atk', 'heal', 'buff', 'dbf',
            'fire', 'ice', 'bolt', 'air',
            'no_level', 'grade_min', 'grade_max',
            'combo1', 'combo2', 'combo3', 'combo4',
            'group',
        ]

class A26TraitSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    chests = A26CoordinateSerializer(many=True)
    combo1 = A26TraitSimpleSerializer()
    combo2 = A26TraitSimpleSerializer()
    combo3 = A26TraitSimpleSerializer()
    combo4 = A26TraitSimpleSerializer()
    group  = A26TraitGroupSerializer()
    mons = A26MonsterSimpleSerializer(source='monster_set', many=True)
    class Meta:
        model = Trait
        fields = ['id', 'name', 'desc1', 'desc2',
            'wep', 'arm', 'acc', 'atk', 'heal', 'buff', 'dbf',
            'fire', 'ice', 'bolt', 'air',
            'no_level', 'grade_min', 'grade_max',
            'lv_min_rand_range', 'lv_max_rand_range', 'trait_base', 'trait_hash',
            'combo1', 'combo2', 'combo3', 'combo4',
            'chests', 'group', 'mons',
        ]

class A26EffectListSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = [
            'id', 'name', 'desc1', 'desc2',
            'max_level',
        ]

# items eventually maybe
class A26EffectSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    items = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = [
            'id', 'name', 'desc1', 'desc2',
            'max_level', 'att_tag', 'act_tag', 'effect_hash',
            'prm1_lv_min_rand_range', 'prm1_lv_max_rand_range',
            'prm2_lv_min_rand_range', 'prm2_lv_max_rand_range',
            'items'
        ]
    def get_items(self, obj):
        arr = []
        for i in obj.ingredienteffect_set.all():
            for j in i.itemstatus_set.all():
                arr.append(j.item)
        for i in obj.recipeeffect_set.all():
            for j in i.recipe_set.all():
                arr.append(j.item)
        return A26ItemSimpleSerializer(set(arr), many=True, context=self.context).data

class A26CategorySerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = [
            'id', 'name'
        ]

class A26MaterialSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Material
        fields = [
            'name', 'id'
        ]

class A26IngredientEffectSerializer(A26DefaultSerializer2):
    eff = A26EffectListSerializer()
    class Meta:
        model = IngredientEffect
        fields = ['lv', 'eff']

class A26ItemStatusSerializer(A26DefaultSerializer2):
    eff = A26IngredientEffectSerializer(many=True)
    class Meta:
        model = ItemStatus
        fields = ['rank', 'eff', 'quality']

class A26RecipeLevelSerializer(A26DefaultSerializer2):
    reward = serializers.SerializerMethodField()
    class Meta:
        model = RecipeLevel
        fields = ['lv', 'amt', 'fire', 'ice', 'bolt', 'air', 'reward']
    def get_reward(self, obj):
        return A26DefaultSerializer2.get_text(self,obj.reward)

class A26RecipeEffectSerializer(A26DefaultSerializer2):
    item = A26ItemSimpleSerializer()
    cat = A26CategorySerializer()
    eff = A26EffectListSerializer()
    class Meta:
        model = RecipeEffect
        fields = ['item', 'cat', 'eff']

class A26RecipeSerializer(A26DefaultSerializer2):
    recipe = A26RecipeEffectSerializer(many=True)
    level = A26RecipeLevelSerializer(many=True)
    class Meta:
        model = Recipe
        fields = ['num', 'level', 'sp', 'kind', 'recipe', 'level']

class A26NecessaryMaterialSerializer(A26DefaultSerializer2):
    mat = A26MaterialSerializer()
    class Meta:
        model = NecessaryMaterial
        fields = ['num', 'mat']

class A26RecipeMaterial(A26DefaultSerializer2):
    recipe = A26NecessaryMaterialSerializer(many=True)
    class Meta:
        model = RecipeMaterial
        fields = ['core', 'comfort', 'cost', 'kind', 'recipe']

class A26ItemListSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    cats = A26CategorySerializer(many=True)
    mats = A26MaterialSerializer(many=True)    

    class Meta:
        model = Item
        fields = [
            'id', 'name', 'desc',
            'fire', 'ice', 'bolt', 'air',
            'isDLC', 'resonance',
            'mats', 'cats'
        ]

class A26ItemSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    cats = A26CategorySerializer(many=True)
    mats = A26MaterialSerializer(many=True)
    rank = A26ItemStatusSerializer(many=True, source='itemstatus_set')
    location = A26CoordinateSerializer(many=True)
    recipe = A26RecipeSerializer()
    material = A26RecipeMaterial(source='recipematerial')
    mons = A26MonsterSimpleSerializer(source='monster_set', many=True)
    rare = A26MonsterSimpleSerializer(source='raredrop', many=True)
    quest = A26QuestDataSerializer()
    kind = serializers.SerializerMethodField()


    def get_kind(self, obj):
        
        # 2. Check cat IDs
        cat_ids = [str(cat.id) for cat in obj.cats.all()]
        
        if any(c in cat_ids for c in ['31', '29']):
            return 'consumable'
        if '37' in cat_ids:
            return 'explore'
        if '40' in cat_ids:
            return 'key'
        if '38' in cat_ids:
            return 'furniture'
        if any(c in cat_ids for c in ['34', '35', '36']):
            return 'equip'
            
        # 3. Default "Synth" logic (the long filter list from your TS)
        excluded = ['31', '29', '38', '37', '40', '34', '35', '36']
        if len(obj.mats.all()) == 0:
            return 'synth'
            
        return 'gather'
    class Meta:
        model = Item
        fields = [
            'id', 'name', 'desc',
            'fire', 'ice', 'bolt', 'air',
            'isDLC', 'resonance',
            'atk', 'dfn', 'spd', 'ct', 'aoe', 'comfort_goal',
            'mats', 'cats', 'rank', 'location', 'recipe', 'material',
            'mons', 'rare', 'quest', 'kind',
        ]

class A26ItemFULLSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    cats = A26CategorySerializer(many=True)
    mats = A26MaterialSerializer(many=True)
    rank = A26ItemStatusSerializer(many=True, source='itemstatus_set')
    location = A26CoordinateSerializer(many=True)
    recipe = A26RecipeSerializer()
    material = A26RecipeMaterial(source='recipematerial')
    mons = A26MonsterSimpleSerializer(source='monster_set', many=True)
    rare = A26MonsterSimpleSerializer(source='raredrop', many=True)
    quest = A26QuestDataSerializer()
    kind = serializers.SerializerMethodField()


    def get_kind(self, obj):
        
        # 2. Check cat IDs
        cat_ids = [str(cat.id) for cat in obj.cats.all()]
        
        if any(c in cat_ids for c in ['31', '29']):
            return 'consumable'
        if '37' in cat_ids:
            return 'explore'
        if '40' in cat_ids:
            return 'key'
        if '38' in cat_ids:
            return 'furniture'
        if any(c in cat_ids for c in ['34', '35', '36']):
            return 'equip'
            
        # 3. Default "Synth" logic (the long filter list from your TS)
        excluded = ['31', '29', '38', '37', '40', '34', '35', '36']
        if len(obj.mats.all()) == 0:
            return 'synth'
            
        return 'gather'
    class Meta:
        model = Item
        fields = [
            'id', 'name', 'desc',
            'fire', 'ice', 'bolt', 'air',
            'isDLC', 'resonance',
            'atk', 'dfn', 'spd', 'ct', 'aoe', 'comfort_goal',
            'mats', 'cats', 'rank', 'location', 'recipe', 'material',
            'mons', 'rare', 'quest', 'kind',
        ]

class A26RecipeCatSerializer(A26DefaultSerializer2):
    item = A26ItemSimpleSerializer()
    class Meta:
        model = Recipe
        fields = ['item']

class A26RecipeEffectCatSerializer(A26DefaultSerializer2):
    recipe = A26RecipeCatSerializer(source='recipe_set', many=True)
    class Meta:
        model = RecipeEffect
        fields = ['recipe']

class A26CategoryFullSerializer(A26DefaultSerializer2):
    name = serializers.SerializerMethodField()
    in_cat = serializers.SerializerMethodField() # A26ItemSimpleSerializer(source='item_set', many=True)
    used = A26RecipeEffectCatSerializer(source='recipeeffect_set', many=True)
    class Meta:
        model = Category
        fields = ['in_cat', 'used', 'name']
    def get_in_cat(self, obj):
        return A26ItemSimpleSerializer(obj.item_set.filter(hidden=False), context=self.context, many=True).data