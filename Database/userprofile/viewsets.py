from rest_framework import viewsets, filters
from userprofile.models import UserProfile
from userprofile.serializers import UserProfileSerializer, UserSerializer, EditUserProfileSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = EditUserProfileSerializer
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

    @action(detail=True, methods=['get'], )
    def profile(self, request, username):
        user = self.get_object()
        profile = UserProfile.objects.get(user=user.id)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)