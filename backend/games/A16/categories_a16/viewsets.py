from rest_framework import viewsets, filters
from games.A16.categories_a16.models import Category
from games.A16.categories_a16.serializers import A16CategorySerializer, A16CategoryDataSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A16CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A16CategorySerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_en'
            )
        )
        serializer = A16CategorySerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_ja'
            )
        )
        serializer = A16CategorySerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_en'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_en',
                    'ingredientcat',
                    'ingredientcat__synthitem',
                    'ingredientcat__synthitem__item_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A16CategoryDataSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_ja'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_ja',
                    'ingredientcat',
                    'ingredientcat__synthitem',
                    'ingredientcat__synthitem__item_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A16CategoryDataSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)