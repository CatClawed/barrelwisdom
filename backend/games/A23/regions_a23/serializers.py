from rest_framework import serializers
from games.A23.regions_a23.models import Region2, Climate2, GatherItem2, GatherNode2, Chest2
from collections import OrderedDict
from games.A23.misc_a23.serializers import A23MonsterNameSerializer, A23BookNameSerializer, A23ItemNameSerializer

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
        elif self.context['language'] == 'ja':
            return obj.item.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item.item_tc.name
        else:
            return obj.item.item_en.name
        
class A23GatherItemSimpleSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    class Meta:
        model = GatherItem2
        fields = ['slug', 'name']
    def get_slug(self,obj):
        return obj.item.slug
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item.item_ko.name
        elif self.context['language'] == 'sc':
            return obj.item.item_sc.name
        elif self.context['language'] == 'tc':
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
    mons = A23MonsterNameSerializer(many=True)
    class Meta:
        model = Climate2
        fields = ['map', 'weather', 'nodes', 'mons']
    def to_representation(self, instance):
        result = super(A23ClimateSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])
        
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
        elif self.context['language'] == 'ja':
            return obj.reg_ja
        elif self.context['language'] == 'ko':
            return obj.reg_ko
        elif self.context['language'] == 'sc':
            return obj.reg_sc
        elif self.context['language'] == 'tc':
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
        elif self.context['language'] == 'ja':
            return obj.reg_ja
        elif self.context['language'] == 'ko':
            return obj.reg_ko
        elif self.context['language'] == 'sc':
            return obj.reg_sc
        elif self.context['language'] == 'tc':
            return obj.reg_tc
        else:
            return obj.reg_en
        
class A23MajorGatheringSerializer(serializers.ModelSerializer):
    items = A23GatherItemSimpleSerializer(many=True, source='gatheritem2_set')
    region = serializers.SerializerMethodField()
    area = serializers.SerializerMethodField()
    weather = serializers.CharField(source='climate.weather')
    class Meta:
        model = GatherNode2
        fields = ['region', 'area', 'items', 'weather']
        
    def get_region(self,obj):
        if 'language' not in self.context:
            return obj.climate.loc.parent.reg_en
        elif self.context['language'] == 'ja':
            return obj.climate.loc.parent.reg_ja
        elif self.context['language'] == 'ko':
            return obj.climate.loc.parent.reg_ko
        elif self.context['language'] == 'sc':
            return obj.climate.loc.parent.reg_sc
        elif self.context['language'] == 'tc':
            return obj.climate.loc.parent.reg_tc
        else:
            return obj.climate.loc.parent.reg_en
    def get_area(self,obj):
        if 'language' not in self.context:
            return obj.climate.loc.reg_en
        elif self.context['language'] == 'ja':
            return obj.climate.loc.reg_ja
        elif self.context['language'] == 'ko':
            return obj.climate.loc.reg_ko
        elif self.context['language'] == 'sc':
            return obj.climate.loc.reg_sc
        elif self.context['language'] == 'tc':
            return obj.climate.loc.reg_tc
        else:
            return obj.climate.loc.reg_en
        
class A23MajorGatherSerializer(serializers.Serializer):
    fish = serializers.SerializerMethodField()
    shot = serializers.SerializerMethodField()
    hammer = serializers.SerializerMethodField()
    pickaxe = serializers.SerializerMethodField()
    net = serializers.SerializerMethodField()
    sickle = serializers.SerializerMethodField()
        
    def get_fish(self,obj):
        return A23MajorGatheringSerializer(obj.filter(tool='FISH'), many=True, context=self.context).data
    def get_shot(self,obj):
        return A23MajorGatheringSerializer(obj.filter(tool='SHOT'), many=True, context=self.context).data
    def get_hammer(self,obj):
        return A23MajorGatheringSerializer(obj.filter(tool='HAMMER'), many=True, context=self.context).data
    def get_pickaxe(self,obj):
        return A23MajorGatheringSerializer(obj.filter(tool='PICKAXE'), many=True, context=self.context).data
    def get_net(self,obj):
        return A23MajorGatheringSerializer(obj.filter(tool='NET'), many=True, context=self.context).data
    def get_sickle(self,obj):
        return A23MajorGatheringSerializer(obj.filter(tool='SICKLE'), many=True, context=self.context).data