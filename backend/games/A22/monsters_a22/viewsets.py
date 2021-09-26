from rest_framework import viewsets, filters
from games.A22.monsters_a22.models import Monster
from games.A22.monsters_a22.serializers import A22MonsterSerializerEN, A22MonsterSerializerENFull, A22MonsterSerializerJA, A22MonsterSerializerJAFull, A22MonsterSerializerKO, A22MonsterSerializerKOFull, A22MonsterSerializerFR, A22MonsterSerializerFRFull, A22MonsterSerializerSC, A22MonsterSerializerSCFull, A22MonsterSerializerTC, A22MonsterSerializerTCFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all()
    serializer_class = A22MonsterSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    # full effect list
    @action(detail=False)
    def en(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_en'
            )
            .prefetch_related(
                'drops',
                'drops__item_en',
            )
            .order_by('index')
        )
        serializer = A22MonsterSerializerEN(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_ja'
            )
            .prefetch_related(
                'drops',
                'drops__item_ja'
            )
            .order_by('index')
        )
        serializer = A22MonsterSerializerJA(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_ko'
            )
            .prefetch_related(
                'drops',
                'drops__item_ko'
            )
            .order_by('index')
        )
        serializer = A22MonsterSerializerKO(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_fr'
            )
            .prefetch_related(
                'drops',
                'drops__item_fr'
            )
            .order_by('index')
        )
        serializer = A22MonsterSerializerFR(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_sc'
            )
            .prefetch_related(
                'drops',
                'drops__item_sc'
            )
            .order_by('index')
        )
        serializer = A22MonsterSerializerSC(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'mon_tc'
            )
            .prefetch_related(
                'drops',
                'drops__item_tc'
            )
            .order_by('index')
        )
        serializer = A22MonsterSerializerTC(queryset, many=True)
        return Response(serializer.data)

    # single monster view
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
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
                    'location__loc_en',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22MonsterSerializerENFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
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
                    'location__loc_ja',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22MonsterSerializerJAFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
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
                    'location__loc_ko',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22MonsterSerializerKOFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'mon_fr'
                )
                .prefetch_related(
                    'drops',
                    'drops__item_fr',
                    'location',
                    'location__loc_fr',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22MonsterSerializerFRFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
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
                    'location__loc_sc',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22MonsterSerializerSCFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
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
                    'location__loc_tc',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22MonsterSerializerTCFull(queryset)
        return Response(serializer.data)