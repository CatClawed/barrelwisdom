from games.A22.effects_a22.viewsets import A22EffectViewSet, A22EVEffectViewSet, A22ForgeEffectViewSet
from games.A22.traits_a22.viewsets import A22TraitViewSet
from games.A22.items_a22.viewsets import A22ItemViewSet, A22CategoryItemViewSet, A22ShopDevelopViewSet, A22ItemRegionViewSet
from games.A22.shops_a22.viewsets import A22ShopViewSet
from games.A22.locations_a22.viewsets import A22LocationViewSet
from games.A22.categories_a22.viewsets import A22CategoryViewSet
from games.A22.monsters_a22.viewsets import A22MonsterViewSet

routes = (
    (r'A22/effect', A22EffectViewSet),
    (r'A22/eveffect', A22EVEffectViewSet),
    (r'A22/forgeeffect', A22ForgeEffectViewSet),
    (r'A22/trait', A22TraitViewSet),
    (r'A22/item', A22ItemViewSet),
    (r'A22/categoryitem', A22CategoryItemViewSet),
    (r'A22/region', A22ItemRegionViewSet),
    (r'A22/shopdevelop', A22ShopDevelopViewSet),
    (r'A22/shop', A22ShopViewSet),
    (r'A22/location', A22LocationViewSet),
    (r'A22/category', A22CategoryViewSet),
    (r'A22/monster', A22MonsterViewSet),
)