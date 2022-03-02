from rest_framework import serializers
from games.A23.misc_a23.models import Character, Shop

class A23CharacterSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Character
        fields = ['slugname']
        
class A23ShopSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Shop
        fields = ['name']
    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.shop_en
        if self.context['language'] == 'ja':
            return obj.shop_ja
        if self.context['language'] == 'ko':
            return obj.shop_ko
        if self.context['language'] == 'sc':
            return obj.shop_sc
        if self.context['language'] == 'tc':
            return obj.shop_tc
        else:
            return obj.shop_en