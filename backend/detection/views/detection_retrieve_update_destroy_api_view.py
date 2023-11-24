from detection.models import Detection
from detection.serializers import DetectionSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from rest_framework.response import Response


class DetectionRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = DetectionSerializer
    queryset = Detection.objects.all()

    def get(self, request, *args, **kwargs):
        detection = self.get_object()

        serializer = self.get_serializer(detection)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
