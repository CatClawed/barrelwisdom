from rest_framework import serializers
from games.BRSL.regions_brsl.models import Region, Area, DemonArea
from collections import OrderedDict
from games.BRSL.items_brsl.serializers import BRSLItemNameSerializer, BRSLDemonNameSerializer

class BRSLDemonAreaSerializer(serializers.ModelSerializer):
    demon = BRSLDemonNameSerializer()
    class Meta:
        model = DemonArea
        fields = ['demon','once']
    def to_representation(self, instance):
        result = super(BRSLDemonAreaSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [False])
        
class BRSLAreaSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    items = BRSLItemNameSerializer(many=True)
    demons = BRSLDemonAreaSerializer(many=True)
    class Meta:
        model = Area
        fields = ['slug', 'name', 'map', 'items', 'demons']
    def to_representation(self, instance):
        result = super(BRSLAreaSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.name.name_en
        if self.context['language'] == 'ja':
            return obj.name.name_ja
        if self.context['language'] == 'sc':
            return obj.name.name_sc
        if self.context['language'] == 'tc':
            return obj.name.name_tc
        else:
            return obj.name.name_en
        
class BRSLRegionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    areas = BRSLAreaSerializer(many=True)
    class Meta:
        model = Region
        fields = ['slug', 'name', 'areas']
    def to_representation(self, instance):
        result = super(BRSLRegionSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.name.name_en
        if self.context['language'] == 'ja':
            return obj.name.name_ja
        if self.context['language'] == 'sc':
            return obj.name.name_sc
        if self.context['language'] == 'tc':
            return obj.name.name_tc
        else:
            return obj.name.name_en