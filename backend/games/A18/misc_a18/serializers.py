from rest_framework import serializers
from games.A18.misc_a18.models import Character, Shop, BasicText, AreaName, ItemMastery
from games.A18.monsters_a18.models import Monster
from collections import OrderedDict
from games.A18.items_a18.models import Item, ShopSlot
from games.A18.effects_traits_a18.models import Trait
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField

class A18ItemNameSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name='name', obj_path='text')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Item
        fields = ['id', 'name']

class A18MonsterNameSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name='name', obj_path='text')
    id = serializers.CharField(source="slug")
    class Meta:
        model = Monster
        fields = ['id', 'name']

class A18CharacterSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source="slug")
    class Meta:
        model = Character
        fields = ['id']
        
class A18ShopSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="shop")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Shop
        fields = ['id', 'name']

class A18ShopSlotSerializer(DefaultSerializer):
    random = DirectTranslatedField(base_name="shop")
    item = A18ItemNameSerializer()
    class Meta:
        model = ShopSlot
        fields = ['item', 'random']

class A18ShopListSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="shop")
    shopslots = A18ShopSlotSerializer(source='shopslot_set', many=True)
    id = serializers.CharField(source="slug")
    class Meta:
        model = Shop
        fields = ['id', 'name', 'shopslots']

class A18BasicTextSerializer(DefaultSerializer):
    class Meta:
        model = BasicText
        fields = ['name', 'desc1', 'desc2', 'desc3', 'desc4']

class A18ItemMasterySerializer(serializers.ModelSerializer):
    desc = DirectTranslatedField(base_name="desc")
    class Meta:
        model = ItemMastery
        fields = ['desc']

class A18AreaNameSerializer(serializers.ModelSerializer):
    name = DirectTranslatedField(base_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = AreaName
        fields = ['id','name']

class A18TraitNameSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="name")
    id = serializers.CharField(source="slug")
    class Meta:
        model = Trait
        fields = ['id', 'name']
