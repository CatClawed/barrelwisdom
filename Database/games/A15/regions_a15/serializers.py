from rest_framework import serializers
from collections import OrderedDict
from games.A15.regions_a15.models import *

class A15FieldEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['name']

class A15RegionNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    parentslug = serializers.SerializerMethodField()
    class Meta:
        model = Region
        fields = ['slugname', 'name', 'parentslug']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.reg_en.name
        if self.context['language'] == 'ja':
            return obj.reg_ja.name
        else:
            return obj.reg_en.name
    def get_parentslug(self,obj):
        if obj.parent:
           return obj.parent.slugname
    def to_representation(self, instance):
        result = super(A15RegionNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', True, {}])

class A15RegionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    parent = A15RegionNameSerializer()
    class Meta:
        model = Region
        fields = ['slugname', 'name', 'display', 'note', 'grade', 'parent']

    def to_representation(self, instance):
        result = super(A15RegionSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', True, {}])
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.reg_en.name
        if self.context['language'] == 'ja':
            return obj.reg_ja.name
        else:
            return obj.reg_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.reg_en.desc
        if self.context['language'] == 'ja':
            return obj.reg_ja.desc
        else:
            return obj.reg_en.desc