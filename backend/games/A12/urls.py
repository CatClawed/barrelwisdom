from games.A12.categories_a12.viewsets import A12CategoryViewSet
from games.A12.effects_a12.viewsets import A12EffectViewSet
from games.A12.traits_a12.viewsets import A12TraitViewSet
from games.A12.monsters_a12.viewsets import A12MonsterViewSet
from games.A12.items_a12.viewsets import A12ItemViewSet, A12BookViewSet
from games.A12.areadata_a12.viewsets import A12AreaViewSet  

routes = (
    (r'A12/category', A12CategoryViewSet),
    (r'A12/effect', A12EffectViewSet),
    (r'A12/trait', A12TraitViewSet),
    (r'A12/monster', A12MonsterViewSet),
    (r'A12/item', A12ItemViewSet),
    (r'A12/book', A12BookViewSet),
    (r'A12/area', A12AreaViewSet),
)