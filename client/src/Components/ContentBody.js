import React from "react";
import styled from "styled-components";
import MonthDataList from "./visuals/MonthDataList";
import PieTotalRatio from "./visuals/PieTotalRatio";

const ContentBodyBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  .chart-container {
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
  }

  @media (max-width: 661px) {
    flex-direction: column;
  }
`;

const ContentBody = ({
  used,
  remained,
  monthlyData,
  color,
  isBudget,
  isCategory,
}) => {
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
    <ContentBodyBlock>
      <div>
        <MonthDataList
          monthlyData={monthlyData}
          color={color}
          isBudget={isBudget}
          isCategory={isCategory}
        />
      </div>
      <div className="chart-container">
        <PieTotalRatio data={data} color="set1" />
      </div>
    </ContentBodyBlock>
  );
};

export default ContentBody;
