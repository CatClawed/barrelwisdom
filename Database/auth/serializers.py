from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from knox.serializers import UserSerializer

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