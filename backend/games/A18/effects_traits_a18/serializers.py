from rest_framework import serializers
from games.A18.effects_traits_a18.models import Trait, Effect, AdvData
from games.A18.items_a18.models import EffectData
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField
from games.A18.misc_a18.serializers import A18ItemNameSerializer


class A18EffectDataSerializer(DefaultSerializer):
    id = serializers.CharField(source="line.item.slug")
    name = PathTranslatedField(path='line.item.text', base_name='name')
    class Meta:
        model = EffectData
        fields = ['id', 'name']
    def get_id(self,obj):
        return obj.line.item.id

class A18AdvDataSerializer(DefaultSerializer):
    class Meta:
        model = AdvData
        fields = ['attTag0', 'actTag0', 'min_1_0', 'max_1_0', 'min_2_0', 'max_2_0']

class A18TraitSerializerSimple(DefaultSerializer):
    id = serializers.CharField(source="slug")
    name = DirectTranslatedField(base_name="name")
    class Meta:
        model = Trait
        fields = ['id', 'name']
    
class A18TraitListSerializer(DefaultSerializer):
    id = serializers.CharField(source="slug")
    name = DirectTranslatedField(base_name="name")
    desc = DirectTranslatedField(base_name="desc")
    item_set = A18ItemNameSerializer(many=True, read_only=True)
    combo1 = A18TraitSerializerSimple()
    combo2 = A18TraitSerializerSimple()
    class Meta:
        model = Trait
        fields = ['id', 'grade', 'combo1', 'combo2', 'trans_atk', 'trans_heal', 
            'trans_wpn', 'trans_arm', 'trans_acc', 'trans_syn', 'name', 'desc', 'item_set'
        ]

class A18TraitSerializer(DefaultSerializer):
    id = serializers.CharField(source="slug")
    name = DirectTranslatedField(base_name="name")
    desc = DirectTranslatedField(base_name="desc")
    item_set = A18ItemNameSerializer(many=True)
    combo1 = A18TraitSerializerSimple()
    combo2 = A18TraitSerializerSimple()
    advanced = A18AdvDataSerializer(many=True)
    class Meta:
        model = Trait
        fields = ['id', 'grade', 'trans_atk', 'trans_heal',
            'trans_wpn', 'trans_arm', 'trans_acc', 'trans_syn', 'name', 'desc',
            'advanced', 'item_set', 'combo1', 'combo2', 'index'
        ]

class A18EffectSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="name")
    desc = DirectTranslatedField(base_name="desc")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc']


class A18EffectSerializerFull(DefaultSerializer):
    id = serializers.CharField(source="slug")
    name = DirectTranslatedField(base_name="name")
    desc = DirectTranslatedField(base_name="desc")
    items = A18EffectDataSerializer(many=True, source='effectdata_set')
    advanced = A18AdvDataSerializer(many=True)
    class Meta:
        model = Effect
        fields = ['id', 'name', 'desc', 'advanced', 'items', 'index']
