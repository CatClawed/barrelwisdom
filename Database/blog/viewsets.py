from rest_framework import viewsets, filters, generics
from blog.serializers import BlogSerializer, TagSerializer, SectionSerializer, MainBlogSerializer
from blog.models import Blog, Tags, Section
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import LimitOffsetPagination


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title','body']
    ordering_fields = ['created']
    filterset_fields = ['slugtitle', 'section', 'tags']
    pagination_class = LimitOffsetPagination

class MainBlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = MainBlogSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title','body']
    ordering_fields = ['created']
    filterset_fields = ['slugtitle', 'section', 'tags']
    pagination_class = LimitOffsetPagination

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'slugname'

class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    lookup_field = 'name'