from rest_framework import viewsets, filters
from games.A18.effects_traits_a18.models import Trait, Effect
from games.A18.effects_traits_a18.serializers import A18TraitSerializer, A18TraitListSerializer, A18EffectSerializer, A18EffectSerializerFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18TraitViewSet(viewsets.ModelViewSet):
    queryset = Trait.objects.all()
    serializer_class = A18TraitListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'combo1',
                'combo2'
            )
            .prefetch_related(
                'item_set__text',
            )
        )
        serializer = A18TraitListSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'combo1',
                    'combo2'
                )
                .prefetch_related(
                    'advanced',
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18TraitSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'combo1',
                'combo2'
            )
            .prefetch_related(
                'item_set__text',
            )
        )
        serializer = A18TraitListSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'combo1',
                    'combo2'
                )
                .prefetch_related(
                    'advanced',
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18TraitSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'combo1',
                'combo2'
            )
            .prefetch_related(
                'item_set__text',
            )
        )
        serializer = A18TraitListSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'combo1',
                    'combo2'
                )
                .prefetch_related(
                    'advanced',
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18TraitSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'combo1',
                'combo2'
            )
            .prefetch_related(
                'item_set__text',
            )
        )
        serializer = A18TraitListSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'combo1',
                    'combo2'
                )
                .prefetch_related(
                    'advanced',
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18TraitSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)

class A18EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.all()
    serializer_class = A18EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Effect.objects.all()
        )
        serializer = A18EffectSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .prefetch_related(
                    'advanced',
                    'effectdata_set__line__item__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18EffectSerializerFull(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Effect.objects.all()
        )
        serializer = A18EffectSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .prefetch_related(
                    'advanced',
                    'effectdata_set__line__item__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18EffectSerializerFull(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Effect.objects.all()
        )
        serializer = A18EffectSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .prefetch_related(
                    'advanced',
                    'effectdata_set__line__item__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18EffectSerializerFull(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Effect.objects.all()
        )
        serializer = A18EffectSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Effect.objects
                .prefetch_related(
                    'advanced',
                    'effectdata_set__line__item__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18EffectSerializerFull(queryset, context={'language': 'tc'})
        return Response(serializer.data)