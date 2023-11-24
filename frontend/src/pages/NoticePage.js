import React from "react";
import styled from "styled-components";
import noticeImage from "../assets/notice2.png";
import Navigator from "../components/Navigator";

const NoticePageContainer = styled.div`
  padding: 20px;
  background-color: #f0f8ff;
`;

const NoticeCard = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const NoticeTitle = styled.h3`
  color: #333;
  margin-bottom: 5px;
`;

const NoticeContent = styled.p`
  color: #555;
  font-size: 14px;
  margin-bottom: 10px;
`;

const NoticeDate = styled.span`
  color: #777;
  font-size: 12px;
`;

const NavigationMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
`;

const NoticeImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const NoticePage = () => {
  const notices = [
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
    {
      title: "도서관 24시간 개방 안내",
      content:
        "시험 기간을 맞이하여 도서관을 24시간 개방합니다. 학생 여러분의 많은 이용 바랍니다.",
      date: "2023-11-21",
    },
  ];

  return (
    <>
      <Navigator />
      <NoticePageContainer>
        <NavigationMenu>
          <MenuItem href="#">1:1 문의</MenuItem>
          <MenuItem href="#">공지사항</MenuItem>
          <MenuItem href="#">자주 묻는 질문</MenuItem>
        </NavigationMenu>
        {notices.map((notice, index) => (
          <NoticeCard key={index}>
            <NoticeImage src={noticeImage} alt="Notice" />
            <div>
              <NoticeTitle>{notice.title}</NoticeTitle>
              <NoticeContent>{notice.content}</NoticeContent>
              <NoticeDate>{notice.date}</NoticeDate>
            </div>
          </NoticeCard>
        ))}
      </NoticePageContainer>
    </>
  );
};

export default NoticePage;
