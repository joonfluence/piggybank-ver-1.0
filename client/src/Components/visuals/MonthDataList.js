import React from "react";
import styled from "styled-components";
import CategoryBlock from "./CategoryBlock";

const MonthDataListBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const TotalRatioChartBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  width: 10rem;
  height: 1rem;
`;

const TotalRatioGauge = styled.div`
  background-color: skyblue;
  width: ${(props) => props.gaudge / 10000 + `%`};
  height: 1rem;
`;

const MonthDataList = ({ monthlyData, color, isBudget, isCategory }) => {
  return (
    <MonthDataListBlock>
      {monthlyData ? (
        monthlyData.map((data) => (
          <TotalRatioChartBlock>
            <CategoryBlock color={color} data={data} isCategory={isCategory} />
          </TotalRatioChartBlock>
        ))
      ) : (
        <div>empty</div>
      )}
      {/* 해당 카테고리의 title을 통해, 해당 데이터가 얼마나 있는지 알아봐야한다.  */}
      <TotalRatioGaugeBlock>
        <TotalRatioGauge />
        <p>원 </p>
        {isBudget ? (
          <p>({`소비율 ` + 1 / 10000 + `%`})</p>
        ) : (
          <p>({`달성률 ` + 1 / 10000 + `%`})</p>
        )}
      </TotalRatioGaugeBlock>
    </MonthDataListBlock>
  );
};

export default MonthDataList;
