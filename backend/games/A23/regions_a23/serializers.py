from rest_framework import serializers
from games.A23.regions_a23.models import Region2, Climate2, GatherItem2, GatherNode2, Chest2
from collections import OrderedDict
from games.A23.items_a23.models import Item, Book

class A23GatherItemSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    class Meta:
        model = GatherItem2
        fields = ['rank', 'priority', 'slug', 'name']
    def get_slug(self,obj):
        return obj.item.slug
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item.item_en.name
        if self.context['language'] == 'ja':
            return obj.item.item_ja.name
        if self.context['language'] == 'ko':
            return obj.item.item_ko.name
        if self.context['language'] == 'sc':
            return obj.item.item_sc.name
        if self.context['language'] == 'tc':
            return obj.item.item_tc.name
        else:
            return obj.item.item_en.name

class A23GatherNodeSerializer(serializers.ModelSerializer):
    items = A23GatherItemSerializer(many=True, source='gatheritem2_set')
    class Meta:
        model = GatherNode2
        fields = ['kind', 'tool', 'items']

class A23ClimateSerializer(serializers.ModelSerializer):
    nodes = A23GatherNodeSerializer(many=True, source='gathernode2_set')
    class Meta:
        model = Climate2
        fields = ['map', 'weather', 'nodes']
    def to_representation(self, instance):
        result = super(A23ClimateSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
class A23ItemNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']
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
        model = Item
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
        
class A23ChestSerializer(serializers.ModelSerializer):
    item = A23ItemNameSerializer()
    book = A23BookNameSerializer()
    class Meta:
        model = Chest2
        fields = ['item', 'book']
    def to_representation(self, instance):
        result = super(A23ChestSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
class A23SubRegionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    climate = A23ClimateSerializer(many=True, source='climate2_set')
    chests = A23ChestSerializer(many=True, source="chest2_set")
    class Meta:
        model = Region2
        fields = ['slug', 'name', 'climate', 'chests']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.reg_en
        if self.context['language'] == 'ja':
            return obj.reg_ja
        if self.context['language'] == 'ko':
            return obj.reg_ko
        if self.context['language'] == 'sc':
            return obj.reg_sc
        if self.context['language'] == 'tc':
            return obj.reg_tc
        else:
            return obj.reg_en
    def to_representation(self, instance):
        result = super(A23SubRegionSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
class A23RegionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    areas = A23SubRegionSerializer(source='child', many=True)
    class Meta:
        model = Region2
        fields = ['slug', 'name', 'areas']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.reg_en
        if self.context['language'] == 'ja':
            return obj.reg_ja
        if self.context['language'] == 'ko':
            return obj.reg_ko
        if self.context['language'] == 'sc':
            return obj.reg_sc
        if self.context['language'] == 'tc':
            return obj.reg_tc
        else:
            return obj.reg_en