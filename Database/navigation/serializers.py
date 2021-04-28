from rest_framework import serializers
from navigation.models import Navigation

class NavigationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Navigation
        fields = ['section', 'data']