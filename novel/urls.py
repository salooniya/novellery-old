from django.urls import path
from novel import views

urlpatterns = [
    path('<uuid:pk>/chapters',views.SpecificNovelAllChaptersApi.as_view()),
    path('<uuid:pk>',views.SpecificNovelApi.as_view()),
    # path('spotlight',views.TopTenSubscribedNovels.as_view()),
    # path('trending',views.TopTenViewedNovels.as_view()),
    path('<uuid:pk>/subscribed',views.SubscribeNovel.as_view()),
    path('',views.NovelApi.as_view()),
]