from rest_framework import viewsets, filters
from games.A15.categories_a15.models import Category
from games.A15.categories_a15.serializers import A15CategorySerializer, A15CategoryDataSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A15CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A15CategorySerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_en'
            )
        )
        serializer = A15CategorySerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_ja'
            )
        )
        serializer = A15CategorySerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_en'
                )
                .prefetch_related(
                    'item_set__item_en',
                    'ingredientcat__synthitem__item_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15CategoryDataSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_ja'
                )
                .prefetch_related(
                    'item_set__item_ja',
                    'ingredientcat__synthitem__item_ja'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15CategoryDataSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)