import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import KakaoBack from "../assets/kakao-background.svg";
import GoogleBack from "../assets/google-background.svg";
import KaKaoImage from "../assets/kakao.svg";
import GoogleImage from "../assets/google.png";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import eyeOn from "../assets/eye-on.svg";
import eyeOff from "../assets/eye-off.svg";
import { mockLogin } from "./SignupMock";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    let isValid = true;

    // 이메일 유효성 검사
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // 비밀번호 유효성 검사
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      const result = mockLogin(email, password);
      if (result.success) {
        // 로그인 성공 시 원하는 경로로 이동
        navigate("/");
      } else {
        setEmailError(result.message);
        setPasswordError(result.message);
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
              <span>회원이 아니신가요?</span>
              <div className="signup-link">
                <a href="/signup">회원 가입하기</a>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ToggleVisibilityIcon
                src={passwordVisible ? eyeOn : eyeOff}
                onClick={togglePasswordVisibility}
                alt="비밀번호 가시성 토글"
              />
            </PasswordInput>
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <StyledButton onClick={handleLogin}>로그인</StyledButton>
          </LoginInput>
          <SocialLogoSection>
            <SocialText>소셜 로그인</SocialText>
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

export default LoginForm;

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
