from django.shortcuts import render
from django.conf import settings
from rest_framework import viewsets
from .models import Project, Tag
from .serializers import ProjectSerializer, TagSerializer
from rest_framework.permissions import IsAuthenticated

# Function to render the React frontend
def index(request):
    if settings.DEBUG:
        return render(request, 'dev_index.html')
    return render(request, 'index.html')

# API viewsets
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticated]
