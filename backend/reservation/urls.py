from django.urls import path

from reservation.views import ReservationListCreateAPIView, ReservationRetrieveUpdateDestroyAPIView

app_name = "reservation"

urlpatterns = [
    path("", ReservationListCreateAPIView.as_view()),
    path("<int:reservation_id>/", ReservationRetrieveUpdateDestroyAPIView.as_view()),
]
