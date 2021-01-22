from django.http import HttpRequest
from knox.views import LoginView

class TokenStrategy:

    @classmethod
    def obtain(cls, user):
        request = HttpRequest()
        request.method = "POST"
        request.user = user
        request._force_auth_user = user
        return LoginView.as_view()(request)