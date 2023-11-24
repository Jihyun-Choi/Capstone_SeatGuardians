from django.db import models

from reservation.models import Reservation
from user.models import User
from django.utils.translation import gettext_lazy as _


class Notification(models.Model):
    """Model definition for Notification."""

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="reservation",
    )  # reservation 예약자
    reservation = models.ForeignKey(
        Reservation,
        on_delete=models.CASCADE,
        related_name="detection",
        verbose_name="writer",
    )  # reservation 예약
    created_at = models.DateTimeField(
        verbose_name=_("created at"),
        auto_now_add=True,
    )  # Notification 레코드가 생성된 일자
    updated_at = models.DateTimeField(
        verbose_name=_("updated at"),
        auto_now=True,
    )  # Notification 레코드가 수정된 일자

    class Meta:
        verbose_name = "Notification"
        verbose_name_plural = "Notification"
        db_table = "notification"
