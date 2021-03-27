from rest_framework import viewsets, filters
from userprofile.models import UserProfile
from userprofile.serializers import UserProfileSerializer, UserSerializer
from django.contrib.auth.models import User

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    ordering_fields = ['created']
    lookup_field = 'user'

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    ordering_fields = ['created']

class UserNameViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    ordering_fields = ['created']
    lookup_field = 'username'