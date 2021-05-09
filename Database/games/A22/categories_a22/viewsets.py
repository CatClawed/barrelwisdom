from rest_framework import viewsets, filters
from games.A22.categories_a22.models import Category
from games.A22.categories_a22.serializers import A22CategorySerializerEN, A22CategorySerializerJA, A22CategorySerializerKO, A22CategorySerializerFR, A22CategorySerializerSC, A22CategorySerializerTC
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A22CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = A22CategorySerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_en'
            )
        )
        serializer = A22CategorySerializerEN(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_ja'
            )
        )
        serializer = A22CategorySerializerJA(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def ko(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_ko'
            )
        )
        serializer = A22CategorySerializerKO(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def fr(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_fr'
            )
        )
        serializer = A22CategorySerializerFR(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_sc'
            )
        )
        serializer = A22CategorySerializerSC(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Category.objects
            .select_related(
                'cat_tc'
            )
        )
        serializer = A22CategorySerializerTC(queryset, many=True)
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_en'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CategorySerializerEN(queryset)
        return Response(serializer.data)

    @action(detail=False)
    def ja_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_ja'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CategorySerializerJA(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_ko'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CategorySerializerKO(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_fr'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CategorySerializerFR(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_sc'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CategorySerializerSC(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slugname):
        try:
            queryset = (
                Category.objects
                .select_related(
                    'cat_tc'
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A22CategorySerializerTC(queryset)
        return Response(serializer.data)