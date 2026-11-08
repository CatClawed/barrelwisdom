from rest_framework import serializers
from collections import OrderedDict
from games.A15.regions_a15.models import Region
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField, LegacyTranslatedField

class A15FieldEventSerializer(DefaultSerializer):
    class Meta:
        model = Region
        fields = ['name']

class A15RegionNameSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name')
    parent = serializers.SerializerMethodField()
    id = serializers.CharField(source="slug")
    class Meta:
        model = Region
        fields = ['id', 'name', 'parent']

    def get_parent(self,obj):
        if obj.parent:
           return obj.parent.slug


class A15RegionSerializer(DefaultSerializer):
    name = LegacyTranslatedField(obj_prefix='reg', field_name='name')
    parent = A15RegionNameSerializer()
    id = serializers.CharField(source="slug")
    class Meta:
        model = Region
        fields = ['id', 'name', 'display', 'note', 'grade', 'parent']
