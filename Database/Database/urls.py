from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from blog.viewsets import BlogViewSet, TagViewSet, SectionViewSet, SectionFullnameViewSet, MainBlogViewSet
from invite.viewsets import InviteViewSet
from userprofile.viewsets import UserProfileViewSet, UserViewSet, UserNameViewSet
from auth.views import JWTObtainPairView
from rest_framework_simplejwt import views as jwt_views
from dj_rest_auth.registration.views import RegisterView

router = routers.DefaultRouter()
router.register(r'editblog', BlogViewSet)
router.register(r'blog', MainBlogViewSet)
router.register(r'tags', TagViewSet)
router.register(r'section', SectionViewSet)
router.register(r'sectionname', SectionFullnameViewSet)
router.register(r'invite', InviteViewSet)
router.register(r'profile', UserProfileViewSet)
router.register(r'user/id', UserViewSet)
router.register(r'user/name', UserNameViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'api/', include(router.urls)),
    url(r'^auth/register/', RegisterView.as_view()),
    path('api/token/', JWTObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    #path('dj-rest-auth/', include('dj_rest_auth.urls')),
    url(r'^auth/', include('djoser.urls')),
]
