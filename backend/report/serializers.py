from rest_framework import serializers
from report.models import Report
        
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['created', 'url', 'body', 'id']