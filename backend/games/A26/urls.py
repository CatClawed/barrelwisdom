from games.A26.misc_a26.viewsets import A26MemoryVialViewSet
from games.A26.items_a26.viewsets import A26TraitViewSet, A26EffectViewSet, A26ItemViewSet, A26MaterialViewSet, A26CategoryViewSet
from games.A26.monsters_a26.viewsets import A26MonsterViewSet, A26MonsterRaceViewSet

routes = (
    (r'A26/memory-vials', A26MemoryVialViewSet),
    (r'A26/trait', A26TraitViewSet),
    (r'A26/effect', A26EffectViewSet),
    (r'A26/item', A26ItemViewSet),
    (r'A26/material', A26MaterialViewSet),
    (r'A26/category', A26CategoryViewSet),
    (r'A26/monster', A26MonsterViewSet),
    (r'A26/race', A26MonsterRaceViewSet),
)
