from rest_framework import viewsets, filters
from userprofile.models import UserProfile
from userprofile.serializers import UserProfileSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    ordering_fields = ['created']
    lookup_field = 'user'