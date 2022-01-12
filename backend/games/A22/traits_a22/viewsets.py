from rest_framework import viewsets, filters
from games.A22.traits_a22.models import Trait
from games.A22.traits_a22.serializers import A22TraitSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22TraitViewSet(viewsets.ModelViewSet):
    queryset = Trait.objects.all()
    serializer_class = A22TraitSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_en'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_en'
            )
        )
        serializer = A22TraitSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_ko'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_ko'
            )
        )
        serializer = A22TraitSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_ja'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_ja'
            )
        )
        serializer = A22TraitSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_fr'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_fr'
            )
        )
        serializer = A22TraitSerializer(queryset, many=True, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_sc'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_sc'
            )
        )
        serializer = A22TraitSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_tc'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_tc'
            )
        )
        serializer = A22TraitSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

# Detailed View
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_en'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22TraitSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_ko'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_ko'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22TraitSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_ja'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22TraitSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_fr'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_fr'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22TraitSerializer(queryset, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_sc'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_sc'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22TraitSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_tc'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_tc'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22TraitSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)