from rest_framework import serializers
from games.A22.shops_a22.models import Shop

# Complete Data for single languages
class A22ShopSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.CharField(source='slugname')
    class Meta:
        model = Shop
        fields = ['slug', 'name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.shop_en.name
        if self.context['language'] == 'ja':
            return obj.shop_ja.name
        if self.context['language'] == 'ko':
            return obj.shop_ko.name
        if self.context['language'] == 'fr':
            return obj.shop_fr.name
        if self.context['language'] == 'sc':
            return obj.shop_sc.name
        if self.context['language'] == 'tc':
            return obj.shop_tc.name
        else:
            return obj.shop_en.name