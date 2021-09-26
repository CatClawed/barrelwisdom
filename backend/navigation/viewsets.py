from rest_framework import viewsets, filters
from navigation.serializers import NavigationSerializer
from navigation.models import Navigation

class NavigationViewSet(viewsets.ModelViewSet):
    queryset = Navigation.objects.all()
    serializer_class = NavigationSerializer
    ordering_fields = ['created']
    lookup_field = 'section'