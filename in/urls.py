from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='homepage'),
    path('myposts/', views.myposts, name='mypost'),
    path('createpost/', views.createpost, name='createpost'),
    path('myprofile/', views.myprofile, name='myprofile'),
  
]