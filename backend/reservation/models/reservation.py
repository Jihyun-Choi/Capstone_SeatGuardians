from django.db import models
from user.models import User
from django.utils.translation import gettext_lazy as _


class Reservation(models.Model):
    """Model definition for Reservation."""

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="reservation",
    )  # reservation 예약자
    is_active = models.BooleanField(
        verbose_name=_("Is active"),
        default=True,
    )  # 유저가 활성화되어있는지 여부
    created_at = models.DateTimeField(
        verbose_name=_("created at"),
        auto_now_add=True,
    )  # reservation 레코드가 생성된 일자
    updated_at = models.DateTimeField(
        verbose_name=_("updated at"),
        auto_now=True,
    )  # reservation 레코드가 수정된 일자

    class Meta:
        verbose_name = "Reservation"
        verbose_name_plural = "Reservation"
        db_table = "reservation"
