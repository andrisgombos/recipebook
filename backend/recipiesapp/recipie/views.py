from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RecipieSerializer
from .models import Recipie

class RecipieView(viewsets.ModelViewSet):
    serializer_class = RecipieSerializer
    queryset = Recipie.objects.all()