import cv2
import numpy as np


class Yolo3:

    def __init__(self):
        self.config_path = '/content/drive/MyDrive/capstone/yolov3-tiny.cfg'
        self.weights_path = '/content/drive/MyDrive/capstone/yolov3-tiny.weights'
        self.labels_path = '/content/drive/MyDrive/capstone/coco.names'

    # 레이블 및 색상 로드
        with open(self.labels_path, 'r') as f:
            labels = [line.strip() for line in f.readlines()]
        self.colors = np.random.uniform(0, 255, size=(len(labels), 3))

        # YOLO 네트워크 로드
        self.net = cv2.dnn.readNet(self.weights_path, self.config_path)
        self.layer_names = self.net.getLayerNames()
        self.output_layer_indexes = self.net.getUnconnectedOutLayers().flatten() - 1
        self.output_layers = [self.ayer_names[i] for i in self.output_layer_indexes]
