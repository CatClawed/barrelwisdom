from rest_framework import serializers
from games.A23.monsters_a23.models import Monster
from games.A23.items_a23.models import Item
#from games.A23.regions_a23.models import Region
from collections import OrderedDict

class A23ItemSerializer(serializers.ModelSerializer):
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
        if self.context['language'] == 'fr':
            return obj.item_fr.name
        if self.context['language'] == 'sc':
            return obj.item_sc.name
        if self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def to_representation(self, instance):
        result = super(A23ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

# Name only
class A23MonsterSerializerName(serializers.ModelSerializer):
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
        if self.context['language'] == 'fr':
            return obj.mon_fr.name
        if self.context['language'] == 'sc':
            return obj.mon_sc.name
        if self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name

# For filtering
class A23MonsterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'kind', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        if self.context['language'] == 'ja':
            return obj.mon_ja.name
        if self.context['language'] == 'ko':
            return obj.mon_ko.name
        if self.context['language'] == 'fr':
            return obj.mon_fr.name
        if self.context['language'] == 'sc':
            return obj.mon_sc.name
        if self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name
    def to_representation(self, instance):
        result = super(A23MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])


# Full Details
class A23MonsterSerializerFull(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc1 = serializers.SerializerMethodField()
    desc2 = serializers.SerializerMethodField()
    desc3 = serializers.SerializerMethodField()
    desc4 = serializers.SerializerMethodField()
    char1 = serializers.CharField(source='char1.slug')
    char2 = serializers.CharField(source='char2.slug')
    char3 = serializers.SerializerMethodField()
    char4 = serializers.SerializerMethodField()
    drops = A23ItemSerializer(many=True)
    #region = A23Regionserializer(many=True)
    class Meta:
        model = Monster
        fields = ['slug', 'kind', 'name', 'drops',
                  'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_thun', 'resist_wind',
                  'hp_rank', 'str_rank', 'def_rank', 'spd_rank',
                  'desc1', 'desc2', 'desc3', 'desc4',
                  'char1', 'char2', 'char3', 'char4']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        if self.context['language'] == 'ja':
            return obj.mon_ja.name
        if self.context['language'] == 'ko':
            return obj.mon_ko.name
        if self.context['language'] == 'fr':
            return obj.mon_fr.name
        if self.context['language'] == 'sc':
            return obj.mon_sc.name
        if self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name
    def get_desc1(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc1
        if self.context['language'] == 'ja':
            return obj.mon_ja.desc1
        if self.context['language'] == 'ko':
            return obj.mon_ko.desc1
        if self.context['language'] == 'fr':
            return obj.mon_fr.desc1
        if self.context['language'] == 'sc':
            return obj.mon_sc.desc1
        if self.context['language'] == 'tc':
            return obj.mon_tc.desc1
        else:
            return obj.mon_en.desc1
    def get_desc2(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc2
        if self.context['language'] == 'ja':
            return obj.mon_ja.desc2
        if self.context['language'] == 'ko':
            return obj.mon_ko.desc2
        if self.context['language'] == 'fr':
            return obj.mon_fr.desc2
        if self.context['language'] == 'sc':
            return obj.mon_sc.desc2
        if self.context['language'] == 'tc':
            return obj.mon_tc.desc2
        else:
            return obj.mon_en.desc2
    def get_desc3(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc3
        if self.context['language'] == 'ja':
            return obj.mon_ja.desc3
        if self.context['language'] == 'ko':
            return obj.mon_ko.desc3
        if self.context['language'] == 'fr':
            return obj.mon_fr.desc3
        if self.context['language'] == 'sc':
            return obj.mon_sc.desc3
        if self.context['language'] == 'tc':
            return obj.mon_tc.desc3
        else:
            return obj.mon_en.desc3
    def get_desc4(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc4
        if self.context['language'] == 'ja':
            return obj.mon_ja.desc4
        if self.context['language'] == 'ko':
            return obj.mon_ko.desc4
        if self.context['language'] == 'fr':
            return obj.mon_fr.desc4
        if self.context['language'] == 'sc':
            return obj.mon_sc.desc4
        if self.context['language'] == 'tc':
            return obj.mon_tc.desc4
        else:
            return obj.mon_en.desc4
    def get_char3(self,obj):
        return obj.char3.slug if obj.char3 else None
    def get_char4(self,obj):
        return obj.char4.slug if obj.char4 else None
    def to_representation(self, instance):
        result = super(A23MonsterSerializerFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])