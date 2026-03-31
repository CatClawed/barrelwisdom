from django.http import Http404
from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated
from blog.serializers import BlogSerializer, TagSerializer, SectionSerializer,  NewCommentSerializer, ModerateCommentSerializer, MainBlogListSerializer
from blog.models import Blog, Tags, Section, Comment
from django.db.models import Prefetch
from django.shortcuts import get_object_or_404

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'slug'

class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    lookup_field = 'slug'

class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    pagination_class = LimitOffsetPagination
    lookup_field = 'slug'
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = (Blog.objects
            .select_related('section')
            .prefetch_related(
                'author',
                'tags',
                Prefetch('comment_set',
                    queryset=Comment.objects
                        .select_related('author')
                        .prefetch_related(
                            Prefetch('comment_set',
                                Comment.objects
                                .select_related('author')
                                .filter(approved=True)))
                        .filter(approved=True, parent__isnull=True)),
            )
        )

    def get_queryset(self):
        section_slug = self.kwargs.get('section_slug')
        tag_slug = self.kwargs.get('tag_slug')
        if self.action in ['list', 'by_tag'] and section_slug != 'blog':
            raise Http404
        if self.action =='list' and section_slug:
            return Blog.objects.select_related('section').filter(section__slug=section_slug)
        if self.action == 'by_tag' and tag_slug:
            return Blog.objects.select_related('section').filter(tags__slug=tag_slug)
        return self.queryset

    def get_object(self):
        queryset = self.get_queryset()
        slug = self.kwargs.get('slug')
        section_slug = self.kwargs.get('section_slug')
        if not slug or not section_slug:
            raise AttributeError("Blog lookup requires both 'slug' and 'section_slug' URL parameters.")
        obj = get_object_or_404(
            queryset,
            slug=slug,
            section__slug=section_slug
        )
        self.check_object_permissions(self.request, obj)
        return obj

    def get_serializer_class(self):
        if self.action in ['list', 'by_tag']:
            return MainBlogListSerializer
        return super().get_serializer_class()

    @action(detail=False, methods=['get'], url_path='tag/(?P<tag_slug>[a-z-0-9]+)')
    def by_tag(self, request, section_slug=None, tag_slug=None):
        return super().list(request)

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
    permission_classes = [IsAuthenticated]