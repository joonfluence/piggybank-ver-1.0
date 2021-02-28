import React, { useEffect } from "react";
import styled from "styled-components";
import PieTotalRatio from "./visuals/PieTotalRatio";
import { useDispatch, useSelector } from "react-redux";

const ContentHeaderBlock = styled.div``;
const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #eaf6ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  height: 15vh;
  width: 80%;
`;

const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    margin: 1rem;
  }
`;

const ImageCircle = styled.div`
  position: relative;
`;

const ContentHeader = ({ yearInfo, monthInfo, used, remained, diff }) => {
  const data = [
    {
      id: "총 소비액수",
      value: used, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: remained,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  return (
    <ContentHeaderBlock>
      <ContentTitle>
        <Content>
          <ContentInfo>
            <h2>
              {yearInfo}년 {monthInfo}월 남은 예산
              {diff}원
            </h2>
          </ContentInfo>
          <ImageCircle>
            <PieTotalRatio data={data}></PieTotalRatio>
          </ImageCircle>
        </Content>
      </ContentTitle>
    </ContentHeaderBlock>
  );
};

export default ContentHeader;
