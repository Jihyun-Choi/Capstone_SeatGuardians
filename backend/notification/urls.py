from django.urls import path

from notification.views import NotificationListCreateAPIView

app_name = "notification"

urlpatterns = [
    path("", NotificationListCreateAPIView.as_view()),
]
