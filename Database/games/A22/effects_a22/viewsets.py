from rest_framework import viewsets, filters
from games.A22.effects_a22.models import Effect
from games.A22.effects_a22.serializers import A22EffectSerializerEN, A22EffectSerializerJA, A22EffectSerializerKO, A22EffectSerializerFR, A22EffectSerializerSC, A22EffectSerializerTC, A22EffectSerializerENFull, A22EffectSerializerJAFull, A22EffectSerializerKOFull, A22EffectSerializerFRFull, A22EffectSerializerSCFull, A22EffectSerializerTCFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.filter(efftype='Normal')
    serializer_class = A22EffectSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['index']
    lookup_field = 'slugname'
    filterset_fields = ['efftype']

    # full effect list
    @action(detail=False)
    def en(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_en'
            )
            .prefetch_related(
                'effects',
                'effects__eff_en'
            )
            .order_by('index')
        ).filter(efftype='Normal')
        serializer = A22EffectSerializerEN(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ja'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ja'
            )
            .order_by('index')
        ).filter(efftype='Normal')
        serializer = A22EffectSerializerJA(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ko'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ko'
            )
            .order_by('index')
        ).filter(efftype='Normal')
        serializer = A22EffectSerializerKO(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_fr'
            )
            .prefetch_related(
                'effects',
                'effects__eff_fr'
            )
            .order_by('index')
        ).filter(efftype='Normal')
        serializer = A22EffectSerializerFR(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_sc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_sc'
            )
            .order_by('index')
        ).filter(efftype='Normal')
        serializer = A22EffectSerializerSC(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_tc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_tc'
            )
            .order_by('index')
        ).filter(efftype='Normal')
        serializer = A22EffectSerializerTC(queryset, many=True)
        return Response(serializer.data)

    # single effect view
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
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
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22EffectSerializerENFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
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
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22EffectSerializerJAFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
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
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22EffectSerializerKOFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
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
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22EffectSerializerFRFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
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
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22EffectSerializerSCFull(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
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
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22EffectSerializerTCFull(queryset)
        return Response(serializer.data)

class A22EVEffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.filter(efftype='EV')
    serializer_class = A22EffectSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['index']
    lookup_field = 'slugname'
    filterset_fields = ['efftype']

    # full effect list
    @action(detail=False)
    def en(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_en'
            )
            .prefetch_related(
                'effects',
                'effects__eff_en'
            )
            .order_by('index')
        ).filter(efftype='EV')
        serializer = A22EffectSerializerEN(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ja'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ja'
            )
            .order_by('index')
        ).filter(efftype='EV')
        serializer = A22EffectSerializerJA(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ko'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ko'
            )
            .order_by('index')
        ).filter(efftype='EV')
        serializer = A22EffectSerializerKO(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_fr'
            )
            .prefetch_related(
                'effects',
                'effects__eff_fr'
            )
            .order_by('index')
        ).filter(efftype='EV')
        serializer = A22EffectSerializerFR(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_sc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_sc'
            )
            .order_by('index')
        ).filter(efftype='EV')
        serializer = A22EffectSerializerSC(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_tc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_tc'
            )
            .order_by('index')
        ).filter(efftype='EV')
        serializer = A22EffectSerializerTC(queryset, many=True)
        return Response(serializer.data)

class A22ForgeEffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.filter(efftype='Forge')
    serializer_class = A22EffectSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['index']
    lookup_field = 'slugname'
    filterset_fields = ['efftype']

    # full effect list
    @action(detail=False)
    def en(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_en'
            )
            .prefetch_related(
                'effects',
                'effects__eff_en'
            )
            .order_by('index')
        ).filter(efftype='Forge')
        serializer = A22EffectSerializerEN(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ja'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ja'
            )
            .order_by('index')
        ).filter(efftype='Forge')
        serializer = A22EffectSerializerJA(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ko'
            )
            .prefetch_related(
                'effects',
                'effects__eff_ko'
            )
            .order_by('index')
        ).filter(efftype='Forge')
        serializer = A22EffectSerializerKO(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_fr'
            )
            .prefetch_related(
                'effects',
                'effects__eff_fr'
            )
            .order_by('index')
        ).filter(efftype='Forge')
        serializer = A22EffectSerializerFR(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_sc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_sc'
            )
            .order_by('index')
        ).filter(efftype='Forge')
        serializer = A22EffectSerializerSC(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_tc'
            )
            .prefetch_related(
                'effects',
                'effects__eff_tc'
            )
            .order_by('index')
        ).filter(efftype='Forge')
        serializer = A22EffectSerializerTC(queryset, many=True)
        return Response(serializer.data)