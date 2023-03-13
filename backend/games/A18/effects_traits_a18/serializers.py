from rest_framework import serializers
from games.A18.effects_traits_a18.models import Trait, Effect, AdvData
from games.A18.items_a18.models import EffectData
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer
from games.A18.misc_a18.serializers import A18ItemNameSerializer


class A18EffectDataSerializer(DefaultSerializer):
    slug = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    class Meta:
        model = EffectData
        fields = ['slug', 'name']
    def get_slug(self,obj):
        return obj.line.item.slug
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.line.item.text.name_en,
            ja=obj.line.item.text.name_ja,
            sc=obj.line.item.text.name_sc,
            tc=obj.line.item.text.name_tc,
        )

class A18AdvDataSerializer(DefaultSerializer):
    class Meta:
        model = AdvData
        fields = ['attTag0', 'actTag0', 'min_1_0', 'max_1_0', 'min_2_0', 'max_2_0']

class A18TraitSerializerSimple(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = ['slug', 'name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )
    
class A18TraitListSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    item_set = A18ItemNameSerializer(many=True, read_only=True)
    combo1 = A18TraitSerializerSimple()
    combo2 = A18TraitSerializerSimple()
    class Meta:
        model = Trait
        fields = ['slug', 'grade', 'combo1', 'combo2', 'trans_atk', 'trans_heal', 
            'trans_wpn', 'trans_arm', 'trans_acc', 'trans_syn', 'name', 'desc', 'item_set'
        ]
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc_en,
            ja=obj.desc_ja,
            sc=obj.desc_sc,
            tc=obj.desc_tc,
        )

class A18TraitSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    item_set = A18ItemNameSerializer(many=True)
    combo1 = A18TraitSerializerSimple()
    combo2 = A18TraitSerializerSimple()
    advanced = A18AdvDataSerializer(many=True)
    class Meta:
        model = Trait
        fields = ['slug', 'grade', 'trans_atk', 'trans_heal',
            'trans_wpn', 'trans_arm', 'trans_acc', 'trans_syn', 'name', 'desc',
            'advanced', 'item_set', 'combo1', 'combo2'
        ]
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc_en,
            ja=obj.desc_ja,
            sc=obj.desc_sc,
            tc=obj.desc_tc,
        )

class A18EffectSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc_en,
            ja=obj.desc_ja,
            sc=obj.desc_sc,
            tc=obj.desc_tc,
        )

class A18EffectSerializerFull(DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    items = A18EffectDataSerializer(many=True, source='effectdata_set')
    advanced = A18AdvDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['slug', 'name', 'desc', 'advanced', 'items']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name_en,
            ja=obj.name_ja,
            sc=obj.name_sc,
            tc=obj.name_tc,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc_en,
            ja=obj.desc_ja,
            sc=obj.desc_sc,
            tc=obj.desc_tc,
        )