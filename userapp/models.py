from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# Create your models here.
class User(AbstractUser):
    ID = models.UUIDField(primary_key=True,unique=True,editable=False,default=uuid.uuid4)
    username = models.CharField(max_length=256)
    email = models.EmailField(max_length=256,unique=True)
    created = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= ['username']

    def __str__(self):
        return self.username
    
#ff69748f-709c-4262-b5e1-17c4cf25e629