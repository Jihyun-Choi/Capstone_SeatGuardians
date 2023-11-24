from reservation.models import Reservation
from reservation.serializers import ReservationSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from rest_framework.response import Response


class ReservationRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReservationSerializer
    queryset = Reservation.objects.all()

    def get(self, request, *args, **kwargs):
        reservation = self.get_object()
        user = self.current_user

        serializer = self.get_serializer(reservation)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
