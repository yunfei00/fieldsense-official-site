import logging

from .models import Lead

logger = logging.getLogger(__name__)


def notify_new_lead(lead: Lead) -> None:
    logger.info(
        "New lead created: id=%s type=%s name=%s company=%s phone=%s",
        lead.id,
        lead.lead_type,
        lead.name,
        lead.company,
        lead.phone,
    )
