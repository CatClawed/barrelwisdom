from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from rest_framework import routers

from games.A12 import urls as A12
from games.A15 import urls as A15
from games.A16 import urls as A16
from games.A18 import urls as A18
from games.A22 import urls as A22
from games.A23 import urls as A23
from games.A25 import urls as A25
from games.A25RW import urls as A25RW
from games.A26 import urls as A26
from games.BR1 import urls as BR1
from games.BRSL import urls as BRSL

router = routers.DefaultRouter()

routeLists = [
    A12.routes,
    A15.routes,
    A16.routes,
    A18.routes,
    A22.routes,
    A23.routes,
    A25.routes,
    A25RW.routes,
    A26.routes,
    BR1.routes,
    BRSL.routes,
]

for routeList in routeLists:
    for route in routeList:
        router.register(route[0], route[1], f"{route[0]}-{route[1]}")

urlpatterns = [
    #path('admin/', admin.site.urls),
    path(r'api/', include(router.urls)),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(path('__debug__/', include(debug_toolbar.urls)))