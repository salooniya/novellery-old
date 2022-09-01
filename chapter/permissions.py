from turtle import title
from rest_framework import permissions
from novel.models import Novel 

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        novel_id = obj.novelID.ID
        user_id = Novel.objects.all().filter(ID = novel_id).values('userID')
        return user_id[0]['userID'] == request.user.ID