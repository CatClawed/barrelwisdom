from django.utils.text import slugify
from django.contrib.auth import get_user_model
from rest_framework import serializers
from blog.models import Blog, Tags, Section, Comment
from userprofile.serializers import UserSerializerSimple

class ReplySerializer(serializers.ModelSerializer):
    author = UserSerializerSimple()
    class Meta:
        model = Comment
        fields = ['id', 'created', 'body', 'name', 'author']

class NewCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['body', 'name', 'parent', 'blog']

class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializerSimple()
    replies = ReplySerializer(source='comment_set', many=True)
    class Meta:
        model = Comment
        fields = ['id', 'created', 'body', 'author', 'name', 'replies']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['name', 'slug']
        extra_kwargs = {'slug': {'validators': []}, 'name': {'validators': []}}

    def to_internal_value(self, data):
        try:
            if isinstance(data, dict) and 'slug' in data:
                return Tags.objects.get(slug=data['slug'])
            elif isinstance(data, dict) and 'name' in data:
                slug = slugify(data['name'])
                tag, _ = Tags.objects.get_or_create(
                    slug=slug,
                    defaults={'name': data['name']}
                )
                return tag
            raise serializers.ValidationError("Tag data must contain 'slug' or 'name'")
        except Tags.DoesNotExist:
             raise serializers.ValidationError(f"Tag not found.")

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ['id', 'slug', 'name']

class BlogSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    author = serializers.SlugRelatedField(
        many=True,
        slug_field='username',
        queryset=get_user_model().objects.all(),
    )
    comments = CommentSerializer(source='comment_set', many=True, read_only=True)
    section = serializers.SlugRelatedField(
        slug_field='slug',
        queryset=Section.objects.all()
    )
    slug = serializers.SlugField(required=False, allow_blank=True)
    class Meta:
        model = Blog
        fields = ['id', 'created', 'modified', 'title', 'slug', 'body', 'image',
            'desc', 'authorlock', 'author', 'section', 'tags', 'comments', 'closed']
        validators = []

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['section'] = SectionSerializer(instance.section, read_only=True).data
        return data

    def create(self, validated_data):
        tags = validated_data.pop('tags', [])
        authors = validated_data.pop('author', [])
        blog = super().create(validated_data)
        blog.tags.set(tags)
        blog.author.set(authors)
        return blog

    def update(self, instance, validated_data):
        tags = validated_data.pop('tags', None)
        authors = validated_data.pop('author', None)
        instance = super().update(instance, validated_data)
        if tags is not None:
            instance.tags.set(tags)
        if authors is not None:
            instance.author.set(authors)
        return instance

class MainBlogListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'created', 'title', 'slug', 'image', 'desc']

class ModerateCommentBlogSerializer(serializers.ModelSerializer):
    sec = serializers.CharField(source='section.name')
    class Meta:
        model = Blog
        fields = ['slug', 'sec']

class ModerateCommentSerializer(serializers.ModelSerializer):
    blog = ModerateCommentBlogSerializer()
    parent_blog = ModerateCommentBlogSerializer(source='parent.blog', allow_null=True)
    class Meta:
        model = Comment
        fields = ['id', 'created', 'body', 'name', 'parent', 'blog', 'approved', 'parent_blog']

    def __init__(self, *args, **kwargs):
        kwargs['partial'] = True
        super(ModerateCommentSerializer, self).__init__(*args, **kwargs)