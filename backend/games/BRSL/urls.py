from games.BRSL.fragments_brsl.viewsets import BRSLEventViewSet,BRSLCharacterViewSet,BRSLSchoolLocationViewSet

routes = (
    (r'BRSL/fragment', BRSLEventViewSet),
    (r'BRSL/character', BRSLCharacterViewSet),
    (r'BRSL/schoollocation', BRSLSchoolLocationViewSet),
)