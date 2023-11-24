from rest_framework import serializers

from detection.models import Detection


class DetectionSerializer(serializers):
    """Serializer definition for Detection Model."""

    class Meta:
        """Meta definition for DetectionSerializer."""

        model = Detection
        fields = [
            "id",
            "reservation",
            "is_active",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "reservation",
            "is_active",
            "created_at",
            "updated_at",
        ]
