from django.shortcuts import render


# Create your views here.
def home(request):
    context = {}
    context["messages"] = [
        {
            "name": "Recpt 1",
            "subject": "This is the dubject of the things",
            "desc": "this is the description",
            "status": "unread",
        },
        {
            "name": "Recpt 2",
            "subject": "This is the dubject of the things",
            "desc": "this is the description",
            "status": "read",
        },
        {
            "name": "Recpt 3",
            "subject": "This is the dubject of the things",
            "desc": "this is the description",
            "status": "selected",
        },
        {
            "name": "Recpt 3",
            "subject": "This is the dubject of the things",
            "desc": "this is the description",
            "status": "unread",
        },
        {
            "name": "Recpt 4",
            "subject": "This is the dubject of the things",
            "desc": "this is the description",
            "status": "read",
        },
    ]
    return render(request, "emailfront/index.html", context=context)


def oldhome(request):
    return render(request, "emailfront/index.html")
