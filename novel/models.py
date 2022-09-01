from django.db import models
import uuid
from userapp.models import User
# from chapter.models import Chapter

# Create your models here.
class Novel(models.Model):
    ID = models.UUIDField(primary_key=True,unique=True,editable=False,default=uuid.uuid4)
    title = models.CharField(max_length=1024,unique=True)
    description = models.TextField(null=True)
    created = models.DateTimeField(auto_now_add=True,null=True)
    # chaptersID = models.TextField(blank=True)
    userID = models.ForeignKey(User,on_delete=models.CASCADE,related_name='novelsID',blank=True,null=True)
    subscribers = models.ManyToManyField(User,related_name='subscribeNovelsID',blank=True)
    views = models.IntegerField(default=0,blank=True,editable=False)
    genre = models.CharField(max_length=256,blank=True)

    @property
    def __numsuscribers__(self):
        return self.suscribers.all().count()

    def __str__(self):
        return self.title