from rest_framework import viewsets, filters
from games.A23.regions_a23.models import Region2
from games.A23.regions_a23.serializers import A23RegionSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A23RegionViewSet(viewsets.ModelViewSet):
    queryset = Region2.objects
    serializer_class = A23RegionSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Region2.objects
                .prefetch_related(
                    'chest2_set__item__item_en',
                    'chest2_set__book',
                    'child__climate2_set__mons__mon_en',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item__item_en',
                    'child__chest2_set__item__item_en',
                    'child__chest2_set__book',
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
                Region2.objects
                .prefetch_related(
                    'chest2_set__item__item_ja',
                    'chest2_set__book',
                    'child__climate2_set__mons__mon_ja',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item__item_ja',
                    'child__chest2_set__item__item_ja',
                    'child__chest2_set__book',
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
                Region2.objects
                .prefetch_related(
                    'chest2_set__item__item_ko',
                    'chest2_set__book',
                    'child__climate2_set__mons__mon_ko',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item__item_ko',
                    'child__chest2_set__item__item_ko',
                    'child__chest2_set__book',
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
                Region2.objects
                .prefetch_related(
                    'chest2_set__item__item_sc',
                    'chest2_set__book',
                    'child__climate2_set__mons__mon_sc',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item__item_sc',
                    'child__chest2_set__item__item_sc',
                    'child__chest2_set__book',
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
                Region2.objects
                .prefetch_related(
                    'chest2_set__item__item_tc',
                    'chest2_set__book',
                    'child__climate2_set__mons__mon_tc',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item',
                    'child__climate2_set__gathernode2_set__gatheritem2_set__item__item_tc',
                    'child__chest2_set__item__item_tc',
                    'child__chest2_set__book',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23RegionSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)