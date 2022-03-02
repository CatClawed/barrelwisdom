#import debug_toolbar
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from blog.viewsets import BlogViewSet, TagViewSet, SectionViewSet, MainBlogViewSet
from invite.viewsets import InviteViewSet
from navigation.viewsets import NavigationViewSet
from userprofile.viewsets import UserProfileViewSet, UserNameViewSet, RegView
from auth.views import JWTObtainPairView
from rest_framework_simplejwt import views as jwt_views

from games.A12 import urls as A12
from games.A15 import urls as A15
from games.A16 import urls as A16
from games.A22 import urls as A22
from games.A23 import urls as A23
from games.BR1 import urls as BR1
from games.BRSL import urls as BRSL

router = routers.DefaultRouter()
router.register(r'editblog', BlogViewSet)
router.register(r'blog', MainBlogViewSet)
router.register(r'tags', TagViewSet)
router.register(r'section', SectionViewSet)
router.register(r'invite', InviteViewSet)
router.register(r'profile', UserProfileViewSet)
router.register(r'user', UserNameViewSet)
router.register(r'nav', NavigationViewSet)

routeLists = [
    A12.routes,
    A15.routes,
    A16.routes,
    A22.routes,
    A23.routes,
    BR1.routes,
    BRSL.routes,
]

for routeList in routeLists:
    for route in routeList:
        router.register(route[0], route[1])

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
    path('auth/token/', JWTObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    #path('__debug__/', include(debug_toolbar.urls)),
    path(r'auth/reg/', RegView.as_view(),),
    path('auth/dj-rest-auth/', include('dj_rest_auth.urls')),
]
