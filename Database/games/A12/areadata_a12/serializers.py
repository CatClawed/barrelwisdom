from rest_framework import serializers
from collections import OrderedDict
from games.A12.areadata_a12.models import Field, Area
from games.A12.items_a12.serializers import A12ItemNameSerializer
from games.A12.monsters_a12.serializers import A12MonsterNameSerializer


class A12FieldSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    ingredients = A12ItemNameSerializer(many=True)
    monsters = A12MonsterNameSerializer(many=True)
    class Meta:
        model = Field
        fields = ['slugname', 'name', 'unlock', 'ingredients', 'monsters', 'note']

    def to_representation(self, instance):
        result = super(A12FieldSerializer, self).to_representation(instance)
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


class A12AreaSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    fields = A12FieldSerializer(many=True)

    class Meta:
        model = Area
        fields = ['slugname', 'name', 'fields']
    def to_representation(self, instance):
        result = super(A12AreaSerializer, self).to_representation(instance)
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
