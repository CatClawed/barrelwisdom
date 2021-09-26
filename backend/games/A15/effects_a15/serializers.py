from rest_framework import serializers
from games.A15.effects_a15.models import Effect
from games.A15.items_a15.models import EffectLine


class A15EffectLineerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    class Meta:
        model = EffectLine
        fields = ['name', 'slugname']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.item.item_en.name
        if self.context['language'] == 'ja':
            return obj.item.item_ja.name
        else:
            return obj.item.item_en.name
    def get_slugname(self,obj):
        if 'language' not in self.context:
            return obj.item.slugname
        if self.context['language'] == 'ja':
            return obj.item.slugname
        else:
            return obj.item.slugname

class A15EffectSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    effectline_set = A15EffectLineerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'desc', "effectline_set"]

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        if self.context['language'] == 'ja':
            return obj.eff_ja.name
        else:
            return obj.eff_en.name
    def get_desc(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.desc
        if self.context['language'] == 'ja':
            return obj.eff_ja.desc
        else:
            return obj.eff_en.desc

class A15EffectSerializerSimple(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slugname', 'name']

    def get_name(self,obj):
        if 'language' not in self.context:
            return obj.eff_en.name
        if self.context['language'] == 'ja':
            return obj.eff_ja.name
        else:
            return obj.eff_en.name