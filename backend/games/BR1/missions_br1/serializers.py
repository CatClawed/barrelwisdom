from games.BR1.missions_br1.models import Mission
from collections import OrderedDict
from rest_framework import serializers

class BR1Missionerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission
        fields = ['slug', 'name', 'character', 'points', 'reward', 'kind', 'details', 'chapter','location']
    def to_representation(self, instance):
        result = super(BR1Missionerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])