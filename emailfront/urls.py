from django.urls import path

# from django.contrib.auth.decorators import login_required
from . import views

app_name = "emailfront"
urlpatterns = [
    path("", views.home, name="home"),
]
