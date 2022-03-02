from games.A23.effects_a23.viewsets import A23EffectViewSet
from games.A23.traits_a23.viewsets import A23TraitViewSet

routes = (
    (r'A23/effect', A23EffectViewSet),
    (r'A23/trait',  A23TraitViewSet),
)