from django.db import models

from reservation.models import Reservation
from django.utils.translation import gettext_lazy as _


class Detection(models.Model):
    """Model definition for Detection."""

    reservation = models.ForeignKey(
        Reservation,
        on_delete=models.CASCADE,
        related_name="detection",
        verbose_name="writer",
    )  # reservation 예약
    is_active = models.BooleanField(
        verbose_name=_("Is active"),
        default=True,
    )  # 유저가 활성화되어있는지 여부
    created_at = models.DateTimeField(
        verbose_name=_("created at"),
        auto_now_add=True,
    )  # article 레코드가 생성된 일자
    updated_at = models.DateTimeField(
        verbose_name=_("updated at"),
        auto_now=True,
    )  # article 레코드가 수정된 일자

    class Meta:
        verbose_name = "Detection"
        verbose_name_plural = "Detection"
        db_table = "detection"
