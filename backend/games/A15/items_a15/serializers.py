from rest_framework import serializers
from collections import OrderedDict
from games.A15.items_a15.models import Item, Ingredient, Disassembly, Disassembled, Character, CharacterEquip, Book, Equip, AreaData, RegionData, Relic, EffectLine
from games.A15.regions_a15.models import FieldEvent
from games.A15.regions_a15.serializers import A15RegionNameSerializer, A15FieldEventSerializer
from games.A15.monsters_a15.serializers import A15MonsterNameSerializer, A15MonsterLevelSerializer
from games.A15.properties_a15.serializers import A15PropertyNameSerializer
from games.A15.categories_a15.serializers import A15CategorySerializerName, A15CategorySerializer, A15CategorySerializerLink
from games.A15.effects_a15.serializers import A15EffectSerializerSimple
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField, LegacyTranslatedField

class A15ItemNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name']

# for easy filtering by ingredient
class A15IngredientSimpleSerializer(DefaultSerializer):
    ing = serializers.SerializerMethodField()
    class Meta:
        model = Ingredient
        fields = ['ing']

    def to_representation(self, instance):
        result = super(A15IngredientSimpleSerializer, self).to_representation(instance)
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

class A15IngredientSerializer(DefaultSerializer):
    item = A15ItemNameSerializer()
    category = A15CategorySerializerLink()
    class Meta:
        model = Ingredient
        fields = ['item', 'category', 'num']

class A15CharacterSerializer(DefaultSerializer):
    class Meta:
        model = Character
        fields = ['name']

class A15CharacterEquipSerializer(DefaultSerializer):
    chars = A15CharacterSerializer(many=True)
    class Meta:
        model = CharacterEquip
        fields = ['chars']

class A15EquipSerializer(DefaultSerializer):
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'atk', 'defen', 'spd', 'fire', 'water', 'wind', 'earth']

class A15DissasembleSerializer(DefaultSerializer):
    dis = A15ItemNameSerializer(many=True, read_only=True)

    class Meta:
        model = Disassembly
        fields = ['dis']

    def to_representation(self, instance):
        return A15ItemNameSerializer(instance.dis.all(), many=True, context=self.context).data
        

class A15DissasembledSerializer(DefaultSerializer):
    parent = A15ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembled
        fields = ['parent']
    def to_representation(self, instance):
        return A15ItemNameSerializer(instance.parent.all(), many=True, context=self.context).data

class A15ItemNameDisSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    disassembly_set = A15DissasembleSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name', 'disassembly_set']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A15RelicSerializer(DefaultSerializer):
    item = A15ItemNameDisSerializer()
    region = A15RegionNameSerializer()
    area = A15RegionNameSerializer(many=True)
    class Meta:
        model = Relic
        fields = ['region', 'area', 'item']

class A15RelicAreaSerializer(DefaultSerializer):
    region = A15RegionNameSerializer()
    class Meta:
        model = Relic
        fields = ['region']

class A15EffectLineSerializer(DefaultSerializer):
    effect = A15EffectSerializerSimple()
    class Meta:
        model = EffectLine
        fields = ['effect', 'elem', 'number', 'min_elem', 'max_elem']

class A15AreaDataSerializer(DefaultSerializer):
    monsters = A15MonsterNameSerializer(many=True)
    items = A15ItemNameSerializer(many=True)
    rare = A15ItemNameSerializer(many=True)
    maxitem = A15ItemNameSerializer(many=True)
    fieldevent = A15FieldEventSerializer(many=True)
    class Meta:
        model = AreaData
        fields = ['subarea', 'monsters', 'items', 'rare', 'maxitem', 'fieldevent']
    def to_representation(self, instance):
        result = super(A15AreaDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A15BookNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Book
        fields = ['id', 'name']


class A15ItemSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    categories = A15CategorySerializerName(many=True)
    ingredient_set = A15IngredientSimpleSerializer(many=True, read_only=True)
    id = serializers.CharField(source="slug")

    class Meta:
        model = Item
        fields = ['id', 'name', 'level', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'itype', 'isDLC', 'isDX', 'categories', 'ingredient_set']


class A15ItemFullSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='item', field_name='desc')
    locations = A15RegionNameSerializer(many=True)
    monsters = A15MonsterNameSerializer(many=True)
    properties = A15PropertyNameSerializer(many=True)
    categories = A15CategorySerializer(many=True)
    ingredients = A15IngredientSerializer(many=True, source="ingredient_set")
    chars = serializers.SerializerMethodField()
    stats = A15EquipSerializer(many=True, source="equip_set")
    disassembled_by = A15DissasembleSerializer(many=True, source="disassembly_set")
    disassembles_to = serializers.SerializerMethodField()
    relic_in = A15RelicAreaSerializer(many=True, source="relic_set")
    effectlines = A15EffectLineSerializer(many=True, source="effectline_set")
    book = A15BookNameSerializer(many=True, source="book_set")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name', 'desc', 'level', 'evalue',
            'fire', 'water', 'wind', 'earth', 'effect', 'size', 'itype',
            'isDLC', 'isDX', 'locations', 'monsters', 'properties',
            'categories', 'ingredients', 'chars', 'stats',
            'disassembled_by', 'disassembles_to', 'relic_in',
            'effectlines', 'book', 'index']
    def get_disassembles_to(self, obj):
        all_items = []
        for entry in obj.disassembled_set.all():
            all_items.extend(list(entry.parent.all()))
        unique_items = list(set(all_items))
        return A15ItemNameSerializer(unique_items, many=True, context=self.context).data
    
    def get_chars(self, obj):
        slugs = []
        for ce in obj.characterequip_set.all():
            slugs.extend([c.name for c in ce.chars.all()])
            
        return list(set(slugs))


class A15BookSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='item', field_name='name')
    desc = LegacyTranslatedField(obj_prefix='item', field_name='desc')
    items = A15ItemNameSerializer(many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Book
        fields = ['id', 'name', 'desc', 'items', 'acquisition', 'index']

class A15FieldEventSerializer(DefaultSerializer):
    class Meta:
        model = FieldEvent
        fields = ['name']

class A15AreaDataSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='area')
    id = serializers.SerializerMethodField()
    items = A15ItemNameSerializer(many=True)
    rare = A15ItemNameSerializer(many=True)
    maxitem = A15ItemNameSerializer(many=True)
    fieldevent = A15FieldEventSerializer(many=True)
    monsters = A15MonsterNameSerializer(many=True)
    note = serializers.SerializerMethodField()
    class Meta:
        model = AreaData
        fields = ['id', 'name', 'subarea', 'items', 'rare', 'maxitem', 'fieldevent', 'monsters', 'note']

    def get_id(self,obj):
        return obj.area.slug
    def get_note(self,obj):
        return obj.area.note


class A15RegionDataSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='region')
    id = serializers.SerializerMethodField()
    areas = A15AreaDataSerializer(many=True)
    relics = A15RelicSerializer(many=True, source="relic_set")
    strong = A15MonsterLevelSerializer(many=True)
    note = serializers.SerializerMethodField()
    grade = serializers.SerializerMethodField()

    class Meta:
        model = RegionData
        fields = ['id', 'name', 'areas', 'relics', 'strong', 'note', 'grade']

    def get_id(self,obj):
        return obj.region.slug
    def get_note(self,obj):
        return obj.region.note
    def get_grade(self,obj):
        return obj.region.grade
