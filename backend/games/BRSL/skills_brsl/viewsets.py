from rest_framework import viewsets, filters
from games.BRSL.fragments_brsl.models import Character
from games.BRSL.skills_brsl.serializers import BRSLCharacterSkillSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class BRSLSkillViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = BRSLCharacterSkillSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    
    @action(detail=False)
    def en(self, request): 
        queryset = (
            Character.objects
            .prefetch_related(
                'skill_set__character',
                'skill_set__skill_en'
            )
        )
        serializer = BRSLCharacterSkillSerializer(queryset, many=True, context={'language': 'en'})
        return Response(serializer.data)
    
    @action(detail=False)
    def ja(self, request): 
        queryset = (
            Character.objects
            .prefetch_related(
                'skill_set__character',
                'skill_set__skill_ja'
            )
        )
        serializer = BRSLCharacterSkillSerializer(queryset, many=True, context={'language': 'ja'})
        return Response(serializer.data)
    
    @action(detail=False)
    def sc(self, request): 
        queryset = (
            Character.objects
            .prefetch_related(
                'skill_set__character',
                'skill_set__skill_sc'
            )
        )
        serializer = BRSLCharacterSkillSerializer(queryset, many=True, context={'language': 'sc'})
        return Response(serializer.data)
    
    @action(detail=False)
    def tc(self, request): 
        queryset = (
            Character.objects
            .prefetch_related(
                'skill_set__character',
                'skill_set__skill_tc'
            )
        )
        serializer = BRSLCharacterSkillSerializer(queryset, many=True, context={'language': 'tc'})
        return Response(serializer.data)