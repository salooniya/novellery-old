from rest_framework import serializers
from novel import models
# from django.core.validators import MinValueValidator
# from chapter.serializers import ChapterSerializer

class NovelSerializer(serializers.ModelSerializer):
    # chaptersId = 'chapter.ChapterSerializer(many=True,read_only=True)'
    subscribers = serializers.IntegerField(source='subscribers.count',read_only=True)
    class Meta:
        model = models.Novel
        fields = ('ID','title','description','created','chaptersID','userID','subscribers','views','genre')
        # depth = 1

class SpecificNovelAllChaptersSerializer(serializers.ModelSerializer):
    # chaptersID = 'chapter.AllChapterSerializer(many=True,read_only=True)'
    class Meta:
        model = models.Novel
        fields = ('ID','title','description','created','chaptersID','subscribers','views','genre')
        depth = 1