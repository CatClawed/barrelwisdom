from rest_framework import viewsets, filters
from games.BRSL.demons_brsl.models import Demon
from games.BRSL.demons_brsl.serializers import BRSLDemonSimpleSerializer, BRSLDemonSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class BRSLDemonViewSet(viewsets.ModelViewSet):
    queryset = Demon.objects.all()
    serializer_class = BRSLDemonSimpleSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'
    
    @action(detail=False)
    def en(self, request): 
        queryset = (
            Demon.objects
            .select_related(
                'demon_en'
            )
        )
        serializer = BRSLDemonSimpleSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Demon.objects
                .select_related(
                    'demon_en'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_en',
                    'region_set',
                    'region_set__name'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLDemonSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Demon.objects
            .select_related(
                'demon_ja'
            )
        )
        serializer = BRSLDemonSimpleSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Demon.objects
                .select_related(
                    'demon_ja'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_ja',
                    'region_set',
                    'region_set__name'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLDemonSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Demon.objects
            .select_related(
                'demon_sc'
            )
        )
        serializer = BRSLDemonSimpleSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Demon.objects
                .select_related(
                    'demon_sc'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_sc',
                    'region_set',
                    'region_set__name'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLDemonSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Demon.objects
            .select_related(
                'demon_tc'
            )
        )
        serializer = BRSLDemonSimpleSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Demon.objects
                .select_related(
                    'demon_tc'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_tc',
                    'region_set',
                    'region_set__name'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLDemonSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)