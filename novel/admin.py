from django.contrib import admin
from novel import models

# Register your models here.
admin.site.register([
    models.Novel,
])