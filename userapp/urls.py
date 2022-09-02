from django.urls import path,include
from userapp import views

urlpatterns = [
    path('registration/',include('dj_rest_auth.registration.urls')),
    path('<uuid:pk>',views.SpecificUserApi.as_view()),
    path('',views.UserApi.as_view()),
]