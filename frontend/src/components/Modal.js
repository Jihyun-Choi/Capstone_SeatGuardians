import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/close.svg";

// 모달 배경
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 본체
const ModalContainer = styled.div`
  display: inline-flex;
  padding: 35px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-white, #fff);
  position: relative;
`;

// 모달 헤더
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 닫기 버튼
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

// 메인 버튼
const MainButton = styled.button`
  display: flex;
  width: 230px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #4b7eff;
  color: var(--grey-light, #f5f5f5);
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: point;
`;

// 모달 타이틀
const Title = styled.h1`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Abel;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: point;
`;

// 모달 컴포넌트
const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <Title>자리를 예약하시겠습니까?</Title>
        </ModalHeader>
        <StyledLink href="/reseryes">
          <MainButton>네</MainButton>
        </StyledLink>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
