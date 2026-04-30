import csv
from datetime import timedelta

from django.conf import settings
from django.db.models import Count, Q
from django.http import HttpResponse
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from apps.notifications.services import notify_new_lead
from .models import Lead
from .serializers import LeadAdminSerializer, LeadAdminUpdateSerializer, LeadCreateSerializer


def create_lead(request, lead_type: str):
    payload = request.data.copy()
    payload["lead_type"] = lead_type
    serializer = LeadCreateSerializer(data=payload)
    if serializer.is_valid():
        lead = serializer.save()
        notify_new_lead(lead)
        return Response(
            {"success": True, "message": "提交成功，我们会尽快与您联系。"},
            status=status.HTTP_201_CREATED,
        )
    return Response(
        {"success": False, "message": "请检查必填字段。", "errors": serializer.errors},
        status=status.HTTP_400_BAD_REQUEST,
    )


def require_lead_admin_token(request):
    expected = settings.LEADS_DASHBOARD_PASSWORD
    token = request.headers.get("X-Lead-Admin-Token", "")
    if not expected or token != expected:
        return Response({"detail": "Invalid lead admin token"}, status=status.HTTP_403_FORBIDDEN)
    return None


def apply_lead_filters(request, queryset):
    keyword = request.GET.get("keyword", "").strip()
    lead_status = request.GET.get("status", "").strip()
    lead_type = request.GET.get("lead_type", "").strip()
    application_scene = request.GET.get("application_scene", "").strip()
    date_range = request.GET.get("date_range", "").strip()

    if keyword:
        queryset = queryset.filter(
            Q(name__icontains=keyword)
            | Q(company__icontains=keyword)
            | Q(phone__icontains=keyword)
            | Q(email__icontains=keyword)
            | Q(message__icontains=keyword)
        )
    if lead_status:
        queryset = queryset.filter(status=lead_status)
    if lead_type:
        queryset = queryset.filter(lead_type=lead_type)
    if application_scene:
        queryset = queryset.filter(application_scene=application_scene)
    if date_range in {"today", "7d", "30d"}:
        now = timezone.now()
        if date_range == "today":
            start = timezone.localtime(now).replace(hour=0, minute=0, second=0, microsecond=0)
            queryset = queryset.filter(created_at__gte=start)
        elif date_range == "7d":
            queryset = queryset.filter(created_at__gte=now - timedelta(days=7))
        elif date_range == "30d":
            queryset = queryset.filter(created_at__gte=now - timedelta(days=30))
    return queryset


def parse_positive_int(value, default):
    try:
        return max(int(value), 1)
    except (TypeError, ValueError):
        return default


@api_view(["POST"])
def demo_request(request):
    return create_lead(request, Lead.LeadType.DEMO_REQUEST)


@api_view(["POST"])
def contact(request):
    return create_lead(request, Lead.LeadType.CONTACT)


@api_view(["GET"])
def lead_stats(request):
    denied = require_lead_admin_token(request)
    if denied:
        return denied

    queryset = apply_lead_filters(request, Lead.objects.all())
    counts = dict(queryset.values("status").annotate(count=Count("id")).values_list("status", "count"))
    today_start = timezone.localtime(timezone.now()).replace(hour=0, minute=0, second=0, microsecond=0)
    return Response(
        {
            "total": queryset.count(),
            "today": queryset.filter(created_at__gte=today_start).count(),
            "new": counts.get(Lead.Status.NEW, 0),
            "contacted": counts.get(Lead.Status.CONTACTED, 0),
            "qualified": counts.get(Lead.Status.QUALIFIED, 0),
            "invalid": counts.get(Lead.Status.INVALID, 0),
            "closed": counts.get(Lead.Status.CLOSED, 0),
        }
    )


@api_view(["GET"])
def lead_list(request):
    denied = require_lead_admin_token(request)
    if denied:
        return denied

    queryset = apply_lead_filters(request, Lead.objects.all()).order_by("-created_at")
    page = parse_positive_int(request.GET.get("page", 1), 1)
    page_size = parse_positive_int(request.GET.get("page_size", 20), 20)
    start = (page - 1) * page_size
    end = start + page_size
    serializer = LeadAdminSerializer(queryset[start:end], many=True)
    return Response(
        {
            "count": queryset.count(),
            "page": page,
            "page_size": page_size,
            "results": serializer.data,
        }
    )


@api_view(["GET", "PATCH"])
def lead_detail(request, lead_id: int):
    denied = require_lead_admin_token(request)
    if denied:
        return denied

    lead = Lead.objects.filter(id=lead_id).first()
    if not lead:
        return Response({"detail": "Lead not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        return Response(LeadAdminSerializer(lead).data)

    serializer = LeadAdminUpdateSerializer(instance=lead, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(LeadAdminSerializer(lead).data)
    return Response({"detail": "Invalid payload", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def export_leads_csv(request):
    denied = require_lead_admin_token(request)
    if denied:
        return denied

    queryset = apply_lead_filters(request, Lead.objects.all()).order_by("-created_at")
    response = HttpResponse(content_type="text/csv; charset=utf-8-sig")
    response["Content-Disposition"] = 'attachment; filename="fieldsense-leads.csv"'
    response.write("\ufeff")
    writer = csv.writer(response)
    writer.writerow(
        [
            "created_at",
            "lead_type",
            "name",
            "company",
            "department",
            "phone",
            "email",
            "product_interest",
            "application_scene",
            "purchase_time",
            "message",
            "source_page",
            "source_url",
            "status",
            "remark",
        ]
    )
    for lead in queryset:
        writer.writerow(
            [
                timezone.localtime(lead.created_at).strftime("%Y-%m-%d %H:%M:%S"),
                lead.lead_type,
                lead.name,
                lead.company,
                lead.department,
                lead.phone,
                lead.email,
                lead.product_interest,
                lead.application_scene,
                lead.purchase_time,
                lead.message,
                lead.source_page,
                lead.source_url,
                lead.status,
                lead.remark,
            ]
        )
    return response

