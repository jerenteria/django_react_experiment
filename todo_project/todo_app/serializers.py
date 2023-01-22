from rest_framework import serializers
from .models import *

# Serializers are used to render Python data types as json or xml content types

class ItemSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'