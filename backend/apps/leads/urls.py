from django.urls import path

from . import views

urlpatterns = [
    path("demo-request/", views.demo_request, name="lead-demo-request"),
    path("contact/", views.contact, name="lead-contact"),
    path("stats/", views.lead_stats, name="lead-stats"),
]

