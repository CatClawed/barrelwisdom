from games.A18.effects_traits_a18.viewsets import A18TraitViewSet, A18EffectViewSet
from games.A18.monsters_a18.viewsets import A18MonsterViewSet, A18RaceViewSet
from games.A18.items_a18.viewsets import A18CategoryViewSet, A18CatalystViewSet, A18RecipeIdeaViewSet, A18ItemViewSet
from games.A18.misc_a18.viewsets import A18ShopViewSet

routes = (
    (r'A18/trait', A18TraitViewSet),
    (r'A18/effect', A18EffectViewSet),
    (r'A18/monster', A18MonsterViewSet),
    (r'A18/race', A18RaceViewSet),
    (r'A18/category', A18CategoryViewSet),
    (r'A18/catalyst', A18CatalystViewSet),
    (r'A18/recipe', A18RecipeIdeaViewSet),
    (r'A18/item', A18ItemViewSet),
    (r'A18/shop', A18ShopViewSet),
)