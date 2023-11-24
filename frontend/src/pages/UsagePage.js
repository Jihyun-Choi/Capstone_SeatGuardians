import React from "react";
import styled from "styled-components";
import SeatImage from "../assets/check.png"; // 이미지 경로 확인 필요
import Navigator from "../components/Navigator";

// 스타일 컴포넌트
const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  border-radius: 10px;
  margin-right: 20px;
  width: 60px; // 이미지 크기 조정
  height: 60px; // 이미지 크기 조정
`;

const Info = styled.div`
  flex-grow: 1;
`;

const Container = styled.div`
  background-color: #87ceeb; // 흰 하늘색
`;

// 랜덤 시간 생성 함수
const getRandomTime = () => {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;
};

// 랜덤 날짜 생성 함수
const getRandomDate = () => {
  const day = Math.floor(Math.random() * 28) + 1; // 28일로 제한하여 날짜가 유효하도록 함
  const month = Math.floor(Math.random() * 12) + 1;
  return `${month}월 ${day}일`;
};

// 예약 정보 컴포넌트
const ReservationInfo = ({ seatNumber, reservedAt, checkOutTime }) => (
  <Card>
    <Image src={SeatImage} alt="좌석 이미지" />
    <Info>
      <h3>{seatNumber}</h3>
      <p>
        <strong>예약 시간:</strong> {reservedAt}
      </p>
      <p>
        <strong>퇴실 예정 시간:</strong> {checkOutTime}
      </p>
    </Info>
  </Card>
);

// 메인 컴포넌트
function LibrarySeatReservation() {
  // 예약 정보 목록
  const reservations = Array.from({ length: 7 }, (_, index) => ({
    seatNumber: `${index + 1}번 좌석`,
    reservedAt: `${getRandomDate()} ${getRandomTime()}`,
    checkOutTime: `${getRandomDate()} ${getRandomTime()}`,
    imageSrc: SeatImage,
  }));

  return (
    <Container>
      <Navigator />
      {reservations.map((reservation, index) => (
        <ReservationInfo
          key={index}
          seatNumber={reservation.seatNumber}
          reservedAt={reservation.reservedAt}
          checkOutTime={reservation.checkOutTime}
        />
      ))}
    </Container>
  );
}

export default LibrarySeatReservation;
