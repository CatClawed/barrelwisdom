from rest_framework import viewsets, filters
from games.A23.items_a23.models import Item, Book, Category
from games.A23.items_a23.serializers import A23ItemSerializer, A23ItemListSerializer, A23CategorySerializer, A23BookSerializer, A23CategoryItemSerializer
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
                    'item_set',
                    'item_set__item_en'
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
                    'item_set',
                    'item_set__item_ja'
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
                    'item_set',
                    'item_set__item_ko'
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
                    'item_set',
                    'item_set__item_sc'
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
                    'item_set',
                    'item_set__item_tc'
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
                    'items',
                    'items__item_en'
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
                    'items',
                    'items__item_ja'
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
                    'items',
                    'items__item_ko'
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
                    'items',
                    'items__item_sc'
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
                    'items',
                    'items__item_tc'
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
                'categories'
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
                    'equip'
                )
                .prefetch_related(
                    'categories',
                    'gatheritem2_set',
                    'gatheritem2_set__node',
                    'gatheritem2_set__node__climate',
                    'gatheritem2_set__node__climate__loc',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set',
                    'monster_set__mon_en'
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
                'categories'
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
                    'equip'
                )
                .prefetch_related(
                    'categories',
                    'gatheritem2_set',
                    'gatheritem2_set__node',
                    'gatheritem2_set__node__climate',
                    'gatheritem2_set__node__climate__loc',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set',
                    'monster_set__mon_ja'
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
                'categories'
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
                    'equip'
                )
                .prefetch_related(
                    'categories',
                    'gatheritem2_set',
                    'gatheritem2_set__node',
                    'gatheritem2_set__node__climate',
                    'gatheritem2_set__node__climate__loc',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set',
                    'monster_set__mon_ko'
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
                'categories'
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
                    'equip'
                )
                .prefetch_related(
                    'categories',
                    'gatheritem2_set',
                    'gatheritem2_set__node',
                    'gatheritem2_set__node__climate',
                    'gatheritem2_set__node__climate__loc',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set',
                    'monster_set__mon_sc'
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
                'categories'
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
                    'equip'
                )
                .prefetch_related(
                    'categories',
                    'gatheritem2_set',
                    'gatheritem2_set__node',
                    'gatheritem2_set__node__climate',
                    'gatheritem2_set__node__climate__loc',
                    'gatheritem2_set__node__climate__loc__parent',
                    'monster_set',
                    'monster_set__mon_tc'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A23ItemSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)