import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo2.png"; // 로고 이미지 경로
import alarmImage from "../assets/alarm.png"; // 알람 이미지 경로

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 200px;
  height: 50px; // 로고 크기 조정
`;

const AlarmIcon = styled.img`
  height: 30px; // 알람 아이콘 크기 조정
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">
        <Logo src={logoImage} alt="Logo" />
      </Link>
      <Link to="/AlarmPage">
        <AlarmIcon src={alarmImage} alt="Alarm" />
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
