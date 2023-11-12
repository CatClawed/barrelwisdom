from rest_framework import viewsets, filters
from games.A18.effects_traits_a18.models import Trait, Effect
from games.A18.effects_traits_a18.serializers import A18TraitSerializer, A18TraitListSerializer, A18EffectSerializer, A18EffectSerializerFull
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18TraitViewSet(viewsets.ModelViewSet):
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
    serializer_class = A18TraitListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A18TraitListSerializer(
                A18TraitViewSet.queryset, many=True, context={'language': lang}).data)
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
        return Response(A18TraitSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A18TraitViewSet.get_query(lang="en")

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        return A18TraitViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A18TraitViewSet.get_query(lang="ja")

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        return A18TraitViewSet.get_query(lang="ja", slug=slug)

    @action(detail=False)
    def sc(self, request):
        return A18TraitViewSet.get_query(lang="sc")

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        return A18TraitViewSet.get_query(lang="sc", slug=slug)

    @action(detail=False)
    def tc(self, request):
        return A18TraitViewSet.get_query(lang="tc")

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        return A18TraitViewSet.get_query(lang="tc", slug=slug)

class A18EffectViewSet(viewsets.ModelViewSet):
    queryset = Effect.objects.all()
    serializer_class = A18EffectSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A18EffectSerializer(
                A18EffectViewSet.queryset, many=True, context={'language': lang}).data)
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
        return Response(A18EffectSerializerFull(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A18EffectViewSet.get_query(lang="en")

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        return A18EffectViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A18EffectViewSet.get_query(lang="ja")

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        return A18EffectViewSet.get_query(lang="ja", slug=slug)

    @action(detail=False)
    def sc(self, request):
        return A18EffectViewSet.get_query(lang="sc")

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        return A18EffectViewSet.get_query(lang="sc", slug=slug)

    @action(detail=False)
    def tc(self, request):
        return A18EffectViewSet.get_query(lang="tc")

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        return A18EffectViewSet.get_query(lang="tc", slug=slug)