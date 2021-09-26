from games.A16.categories_a16.viewsets import A16CategoryViewSet
from games.A16.effects_a16.viewsets import A16EffectViewSet
from games.A16.properties_a16.viewsets import A16PropertyViewSet
from games.A16.monsters_a16.viewsets import A16MonsterViewSet
from games.A16.items_a16.viewsets import A16ItemViewSet, A16BookViewSet
from games.A16.areadata_a16.viewsets import A16AreaViewSet  

routes = (
    (r'A16/category', A16CategoryViewSet),
    (r'A16/effect', A16EffectViewSet),
    (r'A16/property', A16PropertyViewSet),
    (r'A16/monster', A16MonsterViewSet),
    (r'A16/item', A16ItemViewSet),
    (r'A16/book', A16BookViewSet),
    (r'A16/area', A16AreaViewSet),
)