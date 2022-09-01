from rest_framework import serializers
from chapter import models
from novel.serializers import NovelSerializer

class SpecificChapterSerializer(serializers.ModelSerializer):
    # novelID = NovelSerializer()
    class Meta:
        model = models.Chapter
        fields = ['ID','title','body','created','novelID']
        # depth=1

class AllChapterSerializer(serializers.ModelSerializer):
    # novelID = NovelSerializer()
    class Meta:
        model = models.Chapter
        fields = ['ID','title','body','created','novelID']
        # depth=1

# class AllChapterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Chapter
#         # fields = ('ID','title','created','novelID')
#         exclude = ('body',)