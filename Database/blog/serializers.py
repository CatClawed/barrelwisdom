from rest_framework import serializers
from blog.models import Blog, Tags, Section

""" class BlogSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    created = serializers.DateTimeField()
    modified = serializers.DateTimeField()
    title = serializers.CharField(max_length=100)
    body = serializers.CharField()

    def create(self, validated_data):
        return Blog.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.body = validated_data.get('body', instance.body)
        instance.save()
        return instance """

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
        #fields = ['id', 'created', 'modified', 'title',  'body', 'image', 'description', 'authorlock', 'author', ]
        fields = ['id', 'created', 'modified', 'title', 'slugtitle', 'body', 'image', 'description', 'authorlock', 'author', 'section', 'tags']
