import React from "react";
import styled from "styled-components";

const TotalRatioChartBlock = styled.div``;

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  margin: 1rem;
`;

const TotalRatioDescription = styled.div``;

const TotalRatioGauge = styled.div`
  position: absolute;
  background-color: skyblue;
  width: 100%;
  height: 5px;
`;

const TotalRatioChart = () => {
  return (
    <TotalRatioChartBlock>
      <TotalRatioDescription>총OOO액</TotalRatioDescription>
      <TotalRatioGaugeBlock>
        <TotalRatioGauge gaudge></TotalRatioGauge>
      </TotalRatioGaugeBlock>
    </TotalRatioChartBlock>
  );
};

export default TotalRatioChart;
