from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema

from reservation.models import Reservation
from reservation.serializers import ReservationSerializer


class ReservationListCreateAPIView(ListCreateAPIView):
    serializer_class = ReservationSerializer
    queryset = Reservation.objects.all()

    @swagger_auto_schema(
        operation_description="""
            GET: /api/reservation/
            reservation 목록

            ### params 
            - user_id 
        """
    )
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
        """POST: /api/reservation/
        reservation 생성
        """
        return self.create(request, *args, **kwargs)
