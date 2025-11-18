from rest_framework import serializers
from games._helpers.serializer_helper import DefaultSerializer, TranslatedTextField, create_simple_serializer
from games.A25RW.models import Category, Trait, Item, Enemy, Effect, EnemyArea, GatherData, Shop, ShopSlot, RecipeNode, ItemMix, Quest, Ingredient, Gift, RecipeTree

A25RWCategorySimpleSerializer = create_simple_serializer(Category)
A25RWItemSimpleSerializer = create_simple_serializer(Item)
A25RWTraitSimpleSerializer = create_simple_serializer(Trait)

A25RWEnemySimpleSerializer = create_simple_serializer(Enemy,
    fields=['id', 'name', 'index'])

A25RWGiftSerializer = create_simple_serializer(Gift,
    fields = ['rc', 'lc',],
    auto_translated_fields = ['character'])

A25RWGatherDataSerializer = create_simple_serializer(GatherData,
    fields = ['tool', 'rank', 'floor_min', 'floor_max'],
    auto_translated_fields = ['area'])

A25RWEffectBasicSerializer = create_simple_serializer(Effect,
    auto_translated_fields = ['name', 'desc'],
    fields = ['id', 'dlc', 'usable',
        'val1_1', 'val1_2', 'val2_1', 'val2_2',
        'val3_1', 'val3_2', 'val4_1', 'val4_2',
        'val5_1', 'val5_2',])

A25RWEnemyAreaSerializer = create_simple_serializer(EnemyArea,
        auto_translated_fields = ['area'],
        fields = ['floor_min', 'floor_max'])

A25RWQuestSerializer = create_simple_serializer(Quest,
        auto_translated_fields = ['name', 'char'],
        fields = [])

class A25RWTraitSerializer(DefaultSerializer):
    combo1 = A25RWTraitSimpleSerializer()
    combo2 = A25RWTraitSimpleSerializer()
    item = A25RWItemSimpleSerializer()
    gift = A25RWGiftSerializer(source='gift_set', many=True, read_only=True)
    class Meta:
        model = Trait
        auto_translated_fields = ['name', 'desc']
        fields = ['id', 'icon', 'gatherable',
            'syn', 'com', 'res', 'inh', 'boo',
            'wep', 'arm', 'acc', 'sta', 'exp',
            'val1_1', 'val1_2', 'val2_1', 'val2_2',
            'grade','combo1', 'combo2', 'item', 'gift',
        ]

class A25RWEffectSerializer(DefaultSerializer):
    items = A25RWItemSimpleSerializer(source='item_set', many=True, read_only=True)
    class Meta:
        model = Effect
        auto_translated_fields = ['name', 'desc']
        fields = ['id', 'dlc', 'usable',
            'val1_1', 'val1_2', 'val2_1', 'val2_2',
            'val3_1', 'val3_2', 'val4_1', 'val4_2',
            'val5_1', 'val5_2', 'items'
        ]

class A25RWEnemySerializer(DefaultSerializer):
    drops = A25RWItemSimpleSerializer(many=True, read_only=True)
    areas = A25RWEnemyAreaSerializer(source='enemyarea_set', many=True, read_only=True)
    class Meta:
        model = Enemy
        auto_translated_fields = ['name', 'race',
            'char1', 'char2', 'char3', 'char4',
            'desc1', 'desc2', 'desc3', 'desc4',
        ]
        fields = ['id',
            'hp', 'atk', 'dfn', 'spd',
            'physical', 'magic', 'fire', 'ice', 'air', 'bolt',
            'blind', 'paralysis','poison','burn',
            'taunt', 'sleep', 'daze', 'frostbite',
            'areas', 'drops',
        ]

class A25RWBookSerializer(DefaultSerializer):
    areas = A25RWGatherDataSerializer(source='gatherdata_set', many=True, read_only=True)
    class Meta:
        model = Item
        auto_translated_fields = ['name']
        fields = ['areas']

class A25RWShopSlotBasicSerializer(DefaultSerializer):
    name = TranslatedTextField(source='shop.name')
    class Meta:
        model = ShopSlot
        fields = [
            'name'
        ]

class A25RWShopSlotSerializer(DefaultSerializer):
    item = A25RWItemSimpleSerializer(read_only=True)
    class Meta:
        model = ShopSlot
        fields = [
            'item', 'price', 'grade', 'level_min', 'level_max',
        ]

class A25RWShopSerializer(DefaultSerializer):
    slots = A25RWShopSlotSerializer(source='shopslot_set', many=True, read_only=True)
    class Meta:
        model = Shop
        auto_translated_fields = ['name']
        fields = [
            'slots',
        ]

class A25RWRecipeNodeSerializer(DefaultSerializer):
    ing = A25RWItemSimpleSerializer()
    recipe = A25RWItemSimpleSerializer()
    class Meta:
        model = RecipeNode
        auto_translated_fields = ['char']
        fields = [
            'ancient', 'ing', 'recipe', 'row', 'down', 'left',
        ]

class A25RWRecipeTreeSerializer(DefaultSerializer):
    nodes = A25RWRecipeNodeSerializer(source='recipenode_set', many=True, read_only=True)
    class Meta:
        model = RecipeTree
        auto_translated_fields = ['name']
        fields = [
            'nodes'
        ]

class A25RWItemMixSerializer(DefaultSerializer):
    combo = A25RWItemSimpleSerializer(many=True, read_only=True)
    class Meta:
        model = ItemMix
        auto_translated_fields = ['name']
        fields = [
            'combo',
        ]

class A25RWRecipeSerializer(DefaultSerializer):
    cat = A25RWCategorySimpleSerializer()
    ing = A25RWItemSimpleSerializer()
    class Meta:
        model = Ingredient
        fields = ['cat', 'ing']

class A25RWIngredientSerializer(serializers.Field):
    def to_representation(self, ingredient_instance):
        return A25RWItemSimpleSerializer(
            instance=ingredient_instance.item,
            read_only=True,
            context=self.context # Pass the context explicitly
        ).data

class A25RWItemListSerializer(DefaultSerializer):
    categories = A25RWCategorySimpleSerializer(many=True, read_only=True)
    add = A25RWCategorySimpleSerializer(many=True, read_only=True)
    class Meta:
        model = Item
        auto_translated_fields = ['name']
        fields = ['id', 'icon', 'dlc', 'categories', 'add',
            'c1l', 'c1r', 'c2l', 'c2r', 'c3l', 'c3r', 'c4l', 'c4r', 'c5l', 'c5r',
        ]

class A25RWItemSerializer(DefaultSerializer):
    categories = A25RWCategorySimpleSerializer(many=True, read_only=True)
    add = A25RWCategorySimpleSerializer(many=True, read_only=True)
    areas = A25RWGatherDataSerializer(source='gatherdata_set', many=True, read_only=True)
    book = A25RWBookSerializer()
    effects = A25RWEffectBasicSerializer(many=True, read_only=True)
    trait = A25RWTraitSimpleSerializer()
    shop = A25RWShopSlotBasicSerializer(source='shopslot_set', many=True, read_only=True)
    tree = serializers.SerializerMethodField()
    recipe = A25RWRecipeSerializer(many=True, read_only=True)
    mix = A25RWItemMixSerializer(source='itemmix_set', many=True, read_only=True)
    quest = A25RWQuestSerializer(source='quest_set', many=True, read_only=True)
    drop = A25RWEnemySimpleSerializer(source='enemy_set', many=True)

    class Meta:
        model = Item
        auto_translated_fields = ['name',
            'char1', 'char2', 'char3', 'char4',
            'desc1', 'desc2', 'desc3', 'desc4',
        ]
        fields = ['id', 'icon', 'dlc', 'categories', 'add', 'effects',
            'c1l', 'c1r', 'c2l', 'c2r', 'c3l', 'c3r', 'c4l', 'c4r', 'c5l', 'c5r',
            'quantity', 'uses', 'areas', 'book', 'trait', 'shop', 'drop',
            'tree', 'mix', 'quest', 'recipe',
        ]
    def get_tree(self, obj):
        if not hasattr(obj, 'recipenode'):
            return
        return A25RWRecipeNodeSerializer(obj.recipenode.tree_model.recipenode_set.all(), many=True, context=self.context).data

class A25RWCategorySerializer(DefaultSerializer):
    items = A25RWItemSimpleSerializer(source='item_set', many=True, read_only=True)
    addcat = A25RWItemSimpleSerializer(many=True, read_only=True)
    used = serializers.ListSerializer(
        child=A25RWIngredientSerializer(),
        source='ingredient_set', read_only=True
    )
    class Meta:
        model = Category
        auto_translated_fields = ['name']
        fields = ['items', 'addcat', 'used']
