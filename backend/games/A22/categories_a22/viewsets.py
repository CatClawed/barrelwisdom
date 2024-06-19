from rest_framework import viewsets, filters
from games.A22.categories_a22.models import Category
from games.A22.items_a22.models import CategoryItems
from games.A22.categories_a22.serializers import A22CategorySerializer, A22CTSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A22CategorySerializer
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
        serializer = A22CategorySerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_ja'
            )
        )
        serializer = A22CategorySerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_ko'
            )
        )
        serializer = A22CategorySerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_fr'
            )
        )
        serializer = A22CategorySerializer(queryset, many=True, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_sc'
            )
        )
        serializer = A22CategorySerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_tc'
            )
        )
        serializer = A22CategorySerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    # allows easy access via catect/slug/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category__cat_en',
                )
                .prefetch_related(
                    'items__item_en',
                    'ingredients__item_en',
                )
                .get(category__slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CTSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category__cat_ja',
                )
                .prefetch_related(
                    'items__item_ja',
                    'ingredients__item_ja',
                )
                .get(category__slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CTSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category__cat_ko',
                )
                .prefetch_related(
                    'items__item_ko',
                    'ingredients__item_ko',
                )
                .get(category__slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CTSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slug):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category__cat_fr',
                )
                .prefetch_related(
                    'items__item_fr',
                    'ingredients__item_fr',
                )
                .get(category__slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CTSerializer(queryset, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category__cat_sc',
                )
                .prefetch_related(
                    'items__item_sc',
                    'ingredients__item_sc',
                )
                .get(category__slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CTSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category__cat_tc',
                )
                .prefetch_related(
                    'items__item_tc',
                    'ingredients__item_tc',
                )
                .get(category__slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CTSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)