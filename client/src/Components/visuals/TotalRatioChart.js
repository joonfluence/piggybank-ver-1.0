import React from "react";
import styled from "styled-components";

const TotalRatioChartBlock = styled.div``;
const TotalRatioGauge = styled.div`
  background-color: skyblue;
  /* 100% 넘으면, 100%로 설정해 줄 것 */
  width: ${(props) => (props.gaudge > 100 ? 100 + `%` : props.gaudge + `%`)};
  height: 1rem;
`;
const TotalRatioChart = ({ categorySum, isBudget, data }) => {
  let gaudge = Math.floor((categorySum * 100) / data.price, 2);

  return (
    <TotalRatioChartBlock>
      <TotalRatioGauge gaudge={gaudge} />
      <span>총소비액 : {categorySum}원</span>
      {isBudget ? (
        <p>({`소비율 ` + gaudge + `%`})</p>
      ) : (
        <p>({`달성률 ` + gaudge + `%`})</p>
      )}
    </TotalRatioChartBlock>
  );
};

export default TotalRatioChart;
