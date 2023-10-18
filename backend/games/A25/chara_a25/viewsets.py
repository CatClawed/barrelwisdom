from rest_framework import viewsets, filters
from games.A25.chara_a25.models import Character, Memoria
from games.A25.chara_a25.serializers import A25CharaListSerializer, A25CharaSerializer, A25MemoriaSerializer, A25MemoriaListSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A25CharaViewSet(viewsets.ModelViewSet):
    queryset = (
        Character.objects
        .select_related(
            'title',
            'name',
            'role',
            'elem',
        )
    )
    serializer_class = A25CharaListSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A25CharaListSerializer(
                A25CharaViewSet.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Character.objects
                .select_related(
                    'title',
                    'name',
                    'role',
                    'elem',
                    'limit',
                    'color1',
                    'color2',
                    'trait1__name',
                    'trait2__name',
                    'trait3__name',
                    'trait1__desc',
                    'trait2__desc',
                    'trait3__desc',
                )
                .prefetch_related(
                    'passive_set__name',
                    'passive_set__desc',
                    'skill_set__name',
                    'skill_set__desc',
                    'skill_set__elem',
                    'skill_set__area',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A25CharaSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A25CharaViewSet.get_query(lang="en")

    @action(detail=True, url_path="en")
    def en_full(self, request, slug):
        return A25CharaViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A25CharaViewSet.get_query(lang="ja")

    @action(detail=True, url_path="ja")
    def ja_full(self, request, slug):
        return A25CharaViewSet.get_query(lang="ja", slug=slug)

class A25MemoriaViewSet(viewsets.ModelViewSet):
    queryset = (
        Memoria.objects
        .select_related(
            'name',
        )
    )
    serializer_class = A25MemoriaListSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A25MemoriaListSerializer(
                A25MemoriaViewSet.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Memoria.objects
                .select_related(
                    'name',
                    'limit',
                    'skill_name',
                    'skill_desc',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A25MemoriaSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A25MemoriaViewSet.get_query(lang="en")

    @action(detail=True, url_path="en")
    def en_full(self, request, slug):
        return A25MemoriaViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A25MemoriaViewSet.get_query(lang="ja")

    @action(detail=True, url_path="ja")
    def ja_full(self, request, slug):
        return A25MemoriaViewSet.get_query(lang="ja", slug=slug)

