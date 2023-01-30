from unicodedata import name
from rest_framework import serializers
from collections import OrderedDict
from games.A23.items_a23.models import Item, Category, Book, Equip, Component, RecipeText, RecipeIdea, EffectData, EffectLines, Ingredient
from games.A23.regions_a23.models import GatherItem2, Chest2
from games.A23.traits_a23.models import Trait
from games.A23.effects_a23.models import Effect
from games.A23.misc_a23.serializers import A23BookNameSerializer, A23CharacterSerializer, A23ItemNameSerializer, A23MonsterNameSerializer

class A23TraitSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slug','name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en.name
        elif self.context['language'] == 'ja':
            return obj.trait_ja.name
        elif self.context['language'] == 'ko':
            return obj.trait_ko.name
        elif self.context['language'] == 'sc':
            return obj.trait_sc.name
        elif self.context['language'] == 'tc':
            return obj.trait_tc.name
        else:
            return obj.trait_en.name
    def get_slug(self,obj):
        return obj.slug
    
class A23ComponentSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Component
        fields = ['code', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.com_en
        elif self.context['language'] == 'ja':
            return obj.com_ja
        elif self.context['language'] == 'ko':
            return obj.com_ko
        elif self.context['language'] == 'sc':
            return obj.com_sc
        elif self.context['language'] == 'tc':
            return obj.com_tc
        else:
            return obj.com_en
    def to_representation(self, instance):
        result = super(A23ComponentSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class A23RecipeTextSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    class Meta:
        model = RecipeText
        fields = ['text']
    def get_text(self,obj):
        if 'language' not in self.context:
            return obj.text_en
        elif self.context['language'] == 'ja':
            return obj.text_ja
        elif self.context['language'] == 'ko':
            return obj.text_ko
        elif self.context['language'] == 'sc':
            return obj.text_sc
        elif self.context['language'] == 'tc':
            return obj.text_tc
        else:
            return obj.text_en
    def to_representation(self, instance):
        result = super(A23RecipeTextSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A23LocationSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    class Meta:
        model = GatherItem2
        fields = ['slug','name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.node.climate.loc.parent.reg_en
        elif self.context['language'] == 'ja':
            return obj.node.climate.loc.parent.reg_ja
        elif self.context['language'] == 'ko':
            return obj.node.climate.loc.parent.reg_ko
        elif self.context['language'] == 'sc':
            return obj.node.climate.loc.parent.reg_sc
        elif self.context['language'] == 'tc':
            return obj.node.climate.loc.parent.reg_tc
        else:
            return obj.node.climate.loc.parent.reg_en
        
    def get_slug(self,obj):
        return obj.node.climate.loc.parent.slug
        
class A23EquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'atk', 'dfn', 'spd']
        
class A23CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slug', 'name', 'icon']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en
        elif self.context['language'] == 'ja':
            return obj.cat_ja
        elif self.context['language'] == 'ko':
            return obj.cat_ko
        elif self.context['language'] == 'sc':
            return obj.cat_sc
        elif self.context['language'] == 'tc':
            return obj.cat_tc
        else:
            return obj.cat_en

class A23IngredientSerializer(serializers.ModelSerializer):
    item = A23ItemNameSerializer()
    cat = A23CategorySerializer()
    class Meta:
        model = Ingredient
        fields =['quantity', 'cat', 'item']
    def to_representation(self, instance):
        result = super(A23IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v is not None)
        
class A23IngredientItemSerializer(serializers.ModelSerializer):
    synth = A23ItemNameSerializer()
    class Meta:
        model = Ingredient
        fields =['synth']
        
class A23CategoryItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    items = A23ItemNameSerializer(source='item_set', many=True)
    add = A23ItemNameSerializer(source='add_categories', many=True)
    used = A23IngredientItemSerializer(source='ingredient_set', many=True)
    class Meta:
        model = Category
        fields = ['slug', 'name', 'items', 'used', 'add']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en
        elif self.context['language'] == 'ja':
            return obj.cat_ja
        elif self.context['language'] == 'ko':
            return obj.cat_ko
        elif self.context['language'] == 'sc':
            return obj.cat_sc
        elif self.context['language'] == 'tc':
            return obj.cat_tc
        else:
            return obj.cat_en
        
class A23IngredientNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Ingredient
        fields =['name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item.item_en.name if obj.item else obj.cat.cat_en
        elif self.context['language'] == 'ja':
            return obj.item.item_ja.name if obj.item else obj.cat.cat_ja
        elif self.context['language'] == 'ko':
            return obj.item.item_ko.name if obj.item else obj.cat.cat_ko
        elif self.context['language'] == 'sc':
            return obj.item.item_sc.name if obj.item else obj.cat.cat_sc
        elif self.context['language'] == 'tc':
            return obj.item.item_tc.name if obj.item else obj.cat.cat_tc
        else:
            return obj.item.item_en.name if obj.item else obj.cat.cat_en

class A23ItemListSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A23CategorySerializer(many=True)
    add = A23CategorySerializer(many=True)
    ing = A23IngredientNameSerializer(many=True, source='ingredients')
    class Meta:
        model = Item
        fields = ['slug', 'name', 'categories','add', 'kind', 'ing', 'isDLC']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def to_representation(self, instance):
        result = super(A23ItemListSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class A23EffectNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        elif self.context['language'] == 'ja':
            return obj.eff_ja.name
        elif self.context['language'] == 'ko':
            return obj.eff_ko.name
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
        elif self.context['language'] == 'ko':
            return obj.eff_ko.desc
        elif self.context['language'] == 'sc':
            return obj.eff_sc.desc
        elif self.context['language'] == 'tc':
            return obj.eff_tc.desc
        else:
            return obj.eff_en.desc

class A23EffectDataSerializer(serializers.ModelSerializer):
    effect = A23EffectNameSerializer()
    component = A23ComponentSerializer()
    class Meta:
        model = EffectData
        fields = ['effect', 'component', 'num']
    def to_representation(self, instance):
        result = super(A23EffectDataSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class A23EffectLinesSerializer(serializers.ModelSerializer):
    data = A23EffectDataSerializer(many=True, source='effectdata_set')
    class Meta:
        model = EffectLines
        fields = ['elem', 'order', 'maxlv', 'restrict', 'data']
    def to_representation(self, instance):
        result = super(A23EffectLinesSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class A23ChestSerializer(serializers.ModelSerializer):
    region = serializers.SerializerMethodField()
    subregion = serializers.SerializerMethodField()
    class Meta:
        model = Chest2
        fields = ['region', 'subregion']
    def get_region(self,obj):
        if 'language' not in self.context:
            return obj.loc.parent.reg_en
        elif self.context['language'] == 'ja':
            return obj.loc.parent.reg_ja
        elif self.context['language'] == 'ko':
            return obj.loc.parent.reg_ko
        elif self.context['language'] == 'sc':
            return obj.loc.parent.reg_sc
        elif self.context['language'] == 'tc':
            return obj.loc.parent.reg_tc
        else:
            return obj.loc.parent.reg_en
    def get_subregion(self,obj):
        if 'language' not in self.context:
            return obj.loc.reg_en
        elif self.context['language'] == 'ja':
            return obj.loc.reg_ja
        elif self.context['language'] == 'ko':
            return obj.loc.reg_ko
        elif self.context['language'] == 'sc':
            return obj.loc.reg_sc
        elif self.context['language'] == 'tc':
            return obj.loc.reg_tc
        else:
            return obj.loc.reg_en
           
class A23ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A23CategorySerializer(many=True)
    add = A23CategorySerializer(many=True)
    locations = A23LocationSerializer(many=True, source='gatheritem2_set')
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    desc3 = serializers.SerializerMethodField()
    desc4 = serializers.SerializerMethodField()
    char  = serializers.SerializerMethodField()
    char1 = serializers.CharField(source='char1.slug')
    char2 = serializers.CharField(source='char2.slug')
    char3 = serializers.SerializerMethodField()
    char4 = serializers.SerializerMethodField()
    chars = A23CharacterSerializer(source='characterequip.chars', many=True)
    equip = A23EquipSerializer()
    book = A23BookNameSerializer(source='book_set', many=True)
    monsters = A23MonsterNameSerializer(source='monster_set', many=True)
    components = A23ComponentSerializer(many=True)
    traits = A23TraitSerializer(many=True)
    ideas = A23RecipeTextSerializer(many=True, source="recipetext_set")
    ingredient = A23IngredientSerializer(many=True, source='ingredients')
    effects = A23EffectLinesSerializer(many=True, source='effectlines_set')
    shop = serializers.SerializerMethodField()
    chest = A23ChestSerializer(many=True, source="chest2_set")
    seed = A23ItemNameSerializer(source="from_seed")
    class Meta:
        model = Item
        fields = ['slug', 'name', 'kind', 'level','price','shop','chest','isDLC',
                  'wt','range','quantity','uses','ingredient',
                  'categories', 'add', 'locations', 'chars','equip','effects',
                  'book','monsters','components','traits','ideas','seed',
                  'desc1', 'desc2', 'desc3', 'desc4',
                  'char1', 'char2', 'char3', 'char4', 'char']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def get_desc1(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc1
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc1
        elif self.context['language'] == 'ko':
            return obj.item_ko.desc1
        elif self.context['language'] == 'fr':
            return obj.item_fr.desc1
        elif self.context['language'] == 'sc':
            return obj.item_sc.desc1
        elif self.context['language'] == 'tc':
            return obj.item_tc.desc1
        else:
            return obj.item_en.desc1
    def get_desc2(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc2
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc2
        elif self.context['language'] == 'ko':
            return obj.item_ko.desc2
        elif self.context['language'] == 'fr':
            return obj.item_fr.desc2
        elif self.context['language'] == 'sc':
            return obj.item_sc.desc2
        elif self.context['language'] == 'tc':
            return obj.item_tc.desc2
        else:
            return obj.item_en.desc2
    def get_desc3(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc3
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc3
        elif self.context['language'] == 'ko':
            return obj.item_ko.desc3
        elif self.context['language'] == 'fr':
            return obj.item_fr.desc3
        elif self.context['language'] == 'sc':
            return obj.item_sc.desc3
        elif self.context['language'] == 'tc':
            return obj.item_tc.desc3
        else:
            return obj.item_en.desc3
    def get_desc4(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc4
        elif self.context['language'] == 'ja':
            return obj.item_ja.desc4
        elif self.context['language'] == 'ko':
            return obj.item_ko.desc4
        elif self.context['language'] == 'fr':
            return obj.item_fr.desc4
        elif self.context['language'] == 'sc':
            return obj.item_sc.desc4
        elif self.context['language'] == 'tc':
            return obj.item_tc.desc4
        else:
            return obj.item_en.desc4
    def get_char(self,obj):
        return obj.char.slug if obj.char else None
    def get_char3(self,obj):
        return obj.char3.slug if obj.char3 else None
    def get_char4(self,obj):
        return obj.char4.slug if obj.char4 else None
    def get_shop(self,obj):
        if 'language' not in self.context:
            return obj.shop.shop_en if obj.shop else None
        elif self.context['language'] == 'ja':
            return obj.shop.shop_ja if obj.shop else None
        elif self.context['language'] == 'ko':
            return obj.shop.shop_ko if obj.shop else None
        elif self.context['language'] == 'sc':
            return obj.shop.shop_sc if obj.shop else None
        elif self.context['language'] == 'tc':
            return obj.shop.shop_tc if obj.shop else None
        else:
            return obj.shop.shop_en if obj.shop else None
    def to_representation(self, instance):
        result = super(A23ItemSerializer, self).to_representation(instance)
        res = []
        for r in result['locations']:
            if r not in res:
                res.append(r)
        result['locations'] = res
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A23BookSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    items = A23ItemNameSerializer(many=True)
    shop = serializers.SerializerMethodField()
    chest = A23ChestSerializer(many=True, source="chest2_set")
    class Meta:
        model = Book
        fields = ['slug', 'name', 'items', 'note', 'shop', 'chest', 'isDLC']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.book_en
        elif self.context['language'] == 'ja':
            return obj.book_ja
        elif self.context['language'] == 'ko':
            return obj.book_ko
        elif self.context['language'] == 'sc':
            return obj.book_sc
        elif self.context['language'] == 'tc':
            return obj.book_tc
        else:
            return obj.book_en
    def get_shop(self,obj):
        if 'language' not in self.context:
            return obj.shop.shop_en if obj.shop else None
        elif self.context['language'] == 'ja':
            return obj.shop.shop_ja if obj.shop else None
        elif self.context['language'] == 'ko':
            return obj.shop.shop_ko if obj.shop else None
        elif self.context['language'] == 'sc':
            return obj.shop.shop_sc if obj.shop else None
        elif self.context['language'] == 'tc':
            return obj.shop.shop_tc if obj.shop else None
        else:
            return obj.shop.shop_en if obj.shop else None
    def to_representation(self, instance):
        result = super(A23BookSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
        
class A23BookSimpleSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    shop = serializers.SerializerMethodField()
    chest = A23ChestSerializer(many=True, source="chest2_set")
    class Meta:
        model = Book
        fields = ['slug', 'name', 'note', 'shop', 'chest']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.book_en
        elif self.context['language'] == 'ja':
            return obj.book_ja
        elif self.context['language'] == 'ko':
            return obj.book_ko
        elif self.context['language'] == 'sc':
            return obj.book_sc
        elif self.context['language'] == 'tc':
            return obj.book_tc
        else:
            return obj.book_en
    def get_shop(self,obj):
        if 'language' not in self.context:
            return obj.shop.shop_en if obj.shop else None
        elif self.context['language'] == 'ja':
            return obj.shop.shop_ja if obj.shop else None
        elif self.context['language'] == 'ko':
            return obj.shop.shop_ko if obj.shop else None
        elif self.context['language'] == 'sc':
            return obj.shop.shop_sc if obj.shop else None
        elif self.context['language'] == 'tc':
            return obj.shop.shop_tc if obj.shop else None
        else:
            return obj.shop.shop_en if obj.shop else None
    def to_representation(self, instance):
        result = super(A23BookSimpleSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

class A23ItemRecipeSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    ideas = A23RecipeTextSerializer(many=True, source="recipetext_set")
    book = A23BookSimpleSerializer(source='book_set', many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'ideas', 'book']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
        
class A23RecipeIdeaSerializer(serializers.ModelSerializer):
    char = serializers.CharField(source='char.slug')
    item = A23ItemRecipeSerializer()
    class Meta:
        model = RecipeIdea
        fields = ['row', 'col', 'hor', 'ver', 'char', 'item']
        
class A23SeedSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    items = A23ItemNameSerializer(source='seedset', many=True)
    class Meta:
        model = Item
        fields = ['name', 'slug', 'items']
        
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def get_slug(self,obj):
        return obj.slug