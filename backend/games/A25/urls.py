from games.A25.misc_a25.viewsets import A25TraitViewSet, A25ResearchViewSet, A25FilterViewSet
from games.A25.chara_a25.viewsets import A25CharaViewSet, A25MemoriaViewSet
from games.A25.items_a25.viewsets import A25RecipeViewSet, A25MaterialViewSet, A25SynthViewSet

routes = (
    (r'A25/trait', A25TraitViewSet),
    (r'A25/research', A25ResearchViewSet),
    (r'A25/filterable', A25FilterViewSet),
    (r'A25/character', A25CharaViewSet),
    (r'A25/memoria', A25MemoriaViewSet),
    (r'A25/recipe', A25RecipeViewSet),
    (r'A25/material', A25MaterialViewSet),
    (r'A25/synth', A25SynthViewSet),
)
