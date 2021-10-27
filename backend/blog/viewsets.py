from rest_framework import viewsets, filters
from blog.serializers import BlogSerializer, TagSerializer, SectionSerializer, MainBlogSerializer
from blog.models import Blog, Tags, Section
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import LimitOffsetPagination
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from rest_framework.response import Response
from rest_framework.decorators import action

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
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

class MainBlogViewSet(viewsets.ModelViewSet):
    queryset = (
            Blog.objects
            .prefetch_related(
                'section',
                'author',
                'tags'
            )
            .filter(section__name="blog")
        )
    serializer_class = MainBlogSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title','body']
    ordering_fields = ['created']
    filterset_fields = ['slugtitle', 'section', 'tags']
    pagination_class = LimitOffsetPagination
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path=r"(?P<section>[a-z-0-9]+)")
    def blog(self, request, section, slugname):
        try:
            queryset = (
                Blog.objects
                .prefetch_related(
                    'tags',
                    'section',
                    'author'
                )
                .get(slugtitle=slugname, section__name=section)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = MainBlogSerializer(queryset)
        return Response(serializer.data)