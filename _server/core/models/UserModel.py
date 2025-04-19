from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
    id = models.AutoField(primary_key=True)
    charName = models.CharField(max_length=50)
    username = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    password = models.CharField(max_length=128)
    age = models.PositiveIntegerField(default=0)
    weight = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.user.username