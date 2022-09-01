import uuid
from django.db import models
from novel.models import Novel

# Create your models here.
class Chapter(models.Model):
    ID = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False,unique=True)
    title = models.CharField(max_length=1024)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    novelID = models.ForeignKey(Novel,on_delete=models.CASCADE,related_name="chaptersID")

    def __str__(self):
        return self.title