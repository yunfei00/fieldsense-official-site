import csv

from django.contrib import admin
from django.http import HttpResponse

from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = (
        "created_at",
        "lead_type",
        "name",
        "company",
        "phone",
        "email",
        "product_interest",
        "application_scene",
        "purchase_time",
        "status",
    )
    list_filter = ("lead_type", "status", "application_scene", "purchase_time")
    search_fields = ("name", "company", "phone", "email", "message")
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")
    ordering = ("-created_at",)
    actions = (
        "mark_contacted",
        "mark_qualified",
        "mark_invalid",
        "mark_closed",
        "export_as_csv",
    )
    fieldsets = (
        (
            "线索信息",
            {
                "fields": (
                    "lead_type",
                    "status",
                    "name",
                    "company",
                    "department",
                    "phone",
                    "email",
                    "product_interest",
                    "application_scene",
                    "purchase_time",
                    "message",
                )
            },
        ),
        ("来源", {"fields": ("source_page", "source_url")}),
        ("跟进", {"fields": ("remark",)}),
        ("时间", {"fields": ("created_at", "updated_at")}),
    )

    @admin.action(description="标记为已联系")
    def mark_contacted(self, request, queryset):
        queryset.update(status=Lead.Status.CONTACTED)

    @admin.action(description="标记为有效线索")
    def mark_qualified(self, request, queryset):
        queryset.update(status=Lead.Status.QUALIFIED)

    @admin.action(description="标记为无效线索")
    def mark_invalid(self, request, queryset):
        queryset.update(status=Lead.Status.INVALID)

    @admin.action(description="标记为已关闭")
    def mark_closed(self, request, queryset):
        queryset.update(status=Lead.Status.CLOSED)

    @admin.action(description="导出 CSV")
    def export_as_csv(self, request, queryset):
        response = HttpResponse(content_type="text/csv; charset=utf-8-sig")
        response["Content-Disposition"] = 'attachment; filename="leads.csv"'
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
        for lead in queryset.order_by("-created_at"):
            writer.writerow(
                [
                    lead.created_at.strftime("%Y-%m-%d %H:%M:%S"),
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

