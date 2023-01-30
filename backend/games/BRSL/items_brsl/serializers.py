from rest_framework import serializers
from games.BRSL.items_brsl.models import EffLine, EffData, Ingredient, Item, Effect, SkillLine, Unit, Category, UsableItem
from games.BRSL.regions_brsl.models import Region, Area
from games.BRSL.demons_brsl.models import Demon
from collections import OrderedDict

class BRSLRegionNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Region
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.name.name_en
        elif self.context['language'] == 'ja':
            return obj.name.name_ja
        elif self.context['language'] == 'sc':
            return obj.name.name_sc
        elif self.context['language'] == 'tc':
            return obj.name.name_tc
        else:
            return obj.name.name_en

class BRSLAreaParentSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    class Meta:
        model = Area
        fields = ['slug', 'name']
    def get_slug(self,obj):
        return Region.objects.filter(areas__slug=obj.slug).first().slug
    def get_name(self,obj):
        if 'language' not in self.context:
            return Region.objects.filter(areas__slug=obj.slug).first().name.name_en
        elif self.context['language'] == 'ja':
            return Region.objects.filter(areas__slug=obj.slug).first().name.name_ja
        elif self.context['language'] == 'sc':
            return Region.objects.filter(areas__slug=obj.slug).first().name.name_sc
        elif self.context['language'] == 'tc':
            return Region.objects.filter(areas__slug=obj.slug).first().name.name_tc
        else:
            return Region.objects.filter(areas__slug=obj.slug).first().name.name_en
        
class BRSLEffectSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['name', 'desc', 'attTag0','actTag0','min_1_0','max_1_0','min_2_0','max_2_0','actTag1','min_1_1','max_1_1']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'sc':
            return obj.eff_sc.name
        elif self.context['language'] == 'tc':
            return obj.eff_tc.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.desc
        elif self.context['language'] == 'ja':
            return obj.eff_ja.desc
        elif self.context['language'] == 'sc':
            return obj.eff_sc.desc
        elif self.context['language'] == 'tc':
            return obj.eff_tc.desc
        else:
            return obj.eff_en.desc
    def to_representation(self, instance):
        result = super(BRSLEffectSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class BRSLUnitSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Unit
        fields = ['name', 'desc', 'char1','char2','char3','char4']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.unit_en.name
        elif self.context['language'] == 'ja':
            return obj.unit_ja.name
        elif self.context['language'] == 'sc':
            return obj.unit_sc.name
        elif self.context['language'] == 'tc':
            return obj.unit_tc.name
        else:
            return obj.unit_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.unit_en.desc
        elif self.context['language'] == 'ja':
            return obj.unit_ja.desc
        elif self.context['language'] == 'sc':
            return obj.unit_sc.desc
        elif self.context['language'] == 'tc':
            return obj.unit_tc.desc
        else:
            return obj.unit_en.desc
        
class BRSLCategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en
        elif self.context['language'] == 'ja':
            return obj.cat_ja
        elif self.context['language'] == 'sc':
            return obj.cat_sc
        elif self.context['language'] == 'tc':
            return obj.cat_tc
        else:
            return obj.cat_en

class BRSLItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
        
class BRSLEffectDataSerializer(serializers.ModelSerializer):
    effect = BRSLEffectSerializer()
    class Meta:
        model = EffData
        fields = ['effect', 'number']
        
class BRSLEffectLineSerializer(serializers.ModelSerializer):
    effectdata = BRSLEffectDataSerializer(many=True)
    line = serializers.SerializerMethodField()
    class Meta:
        model = EffLine
        fields = ['line', 'effectdata']
    def get_line(self,obj):
        if 'language' not in self.context:
            return obj.linename.line_en
        elif self.context['language'] == 'ja':
            return obj.linename.line_ja
        elif self.context['language'] == 'sc':
            return obj.linename.line_sc
        elif self.context['language'] == 'tc':
            return obj.linename.line_tc
        else:
            return obj.linename.line_en
        
class BRSLSkillLineSerializer(serializers.ModelSerializer):
    effect1 = BRSLEffectSerializer()
    effect2 = BRSLEffectSerializer()
    effect3 = BRSLEffectSerializer()
    line = serializers.SerializerMethodField()
    class Meta:
        model = SkillLine
        fields = ['effect1','effect2','effect3','line']
    def get_line(self,obj):
        if 'language' not in self.context:
            return obj.linename.line_en
        elif self.context['language'] == 'ja':
            return obj.linename.line_ja
        elif self.context['language'] == 'sc':
            return obj.linename.line_sc
        elif self.context['language'] == 'tc':
            return obj.linename.line_tc
        else:
            return obj.linename.line_en
        
class BRSLIngredientSerializer(serializers.ModelSerializer):
    item = BRSLItemNameSerializer()
    category = BRSLCategorySerializer()
    class Meta:
        model = Ingredient
        fields = ['num', 'item', 'category']
    def to_representation(self, instance):
        result = super(BRSLIngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class BRSLDemonNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Demon
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.demon_en.name
        elif self.context['language'] == 'ja':
            return obj.demon_ja.name
        elif self.context['language'] == 'sc':
            return obj.demon_sc.name
        elif self.context['language'] == 'tc':
            return obj.demon_tc.name
        else:
            return obj.demon_en.name
        
class BRSLItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    region_set = BRSLRegionNameSerializer(many=True)
    category = BRSLCategorySerializer(many=True)
    effline_set = BRSLEffectLineSerializer(many=True)
    skillline_set = BRSLSkillLineSerializer(many=True)
    ingredient_set = BRSLIngredientSerializer(many=True)
    demon_set = BRSLDemonNameSerializer(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'desc', 'note', 'itemtype', 'char', 'isDLC', 'region_set', 'category','ingredient_set','effline_set','skillline_set', 'demon_set']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc
        elif self.context['language'] == 'sc':
            return obj.item_sc.desc
        elif self.context['language'] == 'tc':
            return obj.item_tc.desc
        else:
            return obj.item_en.desc

    def to_representation(self, instance):
        result = super(BRSLItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class BRSLSimpleItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    category = BRSLCategorySerializer(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'itemtype', 'isDLC','category']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def to_representation(self, instance):
        result = super(BRSLSimpleItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])