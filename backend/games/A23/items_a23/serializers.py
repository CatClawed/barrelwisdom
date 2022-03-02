"""

from rest_framework import serializers
from collections import OrderedDict
from games.A23.items_a23.models import Item, EffectLines, EffectData, Ingredient, Disassembled, Disassembly, Book, Equip, Character, CharacterEquip
from games.A23.regions_a23.serializers import A23RegionNameSerializer
from games.A23.monsters_a23.serializers import A23MonsterNameSerializer
from games.A23.properties_a23.serializers import A23PropertyNameSerializer
from games.A23.categories_a23.serializers import A23CategorySerializerName, A23CategorySerializer, A23CategorySerializerLink
from games.A23.effects_a23.serializers import A23EffectSerializerSimple

class A23ItemNameSerializer(serializers.ModelSerializer):
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
class A23IngredientSimpleSerializer(serializers.ModelSerializer):
    ing = serializers.SerializerMethodField()
    class Meta:
        model = Ingredient
        fields = ['ing']

    def to_representation(self, instance):
        result = super(A23IngredientSimpleSerializer, self).to_representation(instance)
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

class A23IngredientSerializer(serializers.ModelSerializer):
    item = A23ItemNameSerializer()
    category = A23CategorySerializerLink()
    class Meta:
        model = Ingredient
        fields = ['item', 'category', 'num']

    def to_representation(self, instance):
        result = super(A23IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A23CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name']

class A23CharacterEquipSerializer(serializers.ModelSerializer):
    chars = A23CharacterSerializer(many=True)
    class Meta:
        model = CharacterEquip
        fields = ['chars']

class A23EquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'atk', 'defen', 'spd']

class A23DissasembleSerializer(serializers.ModelSerializer):
    dis = A23ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembly
        fields = ['dis']

class A23DissasembledSerializer(serializers.ModelSerializer):
    parent = A23ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembled
        fields = ['parent']

class A23ItemNameDisSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    disassembly_set = A23DissasembleSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'disassembly_set']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A23EffectDataSerializer(serializers.ModelSerializer):
    effect = A23EffectSerializerSimple()
    class Meta:
        model = EffectData
        fields = ['effect', 'number', 'min_elem', 'max_elem']

class A23EffectLineSerializer(serializers.ModelSerializer):
    effects = A23EffectDataSerializer(many=True)
    class Meta:
        model = EffectLines
        fields = ['effects', 'elem', 'hidden', 'order']

class A23BookNameSerializer(serializers.ModelSerializer):
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

class A23ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A23CategorySerializerName(many=True)
    ingredient_set = A23IngredientSimpleSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['slugname', 'name', 'level', 'slots', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'kind', 'categories', 'ingredient_set']

    def to_representation(self, instance):
        result = super(A23ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A23ItemFullSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    locations = A23RegionNameSerializer(many=True)
    monsters = A23MonsterNameSerializer(many=True)
    properties = A23PropertyNameSerializer(many=True)
    categories = A23CategorySerializer(many=True)
    ingredient_set = A23IngredientSerializer(many=True)
    characterequip_set = A23CharacterEquipSerializer(read_only=True, many=True)
    equip_set = A23EquipSerializer(many=True)
    disassembly_set = A23DissasembleSerializer(many=True)
    disassembled_set = A23DissasembledSerializer(many=True)
    effectlines_set = A23EffectLineSerializer(many=True)
    book_set = A23BookNameSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'desc', 'level', 'slots', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'size', 'kind', 'locations', 'monsters', 'properties', 'categories', 'ingredient_set', 'characterequip_set', 'equip_set', 'disassembly_set', 'disassembled_set', 'effectlines_set', 'book_set']

    def to_representation(self, instance):
        result = super(A23ItemFullSerializer, self).to_representation(instance)
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

class A23BookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    items = A23ItemNameSerializer(many=True)
    class Meta:
        model = Book
        fields = ['slugname', 'name', 'desc', 'items', 'note']

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
"""