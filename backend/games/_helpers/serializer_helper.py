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
    def __init__(self, fallback_lang='en', *args, **kwargs):
        self.fallback_lang = fallback_lang
        kwargs['read_only'] = True
        super().__init__(*args, **kwargs)

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

class DefaultSerializer(serializers.ModelSerializer):
    def get_fields(self):
        fields = super().get_fields()
        auto_translated_fields = getattr(self.Meta, 'auto_translated_fields', [])
        fallback_lang = getattr(self.Meta, 'fallback_lang', 'en')

        for field_name in auto_translated_fields:
            fields[field_name] = TranslatedTextField(fallback_lang=fallback_lang)

        return fields

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
