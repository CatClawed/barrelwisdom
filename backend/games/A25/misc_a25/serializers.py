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
        )
    def get_name(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.name.text_en,
            ja=obj.name.text_ja,
        )
    def get_desc(self,obj):
        return DefaultSerializer.language_match(self,
            en=obj.desc.text_en,
            ja=obj.desc.text_ja,
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
    name = serializers.SerializerMethodField()
    slug = serializers.CharField(source='item.slug')
    class Meta:
        model = Material
        fields = ['slug', 'name']
    def get_name(self,obj):
        return A25DefaultSerializer.get_text(self,obj.item.name)

class A25CharaNameSerializer(A25DefaultSerializer):
    name = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    class Meta:
        model = Character
        fields = ['slug', 'name', 'title']
    def get_title(self,obj):
        return A25DefaultSerializer.get_text(self,obj.title)

class A25TraitSimpleSerializer(A25DefaultSerializer):
    name_en = serializers.CharField(source='name.text_en')
    name_ja = serializers.CharField(source='name.text_ja')
    desc = serializers.SerializerMethodField()
    kind = serializers.CharField(source='kind.slug')
    class Meta:
        model = Trait
        fields = ['slug', 'name_en', 'name_ja', 'desc', 'val1', 'val5', 'kind']

class A25TraitSerializer(A25DefaultSerializer):
    name_en = serializers.CharField(source='name.text_en')
    name_ja = serializers.CharField(source='name.text_ja')
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
        fields = ['slug', 'name_en', 'name_ja', 'desc', 'kind', 'cat',
            'val', 'items', 'char1', 'char2', 'char3',
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