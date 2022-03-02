from rest_framework import serializers
from games.A23.regions_a23.models import Region

class A23ChestRegionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    parent = serializers.CharField(source="parent.slug")
    class Meta:
        model = Region
        fields = ['slug', 'parent']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.reg_en
        if self.context['language'] == 'ja':
            return obj.reg_ja
        if self.context['language'] == 'ko':
            return obj.reg_ko
        if self.context['language'] == 'sc':
            return obj.reg_sc
        if self.context['language'] == 'tc':
            return obj.reg_tc
        else:
            return obj.reg_en