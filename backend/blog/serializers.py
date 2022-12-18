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
    replies = serializers.SerializerMethodField(source='comment_set')
    class Meta:
        model = Comment
        fields = ['id', 'created', 'body', 'author', 'name', 'replies']
        
    def get_replies(self, instance):
        qs = instance.comment_set.filter(approved=True)
        serializer = ReplySerializer(instance=qs, many=True, read_only=True)
        return serializer.data

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
    comments = serializers.SerializerMethodField()
    class Meta:
        model = Blog
        fields = ['id', 'created', 'modified', 'title', 'slugtitle', 'body', 'image', 'description', 'authorlock', 'author', 'section', 'tags', 'comments']

    def get_comments(self, instance):
        qs = instance.comment_set.filter(approved=True)
        serializer = CommentSerializer(instance=qs, many=True)
        return serializer.data
    
class ModerateCommentBlogSerializer(serializers.ModelSerializer):
    sec = serializers.CharField(source='section.name')
    class Meta:
        model = Blog
        fields = ['slugtitle', 'sec']
    
class ModerateCommentSerializer(serializers.ModelSerializer):
    blog = ModerateCommentBlogSerializer()
    parent_blog = ModerateCommentBlogSerializer(source='parent.blog', allow_null=True)
    class Meta:
        model = Comment 
        fields = ['id', 'created', 'body', 'name', 'parent', 'blog', 'approved', 'parent_blog']
        
    def __init__(self, *args, **kwargs):
        kwargs['partial'] = True
        super(ModerateCommentSerializer, self).__init__(*args, **kwargs)