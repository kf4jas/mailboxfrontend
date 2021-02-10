from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django_mailbox2.models import Mailbox
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.forms.models import model_to_dict
fake_messages = [
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

# Create your views here.
def home(request):
    context = {}
    context["messages"] = fake_messages
    return render(request, "emailfront/index.html", context=context)

def vue(request):
    return render(request, "emailfront/vue_email.html")
    
def allmsgs(request):
    mailbox = get_object_or_404(Mailbox,name="unherd")
    out = []
    for m in mailbox.messages.all().values("subject","from_header","to_header"):
        out.append(m)
    return HttpResponse(json.dumps(out), content_type="application/json")

# ~ def oldhome(request):
    # ~ return render(request, "emailfront/index.html")
