from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Lead",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "lead_type",
                    models.CharField(
                        choices=[
                            ("demo_request", "预约演示"),
                            ("contact", "咨询联系"),
                            ("download", "资料下载"),
                        ],
                        max_length=32,
                        verbose_name="线索类型",
                    ),
                ),
                ("name", models.CharField(max_length=64, verbose_name="姓名")),
                ("company", models.CharField(max_length=128, verbose_name="公司名称")),
                ("department", models.CharField(blank=True, max_length=128, verbose_name="部门")),
                ("phone", models.CharField(max_length=32, verbose_name="联系电话")),
                ("email", models.EmailField(blank=True, max_length=254, verbose_name="邮箱")),
                ("product_interest", models.CharField(blank=True, max_length=128, verbose_name="关注产品")),
                ("application_scene", models.CharField(max_length=128, verbose_name="应用场景")),
                ("purchase_time", models.CharField(blank=True, max_length=64, verbose_name="预计采购时间")),
                ("message", models.TextField(blank=True, verbose_name="需求描述")),
                ("source_page", models.CharField(blank=True, max_length=128, verbose_name="来源页面")),
                ("source_url", models.CharField(blank=True, max_length=255, verbose_name="来源 URL")),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("new", "新线索"),
                            ("contacted", "已联系"),
                            ("qualified", "有效线索"),
                            ("invalid", "无效线索"),
                            ("closed", "已关闭"),
                        ],
                        default="new",
                        max_length=32,
                        verbose_name="跟进状态",
                    ),
                ),
                ("remark", models.TextField(blank=True, verbose_name="跟进备注")),
                ("created_at", models.DateTimeField(auto_now_add=True, verbose_name="创建时间")),
                ("updated_at", models.DateTimeField(auto_now=True, verbose_name="更新时间")),
            ],
            options={
                "verbose_name": "线索",
                "verbose_name_plural": "线索",
                "ordering": ["-created_at"],
            },
        ),
    ]

