from rest_framework import serializers
from games.A18.monsters_a18.models import Monster, Race
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer
from games.A18.misc_a18.serializers import A18ItemNameSerializer, A18AreaNameSerializer


class A18MonsterListSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    kind = serializers.CharField(source="kind.icon")
    race = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = ['slug', 'name', 'kind', 'race', 'isDX']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )
    def get_race(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.kind.race_en,
            ja=obj.kind.race_ja,
            sc=obj.kind.race_sc,
            tc=obj.kind.race_tc,
        )
    
class A18MonsterFullSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    char = serializers.SerializerMethodField()
    kind = serializers.CharField(source="kind.icon")
    item_set = A18ItemNameSerializer(many=True, read_only=True)
    locations = A18AreaNameSerializer(many=True)

    class Meta:
        model = Monster
        fields = ['slug', 'name', 'desc', 'char', 'kind', 'note',
            'hp', 'atk', 'defen', 'spd', 'level', 'exp', 'cole',
            'slash', 'impact', 'pierce', 'magic', 'fire', 'ice', 'light', 'ail',
            'item_set', 'locations', 'isDX'
        ]
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text.name_en,
            ja=obj.text.name_ja,
            sc=obj.text.name_sc,
            tc=obj.text.name_tc,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=(obj.text.desc1_en, obj.text.desc2_en, obj.text.desc3_en, obj.text.desc4_en),
            ja=(obj.text.desc1_ja, obj.text.desc2_ja, obj.text.desc3_ja, obj.text.desc4_ja),
            sc=(obj.text.desc1_sc, obj.text.desc2_sc, obj.text.desc3_sc, obj.text.desc4_sc),
            tc=(obj.text.desc1_tc, obj.text.desc2_tc, obj.text.desc3_tc, obj.text.desc4_tc),
        )
    def get_char(self,obj):
        return (
            obj.char1.slug,
            obj.char2.slug if obj.char2 else None,
            obj.char3.slug if obj.char3 else None,
            obj.char4.slug if obj.char4 else None
        )


class A18RaceListSerializer(DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Race
        fields = ['icon', 'name']
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.race_en,
            ja=obj.race_ja,
            sc=obj.race_sc,
            tc=obj.race_tc,
        )