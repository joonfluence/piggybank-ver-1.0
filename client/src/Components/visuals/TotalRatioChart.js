import React from "react";
import styled from "styled-components";

const TotalRatioChartBlock = styled.div`
  margin: 1.5rem;
`;

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  width: 6rem;
  height: 1rem;
`;

const TotalRatioDescription = styled.div``;

const TotalRatioGauge = styled.div`
  background-color: skyblue;
  width: ${(props) => props.gaudge / 10000 + `%`};
  height: 1rem;
`;

const TotalRatioChart = ({ title, price }) => {
  return (
    <TotalRatioChartBlock>
      <TotalRatioDescription>
        <h4>{title}</h4>
      </TotalRatioDescription>
      <TotalRatioGaugeBlock>
        <TotalRatioGauge gaudge={price}></TotalRatioGauge>
        <span>{price}원</span>
      </TotalRatioGaugeBlock>
    </TotalRatioChartBlock>
  );
};

export default TotalRatioChart;
