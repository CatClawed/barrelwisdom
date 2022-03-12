from games.A15.categories_a15.viewsets import A15CategoryViewSet
from games.A15.properties_a15.viewsets import A15PropertyViewSet
from games.A15.effects_a15.viewsets import A15EffectViewSet
from games.A15.monsters_a15.viewsets import A15MonsterViewSet
from games.A15.items_a15.viewsets import A15ItemViewSet, A15BookViewSet, A15RegionViewSet

routes = (
    (r'A15/category', A15CategoryViewSet),
    (r'A15/property', A15PropertyViewSet),
    (r'A15/effect', A15EffectViewSet),
    (r'A15/monster', A15MonsterViewSet),
    (r'A15/item', A15ItemViewSet),
    (r'A15/book', A15BookViewSet),
    (r'A15/regiondata', A15RegionViewSet),
)