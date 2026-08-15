from rest_framework import serializers
from games.A18.monsters_a18.models import Monster, Race
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer, DirectTranslatedField, PathTranslatedField
from games.A18.misc_a18.serializers import A18ItemNameSerializer, A18AreaNameSerializer


class A18MonsterListSerializer(DefaultSerializer):
    name =  PathTranslatedField(path="text", base_name="name")
    kind = serializers.CharField(source="kind.icon")
    id = serializers.CharField(source='slug')
    class Meta:
        model = Monster
        fields = ['id', 'name', 'kind','isDX']

    
class A18MonsterFullSerializer(DefaultSerializer):
    name =  PathTranslatedField(path="text", base_name="name")
    desc1 = PathTranslatedField(path="text", base_name="desc1")
    desc2 = PathTranslatedField(path="text", base_name="desc2")
    desc3 = PathTranslatedField(path="text", base_name="desc3")
    desc4 = PathTranslatedField(path="text", base_name="desc4")
    char1 = serializers.CharField(source="char1.slug", allow_null=True)
    char2 = serializers.CharField(source="char2.slug", allow_null=True)
    char3 = serializers.CharField(source="char3.slug", allow_null=True)
    char4 = serializers.CharField(source="char4.slug", allow_null=True)
    kind = serializers.CharField(source="kind.icon")
    item_set = A18ItemNameSerializer(many=True, read_only=True)
    locations = A18AreaNameSerializer(many=True)
    id = serializers.CharField(source='slug')

    class Meta:
        model = Monster
        fields = ['id', 'name', 'desc1', 'desc2', 'desc3', 'desc4', 
            'char1', 'char2', 'char3', 'char4',
            'kind', 'note',
            'hp', 'atk', 'defen', 'spd', 'level', 'exp', 'cole',
            'slash', 'impact', 'pierce', 'magic', 'fire', 'ice', 'light', 'ail',
            'item_set', 'locations', 'isDX', 'index'
        ]



class A18RaceListSerializer(DefaultSerializer):
    name = DirectTranslatedField(base_name="race")
    class Meta:
        model = Race
        fields = ['icon', 'name']