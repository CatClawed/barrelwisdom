from django.db import models
import string, random

# Need to clean this periodically
class Invite(models.Model):
    code = models.CharField(max_length=30, unique=True, editable=False)
    date = models.DateTimeField(auto_now_add=True, editable=False)
    used = models.BooleanField(default=False)
    email = models.EmailField(blank=True)

    def __init__(self, *args, **kwargs):
        super(Invite, self).__init__(*args, **kwargs)
        if not self.pk and not self.code:
            self.code = ''.join(random.choice(string.ascii_letters) for i in range(10))