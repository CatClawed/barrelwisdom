from rest_framework import viewsets, filters
from games.A12.areadata_a12.models import Area
from games.A12.areadata_a12.serializers import A12AreaSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A12AreaViewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all()
    serializer_class = A12AreaSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Area.objects
                .select_related(
                    'region'
                )
                .prefetch_related(
                    'region__reg_en',
                    'fields',
                    'fields__ingredients',
                    'fields__ingredients__item_en',
                    'fields__monsters',
                    'fields__monsters__mon_en'
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12AreaSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Area.objects
                .select_related(
                    'region'
                )
                .prefetch_related(
                    'region__reg_ja',
                    'fields',
                    'fields__ingredients',
                    'fields__ingredients__item_ja',
                    'fields__monsters',
                    'fields__monsters__mon_ja'
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12AreaSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)