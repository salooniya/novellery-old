from django.shortcuts import render
from userapp import models, serializers
from rest_framework.generics import (
    # RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
    ListCreateAPIView,
)

# Create your views here.
class SpecificUserApi(RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserDetailsSerializer

class UserApi(ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserDetailsSerializer