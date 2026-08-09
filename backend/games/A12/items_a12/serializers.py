from rest_framework import serializers
from collections import OrderedDict
from games.A12.items_a12.models import Item, EffectLine, Ingredient, Book, Equip, Character, CharacterEquip
from games.A12.regions_a12.serializers import A12RegionNameSerializer
from games.A12.monsters_a12.serializers import A12MonsterNameSerializer
from games.A12.traits_a12.serializers import A12TraitNameSerializer
from games.A12.categories_a12.serializers import A12CategorySerializerName, A12CategorySerializer, A12CategorySerializerLink
from games.A12.effects_a12.serializers import A12EffectSerializerSimple
from games._helpers.serializer_helper import LegacyTranslatedField

class A12ItemNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name']


class A12IngredientSerializer(serializers.ModelSerializer):
    item = A12ItemNameSerializer()
    category = A12CategorySerializerLink()
    class Meta:
        model = Ingredient
        fields = ['item', 'category', 'num']

    def to_representation(self, instance):
        result = super(A12IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items()
                           if v not in [None, [], '', False, {}])

class A12CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name']

class A12EquipSerializer(serializers.ModelSerializer):
    chars = A12CharacterSerializer(many=True)
    material = A12ItemNameSerializer(many=True)
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'lp', 'atk', 'defen', 'spd', 'chars', 'material']


class A12EffectLineSerializer(serializers.ModelSerializer):
    effect = A12EffectSerializerSimple()
    class Meta:
        model = EffectLine
        fields = ['effect', 'number', 'itemnum', 'min_elem', 'max_elem']
    def to_representation(self, instance):
        result = super(A12EffectLineSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items()
                           if v not in [None, [], '', False, {}])

class A12BookNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Book
        fields = ['id', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12ItemSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    categories = A12CategorySerializerLink(many=True)
    id = serializers.CharField(source="slug")

    class Meta:
        model = Item
        fields = ['id', 'name', 'level', 'categories', 'isDX', 'isDLC', 'item_type']

    def to_representation(self, instance):
        result = super(A12ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items()
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A12ItemFullSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    desc = LegacyTranslatedField(obj_prefix="item", field_name="desc")
    locations = A12RegionNameSerializer(many=True)
    monsters = A12MonsterNameSerializer(many=True)
    traits = A12TraitNameSerializer()
    categories = A12CategorySerializer(many=True)
    ingredient_set = A12IngredientSerializer(many=True)
    equip_set = A12EquipSerializer(many=True)
    effectline_set = A12EffectLineSerializer(many=True)
    book_set = A12BookNameSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = [
            'id', 'name', 'desc', 'note', 'level', 'locations',
            'monsters', 'traits', 'categories', 'ingredient_set', 'equip_set',
            'effectline_set', 'book_set', 'isDX', 'isDLC', 'time', 'mp', 'price',
            'uses', 'item_type', 'item_subtype', 'index'
        ]

    def to_representation(self, instance):
        result = super(A12ItemFullSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items()
                           if v not in [None, [], '', False, {}])


class A12BookSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="item", field_name="name")
    desc = LegacyTranslatedField(obj_prefix="item", field_name="desc")
    items = A12ItemNameSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Book
        fields = ['id', 'name', 'desc', 'items', 'note', 'isDLC', 'isDX', 'index']

