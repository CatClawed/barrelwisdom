from collections import OrderedDict
from rest_framework import serializers

def remove_empty(serializer, self, instance):
    result = super(serializer, self).to_representation(instance)
    return OrderedDict((k, v) for k, v in result.items()
                           if v not in [None, [], '', {}])

def language_match(context, **kwargs):
    try:
        match context['language']:
            case 'ja':
                return kwargs['ja']
            case 'sc':
                return kwargs['sc']
            case 'tc':
                return kwargs['tc']
            case 'ko':
                return kwargs['ko']
            case 'fr':
                return kwargs['fr']
            case 'de':
                return kwargs['de']
            case 'ru':
                return kwargs['ru']
            case 'es':
                return kwargs['es']
            case _:
                return kwargs['en']
    except KeyError:
        return kwargs['en']

class TranslatedTextField(serializers.Field):
    def __init__(self, *args, **kwargs):
        kwargs['read_only'] = True
        super().__init__(*args, **kwargs)
        self.supported_langs = ['en', 'ja', 'tc', 'sc', 'ko', 'fr', 'ru', 'de', 'es']

    def to_representation(self, text_object):
        if not text_object:
            return {}

        langs = {}
        for lang in self.supported_langs:
            attr_name = f'text_{lang}'
            if hasattr(text_object, attr_name):
                value = getattr(text_object, attr_name)
                if value:
                    langs[lang] = value
                    
        return langs


    """

    def to_representation(self, text_object):
        if not text_object:
            return ""

        language = self.context.get('language', 'en')
        field_name = f'text_{language}'
        text = getattr(text_object, field_name, None)

        if not text:
            fallback_field = f'text_{self.fallback_lang}'
            text = getattr(text_object, fallback_field, '')

        return text or ""
    """

class DefaultSerializer(serializers.ModelSerializer):
    def get_fields(self):
        fields = super().get_fields()
        auto_translated_fields = getattr(self.Meta, 'auto_translated_fields', [])

        for field_name in auto_translated_fields:
            fields[field_name] = TranslatedTextField()

        return fields

    """
    def get_fields(self):
        fields = super().get_fields()
        auto_translated_fields = getattr(self.Meta, 'auto_translated_fields', [])
        fallback_lang = getattr(self.Meta, 'fallback_lang', 'en')

        for field_name in auto_translated_fields:
            fields[field_name] = TranslatedTextField(fallback_lang=fallback_lang)

        return fields
    """

    def to_representation(self, instance):
        result = super(DefaultSerializer, self).to_representation(instance)
        return OrderedDict((k, v) for k, v in result.items()
                            if v not in [None, [], '', {}, False])

    def language_match(self, **kwargs):
        try:
            match self.context['language']:
                case 'ja':
                    return kwargs['ja']
                case 'sc':
                    return kwargs['sc']
                case 'tc':
                    return kwargs['tc']
                case 'ko':
                    return kwargs['ko']
                case 'fr':
                    return kwargs['fr']
                case 'de':
                    return kwargs['de']
                case 'ru':
                    return kwargs['ru']
                case 'es':
                    return kwargs['es']
                case _:
                    return kwargs['en']
        except KeyError:
            return kwargs['en']

def create_simple_serializer(model, fields=['id', 'name'],
    auto_translated_fields=['name'], fallback_lang='en'):
    meta_attrs = {
        'model': model,
        'fields': fields,
        'auto_translated_fields': auto_translated_fields,
        'fallback_lang': fallback_lang,
    }
    Meta = type('Meta', (), meta_attrs)

    attrs = {
        'Meta': Meta,
        '__module__': __name__
    }

    return type(
        f'{model.__name__}SimpleSerializer',
        (DefaultSerializer,),
        attrs
    )

""" for crap like firis """
class DirectTranslatedField(serializers.Field):
    def __init__(self, base_name, obj_path=None, *args, **kwargs):
        self.base_name = base_name
        self.obj_path = obj_path
        self.supported_langs = ['en', 'ja', 'tc', 'sc', 'ko', 'fr', 'ru', 'de', 'es']
        kwargs['read_only'] = True
        kwargs['source'] = '*'
        super().__init__(*args, **kwargs)

    def to_representation(self, obj):
        base = obj
        if self.obj_path:
            for attr in self.obj_path.split('.'):
                base = getattr(base, attr, None)
                if base is None: return {}

        langs = {}
        for lang in self.supported_langs:
            attr_name = f'{self.base_name}_{lang}'
            value = getattr(base, attr_name, None)
            if value:
                langs[lang] = value
        return langs

class PathTranslatedField(serializers.Field):
    """
    Handles deep nested structures where the language suffix is at the end.
    Example: obj.line.item.text.name_en
    Path: 'line.item.text'
    Base: 'name'
    """
    def __init__(self, path, base_name, *args, **kwargs):
        self.path = path.split('.')
        self.base_name = base_name
        self.supported_langs = ['en', 'ja', 'tc', 'sc', 'ko', 'fr', 'ru', 'de', 'es']
        kwargs['read_only'] = True
        kwargs['source'] = '*'
        super().__init__(*args, **kwargs)

    def to_representation(self, obj):
        base = obj
        for attr in self.path:
            base = getattr(base, attr, None)
            if base is None:
                return {}

        langs = {}
        for lang in self.supported_langs:
            attr_name = f'{self.base_name}_{lang}'
            value = getattr(base, attr_name, None)
            if value:
                langs[lang] = value
        return langs


class LegacyTranslatedField(serializers.Field):
    """
    For old models that store translations as separate related objects
    per language (e.g. obj.item_en, obj.item_ja) instead of a single
    text object with multiple language fields.

    Returns all available languages: {'en': '...', 'ja': '...'}

    obj_path: dotted path to traverse before applying the prefix
              (e.g. 'region' for obj.region.reg_en)

    Usage:
        name = LegacyTranslatedField(obj_prefix='item', field_name='name')
        name = LegacyTranslatedField(obj_prefix='reg', field_name='name', obj_path='region')
    """
    def __init__(self, obj_prefix, field_name, obj_path=None, *args, **kwargs):
        self.obj_prefix = obj_prefix
        self.field_name = field_name
        self.obj_path = obj_path
        self.supported_langs = ['en', 'ja', 'tc', 'sc', 'ko', 'fr', 'ru', 'de', 'es']
        kwargs['read_only'] = True
        kwargs['source'] = '*'
        super().__init__(*args, **kwargs)

    def to_representation(self, obj):
        base = obj
        if self.obj_path:
            for attr in self.obj_path.split('.'):
                base = getattr(base, attr, None)
                if base is None:
                    return {}

        langs = {}
        for lang in self.supported_langs:
            related_obj = getattr(base, f'{self.obj_prefix}_{lang}', None)
            if related_obj is None:
                continue
            value = getattr(related_obj, self.field_name, None)
            print(value)
            if value:
                langs[lang] = value
        return langs
