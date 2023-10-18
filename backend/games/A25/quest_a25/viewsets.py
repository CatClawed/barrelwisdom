from rest_framework import viewsets, filters
from games.A25.quest_a25.models import Tower, Training, ScoreBattle, Dungeon
from games.A25.quest_a25.serializers import A25TowerSerializer, A25TrainingSerializer, A25ScoreBattleSerializer, A25DungeonSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class A25TowerViewSet(viewsets.ModelViewSet):
    queryset = (
        Tower.objects
        .prefetch_related(
            'rewards__item__name',
            'effects',
        )
    )
    serializer_class = A25TowerSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25TowerSerializer(A25TowerViewSet.queryset,
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25TowerSerializer(A25TowerViewSet.queryset,
            many=True, context={'language': 'ja'}).data)


class A25TrainingViewSet(viewsets.ModelViewSet):
    queryset = (
        Training.objects
        .select_related(
            'name',
            'kind',
        )
        .prefetch_related(
            'rewards__item__name',
        )
    )
    serializer_class = A25TrainingSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25TrainingSerializer(A25TrainingViewSet.queryset,
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25TrainingSerializer(A25TrainingViewSet.queryset,
            many=True, context={'language': 'ja'}).data)

class A25ScoreBattleViewSet(viewsets.ModelViewSet):
    queryset = (
        ScoreBattle.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'difficulties__rewards__item__name',
        )
    )
    serializer_class = A25ScoreBattleSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25ScoreBattleSerializer(A25ScoreBattleViewSet.queryset,
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25ScoreBattleSerializer(A25ScoreBattleViewSet.queryset,
            many=True, context={'language': 'ja'}).data)

class A25DungeonViewSet(viewsets.ModelViewSet):
    queryset = (
        Dungeon.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'dungeonfloor_set__effects',
            'dungeonfloor_set__rewards__item__name',
        )
    )
    serializer_class = A25DungeonSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25DungeonSerializer(A25DungeonViewSet.queryset,
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(
            A25DungeonSerializer(A25DungeonViewSet.queryset,
                many=True, context={'language': 'ja'}).data)