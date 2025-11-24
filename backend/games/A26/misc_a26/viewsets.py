from rest_framework import viewsets
from games.A26.misc_a26.models import Coordinate
from games.A26.misc_a26.serializers import A26CoordinateSerializer
from rest_framework.response import Response

class A26MemoryVialViewSet(viewsets.ModelViewSet):
    queryset = (
        Coordinate.objects
        .filter(label=0)
    )
    serializer_class = A26CoordinateSerializer

    def get_query(self):
        queryset = self.queryset
        return Response(A26CoordinateSerializer(queryset).data)
