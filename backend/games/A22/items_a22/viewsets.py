from rest_framework import viewsets, filters
from games.A22.items_a22.models import Item, ShopDevelop, ItemRegions, CategoryItems
from games.A22.items_a22.serializers import A22ItemSerializer, A22ItemSerializerFull, A22ItemCatSerializer, A22ItemRegionSerializer, A22ShopDevelopSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22ItemViewSet(viewsets.ModelViewSet):
    queryset = (
            Item.objects
            .select_related(
                'item_en',
            )
            .prefetch_related(
                'category',
                'category__cat_en',
                'ingredient_set',
                'ingredient_set__category__cat_en',
                'ingredient_set__item__item_en'
            )

        )
    serializer_class = A22ItemSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['index']
    lookup_field = 'slugname'

    # Full item list (simplified data)

    @action(detail=False)
    def en(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_en',
            )
            .prefetch_related(
                'category',
                'category__cat_en',
                'ingredient_set',
                'ingredient_set__category__cat_en',
                'ingredient_set__item__item_en'
            )

        )
        serializer = A22ItemSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_ja',
            )
            .prefetch_related(
                'category',
                'category__cat_ja',
                'ingredient_set',
                'ingredient_set__category__cat_ja',
                'ingredient_set__item__item_ja'
            )

        )
        serializer = A22ItemSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ko(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_ko',
            )
            .prefetch_related(
                'category',
                'category__cat_ko',
                'ingredient_set',
                'ingredient_set__category__cat_ko',
                'ingredient_set__item__item_ko'
            )

        )
        serializer = A22ItemSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_fr',
            )
            .prefetch_related(
                'category',
                'category__cat_fr',
                'ingredient_set',
                'ingredient_set__category__cat_fr',
                'ingredient_set__item__item_fr'
            )

        )
        serializer = A22ItemSerializer(queryset, many=True, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_sc',
            )
            .prefetch_related(
                'category',
                'category__cat_sc',
                'ingredient_set',
                'ingredient_set__category__cat_sc',
                'ingredient_set__item__item_sc'
            )

        )
        serializer = A22ItemSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Item.objects
            .select_related(
                'item_tc',
            )
            .prefetch_related(
                'category',
                'category__cat_tc',
                'ingredient_set',
                'ingredient_set__category__cat_tc',
                'ingredient_set__item__item_tc'
            )

        )
        serializer = A22ItemSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    # Individual items
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_en',
                )
                .prefetch_related(
                    'category',
                    'category__cat_en',
                    'location',
                    'location__loc_en',
                    'ingredient_set',
                    'ingredient_set__category__cat_en',
                    'ingredient_set__item__item_en',
                    'ingredient_set__ingeffects_set',
                    'ingredient_set__ingeffects_set__morph__item_en',
                    'ingredient_set__ingeffects_set__effect__eff_en',
                    'shop',
                    'shop__shop_en',
                    'trait',
                    'trait__trait_en',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__effect',
                    'effectline_set__effect__eff_en',
                    'evlinkitems_set',
                    'evlinkitems_set__result',
                    'evlinkitems_set__result__item_en',
                    'monster_set',
                    'monster_set__mon_en',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemSerializerFull(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ja',
                )
                .prefetch_related(
                    'category',
                    'category__cat_ja',
                    'location',
                    'location__loc_ja',
                    'ingredient_set',
                    'ingredient_set__category__cat_ja',
                    'ingredient_set__item__item_ja',
                    'ingredient_set__ingeffects_set',
                    'ingredient_set__ingeffects_set__morph__item_ja',
                    'ingredient_set__ingeffects_set__effect__eff_ja',
                    'shop',
                    'shop__shop_ja',
                    'trait',
                    'trait__trait_ja',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__effect',
                    'effectline_set__effect__eff_ja',
                    'evlinkitems_set',
                    'evlinkitems_set__result',
                    'evlinkitems_set__result__item_ja',
                    'monster_set',
                    'monster_set__mon_ja',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemSerializerFull(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_ko',
                )
                .prefetch_related(
                    'category',
                    'category__cat_ko',
                    'location',
                    'location__loc_ko',
                    'ingredient_set',
                    'ingredient_set__category__cat_ko',
                    'ingredient_set__item__item_ko',
                    'ingredient_set__ingeffects_set',
                    'ingredient_set__ingeffects_set__morph__item_ko',
                    'ingredient_set__ingeffects_set__effect__eff_ko',
                    'shop',
                    'shop__shop_ko',
                    'trait',
                    'trait__trait_ko',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__effect',
                    'effectline_set__effect__eff_ko',
                    'evlinkitems_set',
                    'evlinkitems_set__result',
                    'evlinkitems_set__result__item_ko',
                    'monster_set',
                    'monster_set__mon_ko',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemSerializerFull(queryset, context={'language': 'ko'})
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_fr',
                )
                .prefetch_related(
                    'category',
                    'category__cat_fr',
                    'location',
                    'location__loc_fr',
                    'ingredient_set',
                    'ingredient_set__category__cat_fr',
                    'ingredient_set__item__item_fr',
                    'ingredient_set__ingeffects_set',
                    'ingredient_set__ingeffects_set__morph__item_fr',
                    'ingredient_set__ingeffects_set__effect__eff_fr',
                    'shop',
                    'shop__shop_fr',
                    'trait',
                    'trait__trait_fr',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__effect',
                    'effectline_set__effect__eff_fr',
                    'evlinkitems_set',
                    'evlinkitems_set__result',
                    'evlinkitems_set__result__item_fr',
                    'monster_set',
                    'monster_set__mon_fr',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemSerializerFull(queryset, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_sc',
                )
                .prefetch_related(
                    'category',
                    'category__cat_sc',
                    'location',
                    'location__loc_sc',
                    'ingredient_set',
                    'ingredient_set__category__cat_sc',
                    'ingredient_set__item__item_sc',
                    'ingredient_set__ingeffects_set',
                    'ingredient_set__ingeffects_set__morph__item_sc',
                    'ingredient_set__ingeffects_set__effect__eff_sc',
                    'shop',
                    'shop__shop_sc',
                    'trait',
                    'trait__trait_sc',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__effect',
                    'effectline_set__effect__eff_sc',
                    'evlinkitems_set',
                    'evlinkitems_set__result',
                    'evlinkitems_set__result__item_sc',
                    'monster_set',
                    'monster_set__mon_sc',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemSerializerFull(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
            queryset = (
                Item.objects
                .select_related(
                    'item_tc',
                )
                .prefetch_related(
                    'category',
                    'category__cat_tc',
                    'location',
                    'location__loc_tc',
                    'ingredient_set',
                    'ingredient_set__category__cat_tc',
                    'ingredient_set__item__item_tc',
                    'ingredient_set__ingeffects_set',
                    'ingredient_set__ingeffects_set__morph__item_tc',
                    'ingredient_set__ingeffects_set__effect__eff_tc',
                    'shop',
                    'shop__shop_tc',
                    'trait',
                    'trait__trait_tc',
                    'usableitem_set',
                    'effectline_set',
                    'effectline_set__effect',
                    'effectline_set__effect__eff_tc',
                    'evlinkitems_set',
                    'evlinkitems_set__result',
                    'evlinkitems_set__result__item_tc',
                    'monster_set',
                    'monster_set__mon_tc',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemSerializerFull(queryset, context={'language': 'tc'})
        return Response(serializer.data)


class A22ItemRegionViewSet(viewsets.ModelViewSet):
    queryset = (
            ItemRegions.objects
            .prefetch_related(
                'region',
                'region__loc_en',
                'areas',
                'areas__area',
                'areas__area__loc_en',
                'areas__gatherdata__rank1',
                'areas__gatherdata__rank1__item_en',
                'areas__gatherdata__rank2',
                'areas__gatherdata__rank2__item_en',
                'areas__gatherdata__rank3',
                'areas__gatherdata__rank3__item_en',
            )
        )
    serializer_class = A22ItemRegionSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                ItemRegions.objects
                .prefetch_related(
                    'region',
                    'region__loc_en',
                    'areas',
                    'areas__area',
                    'areas__area__loc_en',
                    'areas__gatherdata__rank1',
                    'areas__gatherdata__rank1__item_en',
                    'areas__gatherdata__rank2',
                    'areas__gatherdata__rank2__item_en',
                    'areas__gatherdata__rank3',
                    'areas__gatherdata__rank3__item_en',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemRegionSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                ItemRegions.objects
                .prefetch_related(
                    'region',
                    'region__loc_ja',
                    'areas',
                    'areas__area',
                    'areas__area__loc_ja',
                    'areas__gatherdata__rank1',
                    'areas__gatherdata__rank1__item_ja',
                    'areas__gatherdata__rank2',
                    'areas__gatherdata__rank2__item_ja',
                    'areas__gatherdata__rank3',
                    'areas__gatherdata__rank3__item_ja',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemRegionSerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
            queryset = (
                ItemRegions.objects
                .prefetch_related(
                    'region',
                    'region__loc_ko',
                    'areas',
                    'areas__area',
                    'areas__area__loc_ko',
                    'areas__gatherdata__rank1',
                    'areas__gatherdata__rank1__item_ko',
                    'areas__gatherdata__rank2',
                    'areas__gatherdata__rank2__item_ko',
                    'areas__gatherdata__rank3',
                    'areas__gatherdata__rank3__item_ko',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemRegionSerializer(queryset, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            queryset = (
                ItemRegions.objects
                .prefetch_related(
                    'region',
                    'region__loc_fr',
                    'areas',
                    'areas__area',
                    'areas__area__loc_fr',
                    'areas__gatherdata__rank1',
                    'areas__gatherdata__rank1__item_fr',
                    'areas__gatherdata__rank2',
                    'areas__gatherdata__rank2__item_fr',
                    'areas__gatherdata__rank3',
                    'areas__gatherdata__rank3__item_fr',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemRegionSerializer(queryset, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
            queryset = (
                ItemRegions.objects
                .prefetch_related(
                    'region',
                    'region__loc_sc',
                    'areas',
                    'areas__area',
                    'areas__area__loc_sc',
                    'areas__gatherdata__rank1',
                    'areas__gatherdata__rank1__item_sc',
                    'areas__gatherdata__rank2',
                    'areas__gatherdata__rank2__item_sc',
                    'areas__gatherdata__rank3',
                    'areas__gatherdata__rank3__item_sc',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemRegionSerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
            queryset = (
                ItemRegions.objects
                .prefetch_related(
                    'region',
                    'region__loc_tc',
                    'areas',
                    'areas__area',
                    'areas__area__loc_tc',
                    'areas__gatherdata__rank1',
                    'areas__gatherdata__rank1__item_tc',
                    'areas__gatherdata__rank2',
                    'areas__gatherdata__rank2__item_tc',
                    'areas__gatherdata__rank3',
                    'areas__gatherdata__rank3__item_tc',
                )
                .get(region__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemRegionSerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)

class A22ShopDevelopViewSet(viewsets.ModelViewSet):
    queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_en',
                'cat1',
                'cat1__cat_en',
                'cat2',
                'cat2__cat_en',
                'addProd',
                'addProd__item_en',
                'addCat',
                'addCat__cat_en',
            )
        )
    serializer_class = A22ShopDevelopSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    # Full item list (simplified data)

    @action(detail=False)
    def en(self, request):
        queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_en',
                'cat1',
                'cat1__cat_en',
                'cat2',
                'cat2__cat_en',
                'addProd',
                'addProd__item_en',
                'addCat',
                'addCat__cat_en',
            )
        )
        serializer = A22ShopDevelopSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_ja',
                'cat1',
                'cat1__cat_ja',
                'cat2',
                'cat2__cat_ja',
                'addProd',
                'addProd__item_ja',
                'addCat',
                'addCat__cat_ja',
            )
        )
        serializer = A22ShopDevelopSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_ko',
                'cat1',
                'cat1__cat_ko',
                'cat2',
                'cat2__cat_ko',
                'addProd',
                'addProd__item_ko',
                'addCat',
                'addCat__cat_ko',
            )
        )
        serializer = A22ShopDevelopSerializer(queryset, many=True, context={'language': 'ko'})
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_fr',
                'cat1',
                'cat1__cat_fr',
                'cat2',
                'cat2__cat_fr',
                'addProd',
                'addProd__item_fr',
                'addCat',
                'addCat__cat_fr',
            )
        )
        serializer = A22ShopDevelopSerializer(queryset, many=True, context={'language': 'fr'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_sc',
                'cat1',
                'cat1__cat_sc',
                'cat2',
                'cat2__cat_sc',
                'addProd',
                'addProd__item_sc',
                'addCat',
                'addCat__cat_sc',
            )
        )
        serializer = A22ShopDevelopSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            ShopDevelop.objects
            .prefetch_related(
                'item',
                'item__item_tc',
                'cat1',
                'cat1__cat_tc',
                'cat2',
                'cat2__cat_tc',
                'addProd',
                'addProd__item_tc',
                'addCat',
                'addCat__cat_tc',
            )
        )
        serializer = A22ShopDevelopSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)