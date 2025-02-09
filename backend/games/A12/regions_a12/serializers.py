from rest_framework import serializers
from collections import OrderedDict
from games.A12.regions_a12.models import Region

class A12RegionNameSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    parentslug = serializers.SerializerMethodField()
    class Meta:
        model = Region
        fields = ['slug', 'name', 'parentslug']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.reg_en.name
        elif self.context['language'] == 'ja':
            return obj.reg_ja.name
        else:
            return obj.reg_en.name
    def get_parentslug(self,obj):
        if obj.parent:
           return obj.parent.slug
    def to_representation(self, instance):
        result = super(A12RegionNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', True, {}])