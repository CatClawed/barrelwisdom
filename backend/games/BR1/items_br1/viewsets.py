from rest_framework import viewsets, filters
from games.BR1.items_br1.models import Item
from games.BR1.items_br1.serializers import BR1ItemSerializerSimple, BR1ItemSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class BR1ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = BR1ItemSerializerSimple
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Item.objects
            .prefetch_related(
                'locations',
                'demons',
                'missions',
                'ingredient_set__item',
            )
        )
        serializer = BR1ItemSerializer(queryset, many=True)
        return Response(serializer.data)

    # allows easy access via catect/slug/en
    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Item.objects
                .prefetch_related(
                    'locations',
                    'demons',
                    'missions',
                    'ingredient_set__item',
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = BR1ItemSerializer(queryset)
        return Response(serializer.data)