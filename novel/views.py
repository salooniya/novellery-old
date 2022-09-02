from userapp.models import User
from rest_framework.response import Response
from novel import models,serializers,permissions
from django.db.models import Max
from rest_framework.views import APIView
from rest_framework.filters import SearchFilter
from rest_framework.permissions import IsAuthenticated 
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
    ListCreateAPIView
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# Create your views here.
class SpecificNovelApi(RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthorOrReadOnly,)
    queryset = models.Novel.objects.all()
    serializer_class = serializers.NovelSerializer

    def get(self, request,pk, *args, **kwargs):
        novel_obj = models.Novel.objects.get(pk=pk)
        novel_obj.views = novel_obj.views + 1
        novel_obj.save()
        serializer = serializers.NovelSerializer(novel_obj)
        return Response(serializer.data)

class NovelApi(ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = models.Novel.objects.all()
    serializer_class = serializers.NovelSerializer

    def create(self, request, *args, **kwargs):
        novel_data = request.data
        new_novel = models.Novel.objects.create(
            userID =  User.objects.get(ID = novel_data["userID"]),
            title = novel_data["title"],
            description = novel_data["description"],
            genre = novel_data["genre"],
        )
        new_novel.save()
        serializer = serializers.NovelSerializer(new_novel)
        return Response(serializer.data)

class SpecificNovelAllChaptersApi(RetrieveAPIView):
    queryset = models.Novel.objects.all()
    serializer_class = serializers.SpecificNovelAllChaptersSerializer

    def get_queryset(self):
        data = models.Novel.objects.all().values(
            'ID',
            'title',
            'description',
            'created',
            'chaptersID'
        )
        return data



class SubscribeNovel(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request,pk,*args,**kwargs):
        novel = models.Novel.objects.get(pk=pk)
        is_suscribe = False
        for suscriber in novel.subscribers.all():
            if suscriber==request.user:
                is_suscribe = True
                break
        
        if not is_suscribe:
            novel.subscribers.add(request.user)

        if is_suscribe:
            novel.subscribers.remove(request.user)
        novel.save()
        serializer = serializers.NovelSerializer(novel)
        return Response(serializer.data)

class SearchNovel(ListAPIView):
    queryset = models.Novel.objects.all()
    serializer_class = serializers.NovelSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title']
    # search_param = novellary.settings.REST_FRAMEWORK['SEARCH_PARAM']['title']

class TopTenSubscribedNovels(ListAPIView):
    queryset = models.Novel.objects.all()
    serializer_class = serializers.NovelSerializer

    def get_queryset(self):
        return models.Novel.objects.annotate(max_subscribers = Max('subscribers')).order_by('-max_subscribers')[:10]

class TopTenViewedNovels(ListAPIView):
    queryset = models.Novel.objects.all()
    serializer_class = serializers.NovelSerializer

    def get_queryset(self):
        return models.Novel.objects.annotate(max_views = Max('views')).order_by('-max_views')[:10]

class TopTenViewNovelsByTags(ListAPIView):
    queryset = models.Novel.objects.all()
    serializer_class = serializers.NovelSerializer
    filter_backends = [SearchFilter]
    search_fields = ['genre']

    def get_queryset(self):
        return models.Novel.objects.annotate(max_views = Max('views')).order_by('-max_views')[:10]