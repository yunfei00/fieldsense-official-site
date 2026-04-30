from rest_framework import serializers

from .models import Lead


class LeadCreateSerializer(serializers.ModelSerializer):
    lead_type = serializers.ChoiceField(choices=Lead.LeadType.choices)
    name = serializers.CharField(required=True, allow_blank=False, max_length=64)
    company = serializers.CharField(required=True, allow_blank=False, max_length=128)
    phone = serializers.CharField(required=True, allow_blank=False, max_length=32)
    application_scene = serializers.CharField(required=True, allow_blank=False, max_length=128)
    email = serializers.EmailField(required=False, allow_blank=True)

    class Meta:
        model = Lead
        fields = (
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
        )

    def validate(self, attrs):
        for field in ("name", "company", "phone", "application_scene"):
            if not str(attrs.get(field, "")).strip():
                raise serializers.ValidationError({field: "该字段为必填项。"})
        return attrs


class LeadAdminSerializer(serializers.ModelSerializer):
    lead_type_display = serializers.CharField(source="get_lead_type_display", read_only=True)
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    class Meta:
        model = Lead
        fields = (
            "id",
            "created_at",
            "lead_type",
            "lead_type_display",
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
            "status_display",
            "remark",
            "updated_at",
        )


class LeadAdminUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ("status", "remark")

