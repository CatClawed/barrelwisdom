from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class JWTSeralizer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username
        token['group'] = str(user.groups.get())
        return token
