from rest_framework import serializers
from blog.models import Blog, Tags, Section
from userprofile.serializers import UserSerializerSimple

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['id', 'name', 'slugname']

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ['id', 'name', 'fullname']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'created', 'modified', 'title', 'slugtitle', 'body', 'image', 'description', 'authorlock', 'author', 'section', 'tags']

class MainBlogSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    author = UserSerializerSimple(many=True)
    section = SectionSerializer()
    class Meta:
        model = Blog
        fields = ['id', 'created', 'modified', 'title', 'slugtitle', 'body', 'image', 'description', 'authorlock', 'author', 'section', 'tags']
