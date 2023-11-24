import React from "react";
import styled from "styled-components";
import HomeIcon from "../assets/home2.png"; // 홈 아이콘 경로를 확인하세요
import PersonImage from "../assets/yes.png"; // 사람 이미지 경로를 확인하세요
import Navigator from "../components/Navigator"; // 정보 이미지 경로

const PageContainer = styled.div`
  background-color: #e0f7fa;
  min-height: 92vh;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 370px; // 적절한 크기로 조정하세요
  margin: 20px 0;
`;

const HomeButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 20px 0;
`;

const HomeIconStyled = styled.img`
  width: 24px; // 아이콘 크기 조정
  margin-right: 10px;
`;

const ButtonText = styled.span`
  color: #333;
`;

// 홈으로 이동하는 함수
const navigateHome = () => {
  // 홈 페이지 URL로 변경하세요
  window.location.href = "/";
};

function ConfirmationPage() {
  return (
    <>
      <Navigator />
      <PageContainer>
        <Image src={PersonImage} alt="Happy person" />
        <HomeButton onClick={navigateHome}>
          <HomeIconStyled src={HomeIcon} alt="Home" />
          <ButtonText>홈으로 가기</ButtonText>
        </HomeButton>
      </PageContainer>
    </>
  );
}

export default ConfirmationPage;
