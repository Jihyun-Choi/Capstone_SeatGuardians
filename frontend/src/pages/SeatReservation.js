import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NavigationBarComponent from "../components/Navigator";
import seatImage from "../assets/seat.png";
import Modal from "../components/Modal";
import seatAvailableImage from "../assets/seatAvailable.png"; // 예약 가능 좌석 이미지
import seatReservedImage from "../assets/seatReserved.png"; // 예약된 좌석 이미지

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
`;

const PageContainer = styled.div`
  display: flex; // Flex 컨테이너로 만듭니다.
  flex-direction: column; // 자식 요소들을 세로로 정렬합니다.
  height: 100vh;
  background-color: #f0f8ff;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4개의 칼럼으로 구성된 그리드
  column-gap: 10px; // 칼럼 사이의 간격
  row-gap: 10px; // 행 사이의 간격
  width: max-content; // 그리드의 너비를 내용물에 맞춥니다.
  margin: 20px auto; // 상단 마진과 자동 좌우 마진으로 가운데 정렬합니다.
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between; // 좌우 아이템을 양 끝으로 배치
  align-items: center; // 아이템들을 세로 중앙에 위치
  background: #9c8bff; // 배경색 설정
  padding: 0 1rem; // 좌우 패딩 설정
  height: 60px; // 네브바 높이 설정
`;

const StyledSeat = styled.img`
  margin-top: -4px;
`;

const TextSeat = styled.p`
  color: #efefef;
  font-family: Abel;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px; // 네비게이션 바 바로 아래에 위치할 마진
  margin-left: 20px;
`;

const Indicator = styled.div`
  width: 24px; // 동그라미 크기
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 8px; // 동그라미와 텍스트 사이 간격
`;

const IndicatorText = styled.span`
  color: #000;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const GridItem = styled.div`
  width: 80px; // 좌석 크기 조정
  height: 80px;
  background-image: url(${(props) =>
    props.available ? seatAvailableImage : seatReservedImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #000000;
  margin: 10px; // 여유 공간 추가
  cursor: ${(props) => (props.available ? "pointer" : "not-allowed")};
  transition: transform 0.3s ease; // 애니메이션 효과 추가

  &:hover {
    transform: ${(props) =>
      props.available ? "scale(1.1)" : "none"}; // 호버 효과
  }
`;

// 숫자를 위한 별도의 스타일 컴포넌트를 생성합니다.
const Number = styled.span`
  color: #000;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

// 인디케이터와 텍스트를 함께 나타내는 컴포넌트를 정의합니다.
const SeatIndicators = () => {
  return (
    <IndicatorContainer>
      <Indicator color="#FECCBE" />
      <IndicatorText>선택 가능</IndicatorText>
      <Indicator color="#EAAA2A" />
      <IndicatorText>선택 불가</IndicatorText>
    </IndicatorContainer>
  );
};

const NavBar = () => {
  return (
    <NavBarContainer>
      <StyledSeat src={seatImage} alt="Seat" />
      <TextSeat>좌석을 배정해주세요!</TextSeat>
    </NavBarContainer>
  );
};

// React component for the landing page
const LandingPage = () => {
  const seats = [
    { number: 1, available: false },
    { number: 2, available: true },
    { number: 3, available: false },
    { number: 4, available: true },
    { number: 5, available: false },
    { number: 6, available: true },
    { number: 7, available: false },
    { number: 8, available: false },
    { number: 9, available: true },
    { number: 10, available: true },
    { number: 11, available: false },
    { number: 12, available: true },
    { number: 13, available: true },
    { number: 14, available: true },
    { number: 15, available: true },
    { number: 16, available: true },
  ];

  const [modalVisible, setModalVisible] = useState(false); // 모달 가시성 상태

  // 모달을 여는 함수
  const openModal = () => {
    setModalVisible(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <GlobalStyle />
      <NavigationBarComponent />
      <NavBar />
      <PageContainer>
        <SeatIndicators />
        <GridContainer>
          {seats.map((seat) => (
            <GridItem
              key={seat.number}
              available={seat.available}
              onClick={() => seat.available && openModal()}
              number={seat.number}
            >
              <Number>{seat.number}</Number>
            </GridItem>
          ))}
        </GridContainer>
      </PageContainer>
      {modalVisible && <Modal onClose={closeModal} />}
    </>
  );
};

export default LandingPage;
