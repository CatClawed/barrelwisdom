from rest_framework import viewsets, filters
from games.A25.items_a25.models import Item, RecipeTab, LatestUpdate
from games.A25.items_a25.serializers import A25RecipeTabSerializer, A25MaterialListSerializer, A25ItemFullSerializer, A25SynthesisItemListSerializer, A25CombatSerializer, A25LatestUpdateSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
 

class A25RecipeViewSet(viewsets.ModelViewSet):
    queryset = (
        RecipeTab.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'recipepage_set__desc',
            'recipepage_set__recipe_set__item__name',
            'recipepage_set__recipe_set__unlock1',
            'recipepage_set__recipe_set__unlock2',
            'recipepage_set__recipe_set__unlock3',
        )
    )
    serializer_class = A25RecipeTabSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25RecipeTabSerializer(
            A25RecipeViewSet.queryset, many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25RecipeTabSerializer(
            A25RecipeViewSet.queryset, many=True, context={'language': 'ja'}).data)

class A25MaterialViewSet(viewsets.ModelViewSet):
    queryset = (
        Item.objects
        .select_related(
            'name',
            'limit',
        )
        .prefetch_related(
            'material_set__color',
            'material_set__traits__name',
            'material_set__traits__desc',
            'material_set__traits__kind',
        )
        .filter(kind__slug="material")
    )
    serializer_class = A25MaterialListSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A25MaterialListSerializer(
                A25MaterialViewSet.queryset, many=True,context={'language': lang}).data)
        try:
            queryset = (
                Item.objects
                .select_related(
                    'name',
                    'desc',
                    'limit',
                )
                .prefetch_related(
                    'material_set__color',
                    'material_set__traits__name',
                    'material_set__traits__desc',
                    'material_set__traits__kind',
                    'reward_set__dungeon_set__name',
                    'reward_set__scorebattledifficulties_set__scorebattle_set',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A25ItemFullSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A25MaterialViewSet.get_query(lang="en")

    @action(detail=True, url_path="en")
    def en_full(self, request, slug):
        return A25MaterialViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A25MaterialViewSet.get_query(lang="ja")

    @action(detail=True, url_path="ja")
    def ja_full(self, request, slug):
        return A25MaterialViewSet.get_query(lang="ja", slug=slug)

class A25SynthViewSet(viewsets.ModelViewSet):
    queryset = (
        Item.objects
        .select_related(
            'name',
            'desc',
            'limit',
        )
        .prefetch_related(
            'recipe_set__ing1__name',
            'recipe_set__ing2__name',
            'recipe_set__ing3__name',
            'combatitem_set__kind',
            'equipment_set__kind'
        )
        .exclude(kind__slug="material")
    )
    serializer_class = A25SynthesisItemListSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A25SynthesisItemListSerializer(
                A25SynthViewSet.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Item.objects
                .select_related(
                    'name',
                    'desc',
                    'limit',
                )
                .prefetch_related(
                    'recipe_set__ing1__name',
                    'recipe_set__ing2__name',
                    'recipe_set__ing3__name',
                    'recipe_set__unlock1',
                    'recipe_set__unlock2',
                    'recipe_set__unlock3',
                    'recipe_set__color1',
                    'recipe_set__color2',
                    'recipe_set__color3',
                    'recipe_set__char1',
                    'recipe_set__char2',
                    'recipe_set__char3',
                    'combatitem_set__kind',
                    'combatitem_set__elem',
                    'combatitem_set__area',
                    'equipment_set__kind'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A25ItemFullSerializer(queryset, context={'language': lang}).data)

    @action(detail=False)
    def en(self, request):
        return A25SynthViewSet.get_query(lang="en")

    @action(detail=True, url_path="en")
    def en_full(self, request, slug):
        return A25SynthViewSet.get_query(lang="en", slug=slug)

    @action(detail=False)
    def ja(self, request):
        return A25SynthViewSet.get_query(lang="ja")

    @action(detail=True, url_path="ja")
    def ja_full(self, request, slug):
        return A25SynthViewSet.get_query(lang="ja", slug=slug)

class A25UpdateViewSet(viewsets.ModelViewSet):
    queryset = (
        LatestUpdate.objects
        .prefetch_related(
            'items__name',
            'items__kind',
            'characters__name',
            'characters__title',
            'memoria__name',
        )
    )
    serializer_class = A25LatestUpdateSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25LatestUpdateSerializer(
            A25UpdateViewSet.queryset.first(), context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25LatestUpdateSerializer(
            A25UpdateViewSet.queryset.first(), context={'language': 'ja'}).data)