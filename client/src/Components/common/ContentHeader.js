import React from "react";
import styled from "styled-components";
import DateModal from "../utils/DateModal";

const ContentHeaderBlock = styled.div`
  background-color: #eaf6ff;
  margin: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const ContentBlock = styled.div`
  flex: 1;
`;

const ContentInfo = styled.div`
  span:nth-child(1) {
    font-weight: 600;
    font-size: 2rem;

    @media (max-width: 790px) {
      font-size: 1rem;
    }
  }
`;

const ContentHeader = ({
  yearInfo,
  monthInfo,
  used,
  remained,
  isBudget,
  savingGoalSum,
  budgetSum,
}) => {
  return (
    <ContentHeaderBlock>
      <ContentBlock>
        <ContentInfo>
          <span>
            {yearInfo}년 {monthInfo}월 {isBudget ? "남은금액" : "남은목표액"}{" "}
            {remained < 0 ? 0 : remained}원
          </span>
          {isBudget ? (
            <div>
              {` (소비율 ` +
                Math.floor((1 - (budgetSum - used) / budgetSum) * 100, 2) +
                `%)`}
            </div>
          ) : (
            <div>
              {` (달성률 ` +
                Math.floor(
                  (1 - (savingGoalSum - used) / savingGoalSum) * 100,
                  2,
                  2
                ) +
                `%)`}
            </div>
          )}
        </ContentInfo>
      </ContentBlock>
      <div>
        <DateModal yearInfo={yearInfo} monthInfo={monthInfo} />
      </div>
    </ContentHeaderBlock>
  );
};

export default ContentHeader;
