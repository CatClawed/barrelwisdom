from rest_framework import viewsets, filters
from games.A22.items_a22.models import Item, ItemLocations, ShopDevelop, ItemRegions, CategoryItems
from games.A22.items_a22.serializers import A22ItemSerializerEN, A22ItemSerializerENFull, A22ItemSerializerJA, A22ItemSerializerJAFull, A22ItemSerializerKO, A22ItemSerializerKOFull, A22ItemSerializerFR, A22ItemSerializerFRFull, A22ItemSerializerSC, A22ItemSerializerSCFull, A22ItemSerializerTC, A22ItemSerializerTCFull, A22ShopDevelopSerializerEN, A22ShopDevelopSerializerJA, A22ShopDevelopSerializerKO, A22ShopDevelopSerializerFR, A22ShopDevelopSerializerSC, A22ShopDevelopSerializerTC, A22ItemRegionSerializerEN, A22ItemRegionSerializerJA, A22ItemRegionSerializerKO, A22ItemRegionSerializerFR, A22ItemRegionSerializerSC, A22ItemRegionSerializerTC, A22ItemCatSerializerEN, A22ItemCatSerializerJA, A22ItemCatSerializerKO, A22ItemCatSerializerFR, A22ItemCatSerializerSC, A22ItemCatSerializerTC
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
            .order_by('index')
        )
    serializer_class = A22ItemSerializerEN
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
            .order_by('index')
        )
        serializer = A22ItemSerializerEN(queryset, many=True)
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
            .order_by('index')
        )
        serializer = A22ItemSerializerJA(queryset, many=True)
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
            .order_by('index')
        )
        serializer = A22ItemSerializerKO(queryset, many=True)
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
            .order_by('index')
        )
        serializer = A22ItemSerializerFR(queryset, many=True)
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
            .order_by('index')
        )
        serializer = A22ItemSerializerSC(queryset, many=True)
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
            .order_by('index')
        )
        serializer = A22ItemSerializerTC(queryset, many=True)
        return Response(serializer.data)

    # Individual items
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            item = (
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
        serializer = A22ItemSerializerENFull(item)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            item = (
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
        serializer = A22ItemSerializerJAFull(item)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
            item = (
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
        serializer = A22ItemSerializerKOFull(item)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            item = (
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
        serializer = A22ItemSerializerFRFull(item)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
            item = (
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
        serializer = A22ItemSerializerSCFull(item)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
            item = (
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
        serializer = A22ItemSerializerTCFull(item)
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
    serializer_class = A22ItemRegionSerializerEN
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
        serializer = A22ItemRegionSerializerEN(queryset)
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
        serializer = A22ItemRegionSerializerJA(queryset)
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
        serializer = A22ItemRegionSerializerKO(queryset)
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
        serializer = A22ItemRegionSerializerFR(queryset)
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
        serializer = A22ItemRegionSerializerSC(queryset)
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
        serializer = A22ItemRegionSerializerTC(queryset)
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
    serializer_class = A22ShopDevelopSerializerEN
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
        serializer = A22ShopDevelopSerializerEN(queryset, many=True)
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
        serializer = A22ShopDevelopSerializerJA(queryset, many=True)
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
        serializer = A22ShopDevelopSerializerKO(queryset, many=True)
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
        serializer = A22ShopDevelopSerializerFR(queryset, many=True)
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
        serializer = A22ShopDevelopSerializerSC(queryset, many=True)
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
        serializer = A22ShopDevelopSerializerTC(queryset, many=True)
        return Response(serializer.data)

class A22CategoryItemViewSet(viewsets.ModelViewSet):
    queryset = (
            CategoryItems.objects
            .select_related(
                'category',
            )
            .prefetch_related(
                'category',
                'category__cat_en',
                'items',
                'items__item_en',
                'ingredients',
                'ingredients__item_en',
                'items__category',
                'items__category__cat_en',
                'items__ingredient_set',
                'items__ingredient_set__category__cat_en',
                'items__ingredient_set__item__item_en',
                'ingredients__category',
                'ingredients__category__cat_en',
                'ingredients__ingredient_set',
                'ingredients__ingredient_set__category__cat_en',
                'ingredients__ingredient_set__item__item_en'
            )
        )
    serializer_class = A22ItemCatSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category',
                )
                .prefetch_related(
                    'category',
                    'category__cat_en',
                    'items',
                    'items__item_en',
                    'ingredients',
                    'ingredients__item_en',
                    'items__category',
                    'items__category__cat_en',
                    'items__ingredient_set',
                    'items__ingredient_set__category__cat_en',
                    'items__ingredient_set__item__item_en',
                    'ingredients__category',
                    'ingredients__category__cat_en',
                    'ingredients__ingredient_set',
                    'ingredients__ingredient_set__category__cat_en',
                    'ingredients__ingredient_set__item__item_en'
                )
                .get(category__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemCatSerializerEN(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slugname):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category',
                )
                .prefetch_related(
                    'category',
                    'category__cat_ja',
                    'items',
                    'items__item_ja',
                    'ingredients',
                    'ingredients__item_ja',
                    'items__category',
                    'items__category__cat_ja',
                    'items__ingredient_set',
                    'items__ingredient_set__category__cat_ja',
                    'items__ingredient_set__item__item_ja',
                    'ingredients__category',
                    'ingredients__category__cat_ja',
                    'ingredients__ingredient_set',
                    'ingredients__ingredient_set__category__cat_ja',
                    'ingredients__ingredient_set__item__item_ja'
                )
                .get(category__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemCatSerializerJA(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category',
                )
                .prefetch_related(
                    'category',
                    'category__cat_ko',
                    'items',
                    'items__item_ko',
                    'ingredients',
                    'ingredients__item_ko',
                    'items__category',
                    'items__category__cat_ko',
                    'items__ingredient_set',
                    'items__ingredient_set__category__cat_ko',
                    'items__ingredient_set__item__item_ko',
                    'ingredients__category',
                    'ingredients__category__cat_ko',
                    'ingredients__ingredient_set',
                    'ingredients__ingredient_set__category__cat_ko',
                    'ingredients__ingredient_set__item__item_ko'
                )
                .get(category__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemCatSerializerKO(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category',
                )
                .prefetch_related(
                    'category',
                    'category__cat_fr',
                    'items',
                    'items__item_fr',
                    'ingredients',
                    'ingredients__item_fr',
                    'items__category',
                    'items__category__cat_fr',
                    'items__ingredient_set',
                    'items__ingredient_set__category__cat_fr',
                    'items__ingredient_set__item__item_fr',
                    'ingredients__category',
                    'ingredients__category__cat_fr',
                    'ingredients__ingredient_set',
                    'ingredients__ingredient_set__category__cat_fr',
                    'ingredients__ingredient_set__item__item_fr'
                )
                .get(category__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemCatSerializerFR(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category',
                )
                .prefetch_related(
                    'category',
                    'category__cat_sc',
                    'items',
                    'items__item_sc',
                    'ingredients',
                    'ingredients__item_sc',
                    'items__category',
                    'items__category__cat_sc',
                    'items__ingredient_set',
                    'items__ingredient_set__category__cat_sc',
                    'items__ingredient_set__item__item_sc',
                    'ingredients__category',
                    'ingredients__category__cat_sc',
                    'ingredients__ingredient_set',
                    'ingredients__ingredient_set__category__cat_sc',
                    'ingredients__ingredient_set__item__item_sc'
                )
                .get(category__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemCatSerializerSC(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
            queryset = (
                CategoryItems.objects
                .select_related(
                    'category',
                )
                .prefetch_related(
                    'category',
                    'category__cat_tc',
                    'items',
                    'items__item_tc',
                    'ingredients',
                    'ingredients__item_tc',
                    'items__category',
                    'items__category__cat_tc',
                    'items__ingredient_set',
                    'items__ingredient_set__category__cat_tc',
                    'items__ingredient_set__item__item_tc',
                    'ingredients__category',
                    'ingredients__category__cat_tc',
                    'ingredients__ingredient_set',
                    'ingredients__ingredient_set__category__cat_tc',
                    'ingredients__ingredient_set__item__item_tc'
                )
                .get(category__slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22ItemCatSerializerTC(queryset)
        return Response(serializer.data)