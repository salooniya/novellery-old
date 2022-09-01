from rest_framework import serializers
# from novellary import settings
from userapp import models
# from allauth.account.adapter import get_adapter
# from allauth.account.utils import setup_user_email

# class RegisterSerializer(serializers.Serializer):
#     email = serializers.EmailField(required = settings.ACCOUNT_EMAIL_REQUIRED)
#     password1 = serializers.CharField(required = True , write_only=True)
#     password2 = serializers.CharField(required = True , write_only=True)

#     def validate_password1(self,password):
#         return get_adapter().clean_password(password)

#     def validate(self,data):
#         if(data['password1'] != data['password2']):
#             raise serializers.ValidationError("The two passwords don't match")
#         return data

#     def get_cleaned_data(self):
#         return {
#             'username':self.validated_data.get('username',''),
#             'email':self.validated_data.get('email',''),
#             'password1':self.validated_data.get('password1',''),
#         }

#     def save(self,request):
#         adapter = get_adapter()
#         user = adapter.new_user(request)
#         self.cleaned_data = self.get_cleaned_data()
#         adapter.save_user(request,user,self)
#         self.custom_signup(request,user)
#         setup_user_email(request,user,[])

#         user.save()
#         return user

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('ID','username','email','created','novelsID','subscribeNovelsID')