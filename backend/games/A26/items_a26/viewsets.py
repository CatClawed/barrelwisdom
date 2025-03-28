from games.A26.items_a26.models import Trait, Effect, Item, Material, Category
from games.A26.items_a26.serializers import A26TraitSerializer, A26TraitListSerializer, A26EffectListSerializer, A26EffectSerializer, A26ItemListSerializer, A26ItemSerializer, A26MaterialSerializer, A26CategorySerializer, A26CategoryFullSerializer
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from games._helpers.viewset_helper import DefaultViewSetID

class A26TraitViewSet(DefaultViewSetID):
    queryset = (
        Trait.objects
        .select_related(
            'name',
            'desc1',
            'desc2',
            'combo1__name',
            'combo2__name',
            'combo3__name',
            'combo4__name',
            'group'
        )
        .prefetch_related(
            'group__trait_set__name',
            'monster_set__name',
        )
    )
    serializer_class = A26TraitListSerializer

    def get_query(self, id=None, lang="en"):
        if not id:
            return Response(A26TraitListSerializer(
                self.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'name',
                    'desc1',
                    'desc2',
                    'combo1__name',
                    'combo2__name',
                    'combo3__name',
                    'combo4__name',
                    'group'
                )
                .prefetch_related(
                    'chests',
                    'group__trait_set__name',
                )
                .get(id=id)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A26TraitSerializer(queryset, context={'language': lang}).data)

class A26EffectViewSet(DefaultViewSetID):
    queryset = (
        Effect.objects
        .select_related(
            'name',
            'desc1',
            'desc2',
        )
    )
    serializer_class = A26EffectListSerializer

    def get_query(self, id=None, lang="en"):
        if not id:
            return Response(A26EffectListSerializer(
                self.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Effect.objects
                .select_related(
                    'name',
                    'desc1',
                    'desc2',
                )
                .get(id=id)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A26EffectSerializer(queryset, context={'language': lang}).data)

class A26ItemViewSet(DefaultViewSetID):
    queryset = (
        Item.objects
        .select_related(
            'name',
            'desc',
        )
        .prefetch_related(
            'cats__name',
            'mats__name',
        )
    )
    serializer_class = A26ItemListSerializer

    def get_query(self, id=None, lang="en"):
        if not id:
            return Response(A26ItemListSerializer(
                self.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Item.objects
                .select_related(
                    'name',
                    'desc',
                )
                .prefetch_related(
                    'location',
                    'cats__name',
                    'mats__name',
                    'itemstatus_set__eff__eff__name',
                    'itemstatus_set__eff__eff__desc1',
                    'itemstatus_set__eff__eff__desc2',
                    'recipematerial__recipe__mat__name',
                    'recipe__recipe__item__name',
                    'recipe__recipe__cat__name',
                    'recipe__recipe__eff__name',
                    'recipe__recipe__eff__desc1',
                    'recipe__recipe__eff__desc2',
                    'recipe__level__reward',
                    'monster_set__name',
                    'raredrop__name',
                )
                .get(id=id)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A26ItemSerializer(queryset, context={'language': lang}).data)

class A26MaterialViewSet(DefaultViewSetID):
    queryset = (
        Material.objects
        .select_related(
            'name',
        )
    )
    serializer_class = A26MaterialSerializer

    def get_query(self, id=None, lang="en"):
        return Response(A26MaterialSerializer(
            self.queryset, many=True, context={'language': lang}).data)

class A26CategoryViewSet(DefaultViewSetID):
    queryset = (
        Category.objects
        .select_related(
            'name',
        )
    )
    serializer_class = A26CategorySerializer

    def get_query(self, id=None, lang="en"):
        if not id:
            return Response(A26CategorySerializer(
                self.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Category.objects
                .select_related(
                    'name',
                )
                .prefetch_related(
                    'item_set__name',
                    'recipeeffect_set__recipe_set__item__name',
                )
                .get(id=id)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A26CategoryFullSerializer(queryset, context={'language': lang}).data)
