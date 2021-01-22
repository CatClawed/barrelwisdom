from django.conf.urls import url, include
from django.contrib.auth import get_user_model

from djoser import views as djoser_views
from knox import views as knox_views

from rest_framework.routers import DefaultRouter

from auth.views import LoginView

router = DefaultRouter()
router.register('users', djoser_views.UserViewSet)

User = get_user_model()


knox_urlpatterns = [
    url(r'login/', LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]

urlpatterns = knox_urlpatterns