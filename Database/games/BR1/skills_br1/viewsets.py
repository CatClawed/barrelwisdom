from rest_framework import viewsets, filters
from games.BR1.skills_br1.models import Skill
from games.BR1.skills_br1.serializers import BR1SkillSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class BR1SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = BR1SkillSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    @action(detail=False)
    def en(self, request):
        queryset = (
            Skill.objects
        )
        serializer = BR1SkillSerializer(queryset, many=True)
        return Response(serializer.data)