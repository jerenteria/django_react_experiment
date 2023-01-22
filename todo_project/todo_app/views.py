from django.shortcuts import render
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.



def get_items(request):
    all_items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)