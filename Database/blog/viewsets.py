from rest_framework import viewsets
from blog.serializers import BlogSerializer
from blog.models import Blog

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer