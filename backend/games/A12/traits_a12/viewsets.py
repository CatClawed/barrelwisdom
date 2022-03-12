from rest_framework import viewsets, filters
from games.A12.traits_a12.models import Trait
from games.A12.traits_a12.serializers import A12TraitSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A12TraitViewSet(viewsets.ModelViewSet):
    queryset = Trait.objects.all()
    serializer_class = A12TraitSerializer
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
                'item_set__item_en'
            )
        )
        serializer = A12TraitSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_ja'
            )
            .prefetch_related(
                'item_set__item_ja'
            )
        )
        serializer = A12TraitSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_en'
                )
                .prefetch_related(
                    'item_set__item_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12TraitSerializer(queryset, context={'language': 'en'})
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
                    'item_set__item_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A12TraitSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)