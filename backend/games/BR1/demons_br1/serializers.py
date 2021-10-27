from games.BR1.areas_br1.serializers import BR1AreaSerializer
from collections import OrderedDict
from rest_framework import serializers
from games.BR1.demons_br1.models import Demon
from games.BR1.items_br1.models import Item

class BR1ItemSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class BR1DemonSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Demon
        fields = ['slugname', 'name', 'race']

class BR1DemonSerializer(serializers.ModelSerializer):
    locations = BR1AreaSerializer(many=True)
    item_set = BR1ItemSerializerSimple(many=True)
    class Meta:
        model = Demon
        fields = ['slugname', 'name', 'flavor', 'race', 'hp', 'atk', 'dfn', 'agi','luk', 'slash', 'impact', 'pierce', 'heart', 'locations', 'item_set']
    def to_representation(self, instance):
        result = super(BR1DemonSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])