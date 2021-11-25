from rest_framework import serializers
from games.BRSL.fragments_brsl.models import Event, Character, Choice, Fragment, SchoolLocations
from collections import OrderedDict


class BRSLCharacterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Character
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.char_en
        if self.context['language'] == 'ja':
            return obj.char_ja
        if self.context['language'] == 'sc':
            return obj.char_sc
        if self.context['language'] == 'tc':
            return obj.char_tc
        else:
            return obj.char_en

class BRSLFragmentSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    eff = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Fragment
        fields = ['size', 'gear', 'name', 'eff', 'desc', 'actTag0', 'min1_0', 'max1_0', 'min2_0', 'max2_0', 'actTag1', 'min1_1', 'max1_1' ]
    
    def to_representation(self, instance):
        result = super(BRSLFragmentSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.frag_en.name
        if self.context['language'] == 'ja':
            return obj.frag_ja.name
        if self.context['language'] == 'sc':
            return obj.frag_sc.name
        if self.context['language'] == 'tc':
            return obj.frag_tc.name
        else:
            return obj.frag_en.name
    def get_eff(self,obj):
        if 'language' not in self.context:
            return obj.frag_en.name
        if self.context['language'] == 'ja':
            return obj.frag_ja.eff
        if self.context['language'] == 'sc':
            return obj.frag_sc.eff
        if self.context['language'] == 'tc':
            return obj.frag_tc.eff
        else:
            return obj.frag_en.eff
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.frag_en.desc
        if self.context['language'] == 'ja':
            return obj.frag_ja.desc
        if self.context['language'] == 'sc':
            return obj.frag_sc.desc
        if self.context['language'] == 'tc':
            return obj.frag_tc.desc
        else:
            return obj.frag_en.desc

class BRSLChoiceSerializer(serializers.ModelSerializer):
    choice = serializers.SerializerMethodField()
    class Meta:
        model = Choice
        fields = ['choice']
    def get_choice(self,obj):
        if 'language' not in self.context:
            return obj.choice_en
        if self.context['language'] == 'ja':
            return obj.choice_ja
        if self.context['language'] == 'sc':
            return obj.choice_sc
        if self.context['language'] == 'tc':
            return obj.choice_tc
        else:
            return obj.choice_en

class BRSLSchoolLocationSerializer(serializers.ModelSerializer):
    loc = serializers.SerializerMethodField()
    class Meta:
        model = SchoolLocations
        fields = ['loc']
    def get_loc(self,obj):
        if 'language' not in self.context:
            return obj.loc_en
        if self.context['language'] == 'ja':
            return obj.loc_ja
        if self.context['language'] == 'sc':
            return obj.loc_sc
        if self.context['language'] == 'tc':
            return obj.loc_tc
        else:
            return obj.loc_en

class BRSLEventSerializer(serializers.ModelSerializer):
    character = BRSLCharacterSerializer()
    choices = BRSLChoiceSerializer(many=True)
    fragment = BRSLFragmentSerializer(many=True)
    location = BRSLSchoolLocationSerializer()
    class Meta:
        model = Event
        fields = ['location', 'character', 'choices', 'fragment', 'isDLC']
    def to_representation(self, instance):
        result = super(BRSLEventSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.char_en.name
        if self.context['language'] == 'ja':
            return obj.char_ja.name
        if self.context['language'] == 'sc':
            return obj.char_sc.name
        if self.context['language'] == 'tc':
            return obj.char_tc.name
        else:
            return obj.char_en.name