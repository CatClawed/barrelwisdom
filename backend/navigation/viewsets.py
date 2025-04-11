from rest_framework import viewsets
from django.core.exceptions import ObjectDoesNotExist
from navigation.serializers import NavigationSerializer
from navigation.models import Navigation

class NavigationViewSet(viewsets.ModelViewSet):
    queryset = Navigation.objects.all()
    serializer_class = NavigationSerializer
    ordering_fields = ['created']
    lookup_field = 'section'

    def get_object(self):
        try:
            return Navigation.objects.get(section=self.kwargs['section'])
        except ObjectDoesNotExist:
            return Navigation.objects.get(section='blog')