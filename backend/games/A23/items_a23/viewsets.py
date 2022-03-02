"""
from rest_framework import viewsets, filters
from games.A23.items_a23.models import Item, Book
from games.A23.items_a23.serializers import A23ItemSerializer, A23ItemFullSerializer, A23BookSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A23ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = A23ItemSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_en'
            )
            .prefetch_related(
                'categories',
                'categories__cat_en',
                'ingredient_set',
                'ingredient_set__category__cat_en',
                'ingredient_set__item__item_en'
            )
        )
        serializer = A23ItemSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_ja'
            )
            .prefetch_related(
                'categories',
                'categories__cat_ja',
                'ingredient_set',
                'ingredient_set__category__cat_ja',
                'ingredient_set__item__item_ja'
            )
        )
        serializer = A23ItemSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_en'
                )
                .prefetch_related(
                    'categories',
                    'categories__cat_en',
                    'ingredient_set',
                    'ingredient_set__category__cat_en',
                    'ingredient_set__item__item_en',
                    'properties',
                    'properties__prop_en',
                    'monsters',
                    'monsters__mon_en',
                    'locations',
                    'locations__reg_en',
                    'characterequip_set',
                    'equip_set',
                    'disassembly_set',
                    'disassembly_set__item__item_en',
                    'disassembled_set',
                    'disassembled_set__item__item_en',
                    'book_set',
                    'book_set__item_en',
                    'effectlines_set',
                    'effectlines_set__effects',
                    'effectlines_set__effects__effect',
                    'effectlines_set__effects__effect__eff_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemFullSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ja'
                )
                .prefetch_related(
                    'categories',
                    'categories__cat_ja',
                    'ingredient_set',
                    'ingredient_set__category__cat_ja',
                    'ingredient_set__item__item_ja',
                    'properties',
                    'properties__prop_ja',
                    'monsters',
                    'monsters__mon_ja',
                    'locations',
                    'locations__reg_ja',
                    'characterequip_set',
                    'equip_set',
                    'disassembly_set',
                    'disassembly_set__item__item_ja',
                    'disassembled_set',
                    'disassembled_set__item__item_ja',
                    'book_set',
                    'book_set__item_ja',
                    'effectlines_set',
                    'effectlines_set__effects',
                    'effectlines_set__effects__effect',
                    'effectlines_set__effects__effect__eff_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemFullSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

class A23BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = A23BookSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Book.objects
            .select_related(
                'item_en'
            )
            .prefetch_related(
                'items',
                'items__item_en'
            )
        )
        serializer = A23BookSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Book.objects
            .select_related(
                'item_ja'
            )
            .prefetch_related(
                'items',
                'items__item_ja'
            )
        )
        serializer = A23BookSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'item_en'
                )
                .prefetch_related(
                    'items',
                    'items__item_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'item_ja'
                )
                .prefetch_related(
                    'items',
                    'items__item_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
"""