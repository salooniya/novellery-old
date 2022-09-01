from django.urls import path
from chapter import views

urlpatterns = [
    path('<uuid:pk>/',views.SpecificChapterApi.as_view()),
    path('',views.ChapterApi.as_view()),
]