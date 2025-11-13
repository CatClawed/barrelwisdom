from django.db import models
from games._helpers.serializer_helper import DefaultSerializer
from rest_framework import serializers

class SlugMixin(models.Model):
    slug = models.SlugField(blank=True, unique=True)
    class Meta:
        abstract = True

class EnglishMixin(models.Model):
    text_en = models.CharField(blank=True)
    class Meta:
        abstract = True

class JapaneseMixin(models.Model):
    text_ja = models.CharField(blank=True)
    class Meta:
        abstract = True

class TraditionalChineseMixin(models.Model):
    text_tc = models.CharField(blank=True)
    class Meta:
        abstract = True

class SimplifiedChineseMixin(models.Model):
    text_sc = models.CharField(blank=True)
    class Meta:
        abstract = True

class KoreanMixin(models.Model):
    text_ko = models.CharField(blank=True)
    class Meta:
        abstract = True

class FrenchMixin(models.Model):
    text_fr = models.CharField(blank=True)
    class Meta:
        abstract = True

class RussianMixin(models.Model):
    text_ru = models.CharField(blank=True)
    class Meta:
        abstract = True

class GermanMixin(models.Model):
    text_de = models.CharField(blank=True)
    class Meta:
        abstract = True

class SpanishMixin(models.Model):
    text_es = models.CharField(blank=True)
    class Meta:
        abstract = True

class GameIdMixin(models.Model):
    gid = models.IntegerField(unique=True)
    class Meta:
        abstract = True

class IndexMixin(models.Model):
    index = models.IntegerField()
    class Meta:
        abstract = True

class NameMixin(models.Model):
    name = models.ForeignKey('Text', on_delete=models.CASCADE)
    class Meta:
        abstract = True

class DescMixin(models.Model):
    desc = models.ForeignKey('Text', on_delete=models.CASCADE, related_name='%(class)s_desc')
    class Meta:
        abstract = True

def generate_stats_mixin(stats=['hp', 'atk', 'dfn', 'spd']):
    attrs = {
        '__module__': __name__,
        'Meta': type('Meta', (), {'abstract': True})
    }
    for stat in stats:
        attrs[stat] = models.SmallIntegerField()
    return type(f'Stats{len(stats)}Mixin', (models.Model,), attrs)

def generate_transfer_mixin(transfers):
    attrs = {
        '__module__': __name__,
        'Meta': type('Meta', (), {'abstract': True})
    }
    for transfer in transfers:
        attrs[transfer] = models.BooleanField(default=False)
    return type(f'Transfer{len(transfers)}Mixin', (models.Model,), attrs)

def generate_combo_mixin(number):
    attrs = {
        '__module__': __name__,
        'Meta': type('Meta', (), {'abstract': True})
    }
    for i in range(1,number+1):
        attrs[f'combo{i}'] = models.ForeignKey(
            "self",
            blank=True,
            null=True,
            on_delete=models.CASCADE,
            related_name=f'%(class)s_combo{i}'
        )
    return type(f'Combo{number}Mixin', (models.Model,), attrs)

def generate_value_pair_mixin(pairs, numeric = False):
    attrs = {
        '__module__': __name__,
        'Meta': type('Meta', (), {'abstract': True})
    }
    for i in range(1, pairs+1):
        attrs[f'val{i}_1'] = models.CharField(max_length=100, blank=True) if not numeric else models.IntegerField(null=True, blank=True)
        attrs[f'val{i}_2'] = models.CharField(max_length=100, blank=True) if not numeric else models.IntegerField(null=True, blank=True)
    return type(f'ValuePair{pairs}Mixin', (models.Model,), attrs)

# use cases: char blabber for items/monsters (default), yumia inner/outer (2)
def generate_multi_desc_mixin(number=4):
    attrs = {
        '__module__': __name__,
        'Meta': type('Meta', (), {'abstract': True})
    }
    for i in range(1,number+1):
        attrs[f'desc{i}'] = models.ForeignKey(
            "Text",
            blank=True,
            null=True,
            on_delete=models.CASCADE,
            related_name=f'%(class)s_desc{i}'
        )
    return type(f'Desc{number}Mixin', (models.Model,), attrs)

class TextSerializer(DefaultSerializer):
    text = serializers.SerializerMethodField()

    def get_text(self, obj):
        language = self.context.get('language', 'en')
        field_name = f'text_{language}'
        text = getattr(obj, field_name, None) if hasattr(obj, field_name) else ''
        return text
    def get_name(self,obj):
        return self.get_text(self,obj)
    def get_desc(self,obj):
        return self.get_text(self,obj)

    class Meta:
        abstract = True
        fields = ['text']
