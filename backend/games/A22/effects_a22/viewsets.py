from rest_framework import viewsets, filters
from games.A22.effects_a22.models import Effect
from games.A22.effects_a22.serializers import A22EffectSerializer, A22EVEffectSerializer, A22EffectSerializerFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.filter(efftype='Normal')
    serializer_class = A22EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
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
        ).filter(efftype='Normal')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ja'
            )
        ).filter(efftype='Normal')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ko'
            )
        ).filter(efftype='Normal')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_fr'
            )
        ).filter(efftype='Normal')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_sc'
            )
        ).filter(efftype='Normal')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_tc'
            )
        ).filter(efftype='Normal')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'tc'})
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
        serializer = A22EffectSerializerFull(queryset, context={'language': 'en'})
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
        serializer = A22EffectSerializerFull(queryset, context={'language': 'ja'})
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
        serializer = A22EffectSerializerFull(queryset, context={'language': 'ko'})
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
        serializer = A22EffectSerializerFull(queryset, context={'language': 'fr'})
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
        serializer = A22EffectSerializerFull(queryset, context={'language': 'sc'})
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
        serializer = A22EffectSerializerFull(queryset, context={'language': 'tc'})
        return Response(serializer.data)

class A22EVEffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.filter(efftype='EV')
    serializer_class = A22EVEffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
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

        ).filter(efftype='EV')
        serializer = A22EVEffectSerializer(queryset, many=True, context={'language': 'en'})
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

        ).filter(efftype='EV')
        serializer = A22EVEffectSerializer(queryset, many=True, context={'language': 'ja'})
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

        ).filter(efftype='EV')
        serializer = A22EVEffectSerializer(queryset, many=True, context={'language': 'ko'})
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

        ).filter(efftype='EV')
        serializer = A22EVEffectSerializer(queryset, many=True, context={'language': 'fr'})
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

        ).filter(efftype='EV')
        serializer = A22EVEffectSerializer(queryset, many=True, context={'language': 'sc'})
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

        ).filter(efftype='EV')
        serializer = A22EVEffectSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

class A22ForgeEffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.filter(efftype='Forge')
    serializer_class = A22EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
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
        ).filter(efftype='Forge')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ja'
            )
        ).filter(efftype='Forge')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ko'
            )
        ).filter(efftype='Forge')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_fr'
            )
        ).filter(efftype='Forge')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_sc'
            )
        ).filter(efftype='Forge')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_tc'
            )
        ).filter(efftype='Forge')
        serializer = A22EffectSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)