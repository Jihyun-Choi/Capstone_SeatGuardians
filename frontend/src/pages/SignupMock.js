const existingUsers = [
  { email: "example@example.com", password: "test1234!" },
  { email: "test@test.com", password: "test123" },
];

export const isEmailTaken = (email) => {
  return existingUsers.some((user) => user.email === email);
};

export const mockSignUp = (email, password) => {
  if (!isEmailTaken(email)) {
    existingUsers.push({ email, password });
    return { success: true, message: "회원가입 성공!" };
  } else {
    return { success: false, message: "이미 존재하는 이메일입니다." };
  }
};

// 로그인을 시뮬레이션하는 Mock 함수
export const mockLogin = (email, password) => {
  const user = existingUsers.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return { success: true, message: "로그인 성공!" };
  } else {
    return {
      success: false,
      message: "로그인 실패: 잘못된 이메일 또는 비밀번호.",
    };
  }
};
