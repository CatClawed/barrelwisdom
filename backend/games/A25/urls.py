from games.A25.misc_a25.viewsets import A25TraitViewSet, A25ResearchViewSet, A25FilterViewSet

routes = (
    (r'A25/trait', A25TraitViewSet),
    (r'A25/research', A25ResearchViewSet),
    (r'A25/filterable', A25FilterViewSet),
)