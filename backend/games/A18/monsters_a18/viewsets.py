from rest_framework import viewsets, filters
from games.A18.monsters_a18.models import Monster, Race
from games.A18.monsters_a18.serializers import A18MonsterListSerializer, A18MonsterFullSerializer, A18RaceListSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all()
    serializer_class = A18MonsterListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'text',
                'kind',
            )
        )
        serializer = A18MonsterListSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'text',
                    'kind',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .prefetch_related(
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18MonsterFullSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'text',
                'kind',
            )
        )
        serializer = A18MonsterListSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'text',
                    'kind',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .prefetch_related(
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18MonsterFullSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'text',
                'kind',
            )
        )
        serializer = A18MonsterListSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'text',
                    'kind',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .prefetch_related(
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18MonsterFullSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Monster.objects
            .select_related(
                'text',
                'kind',
            )
        )
        serializer = A18MonsterListSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'text',
                    'kind',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                )
                .prefetch_related(
                    'item_set__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A18MonsterFullSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)

class A18RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    serializer_class = A18RaceListSerializer

    @action(detail=False)
    def en(self, request):
        queryset = Race.objects.all()
        serializer = A18RaceListSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = Race.objects.all()
        serializer = A18RaceListSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = Race.objects.all()
        serializer = A18RaceListSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = Race.objects.all()
        serializer = A18RaceListSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)