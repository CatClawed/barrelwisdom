from rest_framework import serializers
from collections import OrderedDict
from games.A16.areadata_a16.models import Field, Area
from games.A16.items_a16.serializers import A16ItemNameSerializer
from games.A16.monsters_a16.serializers import A16MonsterNameSerializer


class A16FieldSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    ingredients = A16ItemNameSerializer(many=True)
    rare = A16ItemNameSerializer(many=True)
    relics = A16ItemNameSerializer(many=True)
    monsters = A16MonsterNameSerializer(many=True)
    class Meta:
        model = Field
        fields = ['slugname', 'name', 'ingredients', 'rare', 'relics', 'monsters', 'note']

    def to_representation(self, instance):
        result = super(A16FieldSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.region.reg_en.name
        if self.context['language'] == 'ja':
            return obj.region.reg_ja.name
        else:
            return obj.region.reg_en.name
    def get_slugname(self,obj):
        return obj.region.slugname


class A16AreaSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    fields = A16FieldSerializer(many=True)

    class Meta:
        model = Area
        fields = ['slugname', 'name', 'fields']
    def to_representation(self, instance):
        result = super(A16AreaSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', False, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.region.reg_en.name
        if self.context['language'] == 'ja':
            return obj.region.reg_ja.name
        else:
            return obj.region.reg_en.name
    def get_slugname(self,obj):
        return obj.region.slugname