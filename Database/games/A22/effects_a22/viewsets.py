from rest_framework import viewsets, filters
from games.A22.effects_a22.models import Effect, Effect_en, Effect_ja, Effect_ko, Effect_fr, Effect_sc, Effect_tc
from games.A22.effects_a22.serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class A22Effect_enViewSet(viewsets.ModelViewSet):
    queryset = Effect_en.objects.all()
    serializer_class = A22Effect_enSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['index']

class A22EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.all()
    serializer_class = A22EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['index']
    lookup_field = 'slugname'

    # full effect list
    @action(detail=False)
    def en(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_en'
            )
            .prefetch_related(
                'effects',
                'effects__eff_en'
            )
            .order_by('index')
        )
        serializer = A22EffectSerializerEN(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_ja'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ja'
            )
            .order_by('index')
        )
        serializer = A22EffectSerializerJA(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_ko'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ko'
            )
            .order_by('index')
        )
        serializer = A22EffectSerializerKO(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_fr'
            )
            .prefetch_related(
                'effects',
                'effects__eff_fr'
            )
            .order_by('index')
        )
        serializer = A22EffectSerializerFR(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_sc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_sc'
            )
            .order_by('index')
        )
        serializer = A22EffectSerializerSC(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_tc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_tc'
            )
            .order_by('index')
        )
        serializer = A22EffectSerializerTC(queryset, many=True)
        return Response(serializer.data)

    # single effect view
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        queryset = (
            Effect.objects
            .select_related(
                'eff_en'
            )
            .prefetch_related(
                'effects',
                'effects__eff_en',
                'parent',
                'parent__eff_en',
                'effectline_set',
                'effectline_set__effect__eff_en',
                'effectline_set__item__item_en'
            )
            .get(slugname=slugname)
        )
        serializer = A22EffectSerializerENFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        queryset = (
            Effect.objects
            .select_related(
                'eff_ja'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ja',
                'parent',
                'parent__eff_ja',
                'effectline_set',
                'effectline_set__effect__eff_ja',
                'effectline_set__item__item_ja'
            )
            .get(slugname=slugname)
        )
        serializer = A22EffectSerializerJAFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        queryset = (
            Effect.objects
            .select_related(
                'eff_ko'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ko',
                'parent',
                'parent__eff_ko',
                'effectline_set',
                'effectline_set__effect__eff_ko',
                'effectline_set__item__item_ko'
            )
            .get(slugname=slugname)
        )
        serializer = A22EffectSerializerKOFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        queryset = (
            Effect.objects
            .select_related(
                'eff_fr'
            )
            .prefetch_related(
                'effects',
                'effects__eff_fr',
                'parent',
                'parent__eff_fr',
                'effectline_set',
                'effectline_set__effect__eff_fr',
                'effectline_set__item__item_fr'
            )
            .get(slugname=slugname)
        )
        serializer = A22EffectSerializerFRFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        queryset = (
            Effect.objects
            .select_related(
                'eff_sc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_sc',
                'parent',
                'parent__eff_sc',
                'effectline_set',
                'effectline_set__effect__eff_sc',
                'effectline_set__item__item_sc'
            )
            .get(slugname=slugname)
        )
        serializer = A22EffectSerializerSCFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        queryset = (
            Effect.objects
            .select_related(
                'eff_tc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_tc',
                'parent',
                'parent__eff_tc',
                'effectline_set',
                'effectline_set__effect__eff_tc',
                'effectline_set__item__item_tc'
            )
            .get(slugname=slugname)
        )
        serializer = A22EffectSerializerTCFull(queryset)
        return Response(serializer.data)