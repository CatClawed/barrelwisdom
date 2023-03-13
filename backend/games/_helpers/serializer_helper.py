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
            case _:
                return kwargs['en']
    except KeyError:
        return kwargs['en']

class DefaultSerializer(serializers.ModelSerializer):
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
                case _:
                    return kwargs['en']
        except KeyError:
            return kwargs['en']