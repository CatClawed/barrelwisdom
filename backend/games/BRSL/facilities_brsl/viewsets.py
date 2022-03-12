from rest_framework import viewsets, filters
from games.BRSL.facilities_brsl.models import Facility, FacilitySet
from games.BRSL.facilities_brsl.serializers import BRSLFacilitySimpleSerializer, BRSLFacilitySerializer, BRSLFacilitySetSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class BRSLFacilityViewSet(viewsets.ModelViewSet):
    queryset = Facility.objects.all()
    serializer_class = BRSLFacilitySimpleSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'
    
    @action(detail=False)
    def en(self, request): 
        queryset = (
            Facility.objects
            .select_related(
                'facility_en'
            )
        )
        serializer = BRSLFacilitySimpleSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Facility.objects
                .select_related(
                    'facility_en'
                )
                .prefetch_related(
                    'facilityeffline_set__effectdata__effect__eff_en',
                    'facilitying_set__data__effect__eff_en',
                    'facilitying_set__data__item__item_en',
                    'facilitying_set__data__category',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLFacilitySerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Facility.objects
            .select_related(
                'facility_ja'
            )
        )
        serializer = BRSLFacilitySimpleSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="ja")
    def ja_full(self, request, slug):
        try:
            queryset = (
                Facility.objects
                .select_related(
                    'facility_ja'
                )
                .prefetch_related(
                    'facilityeffline_set__effectdata__effect__eff_ja',
                    'facilitying_set__data__effect__eff_ja',
                    'facilitying_set__data__item__item_ja',
                    'facilitying_set__data__category',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLFacilitySerializer(queryset, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Facility.objects
            .select_related(
                'facility_sc'
            )
        )
        serializer = BRSLFacilitySimpleSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="sc")
    def sc_full(self, request, slug):
        try:
            queryset = (
                Facility.objects
                .select_related(
                    'facility_sc'
                )
                .prefetch_related(
                    'facilityeffline_set__effectdata__effect__eff_sc',
                    'facilitying_set__data__effect__eff_sc',
                    'facilitying_set__data__item__item_sc',
                    'facilitying_set__data__category',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLFacilitySerializer(queryset, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Facility.objects
            .select_related(
                'facility_tc'
            )
        )
        serializer = BRSLFacilitySimpleSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="tc")
    def tc_full(self, request, slug):
        try:
            queryset = (
                Facility.objects
                .select_related(
                    'facility_tc'
                )
                .prefetch_related(
                    'facilityeffline_set__effectdata__effect__eff_tc',
                    'facilitying_set__data__effect__eff_tc',
                    'facilitying_set__data__item__item_tc',
                    'facilitying_set__data__category',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BRSLFacilitySerializer(queryset, context={'language': 'tc'})
        return Response(serializer.data)
    
class BRSLFacilitySetViewSet(viewsets.ModelViewSet):
    queryset = FacilitySet.objects.all()
    serializer_class = BRSLFacilitySetSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    
    @action(detail=False)
    def en(self, request): 
        queryset = (
            FacilitySet.objects
            .select_related(
                'effect'
            )
            .prefetch_related(
                'effect__eff_en',
                'facilities__facility_en'
            )
        )
        serializer = BRSLFacilitySetSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            FacilitySet.objects
            .select_related(
                'effect'
            )
            .prefetch_related(
                'effect__eff_ja',
                'facilities__facility_ja'
            )
        )
        serializer = BRSLFacilitySetSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            FacilitySet.objects
            .select_related(
                'effect'
            )
            .prefetch_related(
                'effect__eff_sc',
                'facilities__facility_sc'
            )
        )
        serializer = BRSLFacilitySetSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            FacilitySet.objects
            .select_related(
                'effect'
            )
            .prefetch_related(
                'effect__eff_tc',
                'facilities__facility_tc'
            )
        )
        serializer = BRSLFacilitySetSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)