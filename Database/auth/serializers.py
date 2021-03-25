from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from knox.serializers import UserSerializer
from django.contrib.auth.models import User, Group

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class KnoxSerializer2(serializers.Serializer):
    """
    thanks rando github person
    """
    user = UserDetailsSerializer()
    token = serializers.SerializerMethodField()

    def get_token(self, obj):
        return obj["token"][1]
        #return obj[1]


class KnoxSerializer(serializers.Serializer):
    """
    thanks rando github person
    """
    user = UserDetailsSerializer()
    token = serializers.SerializerMethodField()

    def get_token(self, obj):
        return obj["token"][1]

class JWTSeralizer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username
        groups = user.groups.all()
        token['group'] = str(user.groups.get())
        return token
