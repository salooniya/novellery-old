from django.contrib import admin
from chapter import models

# Register your models here.
admin.site.register([
    models.Chapter,
])