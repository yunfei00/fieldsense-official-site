from django.urls import path

from . import views

urlpatterns = [
    path("demo-request/", views.demo_request, name="lead-demo-request"),
    path("contact/", views.contact, name="lead-contact"),
    path("", views.lead_list, name="lead-list"),
    path("stats/", views.lead_stats, name="lead-stats"),
    path("export/", views.export_leads_csv, name="lead-export"),
    path("<int:lead_id>/", views.lead_detail, name="lead-detail"),
]

