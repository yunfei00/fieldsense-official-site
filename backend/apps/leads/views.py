from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Lead
from .serializers import LeadCreateSerializer


def create_lead(request, lead_type: str):
    payload = request.data.copy()
    payload["lead_type"] = lead_type
    serializer = LeadCreateSerializer(data=payload)
    if serializer.is_valid():
        serializer.save()
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

