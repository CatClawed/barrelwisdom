from rest_framework import serializers
from games.BR1.areas_br1.models import Area

class BR1AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ['name']