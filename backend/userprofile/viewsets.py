from rest_framework import viewsets,  generics
from userprofile.models import UserProfile
from userprofile.serializers import UserProfileSerializer, UserSerializer, EditUserProfileSerializer, RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = EditUserProfileSerializer
    permission_classes = (IsAuthenticated,)
    ordering_fields = ['created']
    lookup_field = 'user'

class UserNameViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    ordering_fields = ['created']
    lookup_field = 'username'

    @action(detail=True, methods=['get'])
    def profile(self, request, username):
        try:
            profile = (
                UserProfile.objects
                .prefetch_related(
                    'user__blog_set__section'
                )
                .get(user__username=username)
            )
        except ObjectDoesNotExist:
            raise Http404
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

class RegView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
