from rest_framework import viewsets, filters
from games.A16.items_a16.models import Item, Book
from games.A16.items_a16.serializers import A16ItemSerializer, A16ItemFullSerializer, A16BookSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A16ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = A16ItemSerializer
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
        serializer = A16ItemSerializer(queryset, many=True, context={'language': 'en'})
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
        serializer = A16ItemSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slug/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_en'
                )
                .prefetch_related(
                    'categories__cat_en',
                    'ingredient_set__category__cat_en',
                    'ingredient_set__item__item_en',
                    'properties__prop_en',
                    'monsters__mon_en',
                    'locations__reg_en',
                    'characterequip_set__chars',
                    'equip_set',
                    'disassembly_set__item__item_en',
                    'disassembled_set__item__item_en',
                    'book_set__item_en',
                    'effectlines_set__effects__effect__eff_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A16ItemFullSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ja'
                )
                .prefetch_related(
                    'categories__cat_ja',
                    'ingredient_set__category__cat_ja',
                    'ingredient_set__item__item_ja',
                    'properties__prop_ja',
                    'monsters__mon_ja',
                    'locations__reg_ja',
                    'characterequip_set__chars',
                    'equip_set',
                    'disassembly_set__item__item_ja',
                    'disassembled_set__item__item_ja',
                    'book_set__item_ja',
                    'effectlines_set__effects__effect__eff_ja'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A16ItemFullSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

class A16BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = A16BookSerializer
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
        serializer = A16BookSerializer(queryset, many=True, context={'language': 'en'})
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
        serializer = A16BookSerializer(queryset, many=True, context={'language': 'ja'})
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
        serializer = A16BookSerializer(queryset, context={'language': 'en'})
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
        serializer = A16BookSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
