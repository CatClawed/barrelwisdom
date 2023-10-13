from rest_framework import serializers
from games.A25.items_a25.models import Item, Material, CombatItem, Equipment, Recipe
from collections import OrderedDict
from games.A25.misc_a25.serializers import A25DefaultSerializer, A25TraitSimpleSerializer, A25ItemNameSerializer

class A25MaterialDetailSerializer(A25DefaultSerializer):
    color = serializers.CharField(source='color.slug', allow_null=True)
    traits = A25TraitSimpleSerializer(many=True)
    class Meta:
        model = Material
        fields = ['color', 'traits']

class A25MaterialListSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    material = A25MaterialDetailSerializer(source='material_set', many=True)
    class Meta:
        model =  Item
        fields = ['name', 'slug', 'rarity', 'material']

class A25EquipDetailSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Equipment
        fields = ['kind', 'val_good', 'val_bad']

class A25EquipSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Equipment
        fields = ['kind', 'val_good', 'val_bad',
            'good_hp', 'good_spd', 'good_patk', 'good_matk', 'good_pdef', 'good_mdef',
            'bad_hp', 'bad_spd', 'bad_patk', 'bad_matk', 'bad_pdef', 'bad_mdef',
        ]

class A25CombatDetailSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = CombatItem
        fields = ['kind', 'val_good', 'val_bad',]

class A25CombatSerializer(A25DefaultSerializer):
    kind = serializers.CharField(source='kind.slug')
    elem = serializers.CharField(source='elem.slug', allow_null=True)
    area = serializers.SerializerMethodField()
    class Meta:
        model = CombatItem
        fields = ['kind', 'area', 'uses', 'elem',
            'val_good', 'val_bad', 'pow_good', 'pow_bad',
        ]
    def get_area(self,obj):
        return A25DefaultSerializer.get_text(self,obj.area)

class A25SynthesisItemListSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    equip = A25EquipDetailSerializer(source='equipment_set', many=True)
    combat = A25CombatDetailSerializer(source='combatitem_set', many=True)
    ing = serializers.SerializerMethodField()
    class Meta:
        model =  Item
        fields = ['slug', 'name', 'desc', 'rarity', 'equip', 'combat', 'ing']
    def get_ing(self,obj):
        ings = obj.recipe_set.first()
        arr = []
        for thing in [ings.ing1, ings.ing2, ings.ing3]:
            if thing:
                arr.append(A25DefaultSerializer.get_name(self,thing))
        return arr

class A25RecipeSerializer(A25DefaultSerializer):
    ing = serializers.SerializerMethodField()
    unlocks = serializers.SerializerMethodField()
    colors = serializers.SerializerMethodField()
    chars = serializers.SerializerMethodField()
    class Meta:
        model = Recipe
        fields = ['book', 'unlocks', 'colors', 'chars','ing']
    def get_ing(self,obj):
        arr = []
        for thing in [[obj.quant1,obj.ing1], [obj.quant2, obj.ing2], [obj.quant3,obj.ing3]]:
            if thing[1]:
                arr.append([thing[0], thing[1].slug,
                    A25DefaultSerializer.get_text(self,thing[1].name)])
        return arr
    def get_unlocks(self,obj):
        arr = []
        for thing in [obj.unlock1, obj.unlock2, obj.unlock3]:
            if thing:
                arr.append(A25DefaultSerializer.get_text(self,thing))
        return arr
    def get_chars(self,obj):
        return [obj.char1.slug, obj.char2.slug, obj.char3.slug]
    def get_colors(self,obj):
        return [obj.color1.slug, obj.color2.slug, obj.color3.slug]

class A25ItemFullSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    material = A25MaterialDetailSerializer(source='material_set', many=True)
    recipe = A25RecipeSerializer(source='recipe_set', many=True)
    combat = A25CombatSerializer(source="combatitem_set", many=True)
    equip = A25EquipSerializer(source='equipment_set', many=True)
    class Meta:
        model = Item
        fields = [
            "slug", "name", "desc", "rarity",
            'material', 'equip', 'combat', 'recipe'
        ]
    def get_desc(self,obj):
        if obj.desc:
            return A25DefaultSerializer.get_desc(self,obj)

class A25RecipeBookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.CharField(source="item.slug")
    rarity = serializers.CharField(source="item.rarity")
    unlock1 = serializers.SerializerMethodField()
    unlock2 = serializers.SerializerMethodField()
    unlock3 = serializers.SerializerMethodField()
    class Meta:
        model = Recipe
        fields = ['name', 'slug', 'x', 'y', 'book', 'rarity',
            'unlock1', 'unlock2', 'unlock3'
        ]
    def get_unlock1(self,obj):
        if obj.unlock1:
            return A25DefaultSerializer.get_text(self,obj.unlock1)
    def get_unlock2(self,obj):
        if obj.unlock2:
            return A25DefaultSerializer.get_text(self,obj.unlock2)
    def get_unlock3(self,obj):
        if obj.unlock3:
            return A25DefaultSerializer.get_text(self,obj.unlock3)
    def get_name(self,obj):
        return A25DefaultSerializer.get_text(self,obj.item.name)
