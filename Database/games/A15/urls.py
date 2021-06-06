from games.A15.categories_a15.viewsets import A15CategoryViewSet
from games.A15.properties_a15.viewsets import A15PropertyViewSet
from games.A15.effects_a15.viewsets import A15EffectViewSet
from games.A15.regions_a15.viewsets import A15RegionViewSet
from games.A15.monsters_a15.viewsets import A15MonsterViewSet

routes = (
    (r'A15/category', A15CategoryViewSet),
    (r'A15/property', A15PropertyViewSet),
    (r'A15/effect', A15EffectViewSet),
    (r'A15/region', A15RegionViewSet),
    (r'A15/monster', A15MonsterViewSet),
)