from rest_framework import viewsets, filters
from games.BR1.demons_br1.models import Demon
from games.BR1.demons_br1.serializers import BR1DemonSerializerSimple, BR1DemonSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class BR1DemonViewSet(viewsets.ModelViewSet):
    queryset = Demon.objects.all()
    serializer_class = BR1DemonSerializerSimple
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Demon.objects
            .prefetch_related(
                'item_set',
                'locations',
            )
        )
        serializer = BR1DemonSerializer(queryset, many=True)
        return Response(serializer.data)

    # allows easy access via catect/slugname/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slugname):
        try:
            queryset = (
                Demon.objects
                .prefetch_related(
                    'item_set',
                    'locations',
                )
                .get(slugname=slugname)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BR1DemonSerializer(queryset)
        return Response(serializer.data)