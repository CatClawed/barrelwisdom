"""Database URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from blog.viewsets import BlogViewSet

from knox import views as knox_views
from auth.views import KnoxRegisterView, KnoxLoginView
auth_urls = include('djoser_auth.urls')

router = routers.DefaultRouter()
router.register(r'blog', BlogViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'api/', include(router.urls)),
    url(r'^api-auth/', include('knox.urls')),
    url(r'^api-auth/login2/', KnoxLoginView.as_view()),
    url(r'^api-auth/register/', KnoxRegisterView.as_view()),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    #path('auth/', include('djoser.urls')),
    path('auth/token/', include('djoser_auth.urls')),
]
