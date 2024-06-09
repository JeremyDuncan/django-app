from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Project
from django.conf import settings


# def home(request):
#     projects = Project.objects.all()
#     return render(request, 'portfolio/home.html', {'projects': projects})

def index(request):
    if settings.DEBUG:
        return render(request, 'dev_index.html')
    return render(request, 'index.html')
