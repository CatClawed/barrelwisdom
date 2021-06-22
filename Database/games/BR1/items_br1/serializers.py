from games.BR1.areas_br1.serializers import BR1AreaSerializer
from collections import OrderedDict
from rest_framework import serializers
from games.BR1.items_br1.models import Item, Ingredient
from games.BR1.demons_br1.serializers import BR1DemonSerializerSimple

class BR1MissionSerializerName(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class BR1ItemSerializerName(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['slugname', 'name']

class BR1IngredientSerializer(serializers.ModelSerializer):
    item = BR1ItemSerializerName()
    class Meta:
        model = Ingredient
        fields = ['item', 'num']
    def to_representation(self, instance):
        result = super(BR1IngredientSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class BR1ItemSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'effect', 'kind']
    def to_representation(self, instance):
        result = super(BR1ItemSerializerSimple, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])

class BR1ItemSerializer(serializers.ModelSerializer):
    locations = BR1AreaSerializer(many=True)
    demons = BR1DemonSerializerSimple(many=True)
    ingredient_set = BR1IngredientSerializer(many=True)
    missions = BR1MissionSerializerName(many=True)
    class Meta:
        model = Item
        fields = ['slugname', 'name', 'description', 'effect', 'acquisition', 'kind', 'demons', 'locations', 'ingredient_set', 'missions']
    def to_representation(self, instance):
        result = super(BR1ItemSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', {}])