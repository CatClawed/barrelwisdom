from rest_framework import serializers
from invite.models import Invite

class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = ['id', 'code', 'date', 'used', 'email']

    # can only be updated to be true
    def update(self, instance, validated_data):
        instance.used = True
        instance.save()
        return instance