import React from "react";
import styled from "styled-components";

const ContentHeaderBlock = styled.div`
  background-color: #eaf6ff;
  margin: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;

  .content__info {
    font-weight: 600;
    font-size: 2rem;
    @media (max-width: 790px) {
      font-size: "1rem";
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
      <div style={{ flex: "1" }}>
        <div>
          <span className="content__info">
            {yearInfo}년 {monthInfo}월 {isBudget ? "남은금액" : "남은목표액"}
            {remained < 0 || isNaN(remained) ? 0 : remained}원
          </span>
        </div>
        <div>
          {isBudget && !isNaN(budgetSum) && !isNaN(used) && budgetSum !== 0 ? (
            <div>
              {` (소비율 ` +
                Math.floor((1 - (budgetSum - used) / budgetSum) * 100, 2) +
                `%)`}
            </div>
          ) : (
            <></>
          )}
          {!isBudget &&
          !isNaN(savingGoalSum) &&
          !isNaN(used) &&
          savingGoalSum !== 0 ? (
            <div>
              {` (달성률 ` +
                Math.floor(
                  (1 - (savingGoalSum - used) / savingGoalSum) * 100,
                  2
                ) +
                `%)`}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </ContentHeaderBlock>
  );
};

export default ContentHeader;
