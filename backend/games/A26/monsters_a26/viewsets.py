from games.A26.monsters_a26.models import Monster, Race
from games.A26.monsters_a26.serializers import A26MonsterSerializer, A26MonsterListSerializer, A26RaceSerializer
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from games._helpers.viewset_helper import DefaultViewSetID

class A26MonsterViewSet(DefaultViewSetID):
    queryset = (
        Monster.objects
        .select_related(
            'name',
            'desc',
            'race__name',
        )
    )
    serializer_class = A26MonsterListSerializer

    def get_query(self, id=None, lang="en"):
        if not id:
            return Response(A26MonsterListSerializer(
                self.queryset, many=True, context={'language': lang}).data)
        try:
            queryset = (
                Monster.objects
                .select_related(
                    'name',
                    'desc',
                    'race__name',
                    'drop__name',
                    'rare__name',
                    'trait__name',
                )
                .prefetch_related(
                    'location'
                )
                .get(id=id)
            )
        except ObjectDoesNotExist:
            raise Http404
        return Response(A26MonsterSerializer(queryset, context={'language': lang}).data)

class A26MonsterRaceViewSet(DefaultViewSetID):
    queryset = (
        Monster.objects
        .select_related(
            'name',
        )
    )
    serializer_class = A26RaceSerializer

    def get_query(self, id=None, lang="en"):
        return Response(A26RaceSerializer(
            self.queryset, many=True, context={'language': lang}).data)