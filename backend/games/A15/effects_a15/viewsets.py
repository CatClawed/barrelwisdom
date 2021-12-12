from rest_framework import viewsets, filters
from games.A15.effects_a15.models import Effect
from games.A15.effects_a15.serializers import A15EffectSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A15EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.all()
    serializer_class = A15EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_en'
            )
            .prefetch_related(
                'effectline_set',
                'effectline_set__item',
                'effectline_set__item__item_en'
            )
        )
        serializer = A15EffectSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Effect.objects
            .select_related(
                'eff_ja'
            )
            .prefetch_related(
                'effectline_set',
                'effectline_set__item',
                'effectline_set__item__item_ja'
            )
        )
        serializer = A15EffectSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'eff_en'
                )
                .prefetch_related(
                    'effectline_set',
                    'effectline_set__item',
                    'effectline_set__item__item_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15EffectSerializer(queryset, context={'language': 'en'})
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
                    'effectline_set',
                    'effectline_set__item',
                    'effectline_set__item__item_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15EffectSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)