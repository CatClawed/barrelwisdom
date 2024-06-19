from games.BR1.areas_br1.serializers import BR1AreaSerializer
from collections import OrderedDict
from rest_framework import serializers
from games.BR1.fragments_br1.models import Fragment, Upgrade
from games.BR1.items_br1.models import Item
from games.BR1.areas_br1.serializers import BR1AreaSerializer

class BR1ItemSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['slug', 'name']

class BR1UpgradeSerializer(serializers.ModelSerializer):
    item = BR1ItemSerializerSimple()
    class Meta:
        model = Upgrade
        fields = ['item', 'num']

class BR1FragmentSerializer(serializers.ModelSerializer):
    upgrades = BR1UpgradeSerializer(many=True)
    class Meta:
        model = Fragment
        fields = ['slug', 'name', 'effect', 'upgrades']
    def to_representation(self, instance):
        result = super(BR1FragmentSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])