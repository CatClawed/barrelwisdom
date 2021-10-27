from rest_framework import serializers
from collections import OrderedDict
from games.A16.regions_a16.models import Region

class A16RegionNameSerializer(serializers.ModelSerializer):
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
        result = super(A16RegionNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', True, {}])