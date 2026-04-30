import logging
from datetime import datetime

import requests
from django.conf import settings
from django.utils import timezone

logger = logging.getLogger(__name__)


def _safe_value(value):
    return str(value).strip() if value else "-"


def build_lead_notification_text(lead):
    keyword = _safe_value(settings.FEISHU_KEYWORD)
    local_time = timezone.localtime(lead.created_at) if lead.created_at else datetime.now()
    lines = [
        f"【{keyword} 新线索通知】",
        "",
        f"类型：{_safe_value(lead.get_lead_type_display())}",
        f"姓名：{_safe_value(lead.name)}",
        f"公司：{_safe_value(lead.company)}",
        f"部门/职位：{_safe_value(lead.department)}",
        f"电话：{_safe_value(lead.phone)}",
        f"邮箱：{_safe_value(lead.email)}",
        f"关注产品：{_safe_value(lead.product_interest)}",
        f"应用场景：{_safe_value(lead.application_scene)}",
        f"预计采购时间：{_safe_value(lead.purchase_time)}",
        "",
        "需求描述：",
        _safe_value(lead.message),
        "",
        f"来源页面：{_safe_value(lead.source_page)}",
        f"来源地址：{_safe_value(lead.source_url)}",
        f"提交时间：{local_time.strftime('%Y-%m-%d %H:%M:%S')}",
    ]
    return "\n".join(lines)


def send_feishu_lead_notification(lead):
    webhook_url = settings.FEISHU_WEBHOOK_URL
    if not webhook_url:
        logger.warning("Feishu webhook is empty, skip notification.")
        return

    payload = {
        "msg_type": "text",
        "content": {"text": build_lead_notification_text(lead)},
    }
    try:
        response = requests.post(
            webhook_url,
            json=payload,
            timeout=settings.FEISHU_TIMEOUT_SECONDS,
        )
        if response.status_code != 200:
            logger.warning("Feishu notification failed with HTTP status: %s", response.status_code)
            return
        result = response.json()
        if result.get("code", 0) != 0:
            logger.warning("Feishu notification failed with code=%s", result.get("code"))
            return
        logger.info("Feishu notification sent for lead id=%s", lead.id)
    except Exception:
        logger.exception("Feishu notification exception for lead id=%s", lead.id)


def notify_new_lead(lead):
    channels = set(settings.LEAD_NOTIFY_CHANNELS)
    if "console" in channels:
        try:
            logger.info(
                "New lead created: id=%s type=%s name=%s company=%s phone=%s",
                lead.id,
                lead.lead_type,
                lead.name,
                lead.company,
                lead.phone,
            )
        except Exception:
            logger.exception("Console notification exception for lead id=%s", lead.id)

    if "feishu" in channels:
        try:
            send_feishu_lead_notification(lead)
        except Exception:
            logger.exception("Feishu channel wrapper exception for lead id=%s", lead.id)
