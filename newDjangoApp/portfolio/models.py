# portfolio/models.py
from django.db import models
from django.contrib.auth.models import User

def get_default_user():
    user = User.objects.first()
    if user is None:
        # Create a default user if no user exists
        user = User.objects.create(username='default_user', password='password')
    return user.id
class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to='project_images/')
    link = models.URLField(blank=True, null=True)
    source_code = models.URLField(blank=True, null=True)
    tags = models.ManyToManyField(Tag)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=get_default_user)

    def __str__(self):
        return self.title
