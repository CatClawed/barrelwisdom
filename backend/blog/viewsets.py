from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from blog.serializers import BlogSerializer, TagSerializer, SectionSerializer, MainBlogSerializer, NewCommentSerializer, ModerateCommentSerializer, MainBlogListSerializer
from blog.models import Blog, Tags, Section, Comment

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

    # https://stackoverflow.com/questions/67151379/create-multiple-instances-at-once-django-rest-framework
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers=headers
        )

class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    lookup_field = 'name'

class MainBlogViewSet(viewsets.ModelViewSet):
    queryset = (
            Blog.objects
            .filter(section__name="blog")
        )
    serializer_class = MainBlogListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title','body']
    ordering_fields = ['created']
    filterset_fields = ['slugtitle', 'section', 'tags__slugname']
    pagination_class = LimitOffsetPagination
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path=r"(?P<section>[a-z-0-9]+)")
    def blog(self, request, section, slugname):
        try:
            queryset = (
                Blog.objects
                .select_related(
                    'section'
                )
                .prefetch_related(
                    'tags',
                    'author'
                )
                .get(slugtitle=slugname, section__name=section)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = MainBlogSerializer(queryset)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        response = super().list(request, args, kwargs)
        if request.query_params.get('tags__slugname'):
            try:
                response.data['tagname'] = Tags.objects.get(slugname=request.query_params.get('tags__slugname')).name # Or wherever you get this values from
            except ObjectDoesNotExist:
                raise Http404
        return response
    
class NewCommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    ordering_fields = ['created']
    serializer_class = NewCommentSerializer
    permission_classes = (AllowAny,)
    def perform_create(self, serializer):
        user = None
        if self.request.user.is_authenticated:
            user = self.request.user
            serializer.save(author=user, name='', approved=True)
        else:
            serializer.save()

class ModerateCommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.filter(approved=False)
    ordering_fields = ['created']
    serializer_class = ModerateCommentSerializer