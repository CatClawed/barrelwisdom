from rest_framework import serializers
from collections import OrderedDict
from games.A16.regions_a16.models import Region
from games._helpers.serializer_helper import LegacyTranslatedField

class A16RegionNameSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug')
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name')
    parent = serializers.SerializerMethodField()
    class Meta:
        model = Region
        fields = ['id', 'name', 'parent']

    def get_parent(self,obj):
        if obj.parent:
           return obj.parent.slug
    def to_representation(self, instance):
        result = super(A16RegionNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', True, {}])