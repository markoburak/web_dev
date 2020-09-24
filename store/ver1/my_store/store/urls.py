from django.urls import path
from . import views
from django.views.generic import ListView,DeleteView
from store.models import Products


urlpatterns =[
    path('',views.index,name='index'),
    path('store/',views.test,name='test'),
    path('store2/',ListView.as_view(queryset=Products.objects.all(),template_name="store/store2.html"))
]