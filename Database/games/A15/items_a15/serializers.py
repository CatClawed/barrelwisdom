from rest_framework import serializers
from collections import OrderedDict
from games.A15.items_a15.models import *
from games.A15.regions_a15.models import FieldEvent
from games.A15.regions_a15.serializers import A15RegionNameSerializer, A15FieldEventSerializer
from games.A15.monsters_a15.serializers import A15MonsterNameSerializer, A15MonsterLevelSerializer
from games.A15.properties_a15.serializers import A15PropertyNameSerializer
from games.A15.categories_a15.serializers import A15CategorySerializerName, A15CategorySerializer, A15CategorySerializerLink
from games.A15.effects_a15.serializers import A15EffectSerializerSimple

class A15ItemNameSerializer(serializers.ModelSerializer):
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
class A15IngredientSimpleSerializer(serializers.ModelSerializer):
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

class A15IngredientSerializer(serializers.ModelSerializer):
    item = A15ItemNameSerializer()
    category = A15CategorySerializerLink()
    class Meta:
        model = Ingredient
        fields = ['item', 'category', 'num']

    def to_representation(self, instance):
        result = super(A15IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A15CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name']

class A15CharacterEquipSerializer(serializers.ModelSerializer):
    chars = A15CharacterSerializer(many=True)
    class Meta:
        model = CharacterEquip
        fields = ['chars']

class A15EquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'atk', 'defen', 'spd', 'fire', 'water', 'wind', 'earth']

class A15DissasembleSerializer(serializers.ModelSerializer):
    dis = A15ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembly
        fields = ['dis']

class A15DissasembledSerializer(serializers.ModelSerializer):
    parent = A15ItemNameSerializer(many=True, read_only=True)
    class Meta:
        model = Disassembled
        fields = ['parent']

class A15ItemNameDisSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    disassembly_set = A15DissasembleSerializer(many=True)
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

class A15RelicSerializer(serializers.ModelSerializer):
    item = A15ItemNameDisSerializer()
    region = A15RegionNameSerializer()
    area = A15RegionNameSerializer(many=True)
    class Meta:
        model = Relic
        fields = ['region', 'area', 'item']

class A15RelicAreaSerializer(serializers.ModelSerializer):
    region = A15RegionNameSerializer()
    class Meta:
        model = Relic
        fields = ['region']

class A15EffectLineSerializer(serializers.ModelSerializer):
    effect = A15EffectSerializerSimple()
    class Meta:
        model = EffectLine
        fields = ['effect', 'elem', 'number', 'min_elem', 'max_elem']

class A15AreaDataSerializer(serializers.ModelSerializer):
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

class A15BookNameSerializer(serializers.ModelSerializer):
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

class A15ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A15CategorySerializerName(many=True)
    ingredient_set = A15IngredientSimpleSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['slugname', 'name', 'level', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'itype', 'isDLC', 'isDX', 'categories', 'ingredient_set']

    def to_representation(self, instance):
        result = super(A15ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        else:
            return obj.item_en.name

class A15ItemFullSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    locations = A15RegionNameSerializer(many=True)
    monsters = A15MonsterNameSerializer(many=True)
    properties = A15PropertyNameSerializer(many=True)
    categories = A15CategorySerializer(many=True)
    ingredient_set = A15IngredientSerializer(many=True)
    characterequip_set = A15CharacterEquipSerializer(read_only=True, many=True)
    equip_set = A15EquipSerializer(many=True)
    disassembly_set = A15DissasembleSerializer(many=True)
    disassembled_set = A15DissasembledSerializer(many=True)
    relic_set = A15RelicAreaSerializer(many=True)
    effectline_set = A15EffectLineSerializer(many=True)
    book_set = A15BookNameSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'desc', 'level', 'evalue', 'fire', 'water', 'wind', 'earth', 'effect', 'size', 'itype', 'isDLC', 'isDX', 'locations', 'monsters', 'properties', 'categories', 'ingredient_set', 'characterequip_set', 'equip_set', 'disassembly_set', 'disassembled_set', 'relic_set', 'effectline_set', 'book_set']

    def to_representation(self, instance):
        result = super(A15ItemFullSerializer, self).to_representation(instance)
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

class A15BookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    items = A15ItemNameSerializer(many=True)
    class Meta:
        model = Book
        fields = ['slugname', 'name', 'desc', 'items', 'acquisition']

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

class A15FieldEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = FieldEvent
        fields = ['name']

class A15AreaDataSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    items = A15ItemNameSerializer(many=True)
    rare = A15ItemNameSerializer(many=True)
    maxitem = A15ItemNameSerializer(many=True)
    fieldevent = A15FieldEventSerializer(many=True)
    monsters = A15MonsterNameSerializer(many=True)
    note = serializers.SerializerMethodField()
    class Meta:
        model = AreaData
        fields = ['slugname', 'name', 'subarea', 'items', 'rare', 'maxitem', 'fieldevent', 'monsters', 'note']

    def to_representation(self, instance):
        result = super(A15AreaDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.area.reg_en.name
        if self.context['language'] == 'ja':
            return obj.area.reg_ja.name
        else:
            return obj.area.reg_en.name
    def get_slugname(self,obj):
        return obj.area.slugname
    def get_note(self,obj):
        return obj.area.note


class A15RegionDataSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    areas = A15AreaDataSerializer(many=True)
    relic_set = A15RelicSerializer(many=True)
    strong = A15MonsterLevelSerializer(many=True)
    note = serializers.SerializerMethodField()
    grade = serializers.SerializerMethodField()

    class Meta:
        model = RegionData
        fields = ['slugname', 'name', 'areas', 'relic_set', 'strong', 'note', 'grade']
    def to_representation(self, instance):
        result = super(A15RegionDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.region.reg_en.name
        if self.context['language'] == 'ja':
            return obj.region.reg_ja.name
        else:
            return obj.region.reg_en.name
    def get_slugname(self,obj):
        return obj.region.slugname
    def get_note(self,obj):
        return obj.region.note
    def get_grade(self,obj):
        return obj.region.grade
