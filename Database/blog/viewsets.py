from rest_framework import viewsets, filters
from blog.serializers import BlogSerializer, TagSerializer, SectionSerializer
from blog.models import Blog, Tags, Section
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import LimitOffsetPagination

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title','body']
    ordering_fields = ['created']
    filterset_fields = ['title']
    pagination_class = LimitOffsetPagination

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    search_fields = ['name']

class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    search_fields = ['name']