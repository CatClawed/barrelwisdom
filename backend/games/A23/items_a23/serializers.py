from rest_framework import serializers
from collections import OrderedDict
from games.A23.items_a23.models import Item, Category, Book, Equip
from games.A23.regions_a23.models import GatherItem2
from games.A23.traits_a23.models import Trait
from games.A23.monsters_a23.models import Monster
from games.A23.misc_a23.models import Character

class A23BookNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.book_en
        if self.context['language'] == 'ja':
            return obj.book_ja
        if self.context['language'] == 'ko':
            return obj.book_ko
        if self.context['language'] == 'sc':
            return obj.book_sc
        if self.context['language'] == 'tc':
            return obj.book_tc
        else:
            return obj.book_en

class A23TraitSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slug','name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.trait_en
        if self.context['language'] == 'ja':
            return obj.trait_ja
        if self.context['language'] == 'ko':
            return obj.trait_ko
        if self.context['language'] == 'sc':
            return obj.trait_sc
        if self.context['language'] == 'tc':
            return obj.trait_tc
        else:
            return obj.trait_en
        
    def get_slug(self,obj):
        return obj.node.climate.loc.parent.slug

class A23LocationSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    class Meta:
        model = GatherItem2
        fields = ['slug','name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.node.climate.loc.parent.reg_en
        if self.context['language'] == 'ja':
            return obj.node.climate.loc.parent.reg_ja
        if self.context['language'] == 'ko':
            return obj.node.climate.loc.parent.reg_ko
        if self.context['language'] == 'sc':
            return obj.node.climate.loc.parent.reg_sc
        if self.context['language'] == 'tc':
            return obj.node.climate.loc.parent.reg_tc
        else:
            return obj.node.climate.loc.parent.reg_en
        
    def get_slug(self,obj):
        return obj.node.climate.loc.parent.slug

class A23CharEquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['slug']
        
class A23EquipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equip
        fields = ['hp', 'mp', 'atk', 'dfn', 'spd']

class A23ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        if self.context['language'] == 'ko':
            return obj.item_ko.name
        if self.context['language'] == 'sc':
            return obj.item_sc.name
        if self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
        
class A23CategoryItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    items = A23ItemNameSerializer(source='item_set', many=True)
    class Meta:
        model = Category
        fields = ['slug', 'name', 'items']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en
        if self.context['language'] == 'ja':
            return obj.cat_ja
        if self.context['language'] == 'ko':
            return obj.cat_ko
        if self.context['language'] == 'sc':
            return obj.cat_sc
        if self.context['language'] == 'tc':
            return obj.cat_tc
        else:
            return obj.cat_en

class A23CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slug', 'name', 'icon']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en
        if self.context['language'] == 'ja':
            return obj.cat_ja
        if self.context['language'] == 'ko':
            return obj.cat_ko
        if self.context['language'] == 'sc':
            return obj.cat_sc
        if self.context['language'] == 'tc':
            return obj.cat_tc
        else:
            return obj.cat_en

class A23ItemListSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A23CategorySerializer(many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'categories', 'kind']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        if self.context['language'] == 'ko':
            return obj.item_ko.name
        if self.context['language'] == 'sc':
            return obj.item_sc.name
        if self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
        
class A23MonsterNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        if self.context['language'] == 'ja':
            return obj.mon_ja.name
        if self.context['language'] == 'ko':
            return obj.mon_ko.name
        if self.context['language'] == 'sc':
            return obj.mon_sc.name
        if self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name
        
class A23ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    categories = A23CategorySerializer(many=True)
    locations = A23LocationSerializer(many=True, source='gatheritem2_set')
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    desc3 = serializers.SerializerMethodField()
    desc4 = serializers.SerializerMethodField()
    char1 = serializers.CharField(source='char1.slug')
    char2 = serializers.CharField(source='char2.slug')
    char3 = serializers.SerializerMethodField()
    char4 = serializers.SerializerMethodField()
    chars = A23CharEquipSerializer(source='characterequip.chars', many=True)
    equip = A23EquipSerializer()
    book = A23BookNameSerializer(source='book_set', many=True)
    monsters = A23MonsterNameSerializer(source='monster_set', many=True)
    class Meta:
        model = Item
        fields = ['slug', 'name', 'kind', 'level',
                  'categories', 'locations', 'chars','equip','book','monsters',
                  'desc1', 'desc2', 'desc3', 'desc4',
                  'char1', 'char2', 'char3', 'char4']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        if self.context['language'] == 'ja':
            return obj.item_ja.name
        if self.context['language'] == 'ko':
            return obj.item_ko.name
        if self.context['language'] == 'sc':
            return obj.item_sc.name
        if self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def get_desc1(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc1
        if self.context['language'] == 'ja':
            return obj.item_ja.desc1
        if self.context['language'] == 'ko':
            return obj.item_ko.desc1
        if self.context['language'] == 'fr':
            return obj.item_fr.desc1
        if self.context['language'] == 'sc':
            return obj.item_sc.desc1
        if self.context['language'] == 'tc':
            return obj.item_tc.desc1
        else:
            return obj.item_en.desc1
    def get_desc2(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc2
        if self.context['language'] == 'ja':
            return obj.item_ja.desc2
        if self.context['language'] == 'ko':
            return obj.item_ko.desc2
        if self.context['language'] == 'fr':
            return obj.item_fr.desc2
        if self.context['language'] == 'sc':
            return obj.item_sc.desc2
        if self.context['language'] == 'tc':
            return obj.item_tc.desc2
        else:
            return obj.item_en.desc2
    def get_desc3(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc3
        if self.context['language'] == 'ja':
            return obj.item_ja.desc3
        if self.context['language'] == 'ko':
            return obj.item_ko.desc3
        if self.context['language'] == 'fr':
            return obj.item_fr.desc3
        if self.context['language'] == 'sc':
            return obj.item_sc.desc3
        if self.context['language'] == 'tc':
            return obj.item_tc.desc3
        else:
            return obj.item_en.desc3
    def get_desc4(self,obj):
        if 'language' not in self.context:
            return obj.item_en.desc4
        if self.context['language'] == 'ja':
            return obj.item_ja.desc4
        if self.context['language'] == 'ko':
            return obj.item_ko.desc4
        if self.context['language'] == 'fr':
            return obj.item_fr.desc4
        if self.context['language'] == 'sc':
            return obj.item_sc.desc4
        if self.context['language'] == 'tc':
            return obj.item_tc.desc4
        else:
            return obj.item_en.desc4
    def get_char3(self,obj):
        return obj.char3.slug if obj.char3 else None
    def get_char4(self,obj):
        return obj.char4.slug if obj.char4 else None
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
    class Meta:
        model = Book
        fields = ['slug', 'name', 'items', 'note', 'shop']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.book_en
        if self.context['language'] == 'ja':
            return obj.book_ja
        if self.context['language'] == 'ko':
            return obj.book_ko
        if self.context['language'] == 'sc':
            return obj.book_sc
        if self.context['language'] == 'tc':
            return obj.book_tc
        else:
            return obj.book_en
    def get_shop(self,obj):
        if 'language' not in self.context:
            return obj.shop.shop_en if obj.shop else None
        if self.context['language'] == 'ja':
            return obj.shop.shop_ja if obj.shop else None
        if self.context['language'] == 'ko':
            return obj.shop.shop_ko if obj.shop else None
        if self.context['language'] == 'sc':
            return obj.shop.shop_sc if obj.shop else None
        if self.context['language'] == 'tc':
            return obj.shop.shop_tc if obj.shop else None
        else:
            return obj.shop.shop_en if obj.shop else None
    def to_representation(self, instance):
        result = super(A23BookSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])