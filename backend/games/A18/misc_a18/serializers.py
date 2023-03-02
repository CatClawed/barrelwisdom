from rest_framework import serializers
from games.A18.misc_a18.models import Character, Shop
#from games.A18.monsters_a18.models import Monster
from collections import OrderedDict
#from games.A18.items_a18.models import Item, Book

class A18CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['slug']
        
class A18ShopSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Shop
        fields = ['name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.shop_en
        elif self.context['language'] == 'ja':
            return obj.shop_ja
        elif self.context['language'] == 'sc':
            return obj.shop_sc
        elif self.context['language'] == 'tc':
            return obj.shop_tc
        else:
            return obj.shop_en
"""
class A18MonsterNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        elif self.context['language'] == 'ko':
            return obj.mon_ko.name
        elif self.context['language'] == 'sc':
            return obj.mon_sc.name
        elif self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name
        
class A18ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name', 'isDLC']
    def to_representation(self, instance):
        result = super(A18ItemNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
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
        
class A18BookNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = ['slug', 'name']
    def to_representation(self, instance):
        result = super(A18BookNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
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
"""