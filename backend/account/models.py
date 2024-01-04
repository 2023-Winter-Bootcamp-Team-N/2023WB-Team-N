from django.db import models

class Member(models.Model):
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    deleted_at = models.DateField(null=True, blank=True)

class Subscribe(models.Model):
    user_id = models.ForeignKey(Member, on_delete=models.CASCADE)
    subscribe_channel = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)
    deleted_at = models.DateField(auto_now_add=True)


