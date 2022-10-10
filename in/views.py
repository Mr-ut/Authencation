from django.shortcuts import render

from django.shortcuts import render, redirect, reverse
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
# Create your views here.
def home(request):

    return render(request, 'in/index.html')

@login_required
def myposts(request):
    return render(request, 'in/page2.html')

@login_required
def createpost(request):
    return render(request,'in/location.html')

@login_required
def myprofile(request):
    return render(request,'in/page3.html')    


    