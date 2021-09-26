from rest_framework import serializers
from games.A16.effects_a16.models import Effect
from games.A16.items_a16.models import EffectLines, EffectData

class A16EffectLineSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slugname = serializers.SerializerMethodField()
    class Meta:
        model = EffectLines
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


class A16EffectDataSerializer(serializers.ModelSerializer):
    effectlines_set = A16EffectLineSerializer(many=True)
    class Meta:
        model = EffectData
        fields = ['effectlines_set']

class A16EffectSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    effectdata_set = A16EffectDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slugname', 'name', 'desc', "effectdata_set"]

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

class A16EffectSerializerSimple(serializers.ModelSerializer):
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