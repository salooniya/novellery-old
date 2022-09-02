from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from chapter import models,serializers,permissions
from novel.models import Novel
from rest_framework.generics import (
    # ListAPIView,
    RetrieveUpdateDestroyAPIView,
    # DestroyAPIView,
    ListCreateAPIView
)


# Create your views here.
class ChapterApi(ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = models.Chapter.objects.all()
    serializer_class = serializers.AllChapterSerializer

    def create(self, request, *args, **kwargs):
        chapter_data = request.data
        new_chapter = models.Chapter.objects.create(
            novelID = Novel.objects.get(ID = chapter_data["novelID"]),
            title = chapter_data["title"],
            body = chapter_data["body"]
            )
        new_chapter.save()
        serializer = serializers.AllChapterSerializer(new_chapter)
        return Response(serializer.data)

class SpecificChapterApi(RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthorOrReadOnly,)
    queryset = models.Chapter.objects.all()
    serializer_class = serializers.SpecificChapterSerializer