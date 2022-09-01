from django.contrib import admin
from django.urls import path,include
from novel.views import TopTenSubscribedNovels,TopTenViewedNovels,SearchNovel,TopTenViewNovelsByTags

urlpatterns = [
    path('admin/', admin.site.urls),
    path('novel/',include('novel.urls')),
    path('chapter/',include('chapter.urls')),
    path('user/',include('userapp.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('trending',TopTenViewedNovels.as_view()),
    path('spotlight',TopTenSubscribedNovels.as_view()),
    path('search',SearchNovel.as_view()),
    path('genre',TopTenViewNovelsByTags.as_view()),
]
