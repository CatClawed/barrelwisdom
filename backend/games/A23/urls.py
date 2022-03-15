from games.A23.effects_a23.viewsets import A23EffectViewSet
from games.A23.traits_a23.viewsets import A23TraitViewSet
from games.A23.regions_a23.viewsets import A23RegionViewSet, A23MajorGatherViewSet
from games.A23.monsters_a23.viewsets import A23MonsterViewSet
from games.A23.items_a23.viewsets import A23ItemViewSet, A23CategoryViewSet, A23BookViewSet, A23RecipeViewSet

routes = (
    (r'A23/effect', A23EffectViewSet),
    (r'A23/trait',  A23TraitViewSet),
    (r'A23/region',  A23RegionViewSet),
    (r'A23/monster',  A23MonsterViewSet),
    (r'A23/item',  A23ItemViewSet),
    (r'A23/book',  A23BookViewSet),
    (r'A23/category',  A23CategoryViewSet),
    (r'A23/recipe',  A23RecipeViewSet),
    (r'A23/majorgather',  A23MajorGatherViewSet),
)