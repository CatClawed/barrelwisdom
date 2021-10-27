
from collections import OrderedDict
from rest_framework import serializers
from games.BR1.skills_br1.models import Skill

class BR1SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['name', 'effect', 'character', 'rng', 'atk', 'dfn', 'sup', 'tec', 'lvl', 'wt', 'mp', 'slots', 'isRankUp']
    def to_representation(self, instance):
        result = super(BR1SkillSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])