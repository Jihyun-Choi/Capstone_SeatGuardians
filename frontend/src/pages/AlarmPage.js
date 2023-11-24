import React from "react";
import styled from "styled-components";
import warningImage from "../assets/warning.png"; // 경고 이미지 경로
import infoImage from "../assets/info.png"; // 정보 이미지 경로
import Navigator from "../components/Navigator"; // 정보 이미지 경로

const NotificationPageContainer = styled.div`
  padding: 20px;
  background-color: #f0f8ff; // 밝은 하늘색 배경
`;

const NotificationCard = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const NotificationImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NotificationContent = styled.div`
  flex-grow: 1;
`;

const NotificationTitle = styled.h3`
  color: #333;
  margin-bottom: 3px;
`;

const NotificationMessage = styled.p`
  color: #555;
  font-size: 14px;
`;

const NotificationPage = () => {
  const notifications = [
    {
      title: "예약 취소 알림",
      message:
        "안내된 시간 내에 좌석을 사용하지 않으셔서, 예약이 자동으로 취소되었습니다.",
      image: infoImage,
    },
    {
      title: "좌석 사용 경고",
      message:
        "예약하신 좌석이 일정 시간 동안 사용되지 않았습니다. 좌석을 계속 사용하시려면, 10분 내에 좌석을 사용해 주세요.",
      image: warningImage,
    },
    {
      title: "좌석 사용 경고",
      message:
        "예약하신 좌석이 일정 시간 동안 사용되지 않았습니다. 좌석을 계속 사용하시려면, 20분 내에 좌석을 사용해 주세요.",
      image: warningImage,
    },
    {
      title: "좌석 사용 경고",
      message:
        "예약하신 좌석이 일정 시간 동안 사용되지 않았습니다. 좌석을 계속 사용하시려면, 30분 내에 좌석을 사용해 주세요.",
      image: warningImage,
    },
    {
      title: "좌석 사용",
      message: "13번 좌석이 예약 되었습니다. ",
      image: infoImage,
    },
    {
      title: "좌석 사용",
      message: "12번 좌석이 예약 되었습니다. ",
      image: infoImage,
    },
    {
      title: "좌석 사용",
      message: "10번 좌석이 예약 되었습니다. ",
      image: infoImage,
    },
    {
      title: "좌석 사용",
      message: "8번 좌석이 예약 되었습니다. ",
      image: infoImage,
    },
  ];

  return (
    <>
      <Navigator />
      <NotificationPageContainer>
        {notifications.map((notification, index) => (
          <NotificationCard key={index}>
            <NotificationImage
              src={notification.image}
              alt="Notification Icon"
            />
            <NotificationContent>
              <NotificationTitle>{notification.title}</NotificationTitle>
              <NotificationMessage>{notification.message}</NotificationMessage>
            </NotificationContent>
          </NotificationCard>
        ))}
      </NotificationPageContainer>
    </>
  );
};

export default NotificationPage;
