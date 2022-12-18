from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters
from rest_framework.pagination import LimitOffsetPagination
from report.serializers import ReportSerializer
from report.models import Report


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer = ReportSerializer(queryset, many=True)
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend,
                       filters.OrderingFilter]
    pagination_class = LimitOffsetPagination
    ordering_fields = ['modified']
    serializer_class = ReportSerializer
