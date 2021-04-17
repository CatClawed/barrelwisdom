from rest_framework import viewsets, filters
from games.A22.locations_a22.models import Location
from games.A22.locations_a22.serializers import A22LocationSerializerEN, A22LocationSerializerJA, A22LocationSerializerKO, A22LocationSerializerFR, A22LocationSerializerSC, A22LocationSerializerTC
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class A22LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = A22LocationSerializerEN
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    # allows easy access via locect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en(self, request, slugname):
        queryset = (
            Location.objects
            .select_related(
                'loc_en'
            )
            .get(slugname=slugname)
        )
        serializer = A22LocationSerializerEN(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja(self, request, slugname):
        queryset = (
            Location.objects
            .select_related(
                'loc_ja'
            )
            .get(slugname=slugname)
        )
        serializer = A22LocationSerializerJA(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ko")
    def ko(self, request, slugname):
        queryset = (
            Location.objects
            .select_related(
                'loc_ko'
            )
            .get(slugname=slugname)
        )
        serializer = A22LocationSerializerKO(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="fr")
    def fr(self, request, slugname):
        queryset = (
            Location.objects
            .select_related(
                'loc_fr'
            )
            .get(slugname=slugname)
        )
        serializer = A22LocationSerializerFR(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc(self, request, slugname):
        queryset = (
            Location.objects
            .select_related(
                'loc_sc'
            )
            .get(slugname=slugname)
        )
        serializer = A22LocationSerializerSC(queryset)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc(self, request, slugname):
        queryset = (
            Location.objects
            .select_related(
                'loc_tc'
            )
            .get(slugname=slugname)
        )
        serializer = A22LocationSerializerTC(queryset)
        return Response(serializer.data)