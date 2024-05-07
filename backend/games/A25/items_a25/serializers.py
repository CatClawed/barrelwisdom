from rest_framework import serializers
from games.A25.items_a25.models import Item, Material, CombatItem, Equipment, Recipe, LatestUpdate, LatestUpdateGBL, RecipeTab, RecipePage
from collections import OrderedDict
from games.A25.misc_a25.serializers import A25DefaultSerializer, A25TraitSimpleSerializer
from games.A25.chara_a25.serializers import A25CharaUpdateSerializer, A25MemoriaListSerializer
from games.A25.quest_a25.serializers import A25ItemRewardSerializer

class A25ItemNameSerializer(A25DefaultSerializer):
    name  = serializers.SerializerMethodField()
    slug = serializers.CharField(source='item.slug')
    class Meta:
        model = Item
        fields = ['slug', 'name']
    def get_name(self,obj):
        return A25DefaultSerializer.get_text_gbl(self,obj.item.name,obj.item.gbl)

class A25MaterialDetailSerializer(A25DefaultSerializer):
    color = serializers.CharField(source='color.slug', allow_null=True)
    traits = A25TraitSimpleSerializer(many=True)
    class Meta:
        model = Material
        fields = ['color', 'traits']

class A25MaterialDetailSynthSerializer(A25DefaultSerializer):
    color = serializers.CharField(source='color.slug', allow_null=True)
    traits = A25TraitSimpleSerializer(many=True)
    ing = serializers.SerializerMethodField()
    class Meta:
        model = Material
        fields = ['color', 'traits', 'ing']
    def get_ing(self,obj):
        # one little context line cost me hours of grief
        return A25ItemNameSerializer(obj.item.ing1.all() | obj.item.ing2.all()
            | obj.item.ing3.all(), many=True, context=self.context).data

class A25MaterialListSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    material = A25MaterialDetailSerializer(source='material_set', many=True)
    limit = serializers.SerializerMethodField()
    class Meta:
        model =  Item
        fields = ['name', 'slug', 'rarity', 'material', 'limit']
    def get_limit(self, obj):
        if obj.limit:
            return A25DefaultSerializer.get_text_gbl(self,obj.limit,obj.gbl)

class A25EquipDetailSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Equipment
        fields = ['kind', 'val_good', 'val_bad', 'val2_good', 'val2_bad']

class A25EquipSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Equipment
        fields = ['kind', 'val_good', 'val_bad', 'val2_good', 'val2_bad',
            'good_hp', 'good_spd', 'good_patk', 'good_matk', 'good_pdef', 'good_mdef',
            'bad_hp', 'bad_spd', 'bad_patk', 'bad_matk', 'bad_pdef', 'bad_mdef',
        ]

class A25CombatDetailSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = CombatItem
        fields = ['kind', 'val_good', 'val_bad', 'val2_good', 'val2_bad']

class A25CombatSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    elem = serializers.CharField(source='elem.slug', allow_null=True)
    area = serializers.SerializerMethodField()
    class Meta:
        model = CombatItem
        fields = ['kind', 'area', 'uses', 'elem',
            'val_good', 'val_bad', 'pow_good', 'pow_bad', 'val2_good', 'val2_bad',
        ]
    def get_area(self,obj):
        return A25DefaultSerializer.get_text(self,obj.area)

class A25SynthesisItemListSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    limit = serializers.SerializerMethodField()
    equip = A25EquipDetailSerializer(source='equipment_set', many=True)
    combat = A25CombatDetailSerializer(source='combatitem_set', many=True)
    ing = serializers.SerializerMethodField()
    colors = serializers.SerializerMethodField()
    class Meta:
        model =  Item
        fields = ['slug', 'name', 'desc', 'limit', 'rarity', 'equip', 'combat',
            'ing', 'colors']
    def get_ing(self,obj):
        ings = obj.recipe_set.first()
        arr = []
        for thing in [ings.ing1, ings.ing2, ings.ing3]:
            if thing:
                arr.append(A25DefaultSerializer.get_name(self,thing))
        return arr
    def get_limit(self, obj):
        if obj.limit:
            return A25DefaultSerializer.get_text_gbl(self,obj.limit,obj.gbl)
    def get_colors(self,obj):
        rec = obj.recipe_set.all()[0]
        return [rec.color1.slug, rec.color2.slug, rec.color3.slug]

class A25RecipeSerializer(A25DefaultSerializer):
    ing = serializers.SerializerMethodField()
    unlocks = serializers.SerializerMethodField()
    colors = serializers.SerializerMethodField()
    class Meta:
        model = Recipe
        fields = ['book', 'unlocks', 'colors', 'ing']
    def get_ing(self,obj):
        arr = []
        for thing in [[obj.quant1,obj.ing1], [obj.quant2, obj.ing2], [obj.quant3,obj.ing3]]:
            if thing[1]:
                arr.append([thing[0], thing[1].slug,
                    A25DefaultSerializer.get_text_gbl(self,thing[1].name,obj.item.gbl)])
        return arr
    def get_unlocks(self,obj):
        arr = []
        for thing in [obj.unlock1, obj.unlock2, obj.unlock3]:
            if thing:
                arr.append(A25DefaultSerializer.get_text_gbl(self,thing,obj.item.gbl))
        return arr
    def get_colors(self,obj):
        return [obj.color1.slug, obj.color2.slug, obj.color3.slug]

class A25ItemFullSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    material = A25MaterialDetailSynthSerializer(source='material_set', many=True)
    recipe = A25RecipeSerializer(source='recipe_set', many=True)
    combat = A25CombatSerializer(source="combatitem_set", many=True)
    equip = A25EquipSerializer(source='equipment_set', many=True)
    quest = A25ItemRewardSerializer(source='reward_set', many=True)
    limit = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = [
            "slug", "name", "desc", "rarity", 'quest', 'note', 'gbl',
            'material', 'equip', 'combat', 'recipe', 'limit'
        ]
    def get_desc(self,obj):
        if obj.desc:
            return A25DefaultSerializer.get_desc(self,obj)
    def get_limit(self, obj):
        if obj.limit:
            return A25DefaultSerializer.get_text(self,obj.limit)

class A25ItemUpdateSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Item
        fields = [
            "slug", "name", "kind"
        ]
    def get_desc(self,obj):
        if obj.desc:
            return A25DefaultSerializer.get_desc(self,obj)


class A25RecipeBookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.CharField(source="item.slug")
    rarity = serializers.CharField(source="item.rarity")
    unlocks = serializers.SerializerMethodField()
    class Meta:
        model = Recipe
        fields = ['name', 'slug', 'x', 'y', 'book', 'rarity',
            'unlocks'
        ]
    def get_unlocks(self,obj):
        arr = []
        for thing in [obj.unlock1, obj.unlock2, obj.unlock3]:
            if thing:
                arr.append(A25DefaultSerializer.get_text(self,thing))
        return arr
    def get_name(self,obj):
        return A25DefaultSerializer.get_text(self,obj.item.name)

class A25RecipePageSerializer(A25DefaultSerializer):
    desc = serializers.SerializerMethodField()
    recipes = A25RecipeBookSerializer(many=True, source='recipe_set')
    class Meta:
        model = RecipePage
        fields = ['desc', 'min_x', 'max_x', 'recipes', 'gbl']
    def get_desc(self,obj):
        if obj.desc:
            return super().get_desc(obj)

class A25RecipeTabSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    pages = A25RecipePageSerializer(many=True, source='recipepage_set')
    class Meta:
        model = RecipePage
        fields = ['name', 'pages']

class A25LatestUpdateSerializer(A25DefaultSerializer):
    memoria = A25MemoriaListSerializer(many=True)
    characters = A25CharaUpdateSerializer(many=True)
    items = A25ItemUpdateSerializer(many=True)
    class Meta:
        model = LatestUpdate
        fields = ['time', 'characters', 'items', 'memoria']

class A25LatestUpdateGBLSerializer(A25DefaultSerializer):
    memoria = A25MemoriaListSerializer(many=True)
    characters = A25CharaUpdateSerializer(many=True)
    items = A25ItemUpdateSerializer(many=True)
    class Meta:
        model = LatestUpdateGBL
        fields = ['time', 'characters', 'items', 'memoria']