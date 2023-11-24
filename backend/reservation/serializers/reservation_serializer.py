from rest_framework import serializers

from reservation.models import Reservation
from user.serializers import UserSerializer


class ReservationSerializer(serializers):
    """Serializer definition for Article Model."""

    user = UserSerializer(
        read_only=True,
        required=False,
    )

    class Meta:
        """Meta definition for ArticleSerializer."""

        model = Reservation
        fields = [
            "id",
            "user",
            "is_active",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "user",
            "is_active",
            "created_at",
            "updated_at",
        ]
