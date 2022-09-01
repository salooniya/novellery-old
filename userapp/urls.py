from django.urls import path
from userapp import views

urlpatterns = [
    path('',views.UserApi.as_view()),
    path('<int:pk>',views.SpecificUserApi.as_view()),
]