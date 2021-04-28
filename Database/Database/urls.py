import debug_toolbar
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from blog.viewsets import BlogViewSet, TagViewSet, SectionViewSet, MainBlogViewSet
from invite.viewsets import InviteViewSet
from navigation.viewsets import NavigationViewSet
from userprofile.viewsets import UserProfileViewSet, UserViewSet, UserNameViewSet, RegView
from auth.views import JWTObtainPairView
from rest_framework_simplejwt import views as jwt_views
from dj_rest_auth.registration.views import RegisterView


from games.A22.effects_a22.viewsets import A22EffectViewSet
from games.A22.traits_a22.viewsets import A22TraitViewSet
from games.A22.items_a22.viewsets import A22ItemViewSet, A22ItemLocationViewSet, A22ShopDevelopViewSet
from games.A22.shops_a22.viewsets import A22ShopViewSet
from games.A22.locations_a22.viewsets import A22LocationViewSet
from games.A22.categories_a22.viewsets import A22CategoryViewSet
from games.A22.monsters_a22.viewsets import A22MonsterViewSet

router = routers.DefaultRouter()
router.register(r'editblog', BlogViewSet)
router.register(r'blog', MainBlogViewSet)
router.register(r'tags', TagViewSet)
router.register(r'section', SectionViewSet)
router.register(r'invite', InviteViewSet)
router.register(r'profile', UserProfileViewSet)
router.register(r'user', UserNameViewSet)
router.register(r'nav', NavigationViewSet)

# Atelier Ryza 2
router.register(r'A22/effect', A22EffectViewSet)
router.register(r'A22/trait', A22TraitViewSet)
router.register(r'A22/item', A22ItemViewSet)
router.register(r'A22/itemlocation', A22ItemLocationViewSet)
router.register(r'A22/shopdevelop', A22ShopDevelopViewSet)
router.register(r'A22/shop', A22ShopViewSet)
router.register(r'A22/location', A22LocationViewSet)
router.register(r'A22/category', A22CategoryViewSet)
router.register(r'A22/monster', A22MonsterViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'api/', include(router.urls)),
    url(r'^auth/register/', RegisterView.as_view()),
    path('api/token/', JWTObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^auth/', include('djoser.urls')),
    path('__debug__/', include(debug_toolbar.urls)),
    url(r'auth/reg/', RegView.as_view(),)
]
