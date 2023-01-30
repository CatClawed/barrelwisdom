from rest_framework import viewsets, filters
from games.A21.effects_traits_a21.models import Trait
from games.A21.effects_traits_a21.serializers import A21TraitSerializer, A21TraitListSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A21TraitViewSet(viewsets.ModelViewSet):
    queryset = Trait.objects.all()
    serializer_class = A21TraitListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Trait.objects
            .select_related(
                'trait_en'
            )
            .prefetch_related(
                'advanced',
            #    'item_set__item_en'
            )
        )
        serializer = A21TraitListSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path="en")
    def en_full(self, request, slug):
        try:
            queryset = (
                Trait.objects
                .select_related(
                    'trait_en'
                )
                .prefetch_related(
                    'advanced',
                #    'item_set__item_en'
                )
                .get(slug=slug)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = A21TraitSerializer(queryset, context={'language': 'en'})
        return Response(serializer.data)