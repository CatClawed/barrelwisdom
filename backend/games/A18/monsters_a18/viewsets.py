from rest_framework import viewsets, filters
from games.A18.monsters_a18.models import Monster, Race
from games.A18.monsters_a18.serializers import A18MonsterListSerializer, A18MonsterFullSerializer, A18RaceListSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18MonsterViewSet(viewsets.ModelViewSet):
    queryset = (
        Monster.objects
        .select_related(
            'text',
            'kind',
        )
    )
    serializer_class = A18MonsterListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(self, slug=None, lang="en"):
        if not slug:
            return Response(A18MonsterListSerializer(
                self.queryset, many=True,context={'language': lang}).data)
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
        return Response(A18MonsterFullSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return self.get_query(lang="en")

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        return self.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return self.get_query(lang="ja")

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        return self.get_query(lang="ja", slug=slug)
    @action(detail=False)
    def sc(self, request):
        return self.get_query(lang="sc")

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        return self.get_query(lang="sc", slug=slug)

    @action(detail=False)
    def tc(self, request):
        return self.get_query(lang="tc")

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        return self.get_query(lang="tc", slug=slug)

class A18RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    serializer_class = A18RaceListSerializer

    @action(detail=False)
    def en(self, request):
        return Response(A18RaceListSerializer(
            self.queryset, many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A18RaceListSerializer(
            self.queryset, many=True, context={'language': 'ja'}).data)

    @action(detail=False)
    def sc(self, request):
        return Response(A18RaceListSerializer(
            self.queryset, many=True, context={'language': 'sc'}).data)

    @action(detail=False)
    def tc(self, request):
        return Response(A18RaceListSerializer(
            self.queryset, many=True, context={'language': 'tc'}).data)