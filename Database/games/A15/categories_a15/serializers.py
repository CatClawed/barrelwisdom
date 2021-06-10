from rest_framework import serializers
from games.A15.categories_a15.models import *

class A15CategorySerializerName(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A15CategorySerializerLink(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slugname', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name

class A15CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ['slugname', 'name', 'icon_name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.cat_en.name
        if self.context['language'] == 'ja':
            return obj.cat_ja.name
        else:
            return obj.cat_en.name