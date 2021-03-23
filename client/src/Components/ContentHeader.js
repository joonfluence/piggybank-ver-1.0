import React from "react";
import styled from "styled-components";
import DateModal from "../utils/DateModal";
import PieTotalRatio from "./visuals/PieTotalRatio";

const ContentHeaderBlock = styled.div`
  background-color: #eaf6ff;
  margin: 2rem;
  height: 20vh;
  font-size: 1.5rem;
  width: 80%;
  display: flex;
  align-items: center;
`;
const ModalBlock = styled.div``;

const ContentBlock = styled.div`
  flex: 1;
`;

const ContentInfo = styled.div`
  span:nth-child(1) {
    font-weight: 600;
    font-size: 2rem;
  }
`;

// const ImageCircle = styled.div`
//   position: relative;
//   width: 10rem;
//   height: 10rem;
// `;

const ContentHeader = ({
  yearInfo,
  monthInfo,
  used,
  remained,
  isBudget,
  savingGoalSum,
  budgetSum,
  savingSum,
}) => {
  // const data = [
  //   {
  //     id: "총 소비/저축액수",
  //     value: used, // 전체 소비액
  //     color: "hsl(181, 70%, 50%)", // 카테고리 색상
  //   },
  //   {
  //     id: "남은 예산/목표액",
  //     value: remained,
  //     color: "hsl(236, 70%, 50%)",
  //   },
  // ];

  return (
    <ContentHeaderBlock>
      <ContentBlock>
        <ContentInfo>
          <span>
            {yearInfo}년 {monthInfo}월 {isBudget ? "남은금액" : "남은목표액"}{" "}
            {remained < 0 ? 0 : remained}원
          </span>
          {isBudget ? (
            <span>
              {` (소비율 ` +
                Math.floor((1 - (budgetSum - used) / budgetSum) * 100, 2) +
                `%)`}
            </span>
          ) : (
            <span>
              {` (달성률 ` +
                Math.floor(
                  (1 - (savingGoalSum - used) / savingGoalSum) * 100,
                  2,
                  2
                ) +
                `%)`}
            </span>
          )}
        </ContentInfo>
      </ContentBlock>
      <ModalBlock>
        <DateModal />
      </ModalBlock>
      {/* <ImageCircle>
            <PieTotalRatio data={data} color="set1"></PieTotalRatio>
          </ImageCircle> */}
    </ContentHeaderBlock>
  );
};

export default ContentHeader;
