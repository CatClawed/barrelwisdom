from django.db.models import Prefetch
from rest_framework import status
from rest_framework.response import Response
from games.A25RW.models import Trait, Effect, Item, Enemy, Shop, RecipeNode, RecipeTree, Category
from games.A25RW.serializers import A25RWTraitSerializer, A25RWEffectSerializer, A25RWEnemySerializer, A25RWEnemySimpleSerializer, A25RWItemSerializer, A25RWItemListSerializer, A25RWShopSerializer, A25RWRecipeTreeSerializer, A25RWCategorySerializer, A25RWCategorySimpleSerializer
from games._helpers.viewset_helper import DefaultViewSet

class A25RWTraitViewSet(DefaultViewSet):
    queryset = (
        Trait.objects
        .select_related(
            'name',
            'desc',
            'combo1__name',
            'combo2__name',
            'item__name'
        )
        .prefetch_related(
            'gift_set__character',
        )
    )
    serializer_class = A25RWTraitSerializer

class A25RWEffectViewSet(DefaultViewSet):
    queryset = (
        Effect.objects
        .select_related(
            'name',
            'desc'
        )
        .prefetch_related(
            Prefetch('item_set',
                queryset=Item.objects.select_related('name').distinct()
            )
        )
        .filter(flag=True)
    )
    serializer_class = A25RWEffectSerializer

class A25RWEnemyViewSet(DefaultViewSet):
    queryset = (
        Enemy.objects
        .select_related(
            'name',
            'desc1',
            'desc2',
            'desc3',
            'desc4',
            'char1',
            'char2',
            'char3',
            'char4',
            'race',
        )
        .prefetch_related(
            'enemyarea_set__area',
            'drops__name',
        )
    )
    serializer_class = A25RWEnemySerializer

    def list(self, request):
        queryset = (
            Enemy.objects
            .select_related(
                'name',
                'race',
            )
        )
        return Response(A25RWEnemySimpleSerializer(queryset,
            many=True, context=self.get_serializer_context()).data)

class A25RWItemViewSet(DefaultViewSet):
    queryset = (
        Item.objects
        .select_related(
            'name',
            'desc1',
            'desc2',
            'desc3',
            'desc4',
            'char1',
            'char2',
            'char3',
            'char4',
            'trait__name',
            'book__name',
            'recipenode__char',
            'recipenode__ing__name',
            'recipenode__recipe__name',
        )
        .prefetch_related(
            'categories__name',
            'add__name',
            'effects__name',
            'effects__desc',
            'shopslot_set__shop__name',
            'enemy_set__name',
            'gatherdata_set__area',
            'itemmix_set__combo__name',
            'itemmix_set__name',
            'quest_set__name',
            'quest_set__char',
            'recipe__ing__name',
            'recipe__cat__name',
            Prefetch(
                'recipenode__tree_model__recipenode_set',
                queryset=RecipeNode.objects.select_related('recipe__name', 'ing__name', 'char')
            )
        )
        .filter(visible=True)
    )
    serializer_class = A25RWItemSerializer

    def list(self, request):
        queryset = (
            Item.objects
            .select_related(
                'name',
            )
            .prefetch_related(
                'categories__name',
                'add__name',
            )
            .filter(visible=True)
        )
        return Response(A25RWItemListSerializer(queryset,
            many=True, context=self.get_serializer_context()).data)

class A25RWShopViewSet(DefaultViewSet):
    queryset = (
        Shop.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'shopslot_set__item__name',
        )
    )
    serializer_class = A25RWShopSerializer

    def retrieve(self, request, *args, **kwargs):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

class A25RWTreeViewSet(DefaultViewSet):
    queryset = (
        RecipeTree.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'recipenode_set__char',
            'recipenode_set__ing__name',
            'recipenode_set__recipe__name',
        )
    )
    serializer_class = A25RWRecipeTreeSerializer

    def retrieve(self, request, *args, **kwargs):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

class A25RWCategoryViewSet(DefaultViewSet):
    queryset = (
        Category.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'item_set__name',
            'addcat__name',
            'ingredient_set__item__name',
        )
    )
    serializer_class = A25RWCategorySerializer

    def list(self, request):
        queryset = (
            Category.objects
            .select_related(
                'name',
            )
        )
        return Response(A25RWCategorySimpleSerializer(queryset,
            many=True, context=self.get_serializer_context()).data)