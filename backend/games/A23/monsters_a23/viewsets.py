from rest_framework import viewsets, filters
from games.A23.monsters_a23.models import Monster
from games.A23.monsters_a23.serializers import A23MonsterSerializer, A23MonsterSerializerFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A23MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all()
    serializer_class = A23MonsterSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    # full list
    @action(detail=False)
    def en(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_en'
            )
        )
        serializer = A23MonsterSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_ja'
            )
        )
        serializer = A23MonsterSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_ko'
            )
        )
        serializer = A23MonsterSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_sc'
            )
        )
        serializer = A23MonsterSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_tc'
            )
        )
        serializer = A23MonsterSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    # single monster view
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'mon_en'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_en',
                    'location',
                    'location__reg_en',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23MonsterSerializerFull(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'mon_ja'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_ja',
                    'location',
                    'location__reg_ja',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23MonsterSerializerFull(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'mon_ko'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_ko',
                    'location',
                    'location__reg_ko',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23MonsterSerializerFull(queryset, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'mon_sc'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_sc',
                    'location',
                    'location__reg_sc',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23MonsterSerializerFull(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'mon_tc'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_tc',
                    'location',
                    'location__reg_tc',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23MonsterSerializerFull(queryset, context={'language': 'tc'})
        return Response(serializer.data)