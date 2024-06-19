from rest_framework import serializers
from games.A22.monsters_a22.models import Monster
from games.A22.items_a22.models import Item
from games.A22.locations_a22.serializers import A22LocationSerializer
from collections import OrderedDict

class A22ItemSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = ['slug', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item_en.name
        elif self.context['language'] == 'ja':
            return obj.item_ja.name
        elif self.context['language'] == 'ko':
            return obj.item_ko.name
        elif self.context['language'] == 'fr':
            return obj.item_fr.name
        elif self.context['language'] == 'sc':
            return obj.item_sc.name
        elif self.context['language'] == 'tc':
            return obj.item_tc.name
        else:
            return obj.item_en.name
    def to_representation(self, instance):
        result = super(A22ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

# Name only
class A22MonsterSerializerName(serializers.ModelSerializer):
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
        elif self.context['language'] == 'fr':
            return obj.mon_fr.name
        elif self.context['language'] == 'sc':
            return obj.mon_sc.name
        elif self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name

# For filtering
class A22MonsterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'montype', 'isDLC', 'size', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        elif self.context['language'] == 'ko':
            return obj.mon_ko.name
        elif self.context['language'] == 'fr':
            return obj.mon_fr.name
        elif self.context['language'] == 'sc':
            return obj.mon_sc.name
        elif self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name
    def to_representation(self, instance):
        result = super(A22MonsterSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])


# Full Details
class A22MonsterSerializerFull(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    drops = A22ItemSerializer(many=True)
    location = A22LocationSerializer(many=True)
    class Meta:
        model = Monster
        fields = ['slug', 'montype', 'isDLC', 'size', 'name', 'drops', 'location', 'resist_phys', 'resist_mag', 'resist_fire', 'resist_ice', 'resist_light', 'resist_wind', 'hp_rank', 'str_rank', 'def_rank', 'spd_rank', 'note', 'desc']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.name
        elif self.context['language'] == 'ja':
            return obj.mon_ja.name
        elif self.context['language'] == 'ko':
            return obj.mon_ko.name
        elif self.context['language'] == 'fr':
            return obj.mon_fr.name
        elif self.context['language'] == 'sc':
            return obj.mon_sc.name
        elif self.context['language'] == 'tc':
            return obj.mon_tc.name
        else:
            return obj.mon_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.mon_en.desc
        elif self.context['language'] == 'ja':
            return obj.mon_ja.desc
        elif self.context['language'] == 'ko':
            return obj.mon_ko.desc
        elif self.context['language'] == 'fr':
            return obj.mon_fr.desc
        elif self.context['language'] == 'sc':
            return obj.mon_sc.desc
        elif self.context['language'] == 'tc':
            return obj.mon_tc.desc
        else:
            return obj.mon_en.desc
    def to_representation(self, instance):
        result = super(A22MonsterSerializerFull, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
