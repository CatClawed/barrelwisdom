from rest_framework import viewsets, filters
from games.A23.items_a23.models import Item, Book, Category, RecipeIdea
from games.A23.items_a23.serializers import A23ItemSerializer, A23ItemListSerializer, A23CategorySerializer, A23BookSerializer, A23CategoryItemSerializer, A23RecipeIdeaSerializer, A23SeedSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A23CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A23CategorySerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request): 
        queryset = (
            Category.objects
        )
        serializer = A23CategorySerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .prefetch_related(
                    'item_set__item_en',
                    'add_categories__item_en',
                    'ingredient_set__synth__item_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23CategoryItemSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Category.objects
        )
        serializer = A23CategorySerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .prefetch_related(
                    'item_set__item_ja',
                    'add_categories__item_ja',
                    'ingredient_set__synth__item_ja'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23CategoryItemSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ko(self, request): 
        queryset = (
            Category.objects
        )
        serializer = A23CategorySerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .prefetch_related(
                    'item_set__item_ko',
                    'add_categories__item_ko',
                    'ingredient_set__synth__item_ko'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23CategoryItemSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Category.objects
        )
        serializer = A23CategorySerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .prefetch_related(
                    'item_set__item_sc',
                    'add_categories__item_sc',
                    'ingredient_set__synth__item_sc'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23CategoryItemSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Category.objects
        )
        serializer = A23CategorySerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Category.objects
                .prefetch_related(
                    'item_set__item_tc',
                    'add_categories__item_tc',
                    'ingredient_set__synth__item_tc'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23CategoryItemSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)
    
class A23BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = A23BookSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'shop'
                )
                .prefetch_related(
                    'items__item_en',
                    'chest2_set__loc__parent'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'shop'
                )
                .prefetch_related(
                    'items__item_ja',
                    'chest2_set__loc__parent'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'shop'
                )
                .prefetch_related(
                    'items__item_ko',
                    'chest2_set__loc__parent'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'shop'
                )
                .prefetch_related(
                    'items__item_sc',
                    'chest2_set__loc__parent'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Book.objects
                .select_related(
                    'shop'
                )
                .prefetch_related(
                    'items__item_tc',
                    'chest2_set__loc__parent'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23BookSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)

class A23ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = A23ItemListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_en'
            )
            .prefetch_related(
                'categories',
                'add',
                'ingredients__item__item_en',
                'ingredients__cat'
            )
        )
        serializer = A23ItemListSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_en',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                    'equip',
                    'char',
                    'equip',
                    'characterequip',
                    'from_seed__item_en',
                )
                .prefetch_related(
                    'categories',
                    'add',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set__mon_en',
                    'book_set',
                    'components',
                    'traits__trait_en',
                    'recipetext_set',
                    'ingredients__cat',
                    'ingredients__item__item_en',
                    'effectlines_set__effectdata_set__component',
                    'effectlines_set__effectdata_set__effect__eff_en',
                    'chest2_set__item__item_en',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_ja'
            )
            .prefetch_related(
                'categories',
                'add',
                'ingredients__item__item_ja',
                'ingredients__cat'
            )
        )
        serializer = A23ItemListSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ja',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                    'equip',
                    'char',
                    'equip',
                    'characterequip',
                    'from_seed__item_ja',
                )
                .prefetch_related(
                    'categories',
                    'add',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set__mon_ja',
                    'book_set',
                    'components',
                    'traits__trait_ja',
                    'recipetext_set',
                    'ingredients__cat',
                    'ingredients__item__item_ja',
                    'effectlines_set__effectdata_set__component',
                    'effectlines_set__effectdata_set__effect__eff_ja',
                    'chest2_set__item__item_ja',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ko(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_ko'
            )
            .prefetch_related(
                'categories',
                'add',
                'ingredients__item__item_ko',
                'ingredients__cat'
            )
        )
        serializer = A23ItemListSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ko',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                    'equip',
                    'char',
                    'equip',
                    'characterequip',
                    'from_seed__item_ko',
                )
                .prefetch_related(
                    'categories',
                    'add',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set__mon_ko',
                    'book_set',
                    'components',
                    'traits__trait_ko',
                    'recipetext_set',
                    'ingredients__cat',
                    'ingredients__item__item_ko',
                    'effectlines_set__effectdata_set__component',
                    'effectlines_set__effectdata_set__effect__eff_ko',
                    'chest2_set__item__item_ko',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_sc'
            )
            .prefetch_related(
                'categories',
                'add',
                'ingredients__item__item_sc',
                'ingredients__cat'
            )
        )
        serializer = A23ItemListSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_sc',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                    'equip',
                    'char',
                    'equip',
                    'characterequip',
                    'from_seed__item_sc',
                )
                .prefetch_related(
                    'categories',
                    'add',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set__mon_sc',
                    'book_set',
                    'components',
                    'traits__trait_sc',
                    'recipetext_set',
                    'ingredients__cat',
                    'ingredients__item__item_sc',
                    'effectlines_set__effectdata_set__component',
                    'effectlines_set__effectdata_set__effect__eff_sc',
                    'chest2_set__item__item_sc',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_tc'
            )
            .prefetch_related(
                'categories',
                'add',
                'ingredients__item__item_tc',
                'ingredients__cat'
            )
        )
        serializer = A23ItemListSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_tc',
                    'char1',
                    'char2',
                    'char3',
                    'char4',
                    'equip',
                    'char',
                    'equip',
                    'characterequip',
                    'from_seed__item_tc',
                )
                .prefetch_related(
                    'categories',
                    'add',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set__mon_tc',
                    'book_set',
                    'components',
                    'traits__trait_tc',
                    'recipetext_set',
                    'ingredients__cat',
                    'ingredients__item__item_tc',
                    'effectlines_set__effectdata_set__component',
                    'effectlines_set__effectdata_set__effect__eff_tc',
                    'chest2_set__item__item_tc',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)
    
class A23RecipeViewSet(viewsets.ModelViewSet):
    queryset = RecipeIdea.objects.all()
    serializer_class = A23RecipeIdeaSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request): 
        queryset = (
            RecipeIdea.objects
            .select_related(
                'item__item_en',
                'char'
            )
            .prefetch_related(
                'item__recipetext_set',
                'item__book_set__chest2_set__loc__parent',
                'item__book_set__shop',
            )
        )
        serializer = A23RecipeIdeaSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            RecipeIdea.objects
            .select_related(
                'item__item_ja',
                'char'
            )
            .prefetch_related(
                'item__recipetext_set',
                'item__book_set__chest2_set__loc__parent',
                'item__book_set__shop',
            )
        )
        serializer = A23RecipeIdeaSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ko(self, request): 
        queryset = (
            RecipeIdea.objects
            .select_related(
                'item__item_ko',
                'char'
            )
            .prefetch_related(
                'item__recipetext_set',
                'item__book_set__chest2_set__loc__parent',
                'item__book_set__shop',
            )
        )
        serializer = A23RecipeIdeaSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            RecipeIdea.objects
            .select_related(
                'item__item_sc',
                'char'
            )
            .prefetch_related(
                'item__recipetext_set',
                'item__book_set__chest2_set__loc__parent',
                'item__book_set__shop',
            )
        )
        serializer = A23RecipeIdeaSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            RecipeIdea.objects
            .select_related(
                'item__item_tc',
                'char'
            )
            .prefetch_related(
                'item__recipetext_set',
                'item__book_set__chest2_set__loc__parent',
                'item__book_set__shop',
            )
        )
        serializer = A23RecipeIdeaSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)
    
class A23SeedViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.filter(categories__slug='seeds')
    serializer_class = A23SeedSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_en',
            )
            .prefetch_related(
                'seedset__item_en'
            )
            .filter(categories__slug='seeds')
        )
        serializer = A23SeedSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_ja',
            )
            .prefetch_related(
                'seedset__item_ja'
            )
            .filter(categories__slug='seeds')
        )
        serializer = A23SeedSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ko(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_ko',
            )
            .prefetch_related(
                'seedset__item_ko'
            )
            .filter(categories__slug='seeds')
        )
        serializer = A23SeedSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_sc',
            )
            .prefetch_related(
                'seedset__item_sc'
            )
            .filter(categories__slug='seeds')
        )
        serializer = A23SeedSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Item.objects
            .select_related(
                'item_tc',
            )
            .prefetch_related(
                'seedset__item_tc'
            )
            .filter(categories__slug='seeds')
        )
        serializer = A23SeedSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)