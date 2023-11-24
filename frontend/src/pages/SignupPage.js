import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import KakaoBack from "../assets/kakao-background.svg";
import GoogleBack from "../assets/google-background.svg";
import KaKaoImage from "../assets/kakao.svg";
import GoogleImage from "../assets/google.png";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import eyeOn from "../assets/eye-on.svg";
import eyeOff from "../assets/eye-off.svg";
import { isEmailTaken, mockSignUp } from "./SignupMock";
import { useNavigate } from "react-router-dom";

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  // 비밀번호 가시성 토글
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // 이메일 중복 확인 로직
  const checkEmailValidity = () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return false;
    } else if (!isValidEmail(email)) {
      setEmailError("유효하지 않은 이메일 형식입니다.");
      return false;
    } else if (isEmailTaken(email)) {
      setEmailError("이미 사용 중인 이메일입니다.");
      return false;
    }
    setEmailError("");
    return true;
  };

  // 비밀번호 유효성 검사
  const checkPasswordValidity = () => {
    if (password.length < 8) {
      setPasswordError("비밀번호는 최소 8자 이상이어야 합니다.");
      return false;
    } else if (!/\d/.test(password)) {
      setPasswordError("비밀번호에는 최소 한 개의 숫자가 포함되어야 합니다.");
      return false;
    }
    setPasswordError("");
    return true;
  };
  // 비밀번호 일치 검사
  const checkPasswordMatch = () => {
    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setPasswordCheckError("");
    return true;
  };

  // 폼 제출 처리
  const submitForm = async () => {
    if (
      checkEmailValidity() &&
      checkPasswordValidity() &&
      checkPasswordMatch()
    ) {
      const result = mockSignUp(email, password);
      if (result.success) {
        // 로그인 성공 시 원하는 경로로 이동
        navigate("/login");
        // 성공 처리 로직
      } else {
        console.log(result.message); // 실패 메시지 출력
        // 실패 처리 로직
      }
    }
  };

  return (
    <>
      {" "}
      <GlobalStyle />
      <StyledMain>
        <LoginFormSection className="login-form">
          <StyledHeader>
            <a href="/">
              <StyledLogo src={Logo} alt="logo" />
            </a>
            <StyledSignup>
              <span>이미 회원이신가요?</span>
              <div className="signup-link">
                <a href="/login">로그인하기</a>
              </div>
            </StyledSignup>
          </StyledHeader>
          <LoginInput>
            <label className="input-text" htmlFor="username">
              이메일
            </label>
            <StyledInput
              id="username"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={checkEmailValidity} // 포커스가 벗어났을 때 유효성 검사
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
            <label className="input-text" htmlFor="password">
              비밀번호
            </label>
            <PasswordInput>
              <StyledInput
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={password} // 상태와 연결
                onChange={(e) => setPassword(e.target.value)}
                onBlur={checkPasswordValidity} // 포커스가 벗어났을 때 유효성 검사
              />
              <ToggleVisibilityIcon
                src={passwordVisible ? eyeOn : eyeOff}
                onClick={togglePasswordVisibility}
                alt="비밀번호 가시성 토글"
              />
            </PasswordInput>
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <label className="input-text" htmlFor="password">
              비밀번호 확인
            </label>
            <PasswordInput>
              <StyledInput
                id="passwordCheck"
                name="passwordCheck"
                type="password"
                value={passwordCheck} // 상태와 연결
                onChange={(e) => setPasswordCheck(e.target.value)}
                onBlur={checkPasswordMatch} // 포커스가 벗어났을 때 비밀번호 일치 검사
              />
              <ToggleVisibilityIcon
                src={passwordVisible ? eyeOn : eyeOff}
                onClick={togglePasswordVisibility}
                alt="비밀번호 가시성 토글"
              />
            </PasswordInput>
            {passwordCheckError && (
              <ErrorMessage>{passwordCheckError}</ErrorMessage>
            )}
            <StyledButton onClick={submitForm}>회원가입</StyledButton>
          </LoginInput>
          <SocialLogoSection>
            <SocialText>다른 방식으로 가입하기</SocialText>
            <SocialLogo>
              <StyledLink to="https://www.google.com/">
                <CircleImage src={GoogleBack} />
                <GoogleIcon src={GoogleImage} />
              </StyledLink>
              <StyledLink to="https://www.kakaocorp.com/page/">
                <CircleImage src={KakaoBack} />
                <KaKaoIcon src={KaKaoImage} />
              </StyledLink>
            </SocialLogo>
          </SocialLogoSection>
        </LoginFormSection>
      </StyledMain>
    </>
  );
};

export default SignUpPage;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: var(--color-bg); 
    font-family: 'Pretendard', sans-serif;
  }
`;

const StyledMain = styled.main`
  padding-top: 30px;
  background: var(--color-bg);
`;

const LoginFormSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const StyledHeader = styled.header`
  gap: 16px;
`;

const StyledLogo = styled.img`
  width: 387px;
`;

const StyledSignup = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--color-black-20);
  justify-content: center;
`;

const LoginInput = styled.section`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 80%;
`;

const StyledInput = styled.input`
  padding: 18px 15px;
  border: 1px solid var(--color-gray-20);
  background: var(--color-white);
  width: 100%;
  border-radius: 8px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  border: none;
  background: #4b7eff;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-grey-light);
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
`;
const CircleImage = styled.img`
  width: 42px;
  height: 42px;
`;

const GoogleIcon = styled.img`
  flex-shrink: 0;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 22px;
  height: 22px;
`;

const KaKaoIcon = styled.img`
  flex-shrink: 0;
  position: absolute;
  top: 10px;
  left: 8px;
  width: 26px;
  height: 24px;
`;

const StyledLink = styled(Link)`
  position: relative;
  width: 42px;
  height: 42px;
`;

const SocialLogoSection = styled.section`
  justify-content: space-between;
  padding: 12px 24px;
  border: 1px solid var(--color-gray-20);
  background: var(--color-gray-10);
  display: flex;
  align-items: center;
  width: 80%;
  border-radius: 8px;
`;

const SocialText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-gray-100);
`;

const SocialLogo = styled.div`
  gap: 12px;
  display: flex;
`;

const PasswordInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const ToggleVisibilityIcon = styled.img`
  cursor: pointer;
  margin-left: -30px;
`;

const ErrorMessage = styled.div`
  color: red; // 에러 메시지 스타일
  // ... 나머지 스타일 ...
`;
