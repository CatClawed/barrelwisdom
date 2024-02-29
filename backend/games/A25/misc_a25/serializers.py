from rest_framework import serializers
from games.A25.misc_a25.models import Filterable, Name, Desc, Trait, Research
from games.A25.items_a25.models import Material
from games.A25.chara_a25.models import Character
from collections import OrderedDict
from games._helpers.serializer_helper import DefaultSerializer

# how to stop rewriting methods
class A25DefaultSerializer(DefaultSerializer):
    def get_text(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.text_en,
            ja=obj.text_ja,
            tc=obj.text_tc,
            sc=obj.text_sc,
        )
    def get_text_gbl(self,obj,gbl):
        if not gbl:
            return obj.text_ja
        return DefaultSerializer.language_match(self,
            en=obj.text_en,
            ja=obj.text_ja,
            tc=obj.text_tc,
            sc=obj.text_sc,
        )
    def get_name(self,obj):
        if hasattr(obj, "gbl") and not obj.gbl:
            return obj.name.text_ja
        return DefaultSerializer.language_match(self,
            en=obj.name.text_en,
            ja=obj.name.text_ja,
            tc=obj.name.text_tc,
            sc=obj.name.text_sc,
        )
    def get_desc(self,obj):
        if hasattr(obj, "gbl") and not obj.gbl:
            return obj.desc.text_ja
        return DefaultSerializer.language_match(self,
            en=obj.desc.text_en,
            ja=obj.desc.text_ja,
            tc=obj.desc.text_tc,
            sc=obj.desc.text_sc,
        )

class A25FilterableSerializerSimple(A25DefaultSerializer):
    class Meta:
        model = Filterable
        fields = ['slug']

class A25FilterableSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField(method_name="get_text")
    class Meta:
        model = Filterable
        fields = ['slug', 'name']

class A25ItemNameSerializer(A25DefaultSerializer):
    name  = serializers.SerializerMethodField()
    slug  = serializers.CharField(source='item.slug')
    color = serializers.CharField(source='color.slug')
    class Meta:
        model = Material
        fields = ['slug', 'name', 'color']
    def get_name(self,obj):
        return A25DefaultSerializer.get_text_gbl(self,obj.item.name,obj.item.gbl)

class A25CharaNameSerializer(A25DefaultSerializer):
    name   = serializers.SerializerMethodField()
    title  = serializers.SerializerMethodField()
    color1 = serializers.CharField(source='color1.slug')
    color2 = serializers.CharField(source='color2.slug')
    class Meta:
        model = Character
        fields = ['slug', 'name', 'title', 'color1', 'color2']
    def get_title(self,obj):
        return A25DefaultSerializer.get_text(self,obj.title)

class A25TraitSimpleSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Trait
        fields = ['slug', 'name', 'desc', 'val1', 'val5', 'kind']

class A25TraitSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    kind = A25FilterableSerializer()
    cat = serializers.CharField(source='cat.slug')
    val = serializers.SerializerMethodField()
    items = A25ItemNameSerializer(many=True, source='material_set')
    char1 = A25CharaNameSerializer(source='chara_trait1', many=True)
    char2 = A25CharaNameSerializer(source='chara_trait2', many=True)
    char3 = A25CharaNameSerializer(source='chara_trait3', many=True)
    class Meta:
        model = Trait
        fields = ['slug', 'name', 'desc', 'kind', 'cat',
            'val', 'items', 'char1', 'char2', 'char3', 'note',
            'trans_atk', 'trans_heal', 'trans_buff', 'trans_dbf', 'trans_wep'
        ]
    def get_val(self, obj):
        return (obj.val1, obj.val2, obj.val3, obj.val4, obj.val5)

class A25ResearchSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    desc = serializers.SerializerMethodField()
    kind = serializers.CharField(source='kind.slug')
    req = serializers.SerializerMethodField()
    class Meta:
        model = Research
        fields = ['name', 'desc', 'val', 'cole', 'kind', 'req']
    def get_req(self,obj):
        if obj.req:
            return A25DefaultSerializer.get_text(self,obj.req)