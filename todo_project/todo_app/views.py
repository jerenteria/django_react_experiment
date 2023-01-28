from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from .models import *
from .serializers import *


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_items(request):
    all_items = Item.objects.all()
    # Tell note serializer to pass in all_items and set many to true b/c we are passing many objects
    serializer = ItemSerializer(all_items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_one_item(request, item_id):
    one_item = Item.objects.get(id=item_id)
    # Tell note serializer to pass in all_items and set many to false b/c we are passing only one object
    serializer = ItemSerializer(one_item, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
