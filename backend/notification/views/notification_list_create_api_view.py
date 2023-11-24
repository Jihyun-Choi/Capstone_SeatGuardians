from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema

from notification.models import Notification
from notification.serializers import NotificationSerializer


class NotificationListCreateAPIView(ListCreateAPIView):
    serializer_class = NotificationSerializer
    queryset = Notification.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        user_id = request.GET.get("user_id")

        if user_id is not None:
            queryset = queryset.filter(user__id=user_id)

        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user=self.current_user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
