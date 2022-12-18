from rest_framework import viewsets
from invite.serializers import InviteSerializer
from invite.models import Invite

class InviteViewSet(viewsets.ModelViewSet):
    queryset = Invite.objects.all()
    serializer_class = InviteSerializer
    ordering_fields = ['created']
    lookup_field = 'code'