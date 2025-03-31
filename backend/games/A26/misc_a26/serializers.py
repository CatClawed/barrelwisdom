from rest_framework import serializers
from games._helpers.serializer_helper import DefaultSerializer
from games.A26.misc_a26.models import Coordinate
from games.A26.items_a26.models import Trait, Item
from games.A26.monsters_a26.models import Monster

class A26DefaultSerializer(DefaultSerializer):
    def get_text(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text_en,
            ja=obj.text_ja,
            tc=obj.text_tc,
            sc=obj.text_sc,
            ko=obj.text_ko,
            fr=obj.text_fr,
            ru=obj.text_ru,
            de=obj.text_de,
            es=obj.text_es,
        )
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name.text_en,
            ja=obj.name.text_ja,
            tc=obj.name.text_tc,
            sc=obj.name.text_sc,
            ko=obj.name.text_ko,
            fr=obj.name.text_fr,
            ru=obj.name.text_ru,
            de=obj.name.text_de,
            es=obj.name.text_es,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc.text_en,
            ja=obj.desc.text_ja,
            tc=obj.desc.text_tc,
            sc=obj.desc.text_sc,
            ko=obj.desc.text_ko,
            fr=obj.desc.text_fr,
            ru=obj.desc.text_ru,
            de=obj.desc.text_de,
            es=obj.desc.text_es,
        ) if obj.desc else None
    def get_desc1(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc1.text_en,
            ja=obj.desc1.text_ja,
            tc=obj.desc1.text_tc,
            sc=obj.desc1.text_sc,
            ko=obj.desc1.text_ko,
            fr=obj.desc1.text_fr,
            ru=obj.desc1.text_ru,
            de=obj.desc1.text_de,
            es=obj.desc1.text_es,
        )
    def get_desc2(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc2.text_en,
            ja=obj.desc2.text_ja,
            tc=obj.desc2.text_tc,
            sc=obj.desc2.text_sc,
            ko=obj.desc2.text_ko,
            fr=obj.desc2.text_fr,
            ru=obj.desc2.text_ru,
            de=obj.desc2.text_de,
            es=obj.desc2.text_es,
        ) if obj.desc2 else None

class A26CoordinateSerializer(A26DefaultSerializer):
    class Meta:
        model = Coordinate
        fields = ['x', 'z', 'label']

class A26TraitSimpleSerializer(A26DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Trait
        fields = [
            'id', 'name'
        ]

class A26ItemSimpleSerializer(A26DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Item
        fields = [
            'id', 'name'
        ]

class A26MonsterSimpleSerializer(A26DefaultSerializer):
    name = serializers.SerializerMethodField()
    class Meta:
        model = Monster
        fields = [
            'id', 'name'
        ]