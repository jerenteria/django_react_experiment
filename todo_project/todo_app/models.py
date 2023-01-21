from django.db import models

# Create your models here.

class Item(models.Model):
    description = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)