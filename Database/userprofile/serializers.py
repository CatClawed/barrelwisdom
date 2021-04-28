from rest_framework import serializers
from userprofile.models import UserProfile
from django.contrib.auth.models import User
from invite.models import Invite
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password
from django.utils import timezone

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['user', 'bio', 'website', 'avatar']

class EditUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'bio', 'website', 'avatar']

class RegisterSerializer(serializers.ModelSerializer):
    code = serializers.CharField(required=True, write_only=True)
    password2 = serializers.CharField(required=True, write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2', 'code']
        extra_kwargs = {
            'password': {'write_only': True, 'required': True}
        }

    def validate(self, attrs):
        if not attrs['email']:
            raise serializers.ValidationError({"email": "This field may not be blank."})
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        try:
            invite = Invite.objects.get(code=attrs['code'])
            if invite.used == True:
                raise serializers.ValidationError({"code": "Invite is used."})
            if (timezone.make_aware(datetime.now(), timezone.get_default_timezone()) - invite.date).days > 3:
                raise serializers.ValidationError({"code": "Invite expired. Ask for a new one."})
        except Invite.DoesNotExist:
            raise serializers.ValidationError({"code": "Code doesn't exist."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        user.save()

        invite = Invite.objects.get(code=validated_data['code'])
        invite.used = True
        invite.save()

        return user