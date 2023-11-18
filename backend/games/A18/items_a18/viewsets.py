from rest_framework import viewsets, filters
from games.A18.items_a18.models import Item, Category, RecipeIdea, Catalyst
from games.A18.items_a18.serializers import A18CategoryItemSerializer, A18CategorySerializer, A18RecipeItemSerializer, A18ItemListSerializer, A18ItemSerializer, A18CatalystSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A18CategorySerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A18CategorySerializer(
                A18CategoryViewSet.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Category.objects
                .prefetch_related(
                    'item_set__text',
                    'add_categories__text',
                    'ingredient_set__synth__text',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A18CategoryItemSerializer(queryset, context={'language': lang}).data)

    @action(detail=False) 
    def en(self, request):
        return A18CategoryViewSet.get_query(lang="en")

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        return A18CategoryViewSet.get_query(lang="en", slug=slug)

    @action(detail=False) 
    def ja(self, request):
        return A18CategoryViewSet.get_query(lang="ja")

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        return A18CategoryViewSet.get_query(lang="ja", slug=slug)

    @action(detail=False) 
    def sc(self, request):
        return A18CategoryViewSet.get_query(lang="sc")

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        return A18CategoryViewSet.get_query(lang="sc", slug=slug)

    @action(detail=False) 
    def tc(self, request):
        return A18CategoryViewSet.get_query(lang="tc")

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        return A18CategoryViewSet.get_query(lang="tc", slug=slug)

class A18ItemViewSet(viewsets.ModelViewSet):
    queryset = (
        Item.objects
        .select_related(
            'text',
        )
        .prefetch_related(
            'categories',
            'ingredients__cat',
            'ingredients__item__text',
        )
    )
    serializer_class = A18ItemListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    def get_query(slug=None, lang="en"):
        if not slug:
            return Response(A18ItemListSerializer(
                A18ItemViewSet.queryset, many=True,context={'language': lang}).data)
        try:
            queryset = (
                Item.objects
                .select_related(
                    'text',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                    'book__text',
                    'traits',
                )
                .prefetch_related(
                    'chars',
                    'locations',
                    'categories',
                    'catalysts',
                    'fixed_components',
                    'random_components',
                    'ingredients__cat',
                    'ingredients__item__text',
                    'recipeidea_set__recipeunlock_set__recipecondition_set__category',
                    'recipeidea_set__recipeunlock_set__recipecondition_set__race',
                    'recipeidea_set__recipeunlock_set__recipecondition_set__item__text',
                    'recipeidea_set__recipeunlock_set__recipecondition_set__monster__text',
                    'effectlines_set__effectdata_set__effect',
                    'effectlines_set__effectdata_set__component',
                    'masteryline_set__masteries',
                    'recipes__text',
                    'monsters__text',
                    'catalyst',
                    'equip',
                    'shopslot_set__shop',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A18ItemSerializer(queryset, context={'language': lang}).data)

    @action(detail=False) 
    def en(self, request):
        return A18ItemViewSet.get_query(lang="en")

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        return A18ItemViewSet.get_query(lang="en", slug=slug)

    @action(detail=False) 
    def ja(self, request):
        return A18ItemViewSet.get_query(lang="ja")

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        return A18ItemViewSet.get_query(lang="ja", slug=slug)

    @action(detail=False) 
    def sc(self, request):
        return A18ItemViewSet.get_query(lang="sc")

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        return A18ItemViewSet.get_query(lang="sc", slug=slug)

    @action(detail=False) 
    def tc(self, request):
        return A18ItemViewSet.get_query(lang="tc")

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        return A18ItemViewSet.get_query(lang="tc", slug=slug)


class A18RecipeIdeaViewSet(viewsets.ModelViewSet):
    queryset = (
        Item.objects
        .select_related(
            'text',
            'book__text',
        )
        .prefetch_related(
            'recipeidea_set__recipeunlock_set__recipecondition_set__category',
            'recipeidea_set__recipeunlock_set__recipecondition_set__race',
            'recipeidea_set__recipeunlock_set__recipecondition_set__monster__text',
            'recipeidea_set__recipeunlock_set__recipecondition_set__item__text',
        )
        .filter(recipeidea__isnull=False)
        .distinct()
    )
    serializer_class = A18RecipeItemSerializer

    @action(detail=False) 
    def en(self, request):
        return Response(A18RecipeItemSerializer(
            A18RecipeIdeaViewSet.queryset, many=True, context={'language': 'en'}).data)

    @action(detail=False) 
    def ja(self, request):
        return Response(A18RecipeItemSerializer(
            A18RecipeIdeaViewSet.queryset, many=True, context={'language': 'ja'}).data)

    @action(detail=False) 
    def sc(self, request):
        return Response(A18RecipeItemSerializer(
            A18RecipeIdeaViewSet.queryset, many=True, context={'language': 'sc'}).data)

    @action(detail=False) 
    def tc(self, request):
        return Response(A18RecipeItemSerializer(
            A18RecipeIdeaViewSet.queryset, many=True, context={'language': 'tc'}).data)


class A18CatalystViewSet(viewsets.ModelViewSet):
    queryset = (
        Catalyst.objects
        .select_related(
            'action1',
            'action2',
            'action3',
            'action4',
            'action5',
            'action6',
            'item__text',
        )
        .prefetch_related(
            'item__categories'
        )
    )
    serializer_class = A18CatalystSerializer

    @action(detail=False) 
    def en(self, request):
        return Response(A18CatalystSerializer(
            A18CatalystViewSet.queryset, many=True, context={'language': 'en'}).data)

    @action(detail=False) 
    def ja(self, request):
        return Response(A18CatalystSerializer(
            A18CatalystViewSet.queryset, many=True, context={'language': 'ja'}).data)
    
    @action(detail=False) 
    def sc(self, request):
        return Response(A18CatalystSerializer(
            A18CatalystViewSet.queryset, many=True, context={'language': 'sc'}).data)
    
    @action(detail=False) 
    def tc(self, request):
        return Response(A18CatalystSerializer(
            A18CatalystViewSet.queryset, many=True, context={'language': 'tc'}).data)