import React from "react";
import styled from "styled-components";
import { GrMoney } from "react-icons/gr";

const HorizontalStackChartBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const BudgetInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 10rem;
  height: 10rem;
  background-color: #ffdec0;
  border-radius: 1rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background-color: white;
    width: 3rem;
    height: 3rem;
  }
`;

const HorizontalStackChart = ({ monthlyBudget }) => {
  return (
    <HorizontalStackChartBlock>
      {monthlyBudget ? (
        monthlyBudget.map((budget) => (
          <BudgetInfoBlock>
            <div>
              <GrMoney />
            </div>
            <span>항목 : {budget.title}</span>
            <span>금액 : {budget.budget}</span>
          </BudgetInfoBlock>
        ))
      ) : (
        <div>empty</div>
      )}
    </HorizontalStackChartBlock>
  );
};

export default HorizontalStackChart;
