from rest_framework import viewsets, filters
from games.A16.areadata_a16.models import Area
from games.A16.areadata_a16.serializers import A16AreaSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A16AreaViewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all()
    serializer_class = A16AreaSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Area.objects
                .select_related(
                    'region__reg_en'
                )
                .prefetch_related(
                    'fields__ingredients__item_en',
                    'fields__rare__item_en',
                    'fields__relics__item_en',
                    'fields__monsters__mon_en',
                    'fields__region__reg_en',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A16AreaSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Area.objects
                .select_related(
                    'region__reg_ja'
                )
                .prefetch_related(
                    'fields__ingredients__item_ja',
                    'fields__rare__item_ja',
                    'fields__relics__item_ja',
                    'fields__monsters__mon_ja',
                    'fields__region__reg_en',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A16AreaSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)