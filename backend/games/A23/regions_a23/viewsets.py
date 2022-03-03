from rest_framework import viewsets, filters
from games.A23.regions_a23.models import Region
from games.A23.regions_a23.serializers import A23RegionSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A23RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects
    serializer_class = A23RegionSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'parent',
                )
                .prefetch_related(
                    'climate_set',
                    'climate_set__node',
                    'climate_set__node__items',
                    'climate_set__node__items__item_en',
                    'chest_set',
                    'chest_set__item',
                    'chest_set__item__item_en',
                    'chest_set__book',
                    'parent__climate_set',
                    'parent__climate_set__node',
                    'parent__climate_set__node__items',
                    'parent__climate_set__node__items__item_en',
                    'parent__chest_set',
                    'parent__chest_set__item',
                    'parent__chest_set__item__item_en',
                    'parent__chest_set__book'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23RegionSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'parent',
                )
                .prefetch_related(
                    'climate_set',
                    'climate_set__node',
                    'climate_set__node__items',
                    'climate_set__node__items__item_ja',
                    'chest_set',
                    'chest_set__item',
                    'chest_set__item__item_ja',
                    'chest_set__book',
                    'parent__climate_set',
                    'parent__climate_set__node',
                    'parent__climate_set__node__items',
                    'parent__climate_set__node__items__item_ja',
                    'parent__chest_set',
                    'parent__chest_set__item',
                    'parent__chest_set__item__item_ja',
                    'parent__chest_set__book'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23RegionSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'parent',
                )
                .prefetch_related(
                    'climate_set',
                    'climate_set__node',
                    'climate_set__node__items',
                    'climate_set__node__items__item_ko',
                    'chest_set',
                    'chest_set__item',
                    'chest_set__item__item_ko',
                    'chest_set__book',
                    'parent__climate_set',
                    'parent__climate_set__node',
                    'parent__climate_set__node__items',
                    'parent__climate_set__node__items__item_ko',
                    'parent__chest_set',
                    'parent__chest_set__item',
                    'parent__chest_set__item__item_ko',
                    'parent__chest_set__book'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23RegionSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'parent',
                )
                .prefetch_related(
                    'climate_set',
                    'climate_set__node',
                    'climate_set__node__items',
                    'climate_set__node__items__item_sc',
                    'chest_set',
                    'chest_set__item',
                    'chest_set__item__item_sc',
                    'chest_set__book',
                    'parent__climate_set',
                    'parent__climate_set__node',
                    'parent__climate_set__node__items',
                    'parent__climate_set__node__items__item_sc',
                    'parent__chest_set',
                    'parent__chest_set__item',
                    'parent__chest_set__item__item_sc',
                    'parent__chest_set__book'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23RegionSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'parent',
                )
                .prefetch_related(
                    'climate_set',
                    'climate_set__node',
                    'climate_set__node__items',
                    'climate_set__node__items__item_tc',
                    'chest_set',
                    'chest_set__item',
                    'chest_set__item__item_tc',
                    'chest_set__book',
                    'parent__climate_set',
                    'parent__climate_set__node',
                    'parent__climate_set__node__items',
                    'parent__climate_set__node__items__item_tc',
                    'parent__chest_set',
                    'parent__chest_set__item',
                    'parent__chest_set__item__item_tc',
                    'parent__chest_set__book'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23RegionSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)