from django.urls import path

# from django.contrib.auth.decorators import login_required
from . import views

app_name = "emailfront"
urlpatterns = [
    path("allmsgs/", views.allmsgs, name="allmsgs"),
    path("vue/", views.vue, name="vue"),
    path("", views.home, name="home")
]
