import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/close.svg";

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

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

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

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <Title>퇴실하시겠습니까?</Title>
        </ModalHeader>
        <StyledLink href="/">
          <MainButton>네</MainButton>
        </StyledLink>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
