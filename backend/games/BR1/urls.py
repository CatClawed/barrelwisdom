from games.BR1.demons_br1.viewsets import BR1DemonViewSet
from games.BR1.items_br1.viewsets import BR1ItemViewSet
from games.BR1.missions_br1.viewsets import BR1MissionViewSet
from games.BR1.fragments_br1.viewsets import BR1FragmentViewSet
from games.BR1.skills_br1.viewsets import BR1SkillViewSet

routes = (
    (r'BR1/demon', BR1DemonViewSet),
    (r'BR1/item', BR1ItemViewSet),
    (r'BR1/mission', BR1MissionViewSet),
    (r'BR1/fragment', BR1FragmentViewSet),
    (r'BR1/skill', BR1SkillViewSet),
)