from .serializers import  JWTSeralizer

from rest_framework_simplejwt.views import TokenObtainPairView


class JWTObtainPairView(TokenObtainPairView):
    serializer_class = JWTSeralizer