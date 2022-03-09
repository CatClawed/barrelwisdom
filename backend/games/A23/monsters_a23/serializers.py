from rest_framework import serializers
from games.A23.monsters_a23.models import Monster
from games.A23.items_a23.models import Item
from games.A23.regions_a23.models import Climate2
from collections import OrderedDict
from games.A23.misc_a23.serializers import A23ItemNameSerializer


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


class A23LocationSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()
    class Meta:
        model = Climate2
        fields = ['slug','name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.loc.parent.reg_en
        if self.context['language'] == 'ja':
            return obj.loc.parent.reg_ja
        if self.context['language'] == 'ko':
            return obj.loc.parent.reg_ko
        if self.context['language'] == 'sc':
            return obj.loc.parent.reg_sc
        if self.context['language'] == 'tc':
            return obj.loc.parent.reg_tc
        else:
            return obj.loc.parent.reg_en
        
    def get_slug(self,obj):
        return obj.loc.parent.slug

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
    drops = A23ItemNameSerializer(many=True)
    locations = A23LocationSerializer(many=True, source='climate2_set')
    class Meta:
        model = Monster
        fields = ['slug', 'kind', 'name', 'drops','locations',
                  'resist_phys', 'resist_mag', 'resist_fire',
                  'resist_ice', 'resist_thun', 'resist_wind',
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
        res = []
        for r in result['locations']:
            if r not in res:
                res.append(r)
        result['locations'] = res
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])