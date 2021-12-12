from rest_framework import viewsets, filters
from games.BRSL.fragments_brsl.models import Event, SchoolLocations, Character
from games.BRSL.fragments_brsl.serializers import BRSLEventSerializer, BRSLSchoolLocationSerializer, BRSLCharacterSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class BRSLEventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = BRSLEventSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        queryset = (
            Event.objects
            .prefetch_related(
                'fragment',
                'fragment__frag_en',
                'location',
                'character',
                'choices',
            )

        )
        serializer = BRSLEventSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Event.objects
            .prefetch_related(
                'fragment',
                'fragment__frag_ja',
                'location',
                'character',
                'choices',
            )

        )
        serializer = BRSLEventSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Event.objects
            .prefetch_related(
                'fragment',
                'fragment__frag_sc',
                'location',
                'character',
                'choices',
            )

        )
        serializer = BRSLEventSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Event.objects
            .prefetch_related(
                'fragment',
                'fragment__frag_tc',
                'location',
                'character',
                'choices',
            )

        )
        serializer = BRSLEventSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

class BRSLSchoolLocationViewSet(viewsets.ModelViewSet):
    queryset = SchoolLocations.objects.all()
    serializer_class = BRSLSchoolLocationSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        queryset = (
            SchoolLocations.objects.all()
        )
        serializer = BRSLSchoolLocationSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            SchoolLocations.objects.all()
        )
        serializer = BRSLSchoolLocationSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            SchoolLocations.objects.all()
        )
        serializer = BRSLSchoolLocationSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            SchoolLocations.objects.all()
        )
        serializer = BRSLSchoolLocationSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)

class BRSLCharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = BRSLCharacterSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        queryset = (
            Character.objects.all()
        )
        serializer = BRSLCharacterSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False)
    def ja(self, request):
        queryset = (
            Character.objects.all()
        )
        serializer = BRSLCharacterSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False)
    def sc(self, request):
        queryset = (
            Character.objects.all()
        )
        serializer = BRSLCharacterSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False)
    def tc(self, request):
        queryset = (
            Character.objects.all()
        )
        serializer = BRSLCharacterSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)