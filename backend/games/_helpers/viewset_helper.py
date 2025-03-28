from rest_framework import viewsets
from rest_framework.decorators import action

# Stop rewriting language behavior k thx
class DefaultViewSetID(viewsets.ModelViewSet):
    lookup_field = 'id'

    @action(detail=False, url_path=r'(?P<lang>\w\w)')
    def lang(self, request, lang='en'):
        return self.get_query(lang=lang)

    @action(detail=True, url_path=r'(?P<lang>\w\w)')
    def lang_full(self, request, id, lang='en'):
        return self.get_query(lang=lang, id=id)
