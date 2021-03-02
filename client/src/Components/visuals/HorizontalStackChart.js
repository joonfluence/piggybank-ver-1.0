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

const HorizontalStackChart = ({ monthlyData }) => {
  return (
    <HorizontalStackChartBlock>
      {monthlyData ? (
        monthlyData.map((data) => (
          <BudgetInfoBlock>
            <div>
              <GrMoney />
            </div>
            <span>항목 : {data.title}</span>
            <span>금액 : {data.price}</span>
          </BudgetInfoBlock>
        ))
      ) : (
        <div>empty</div>
      )}
    </HorizontalStackChartBlock>
  );
};

export default HorizontalStackChart;
