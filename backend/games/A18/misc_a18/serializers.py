from rest_framework import serializers
from games.A18.misc_a18.models import Character, Shop, BasicText, AreaName, ItemMastery
from games.A18.monsters_a18.models import Monster
from collections import OrderedDict
from games.A18.items_a18.models import Item, ShopSlot
from games.A18.effects_traits_a18.models import Trait
from games._helpers.serializer_helper import DefaultSerializer


class A18ItemNameSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )

class A18MonsterNameSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )

class A18CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['slug']
        
class A18ShopSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Shop
        fields = ['slug', 'name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.shop_en,
            ja=obj.shop_ja,
            sc=obj.shop_sc,
            tc=obj.shop_tc,
        )

class A18ShopSlotSerializer(DefaultSerializer):
    item = A18ItemNameSerializer()
    class Meta:
        model = ShopSlot
        fields = ['item', 'random']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.shop_en,
            ja=obj.shop_ja,
            sc=obj.shop_sc,
            tc=obj.shop_tc,
        )

class A18ShopListSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    shopslots = A18ShopSlotSerializer(source='shopslot_set', many=True)
    class Meta:
        model = Shop
        fields = ['slug', 'name', 'shopslots']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.shop_en,
            ja=obj.shop_ja,
            sc=obj.shop_sc,
            tc=obj.shop_tc,
        )

class A18BasicTextSerializer(DefaultSerializer):
    class Meta:
        model = BasicText
        fields = ['name', 'desc1', 'desc2', 'desc3', 'desc4']

class A18ItemMasterySerializer(serializers.ModelSerializer):
    desc = serializers.SerializerMethodField()
    class Meta:
        model = ItemMastery
        fields = ['desc']
    def get_desc(self,obj):
       return DefaultSerializer.language_match(self,
            en=obj.desc_en,
            ja=obj.desc_ja,
            sc=obj.desc_sc,
            tc=obj.desc_tc,
        )

class A18AreaNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = AreaName
        fields = ['slug','name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )

class A18TraitNameSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slug', 'name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )