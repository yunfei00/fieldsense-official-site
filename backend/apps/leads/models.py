from django.db import models


class Lead(models.Model):
    class LeadType(models.TextChoices):
        DEMO_REQUEST = "demo_request", "预约演示"
        CONTACT = "contact", "咨询联系"
        DOWNLOAD = "download", "资料下载"

    class Status(models.TextChoices):
        NEW = "new", "新线索"
        CONTACTED = "contacted", "已联系"
        QUALIFIED = "qualified", "有效线索"
        INVALID = "invalid", "无效线索"
        CLOSED = "closed", "已关闭"

    lead_type = models.CharField("线索类型", max_length=32, choices=LeadType.choices)
    name = models.CharField("姓名", max_length=64)
    company = models.CharField("公司名称", max_length=128)
    department = models.CharField("部门", max_length=128, blank=True)
    phone = models.CharField("联系电话", max_length=32)
    email = models.EmailField("邮箱", blank=True)
    product_interest = models.CharField("关注产品", max_length=128, blank=True)
    application_scene = models.CharField("应用场景", max_length=128)
    purchase_time = models.CharField("预计采购时间", max_length=64, blank=True)
    message = models.TextField("需求描述", blank=True)
    source_page = models.CharField("来源页面", max_length=128, blank=True)
    source_url = models.CharField("来源 URL", max_length=255, blank=True)
    status = models.CharField("跟进状态", max_length=32, choices=Status.choices, default=Status.NEW)
    remark = models.TextField("跟进备注", blank=True)
    created_at = models.DateTimeField("创建时间", auto_now_add=True)
    updated_at = models.DateTimeField("更新时间", auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "线索"
        verbose_name_plural = "线索"

    def __str__(self) -> str:
        return f"{self.name} - {self.company}"

