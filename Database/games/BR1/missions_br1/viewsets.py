from rest_framework import viewsets, filters
from games.BR1.missions_br1.models import Mission
from games.BR1.missions_br1.serializers import BR1Missionerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class BR1MissionViewSet(viewsets.ModelViewSet):
    queryset = Mission.objects.all()
    serializer_class = BR1Missionerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slugname'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Mission.objects
        )
        serializer = BR1Missionerializer(queryset, many=True)
        return Response(serializer.data)