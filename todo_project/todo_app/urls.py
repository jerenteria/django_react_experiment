from django.urls import path
from . import views

urlpatterns=[
    path('', views.get_items),
    path('items/<str:item_id>', views.get_one_item),
]