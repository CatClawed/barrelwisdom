from rest_framework import serializers
from collections import OrderedDict
from games.A16.items_a16.models import Item, EffectLines, EffectData, Ingredient, Disassembled, Disassembly, Book, Equip, Character, CharacterEquip
from games.A16.regions_a16.serializers import A16RegionNameSerializer
from games.A16.monsters_a16.serializers import A16MonsterNameSerializer
from games.A16.properties_a16.serializers import A16PropertySimpleSerializer
from games.A16.categories_a16.serializers import A16CategorySerializerName, A16CategorySerializer, A16CategorySerializerLink
from games.A16.effects_a16.serializers import A16EffectSerializerSimple
from games._helpers.serializer_helper import LegacyTranslatedField

class A16ItemNameSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    class Meta:
        model = Item
        fields = ['id', 'name']

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
            return {
                language: value
                for language, value in (
                    ('en', obj.item.item_en.name),
                    ('ja', obj.item.item_ja.name),
                )
                if value
            }
        else:
            return {
                language: value
                for language, value in (
                    ('en', obj.category.cat_en.name),
                    ('ja', obj.category.cat_ja.name),
                )
                if value
            }

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
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    disassembly_set = A16DissasembleSerializer(many=True)
    class Meta:
        model = Item
        fields = ['id', 'name', 'disassembly_set']

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
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    class Meta:
        model = Book
        fields = ['id', 'name']

class A16ItemSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    categories = A16CategorySerializerName(many=True)
    ingredient_set = A16IngredientSimpleSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['id', 'name', 'level', 'slots', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'kind', 'categories', 'ingredient_set']

    def to_representation(self, instance):
        result = super(A16ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
class A16ItemFullSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='item', field_name='desc')
    locations = A16RegionNameSerializer(many=True)
    monsters = A16MonsterNameSerializer(many=True)
    properties = A16PropertySimpleSerializer(many=True)
    categories = A16CategorySerializer(many=True)
    ingredients = A16IngredientSerializer(many=True, source='ingredient_set')
    chars = serializers.SerializerMethodField()
    stats = A16EquipSerializer(many=True, source='equip_set')
    disassembled_by = serializers.SerializerMethodField()
    disassembles_to = serializers.SerializerMethodField()
    effectlines = A16EffectLineSerializer(many=True, source='effectlines_set')
    book = A16BookNameSerializer(many=True, source='book_set')
    class Meta:
        model = Item
        fields = ['id', 'name', 'desc', 'level', 'slots', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'size', 'kind', 'locations', 'monsters', 'properties', 'categories', 'ingredients', 'chars', 'stats', 'disassembled_by', 'disassembles_to', 'effectlines', 'book', 'index']

    def to_representation(self, instance):
        result = super(A16ItemFullSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

    def get_disassembled_by(self, obj):
        all_items = []
        for entry in obj.disassembled_set.all():
            all_items.extend(list(entry.parent.all()))
        unique_items = list(set(all_items))
        return A16ItemNameSerializer(unique_items, many=True, context=self.context).data

    def get_disassembles_to(self, obj):
        all_items = []
        for entry in obj.disassembly_set.all():
            all_items.extend(entry.dis.all())
        return A16ItemNameSerializer(all_items, many=True, context=self.context).data

    def get_chars(self, obj):
        slugs = []
        for character_equip in obj.characterequip_set.all():
            slugs.extend(character.name for character in character_equip.chars.all())
        return list(set(slugs))

class A16BookSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='item', field_name='desc')
    items = A16ItemNameSerializer(many=True)
    class Meta:
        model = Book
        fields = ['id', 'name', 'desc', 'items', 'note', 'index']
