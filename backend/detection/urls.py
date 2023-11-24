from django.urls import path

from reservation.views import ReservationRetrieveUpdateDestroyAPIView

app_name = "detection"

urlpatterns = [
    path("<int:reservation_id>/", ReservationRetrieveUpdateDestroyAPIView.as_view()),
]
