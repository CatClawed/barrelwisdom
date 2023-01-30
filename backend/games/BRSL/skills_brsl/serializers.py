from games.BRSL.skills_brsl.models import Skill
from games.BRSL.fragments_brsl.models import Character
from rest_framework import serializers
from collections import OrderedDict


class BRSLSkillSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Skill
        fields = ['name', 'desc', 'level', 'ether', 'ether_rec', 'knockback', 'range', 'cycle','attTag0','actTag0','min_1_0','max_1_0','min_2_0','max_2_0','attTag1','actTag1','min_1_1','max_1_1','min_2_1','max_2_1']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.skill_en.name
        elif self.context['language'] == 'ja':
            return obj.skill_ja.name
        elif self.context['language'] == 'sc':
            return obj.skill_sc.name
        elif self.context['language'] == 'tc':
            return obj.skill_tc.name
        else:
            return obj.skill_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.skill_en.desc
        elif self.context['language'] == 'ja':
            return obj.skill_ja.desc
        elif self.context['language'] == 'sc':
            return obj.skill_sc.desc
        elif self.context['language'] == 'tc':
            return obj.skill_tc.desc
        else:
            return obj.skill_en.desc
    def to_representation(self, instance):
        result = super(BRSLSkillSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])

# Guess I need to create a null or skill character
class BRSLCharacterSkillSerializer(serializers.ModelSerializer):
    skill_set = BRSLSkillSerializer(many=True)
    name = serializers.SerializerMethodField()
    class Meta:
        model = Character
        fields = ['slug', 'name', 'skill_set']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.char_en
        elif self.context['language'] == 'ja':
            return obj.char_ja
        elif self.context['language'] == 'sc':
            return obj.char_sc
        elif self.context['language'] == 'tc':
            return obj.char_tc
        else:
            return obj.char_en
    def to_representation(self, instance):
        result = super(BRSLCharacterSkillSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])