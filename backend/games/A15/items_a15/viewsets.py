from rest_framework import viewsets, filters
from games.A15.items_a15.models import Item, Book, RegionData
from games.A15.items_a15.serializers import A15ItemSerializer, A15ItemFullSerializer, A15BookSerializer, A15RegionDataSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A15ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = A15ItemSerializer
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
        serializer = A15ItemSerializer(queryset, many=True, context={'language': 'en'})
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
        serializer = A15ItemSerializer(queryset, many=True, context={'language': 'ja'})
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
                    'relic_set',
                    'relic_set__region__reg_en',
                    'disassembled_set',
                    'disassembled_set__item__item_en',
                    'book_set',
                    'book_set__item_en',
                    'effectline_set',
                    'effectline_set__effect__eff_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15ItemFullSerializer(queryset, context={'language': 'en'})
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
                    'relic_set',
                    'relic_set__region__reg_ja',
                    'disassembled_set',
                    'disassembled_set__item__item_ja',
                    'book_set',
                    'book_set__item_ja',
                    'effectline_set',
                    'effectline_set__effect__eff_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15ItemFullSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

class A15BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = A15BookSerializer
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
        serializer = A15BookSerializer(queryset, many=True, context={'language': 'en'})
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
        serializer = A15BookSerializer(queryset, many=True, context={'language': 'ja'})
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
        serializer = A15BookSerializer(queryset, context={'language': 'en'})
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
        serializer = A15BookSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

class A15RegionViewSet(viewsets.ModelViewSet):
    queryset = RegionData.objects.all()
    serializer_class = A15RegionDataSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                RegionData.objects
                .select_related(
                    'region'
                )
                .prefetch_related(
                    'region__reg_en',
                    'areas',
                    'areas__items',
                    'areas__items__item_en',
                    'areas__rare',
                    'areas__rare__item_en',
                    'areas__maxitem',
                    'areas__maxitem__item_en',
                    'areas__fieldevent',
                    'areas__monsters',
                    'areas__monsters__mon_en'
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15RegionDataSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                RegionData.objects
                .select_related(
                    'region'
                )
                .prefetch_related(
                    'region__reg_ja',
                    'areas',
                    'areas__items',
                    'areas__items__item_ja',
                    'areas__rare',
                    'areas__rare__item_ja',
                    'areas__maxitem',
                    'areas__maxitem__item_ja',
                    'areas__fieldevent',
                    'areas__monsters',
                    'areas__monsters__mon_ja'
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15RegionDataSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)