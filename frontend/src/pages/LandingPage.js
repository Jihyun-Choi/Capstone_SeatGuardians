import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EntryIcon from "../assets/enter.png";
import ExitIcon from "../assets/exit.png";
import HistoryIcon from "../assets/list.png";
import NoticeIcon from "../assets/notice.png";
import WeatherIcon from "../assets/weather-icon.png"; // Add your weather icon here
import NavigationBarComponent from "../components/Navigator";
import Main from "../assets/main.png";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  background-color: #e0f7fa;
  padding: 30px;
  box-sizing: border-box;
`;

const TopSection = styled.nav`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WeatherText = styled.span`
  font-weight: bold;
`;

const WeatherImage = styled.img`
  width: 30px;
  height: 30px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: #fff; // Changed to white
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); // Added shadow for depth
  margin: 10px;

  &:hover {
    background-color: #f0f0f0; // Slight change on hover
  }
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
`;

const MainImage = styled.img`
  display: block; // To prevent inline extra space
  max-width: 100%; // To ensure it's not larger than its container
  height: auto; // To maintain the aspect ratio of the image
  margin: 0 auto; // To center it in the container if it's smaller
  margin-bottom: 10px;
`;
const Footer = styled.footer`
  background-color: #333; // 푸터의 배경색
  color: gray; // 텍스트 색상
  padding: 20px;
  text-align: left; // 텍스트 왼쪽 정렬
`;

const ContactInfo = styled.div`
  display: flex; // flexbox 사용
  align-items: center; // 세로 중앙 정렬
  margin-right: 30px; // 오른쪽 여백 설정
`;

const EmailLink = styled.a`
  color: white; // 이메일 링크 색상
  text-decoration: none; // 밑줄 없애기
  margin-right: 10px; // 오른쪽 여백 설정
`;

const Divider = styled.span`
  margin-right: 10px; // 오른쪽 여백 설정
`;

function ReservationPage() {
  const [weather, setWeather] = useState("맑음, 20°C");

  useEffect(() => {
    // Fetch weather data and update state
  }, []);

  return (
    <>
      <NavigationBarComponent />
      <PageContainer>
        <TopSection>
          <WeatherInfo>
            <WeatherImage src={WeatherIcon} alt="Weather" />
            <WeatherText>오늘의 날씨: {weather}</WeatherText>
          </WeatherInfo>
        </TopSection>
        <MainImage src={Main} alt="메인사진" />
        <ButtonContainer>
          <Link to="entry">
            <Button>
              <Icon src={EntryIcon} alt="입실" />
              입실
            </Button>
          </Link>
          <Link to="exit">
            <Button>
              <Icon src={ExitIcon} alt="퇴실" />
              퇴실
            </Button>
          </Link>
          <Link to="usage">
            <Button>
              <Icon src={HistoryIcon} alt="이용내역" />
              이용내역
            </Button>
          </Link>
          <Link to="notice">
            <Button>
              <Icon src={NoticeIcon} alt="공지사항" />
              공지사항
            </Button>
          </Link>
        </ButtonContainer>
      </PageContainer>
      <Footer>
        <ContactInfo>
          <EmailLink href="mailto:034179@naver.com">034179@naver.com</EmailLink>
          <Divider>|</Divider>
          최지현
        </ContactInfo>
        <ContactInfo>
          <EmailLink href="mailto:seul9085@naver.com">
            seul9085@naver.com
          </EmailLink>
          <Divider>|</Divider>이 슬
        </ContactInfo>
      </Footer>
    </>
  );
}

export default ReservationPage;
