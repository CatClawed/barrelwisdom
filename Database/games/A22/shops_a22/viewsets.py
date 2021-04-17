from rest_framework import viewsets, filters
from games.A22.shops_a22.models import Shop
from games.A22.shops_a22.serializers import A22ShopSerializerEN, A22ShopSerializerJA, A22ShopSerializerKO, A22ShopSerializerFR, A22ShopSerializerSC, A22ShopSerializerTC
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class A22ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = A22ShopSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    # allows easy access via shopect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en(self, request, slugname):
        queryset = (
            Shop.objects
            .select_related(
                'shop_en'
            )
            .get(slugname=slugname)
        )
        serializer = A22ShopSerializerEN(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja(self, request, slugname):
        queryset = (
            Shop.objects
            .select_related(
                'shop_ja'
            )
            .get(slugname=slugname)
        )
        serializer = A22ShopSerializerJA(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko(self, request, slugname):
        queryset = (
            Shop.objects
            .select_related(
                'shop_ko'
            )
            .get(slugname=slugname)
        )
        serializer = A22ShopSerializerKO(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr(self, request, slugname):
        queryset = (
            Shop.objects
            .select_related(
                'shop_fr'
            )
            .get(slugname=slugname)
        )
        serializer = A22ShopSerializerFR(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc(self, request, slugname):
        queryset = (
            Shop.objects
            .select_related(
                'shop_sc'
            )
            .get(slugname=slugname)
        )
        serializer = A22ShopSerializerSC(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc(self, request, slugname):
        queryset = (
            Shop.objects
            .select_related(
                'shop_tc'
            )
            .get(slugname=slugname)
        )
        serializer = A22ShopSerializerTC(queryset)
        return Response(serializer.data)