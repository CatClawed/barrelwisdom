from rest_framework import viewsets, filters
from games.BR1.fragments_br1.models import Fragment
from games.BR1.fragments_br1.serializers import BR1FragmentSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class BR1FragmentViewSet(viewsets.ModelViewSet):
    queryset = Fragment.objects.all()
    serializer_class = BR1FragmentSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    lookup_field = 'slug'

    @action(detail=False)
    def en(self, request):
        queryset = (
            Fragment.objects
            .prefetch_related(
                'upgrades__item'
            )
        )
        serializer = BR1FragmentSerializer(queryset, many=True)
        return Response(serializer.data)