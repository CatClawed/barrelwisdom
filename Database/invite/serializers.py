from rest_framework import serializers
from invite.models import Invite

class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = ['id', 'code', 'date', 'used', 'email']