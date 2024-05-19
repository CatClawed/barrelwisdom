from rest_framework import viewsets, filters
from games.A25.quest_a25.models import Tower, Training, ScoreBattle, Dungeon
from games.A25.quest_a25.serializers import A25TowerSerializer, A25TrainingSerializer, A25ScoreBattleSerializer, A25DungeonSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from django.db.models import Prefetch

class A25TowerViewSet(viewsets.ModelViewSet):
    queryset = (
        Tower.objects
        .select_related(
            'battle'
        )
        .prefetch_related(
            'rewards__item__name',
            'effects',
            'battle__panels',
            'battle__hints__desc',
            'battle__hints__enemy__base_enemy',
            'battle__waves__enemies__name',
            'battle__waves__enemies__base_enemy',
            'battle__waves__enemies__skills__skill__name',
            'battle__waves__enemies__skills__skill__elem',
            'battle__waves__enemies__skills__skill__area',
        )
    )
    serializer_class = A25TowerSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'kind'

    @action(detail=False)
    def en(self, request):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug="elemental-tower", gbl=True),
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def sc(self, request):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug="elemental-tower", gbl=True),
            many=True, context={'language': 'sc'}).data)

    @action(detail=False)
    def tc(self, request):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug="elemental-tower", gbl=True),
            many=True, context={'language': 'tc'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug="elemental-tower"),
            many=True, context={'language': 'ja'}).data)

    @action(detail=True, url_path="en")
    def en_kind(self, request, kind):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug=kind, gbl=True),
            many=True, context={'language': 'en'}).data)

    @action(detail=True, url_path="sc")
    def sc_kind(self, request, kind):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug=kind, gbl=True),
            many=True, context={'language': 'sc'}).data)

    @action(detail=True, url_path="tc")
    def tc_kind(self, request, kind):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug=kind, gbl=True),
            many=True, context={'language': 'tc'}).data)

    @action(detail=True, url_path="ja")
    def ja_kind(self, request, kind):
        return Response(A25TowerSerializer(self.queryset.filter(kind__slug=kind),
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
        return Response(A25TrainingSerializer(self.queryset,
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def sc(self, request):
        return Response(A25TrainingSerializer(self.queryset,
            many=True, context={'language': 'sc'}).data)

    @action(detail=False)
    def tc(self, request):
        return Response(A25TrainingSerializer(self.queryset,
            many=True, context={'language': 'tc'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25TrainingSerializer(self.queryset,
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
        return Response(A25ScoreBattleSerializer(self.queryset.filter(gbl=True),
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def sc(self, request):
        return Response(A25ScoreBattleSerializer(self.queryset.filter(gbl=True),
            many=True, context={'language': 'sc'}).data)

    @action(detail=False)
    def tc(self, request):
        return Response(A25ScoreBattleSerializer(self.queryset.filter(gbl=True),
            many=True, context={'language': 'tc'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(A25ScoreBattleSerializer(self.queryset,
            many=True, context={'language': 'ja'}).data)

class A25DungeonViewSet(viewsets.ModelViewSet):
    queryset = (
        Dungeon.objects
        .select_related(
            'name',
        )
        .prefetch_related(
            'dungeonfloor_set__effects',
            'rewards__item__name',
        )
    )
    serializer_class = A25DungeonSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        return Response(A25DungeonSerializer(self.queryset.filter(gbl=True),
            many=True, context={'language': 'en'}).data)

    @action(detail=False)
    def sc(self, request):
        return Response(A25DungeonSerializer(self.queryset.filter(gbl=True),
            many=True, context={'language': 'sc'}).data)

    @action(detail=False)
    def tc(self, request):
        return Response(A25DungeonSerializer(self.queryset.filter(gbl=True),
            many=True, context={'language': 'tc'}).data)

    @action(detail=False)
    def ja(self, request):
        return Response(
            A25DungeonSerializer(self.queryset,
                many=True, context={'language': 'ja'}).data)