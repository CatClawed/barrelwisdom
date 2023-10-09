from rest_framework import viewsets, filters
from games.A25.misc_a25.models import Filterable, Trait, Research
from games.A25.misc_a25.serializers import A25ResearchSerializer, A25TraitSerializer, A25FilterableSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404


class A25TraitViewSet(viewsets.ModelViewSet):
    queryset = Trait.objects.all()
    serializer_class = A25TraitSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'desc',
                'name',
                'kind',
                'cat',
            )
            .prefetch_related(
                'trans',
                'chara_trait1__name',
                'chara_trait1__title',
                'chara_trait2__name',
                'chara_trait2__title',
                'chara_trait3__name',
                'chara_trait3__title',
                'material_set__item__name',
            )
        )
        serializer = A25TraitSerializer(
            queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'desc',
                    'name',
                    'kind',
                    'cat',
                )
                .prefetch_related(
                    'trans',
                    'chara_trait1__name',
                    'chara_trait1__title',
                    'chara_trait2__name',
                    'chara_trait2__title',
                    'chara_trait3__name',
                    'chara_trait3__title',
                    'material_set__item__name',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A25TraitSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'desc',
                'name',
                'kind',
                'cat',
            )
            .prefetch_related(
                'trans',
                'chara_trait1__name',
                'chara_trait1__title',
                'chara_trait2__name',
                'chara_trait2__title',
                'chara_trait3__name',
                'chara_trait3__title',
                'material_set__item__name',
            )
        )
        serializer = A25TraitSerializer(
            queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'desc',
                    'name',
                    'kind',
                    'cat',
                )
                .prefetch_related(
                    'trans',
                    'chara_trait1__name',
                    'chara_trait1__title',
                    'chara_trait2__name',
                    'chara_trait2__title',
                    'chara_trait3__name',
                    'chara_trait3__title',
                    'material_set__item__name',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A25TraitSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)


class A25ResearchViewSet(viewsets.ModelViewSet):
    queryset = Research.objects.all()
    serializer_class = A25ResearchSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        queryset = (
            Research.objects
            .select_related(
                'desc',
                'name',
                'kind',
                'req',
            )
        )
        serializer = A25ResearchSerializer(
            queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Research.objects
            .select_related(
                'desc',
                'name',
                'kind',
                'req',
            )
        )
        serializer = A25ResearchSerializer(
            queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)


class A25FilterViewSet(viewsets.ModelViewSet):
    queryset = Filterable.objects.all()
    serializer_class = A25FilterableSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'kind'

    @action(detail=True, methods=['get'], url_path="en")
    def en(self, request, kind):
        try:
            queryset = (
                Filterable.objects
                .filter(kind=kind)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A25FilterableSerializer(
            queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja(self, request, kind):
        try:
            queryset = (
                Filterable.objects
                .filter(kind=kind)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A25FilterableSerializer(
            queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
