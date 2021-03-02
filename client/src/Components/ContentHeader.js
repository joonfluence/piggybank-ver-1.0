import React from "react";
import styled from "styled-components";
import PieTotalRatio from "./visuals/PieTotalRatio";

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
  & > span {
    margin: 1rem;
  }
`;

const ImageCircle = styled.div`
  position: relative;
  width: 50%;
  height: 200px;
`;

const ContentHeader = ({ yearInfo, monthInfo, used, remained }) => {
  const data = [
    {
      id: "총 소비/저축액수",
      value: used, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산/목표액",
      value: remained,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  return (
    <ContentHeaderBlock>
      <ContentTitle>
        <Content>
          <ContentInfo>
            <h3>
              {yearInfo}년 {monthInfo}월 남은금액 {remained}원
            </h3>
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
