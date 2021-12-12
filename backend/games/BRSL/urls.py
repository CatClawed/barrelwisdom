from games.BRSL.demons_brsl.viewsets import BRSLDemonViewSet
from games.BRSL.skills_brsl.viewsets import BRSLSkillViewSet
from games.BRSL.fragments_brsl.viewsets import BRSLEventViewSet,BRSLCharacterViewSet,BRSLSchoolLocationViewSet
from games.BRSL.regions_brsl.viewsets import BRSLRegionViewSet
from games.BRSL.items_brsl.viewsets import BRSLItemViewSet,BRSLCategoryViewSet,BRSLUnitViewSet
from games.BRSL.facilities_brsl.viewsets import BRSLFacilityViewSet,BRSLFacilitySetViewSet

routes = (
    (r'BRSL/fragment', BRSLEventViewSet),
    (r'BRSL/character', BRSLCharacterViewSet),
    (r'BRSL/schoollocation', BRSLSchoolLocationViewSet),
    (r'BRSL/region', BRSLRegionViewSet),
    (r'BRSL/item', BRSLItemViewSet),
    (r'BRSL/category', BRSLCategoryViewSet),
    (r'BRSL/unit', BRSLUnitViewSet),
    (r'BRSL/skill', BRSLSkillViewSet),
    (r'BRSL/facility', BRSLFacilityViewSet),
    (r'BRSL/facilityset', BRSLFacilitySetViewSet),
    (r'BRSL/demon', BRSLDemonViewSet),
)