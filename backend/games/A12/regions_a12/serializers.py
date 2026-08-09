from rest_framework import serializers
from collections import OrderedDict
from games.A12.regions_a12.models import Region
from games._helpers.serializer_helper import LegacyTranslatedField

class A12RegionNameSerializer(serializers.ModelSerializer):
    name = LegacyTranslatedField(obj_prefix="reg", field_name="name")
    parent = serializers.SerializerMethodField()
    id = serializers.CharField(source="slug")
    class Meta:
        model = Region
        fields = ['id', 'name', 'parent']

    def to_representation(self, instance):
        result = super(A12RegionNameSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items() 
                           if v not in [None, [], '', True, {}])

    def get_parent(self, obj):
        return obj.parent.slug if obj.parent else ""