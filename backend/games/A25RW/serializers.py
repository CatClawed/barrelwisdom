from rest_framework import serializers
from games._helpers.serializer_helper import DefaultSerializer, TranslatedTextField, create_simple_serializer
from games.A25RW.models import Category, Trait, Item, Enemy, Effect, EnemyArea, GatherData, Shop, ShopSlot, RecipeNode, ItemMix, Quest, Ingredient, Gift, RecipeTree

A25RWCategorySimpleSerializer = create_simple_serializer(Category)
A25RWItemSimpleSerializer = create_simple_serializer(Item, fields=['id', 'name', 'dlc'])
A25RWItemSimpleVisibleSerializer = create_simple_serializer(Item, fields=['id', 'name', 'visible', 'dlc'])
A25RWTraitSimpleSerializer = create_simple_serializer(Trait)

A25RWEnemySimpleSerializer = create_simple_serializer(Enemy,
    fields=['id', 'name', 'index', 'dlc'])

A25RWGiftSerializer = create_simple_serializer(Gift,
    fields = ['rc', 'lc',],
    auto_translated_fields = ['character'])

A25RWGatherDataSerializer = create_simple_serializer(GatherData,
    fields = ['tool', 'rank', 'floor_min', 'floor_max'],
    auto_translated_fields = ['area'])

A25RWEffectBasicSerializer = create_simple_serializer(Effect,
    auto_translated_fields = ['name', 'desc'],
    fields = ['id', 'dlc', 'usable', 'flag',
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
        fields = ['id', 'icon', 'gatherable', 'dlc',
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
            'val5_1', 'val5_2', 'val6_1', 'val6_2',
            'val7_1', 'val7_2', 'items'
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
        fields = ['id', 'dlc', 'index',
            'hp', 'atk', 'dfn', 'spd',
            'physical', 'magic', 'fire', 'ice', 'air', 'bolt',
            'blind', 'paralysis','poison','burn',
            'taunt', 'sleep', 'daze', 'frostbite',
            'areas', 'drops',
        ]

class A25RWShopSlotBasicSerializer(DefaultSerializer):
    name = TranslatedTextField(source='shop.name')
    class Meta:
        model = ShopSlot
        fields = [
            'name', 'id'
        ]

class A25RWShopSlotSerializer(DefaultSerializer):
    item = A25RWItemSimpleVisibleSerializer(read_only=True)
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

class A25RWBookSerializer(DefaultSerializer):
    areas = A25RWGatherDataSerializer(source='gatherdata_set', many=True, read_only=True)
    shop = A25RWShopSlotBasicSerializer(source='shopslot_set', many=True, read_only=True)
    class Meta:
        model = Item
        auto_translated_fields = ['name']
        fields = ['areas', 'shop']

class A25RWRecipeNodeSerializer(DefaultSerializer):
    ing = A25RWItemSimpleSerializer()
    recipe = A25RWItemSimpleSerializer()
    char = serializers.SerializerMethodField()
    class Meta:
        model = RecipeNode
        fields = [
            'ancient', 'ing', 'recipe', 'row', 'down', 'left', 'char',
        ]
    def get_char(self, obj):
        return obj.char.text_en if obj.char else None

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

class A25RWItemListSerializer(DefaultSerializer):
    categories = A25RWCategorySimpleSerializer(many=True, read_only=True)
    add = A25RWCategorySimpleSerializer(many=True, read_only=True)
    colors = serializers.SerializerMethodField()
    class Meta:
        model = Item
        auto_translated_fields = ['name']
        fields = ['id', 'icon', 'dlc', 'categories', 'add', 'colors',]
    def get_colors(self, obj):
        if not obj.c1l:
            return
        elif obj.c2l:
            return [
                {'l': obj.c1l, 'r': obj.c1r},
                {'l': obj.c2l, 'r': obj.c2r},
                {'l': obj.c3l, 'r': obj.c3r},
                {'l': obj.c4l, 'r': obj.c4r},
                {'l': obj.c5l, 'r': obj.c5r},
            ]
        return [
            {'l': obj.c1l, 'r': obj.c1r},
        ]

class A25RWItemSerializer(DefaultSerializer):
    categories = serializers.SerializerMethodField()
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
    colors = serializers.SerializerMethodField()

    class Meta:
        model = Item
        auto_translated_fields = ['name',
            'char1', 'char2', 'char3', 'char4',
            'desc1', 'desc2', 'desc3', 'desc4',
        ]
        fields = ['id', 'icon', 'dlc', 'categories', 'add', 'effects', 'colors',
            'quantity', 'uses', 'areas', 'book', 'trait', 'shop', 'drop',
            'tree', 'mix', 'quest', 'recipe',
        ]
    def get_tree(self, obj):
        if not hasattr(obj, 'recipenode'):
            return
        return A25RWRecipeNodeSerializer(obj.recipenode.tree_model.recipenode_set.filter(hide=False), many=True, context=self.context).data
    def get_colors(self, obj):
        if not obj.c1l:
            return
        elif obj.c2l:
            return [
                {'l': obj.c1l, 'r': obj.c1r},
                {'l': obj.c2l, 'r': obj.c2r},
                {'l': obj.c3l, 'r': obj.c3r},
                {'l': obj.c4l, 'r': obj.c4r},
                {'l': obj.c5l, 'r': obj.c5r},
            ]
        return [
            {'l': obj.c1l, 'r': obj.c1r},
        ]
    def get_categories(self, obj):
        # Serialize standard categories (add: False)
        cats = A25RWCategorySimpleSerializer(obj.categories.all(), many=True, context=self.context).data
        for cat in cats:
            cat['add'] = False

        # Serialize 'add' categories (add: True)
        adds = A25RWCategorySimpleSerializer(obj.add.all(), many=True, context=self.context).data
        for add in adds:
            add['add'] = True

        # Combine both lists
        return cats + adds

class A25RWCategorySerializer(DefaultSerializer):
    in_cat = serializers.SerializerMethodField()
    used = serializers.SerializerMethodField()

    class Meta:
        model = Category
        auto_translated_fields = ['name']
        fields = ['in_cat', 'used', 'name']

    def get_in_cat(self, obj):
        items = [item for item in obj.item_set.filter(visible=True)]
        items_data = A25RWItemSimpleSerializer(items, many=True, context=self.context).data

        add_items = [item for item in obj.addcat.all()]
        add_data = A25RWItemSimpleSerializer(add_items, many=True, context=self.context).data
        for item in add_data:
            item['add'] = True

        return items_data + add_data

    def get_used(self, obj):
        # Using a set to ensure unique items if an item appears in multiple ingredients
        items = {ing.item for ing in obj.ingredient_set.all() if ing.item}
        return A25RWItemSimpleSerializer(list(items), many=True, context=self.context).data

