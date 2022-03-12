from rest_framework import viewsets, filters
from games.BRSL.regions_brsl.models import Region
from games.BRSL.regions_brsl.serializers import BRSLRegionSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class BRSLRegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = BRSLRegionSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'
    
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'name'
                )
                .prefetch_related(
                    'areas__name',
                    'areas__items__item_en',
                    'areas__demons__demon__demon_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLRegionSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'name'
                )
                .prefetch_related(
                    'areas__name',
                    'areas__items__item_ja',
                    'areas__demons__demon__demon_ja'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLRegionSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'name'
                )
                .prefetch_related(
                    'areas__name',
                    'areas__items__item_sc',
                    'areas__demons__demon__demon_sc'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLRegionSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Region.objects
                .select_related(
                    'name'
                )
                .prefetch_related(
                    'areas__name',
                    'areas__items__item_tc',
                    'areas__demons__demon__demon_tc'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLRegionSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)