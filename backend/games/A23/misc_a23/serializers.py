from rest_framework import serializers
from games.A23.misc_a23.models import Character, Shop
from games.A23.monsters_a23.models import Monster
from collections import OrderedDict
from games.A23.items_a23.models import Item, Book

class A23CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['slug']
        
class A23ShopSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Shop
        fields = ['name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.shop_en
        if self.context['language'] == 'ja':
            return obj.shop_ja
        if self.context['language'] == 'ko':
            return obj.shop_ko
        if self.context['language'] == 'sc':
            return obj.shop_sc
        if self.context['language'] == 'tc':
            return obj.shop_tc
        else:
            return obj.shop_en
        
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
        
class A23ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name', 'isDLC']
    def to_representation(self, instance):
        result = super(A23ItemNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
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
        
class A23BookNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = ['slug', 'name']
    def to_representation(self, instance):
        result = super(A23BookNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
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