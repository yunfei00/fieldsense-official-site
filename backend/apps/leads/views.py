from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count

from .models import Lead
from .serializers import LeadCreateSerializer
from .services import notify_new_lead


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


@api_view(["POST"])
def demo_request(request):
    return create_lead(request, Lead.LeadType.DEMO_REQUEST)


@api_view(["POST"])
def contact(request):
    return create_lead(request, Lead.LeadType.CONTACT)


@api_view(["GET"])
def lead_stats(request):
    counts = dict(Lead.objects.values("status").annotate(count=Count("id")).values_list("status", "count"))
    return Response(
        {
            "total": Lead.objects.count(),
            "new": counts.get(Lead.Status.NEW, 0),
            "contacted": counts.get(Lead.Status.CONTACTED, 0),
            "qualified": counts.get(Lead.Status.QUALIFIED, 0),
            "invalid": counts.get(Lead.Status.INVALID, 0),
            "closed": counts.get(Lead.Status.CLOSED, 0),
        }
    )

