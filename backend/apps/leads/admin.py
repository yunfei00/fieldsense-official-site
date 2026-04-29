from django.contrib import admin

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
    list_filter = ("lead_type", "status", "application_scene")
    search_fields = ("name", "company", "phone", "email", "message")
    list_editable = ("status",)
    readonly_fields = ("created_at", "updated_at")
    ordering = ("-created_at",)
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

