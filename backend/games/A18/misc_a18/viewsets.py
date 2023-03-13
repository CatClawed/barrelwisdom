from rest_framework import viewsets, filters
from games.A18.misc_a18.models import Shop
from games.A18.misc_a18.serializers import A18ShopListSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A18ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = A18ShopListSerializer

    @action(detail=False) 
    def en(self, request):
        queryset = (
            Shop.objects
            .prefetch_related(
                'shopslot_set__item__text',
            )
        )
        serializer = A18ShopListSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)

    @action(detail=False) 
    def ja(self, request):
        queryset = (
            Shop.objects
            .prefetch_related(
                'shopslot_set__item__text',
            )
        )
        serializer = A18ShopListSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)

    @action(detail=False) 
    def sc(self, request):
        queryset = (
            Shop.objects
            .prefetch_related(
                'shopslot_set__item__text',
            )
        )
        serializer = A18ShopListSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)

    @action(detail=False) 
    def tc(self, request):
        queryset = (
            Shop.objects
            .prefetch_related(
                'shopslot_set__item__text',
            )
        )
        serializer = A18ShopListSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)