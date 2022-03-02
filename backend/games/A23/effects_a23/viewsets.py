from rest_framework import viewsets, filters
from games.A23.effects_a23.models import Effect
from games.A23.effects_a23.serializers import A23EffectSerializer, A23EffectSerializerFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A23EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects
    serializer_class = A23EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    # full effect list
    @action(detail=False)
    def en(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_en'
            )
        )
        serializer = A23EffectSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ja'
            )
        )
        serializer = A23EffectSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_ko'
            )
        )
        serializer = A23EffectSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_sc'
            )
        )
        serializer = A23EffectSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = self.filter_queryset(
            Effect.objects
            .select_related(
                'eff_tc'
            )
        )
        serializer = A23EffectSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'eff_en'
                )
                .prefetch_related(
                    'advanced',
                    'effectdata_set',
                    'effectdata_set__effectlines_set',
                    'effectdata_set__effectlines_set__item',
                    'effectdata_set__effectlines_set__item__item_en',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23EffectSerializerFull(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'eff_ja'
                )
                .prefetch_related(
                    'advanced',
                    'effectdata_set',
                    'effectdata_set__effectlines_set',
                    'effectdata_set__effectlines_set__item',
                    'effectdata_set__effectlines_set__item__item_ja',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23EffectSerializerFull(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'eff_ko'
                )
                .prefetch_related(
                    'advanced',
                    'effectdata_set',
                    'effectdata_set__effectlines_set',
                    'effectdata_set__effectlines_set__item',
                    'effectdata_set__effectlines_set__item__item_ko',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23EffectSerializerFull(queryset, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'eff_sc'
                )
                .prefetch_related(
                    'advanced',
                    'effectdata_set',
                    'effectdata_set__effectlines_set',
                    'effectdata_set__effectlines_set__item',
                    'effectdata_set__effectlines_set__item__item_sc',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23EffectSerializerFull(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'eff_tc'
                )
                .prefetch_related(
                    'advanced',
                    'effectdata_set',
                    'effectdata_set__effectlines_set',
                    'effectdata_set__effectlines_set__item',
                    'effectdata_set__effectlines_set__item__item_tc',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23EffectSerializerFull(queryset, context={'language': 'tc'})
        return Response(serializer.data)