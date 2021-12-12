from rest_framework import serializers
from games.BRSL.items_brsl.serializers import BRSLItemNameSerializer, BRSLRegionNameSerializer
from games.BRSL.demons_brsl.models import Demon
from collections import OrderedDict
        
class BRSLDemonSimpleSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Demon
        fields = ['slug', 'name', 'isDLC']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.demon_en.name
        if self.context['language'] == 'ja':
            return obj.demon_ja.name
        if self.context['language'] == 'sc':
            return obj.demon_sc.name
        if self.context['language'] == 'tc':
            return obj.demon_tc.name
        else:
            return obj.demon_en.name
        
class BRSLDemonSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    region_set = BRSLRegionNameSerializer(many=True)
    drops = BRSLItemNameSerializer(many=True)
    class Meta:
        model = Demon
        fields = ['slug', 'name', 'desc', 'char', 'region_set', 'isDLC', 'vit', 'atk', 'dfn', 'slash', 'pierce', 'shock', 'tremor', 'warp', 'drops']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.demon_en.name
        if self.context['language'] == 'ja':
            return obj.demon_ja.name
        if self.context['language'] == 'sc':
            return obj.demon_sc.name
        if self.context['language'] == 'tc':
            return obj.demon_tc.name
        else:
            return obj.demon_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.demon_en.desc
        if self.context['language'] == 'ja':
            return obj.demon_ja.desc
        if self.context['language'] == 'sc':
            return obj.demon_sc.desc
        if self.context['language'] == 'tc':
            return obj.demon_tc.desc
        else:
            return obj.demon_en.desc
    def to_representation(self, instance):
        result = super(BRSLDemonSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
