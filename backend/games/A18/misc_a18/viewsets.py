from rest_framework import viewsets, filters
from games.A18.misc_a18.models import Shop
from games.A18.misc_a18.serializers import A18ShopListSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18ShopViewSet(viewsets.ModelViewSet):
    queryset = (
        Shop.objects
        .prefetch_related(
            'shopslot_set__item__text',
        )
    )
    serializer_class = A18ShopListSerializer

    @action(detail=False) 
    def en(self, request):
        return Response(A18ShopListSerializer(
            self.queryset, many=True, context={'language': 'en'}).data)

    @action(detail=False) 
    def ja(self, request):
        return Response(A18ShopListSerializer(
            self.queryset, many=True, context={'language': 'ja'}).data)

    @action(detail=False) 
    def sc(self, request):
        return Response(A18ShopListSerializer(
            self.queryset, many=True, context={'language': 'sc'}).data)

    @action(detail=False) 
    def tc(self, request):
        return Response(A18ShopListSerializer(
            self.queryset, many=True, context={'language': 'tc'}).data)