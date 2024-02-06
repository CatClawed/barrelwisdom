from rest_framework import viewsets, filters
from games.A25.misc_a25.models import Filterable, Trait, Research
from games.A25.chara_a25.models import Character
from games.A25.items_a25.models import Material
from games.A25.misc_a25.serializers import A25ResearchSerializer, A25TraitSerializer, A25FilterableSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from django.db.models import Prefetch


class A25TraitViewSet(viewsets.ModelViewSet):
    queryset = (
        Trait.objects
        .select_related(
            'desc',
            'name',
            'kind',
            'cat',
        )
        .prefetch_related(
            Prefetch(
                'chara_trait1',
                queryset=Character.objects.filter(gbl=True)
            ),
            Prefetch(
                'chara_trait2',
                queryset=Character.objects.filter(gbl=True)
            ),
            Prefetch(
                'chara_trait3',
                queryset=Character.objects.filter(gbl=True)
            ),
            Prefetch(
                'material_set',
                queryset=Material.objects.filter(item__gbl=True)
            ),
            'chara_trait1__name',
            'chara_trait1__title',
            'chara_trait2__name',
            'chara_trait2__title',
            'chara_trait3__name',
            'chara_trait3__title',
            'material_set__item__name',
        )
    )
    serializer_class = A25TraitSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        queryset = A25TraitViewSet.queryset
        if lang == 'ja':
            queryset = (
                Trait.objects
                .select_related(
                    'desc',
                    'name',
                    'kind',
                    'cat',
                )
                .prefetch_related(
                    'chara_trait1__name',
                    'chara_trait1__title',
                    'chara_trait2__name',
                    'chara_trait2__title',
                    'chara_trait3__name',
                    'chara_trait3__title',
                    'material_set__item__name',
                )
            )
        
        if not slug:
            return Response(A25TraitSerializer(
                queryset, many=True, context={'language': lang}).data)
        try:
            queryset = queryset.get(slug=slug)
        except ObjectDoesNotExist:
            raise Http404
        return Response(A25TraitSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A25TraitViewSet.get_query(lang="en")

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        return A25TraitViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A25TraitViewSet.get_query(lang="ja")

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        return A25TraitViewSet.get_query(lang="ja", slug=slug)


class A25ResearchViewSet(viewsets.ModelViewSet):
    queryset = (
        Research.objects
        .select_related(
            'desc',
            'name',
            'kind',
            'req',
        )
    )
    serializer_class = A25ResearchSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25ResearchSerializer(
            A25ResearchViewSet.queryset, many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25ResearchSerializer(
            A25ResearchViewSet.queryset, many=True, context={'language': 'ja'}).data)


class A25FilterViewSet(viewsets.ModelViewSet):
    queryset = Filterable.objects.all()
    serializer_class = A25FilterableSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'kind'

    def get_query(kind, lang='en'):
        try:
            queryset = (
                Filterable.objects
                .filter(kind=kind)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A25FilterableSerializer(
            queryset, many=True, context={'language': lang}).data)

    @action(detail=True)
    def en(self, request, kind):
        return A25FilterViewSet.get_query(kind=kind, lang='en')

    @action(detail=True)
    def ja(self, request, kind):
        return A25FilterViewSet.get_query(kind=kind, lang='ja')
