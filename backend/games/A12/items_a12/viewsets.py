from rest_framework import viewsets, filters
from games.A12.items_a12.models import Item, Book
from games.A12.items_a12.serializers import A12ItemSerializer, A12ItemFullSerializer, A12BookSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A12ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = A12ItemSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_en'
            )
            .prefetch_related(
                'categories__cat_en',
                'ingredient_set__category__cat_en',
                'ingredient_set__item__item_en'
            )
        )
        serializer = A12ItemSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_ja'
            )
            .prefetch_related(
                'categories__cat_ja',
                'ingredient_set__category__cat_ja',
                'ingredient_set__item__item_ja'
            )
        )
        serializer = A12ItemSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slug/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_en',
                    'traits__trait_en'
                )
                .prefetch_related(
                    'categories__cat_en',
                    'ingredient_set__category__cat_en',
                    'ingredient_set__item__item_en',
                    'monsters__mon_en',
                    'locations__reg_en',
                    'equip_set',
                    'book_set__item_en',
                    'effectline_set__effect__eff_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12ItemFullSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ja',
                    'traits__trait_ja'
                )
                .prefetch_related(
                    'categories__cat_ja',
                    'ingredient_set__category__cat_ja',
                    'ingredient_set__item__item_ja',
                    'monsters__mon_ja',
                    'locations__reg_ja',
                    'equip_set',
                    'book_set',
                    'book_set__item_ja',
                    'effectline_set__effect__eff_ja'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12ItemFullSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

class A12BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = A12BookSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Book.objects
            .select_related(
                'item_en'
            )
            .prefetch_related(
                'items__item_en'
            )
        )
        serializer = A12BookSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Book.objects
            .select_related(
                'item_ja'
            )
            .prefetch_related(
                'items__item_ja'
            )
        )
        serializer = A12BookSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slug/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'item_en'
                )
                .prefetch_related(
                    'items__item_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12BookSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'item_ja'
                )
                .prefetch_related(
                    'items__item_ja'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12BookSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
