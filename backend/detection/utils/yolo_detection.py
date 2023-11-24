import cv2
import numpy as np


rois = [
    {"x": 65, "y": 190, "width": 110, "height": 130},
    {"x": 250, "y": 130, "width": 115, "height": 140},
    {"x": 395, "y": 80, "width": 95, "height": 110},
    {"x": 510, "y": 85, "width": 70, "height": 85},
	{"x": 615, "y": 90, "width": 50, "height": 61},
]


empty_time = {i: 0 for i in range(len(rois))}

# Set a flag to check if a person is inside an ROI
person_inside = {i: False for i in range(len(rois))}

frame_count = 0
boxes = []
confidences = []
class_ids = []

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    frame_count += 1

    # Reset the detection flags for all ROIs
    detections_in_roi = [False] * len(rois)

    blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    outs = net.forward(output_layers)

    for out in outs:
        for detection in out:
            # ... [객체 검출 관련 코드] ...
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.3:
                if labels[class_id] == 'person':
                    # ... [사람 바운딩 박스 그리기 코드] ...
                    center_x, center_y, w, h = (detection[0:4] * np.array([width, height, width, height])).astype('int')
                    x, y = int(center_x - w / 2), int(center_y - h / 2)
                    boxes.append((x, y, w, h))  # Add the person bounding box to the list
                    confidences.append(float(confidence))
                    class_ids.append(class_id)


    # NMS 알고리즘 적용
    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.3, 0.4)
    for i in indexes.flatten():
        x, y, w, h = boxes[i]
        label = str(labels[class_ids[i]])
        color = (0, 127, 255)
        cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
        cv2.putText(frame, label, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        for i, roi in enumerate(rois):
            if (x < (roi["x"] + roi["width"]) and x + w > roi["x"] and
              y < (roi["y"] + roi["height"]) and y + h > roi["y"]):
                detections_in_roi[i] = True
                empty_time[i] = 0  # Reset the timer if a person is detected

    # Draw rectangles for each ROI
    for i, roi in enumerate(rois):
        if detections_in_roi[i]:
            color = (0, 255, 0)  # Red for ROIs with detections
        else:
            color = (0, 0, 255)  # Green for empty ROIs
            empty_time[i] += 1  # Increase the timer if no person is detected

        cv2.rectangle(frame, (roi["x"], roi["y"]), (roi["x"] + roi["width"], roi["y"] + roi["height"]), color, 2)

        # Show the empty time counter on the video
        cv2.putText(frame, "Empty:"+str(empty_time[i]), (roi["x"], roi["y"] - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
