from rest_framework import viewsets, filters
from games.A15.properties_a15.models import Property
from games.A15.properties_a15.serializers import A15PropertySerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A15PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = A15PropertySerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Property.objects
            .select_related(
                'prop_en'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_en',
                'combo1',
                'combo1__prop_en',
                'combo2',
                'combo2__prop_en',
                'combo3',
                'combo3__prop_en'
            )
        )
        serializer = A15PropertySerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Property.objects
            .select_related(
                'prop_ja'
            )
            .prefetch_related(
                'item_set',
                'item_set__item_ja',
                'combo1',
                'combo1__prop_ja',
                'combo2',
                'combo2__prop_ja',
                'combo3',
                'combo3__prop_ja'
            )
        )
        serializer = A15PropertySerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Property.objects
                .select_related(
                    'prop_en'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_en',
                    'combo1',
                    'combo1__prop_en',
                    'combo2',
                    'combo2__prop_en',
                    'combo3',
                    'combo3__prop_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15PropertySerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Property.objects
                .select_related(
                    'prop_ja'
                )
                .prefetch_related(
                    'item_set',
                    'item_set__item_ja',
                    'combo1',
                    'combo1__prop_ja',
                    'combo2',
                    'combo2__prop_ja',
                    'combo3',
                    'combo3__prop_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A15PropertySerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)