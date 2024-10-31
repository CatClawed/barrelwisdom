from rest_framework import serializers
from collections import OrderedDict
from games.A16.items_a16.models import Item, EffectLines, EffectData, Ingredient, Disassembled, Disassembly, Book, Equip, Character, CharacterEquip
from games.A16.regions_a16.serializers import A16RegionNameSerializer
from games.A16.monsters_a16.serializers import A16MonsterNameSerializer
from games.A16.properties_a16.serializers import A16PropertyNameSerializer
from games.A16.categories_a16.serializers import A16CategorySerializerName, A16CategorySerializer, A16CategorySerializerLink
from games.A16.effects_a16.serializers import A16EffectSerializerSimple

class A16ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

# for easy filtering by ingredient
class A16IngredientSimpleSerializer(serializers.ModelSerializer):
    ing = serializers.SerializerMethodField()
    class Meta:
        model = Ingredient
        fields = ['ing']

    def to_representation(self, instance):
        result = super(A16IngredientSimpleSerializer, self).to_representation(instance)
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

class A16IngredientSerializer(serializers.ModelSerializer):
    item = A16ItemNameSerializer()
    category = A16CategorySerializerLink()
    class Meta:
        model = Ingredient
        fields = ['item', 'category', 'num']

    def to_representation(self, instance):
        result = super(A16IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A16CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name']

class A16CharacterEquipSerializer(serializers.ModelSerializer):
    chars = A16CharacterSerializer(many=True)
    class Meta:
        model = CharacterEquip
        fields = ['chars']

class A16EquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'atk', 'defen', 'spd']

class A16DissasembleSerializer(serializers.ModelSerializer):
    dis = A16ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembly
        fields = ['dis']

class A16DissasembledSerializer(serializers.ModelSerializer):
    parent = A16ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembled
        fields = ['parent']

class A16ItemNameDisSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    disassembly_set = A16DissasembleSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'disassembly_set']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A16EffectDataSerializer(serializers.ModelSerializer):
    effect = A16EffectSerializerSimple()
    class Meta:
        model = EffectData
        fields = ['effect', 'number', 'min_elem', 'max_elem']

class A16EffectLineSerializer(serializers.ModelSerializer):
    effects = A16EffectDataSerializer(many=True)
    class Meta:
        model = EffectLines
        fields = ['effects', 'elem', 'hidden', 'order']

class A16BookNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A16ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A16CategorySerializerName(many=True)
    ingredient_set = A16IngredientSimpleSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['slug', 'name', 'level', 'slots', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'kind', 'categories', 'ingredient_set']

    def to_representation(self, instance):
        result = super(A16ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A16ItemFullSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    locations = A16RegionNameSerializer(many=True)
    monsters = A16MonsterNameSerializer(many=True)
    properties = A16PropertyNameSerializer(many=True)
    categories = A16CategorySerializer(many=True)
    ingredient_set = A16IngredientSerializer(many=True)
    characterequip_set = A16CharacterEquipSerializer(read_only=True, many=True)
    equip_set = A16EquipSerializer(many=True)
    disassembly_set = A16DissasembleSerializer(many=True)
    disassembled_set = A16DissasembledSerializer(many=True)
    effectlines_set = A16EffectLineSerializer(many=True)
    book_set = A16BookNameSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'desc', 'level', 'slots', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'size', 'kind', 'locations', 'monsters', 'properties', 'categories', 'ingredient_set', 'characterequip_set', 'equip_set', 'disassembly_set', 'disassembled_set', 'effectlines_set', 'book_set']

    def to_representation(self, instance):
        result = super(A16ItemFullSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc
        else:
            return obj.item_en.desc

class A16BookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    items = A16ItemNameSerializer(many=True)
    class Meta:
        model = Book
        fields = ['slug', 'name', 'desc', 'items', 'note']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc
        else:
            return obj.item_en.desc
