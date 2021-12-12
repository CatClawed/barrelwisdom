from rest_framework import viewsets, filters
from games.BRSL.items_brsl.models import Category, Item, Unit
from games.BRSL.items_brsl.serializers import BRSLItemSerializer, BRSLSimpleItemSerializer, BRSLCategorySerializer, BRSLUnitSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class BRSLItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = BRSLSimpleItemSerializer
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
                'category',
                'ingredient_set',
                'ingredient_set__category',
                'ingredient_set__item__item_en'
            )
        )
        serializer = BRSLSimpleItemSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_ja'
            )
            .prefetch_related(
                'category',
                'ingredient_set',
                'ingredient_set__category',
                'ingredient_set__item__item_ja'
            )
        )
        serializer = BRSLSimpleItemSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_sc'
            )
            .prefetch_related(
                'category',
                'ingredient_set',
                'ingredient_set__category',
                'ingredient_set__item__item_sc'
            )
        )
        serializer = BRSLSimpleItemSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_tc'
            )
            .prefetch_related(
                'category',
                'ingredient_set',
                'ingredient_set__category',
                'ingredient_set__item__item_tc'
            )
        )
        serializer = BRSLSimpleItemSerializer(queryset, many=True, context={'language': 'tc'})
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
                    'category',
                    'ingredient_set',
                    'ingredient_set__category',
                    'ingredient_set__item__item_en',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__linename',
                    'effectline_set__effect__eff_en',
                    'skillline_set',
                    'skillline_set__linename',
                    'skillline_set__effect1__eff_en',
                    'skillline_set__effect2__eff_en',
                    'skillline_set__effect3__eff_en',
                    'region_set',
                    'region_set__name'
            )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLItemSerializer(queryset, context={'language': 'en'})
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
                    'category',
                    'ingredient_set',
                    'ingredient_set__category',
                    'ingredient_set__item__item_ja',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__linename',
                    'effectline_set__effect__eff_ja',
                    'skillline_set',
                    'skillline_set__linename',
                    'skillline_set__effect1__eff_ja',
                    'skillline_set__effect2__eff_ja',
                    'skillline_set__effect3__eff_ja',
                    'region_set',
                    'region_set__name'
            )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLItemSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_sc'
                )
                .prefetch_related(
                    'category',
                    'ingredient_set',
                    'ingredient_set__category',
                    'ingredient_set__item__item_sc',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__linename',
                    'effectline_set__effect__eff_sc',
                    'skillline_set',
                    'skillline_set__linename',
                    'skillline_set__effect1__eff_sc',
                    'skillline_set__effect2__eff_sc',
                    'skillline_set__effect3__eff_sc',
                    'region_set',
                    'region_set__name'
            )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLItemSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_tc'
                )
                .prefetch_related(
                    'category',
                    'ingredient_set',
                    'ingredient_set__category',
                    'ingredient_set__item__item_tc',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__linename',
                    'effectline_set__effect__eff_tc',
                    'skillline_set',
                    'skillline_set__linename',
                    'skillline_set__effect1__eff_tc',
                    'skillline_set__effect2__eff_tc',
                    'skillline_set__effect3__eff_tc',
                    'region_set',
                    'region_set__name'
            )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLItemSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)
    
class BRSLCategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = BRSLCategorySerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    
    @action(detail=False)
    def en(self, request): 
        queryset = (
            Category.objects.all()
        )
        serializer = BRSLCategorySerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Category.objects.all()
        )
        serializer = BRSLCategorySerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Category.objects.all()
        )
        serializer = BRSLCategorySerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Category.objects.all()
        )
        serializer = BRSLCategorySerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)
    
class BRSLUnitViewSet(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = BRSLUnitSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    
    @action(detail=False)
    def en(self, request): 
        queryset = (
            Unit.objects
            .select_related(
                'unit_en'
            )
        )
        serializer = BRSLUnitSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Unit.objects
            .select_related(
                'unit_ja'
            )
        )
        serializer = BRSLUnitSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Unit.objects
            .select_related(
                'unit_sc'
            )
        )
        serializer = BRSLUnitSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Unit.objects
            .select_related(
                'unit_tc'
            )
        )
        serializer = BRSLUnitSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)