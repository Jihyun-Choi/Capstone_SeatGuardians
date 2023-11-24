from rest_framework import serializers

from notification.models import Notification


class NotificationSerializer(serializers):
    """Serializer definition for Notification Model."""

    class Meta:
        """Meta definition for NotificationSerializer."""

        model = Notification
        fields = [
            "id",
            "user",
            "reservation",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "user",
            "reservation",
            "created_at",
            "updated_at",
        ]
