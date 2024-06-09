# portfolio/admin.py
from django.contrib import admin
from .models import Project, Tag

class TagAdmin(admin.ModelAdmin):
    search_fields = ['name']

class ProjectAdmin(admin.ModelAdmin):
    autocomplete_fields = ['tags']
    list_display = ['title', 'description', 'technologies', 'link', 'user']
    search_fields = ['title', 'description', 'technologies', 'link', 'user__username']

admin.site.register(Project, ProjectAdmin)
admin.site.register(Tag, TagAdmin)
