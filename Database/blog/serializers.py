from rest_framework import serializers
from blog.models import Blog, Tags, Section

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['id', 'name']

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ['id', 'name']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'created', 'modified', 'title', 'slugtitle', 'body', 'image', 'description', 'authorlock', 'author', 'section', 'tags']
