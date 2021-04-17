from rest_framework import viewsets, filters
from games.A22.categories_a22.models import Category
from games.A22.categories_a22.serializers import A22CategorySerializerEN, A22CategorySerializerJA, A22CategorySerializerKO, A22CategorySerializerFR, A22CategorySerializerSC, A22CategorySerializerTC
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class A22CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A22CategorySerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en(self, request, slugname):
        queryset = (
            Category.objects
            .select_related(
                'cat_en'
            )
            .get(slugname=slugname)
        )
        serializer = A22CategorySerializerEN(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja(self, request, slugname):
        queryset = (
            Category.objects
            .select_related(
                'cat_ja'
            )
            .get(slugname=slugname)
        )
        serializer = A22CategorySerializerJA(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko(self, request, slugname):
        queryset = (
            Category.objects
            .select_related(
                'cat_ko'
            )
            .get(slugname=slugname)
        )
        serializer = A22CategorySerializerKO(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr(self, request, slugname):
        queryset = (
            Category.objects
            .select_related(
                'cat_fr'
            )
            .get(slugname=slugname)
        )
        serializer = A22CategorySerializerFR(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc(self, request, slugname):
        queryset = (
            Category.objects
            .select_related(
                'cat_sc'
            )
            .get(slugname=slugname)
        )
        serializer = A22CategorySerializerSC(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc(self, request, slugname):
        queryset = (
            Category.objects
            .select_related(
                'cat_tc'
            )
            .get(slugname=slugname)
        )
        serializer = A22CategorySerializerTC(queryset)
        return Response(serializer.data)