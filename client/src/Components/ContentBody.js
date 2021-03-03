import React from "react";
import styled from "styled-components";
import TotalRatioChart from "./visuals/TotalRatioChart";
import MonthDataList from "./visuals/MonthDataList";
import NewPieChart from "../utils/NewPieChart";
import PieTotalRatio from "./visuals/PieTotalRatio";

const ContentBodyBlock = styled.div``;

const ChartBlock = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const ContentBody = ({ used, remained, monthlyData }) => {
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
      <ChartBlock>
        <PieTotalRatio data={data} />
      </ChartBlock>
      <ChartBlock>
        <MonthDataList monthlyData={monthlyData} />
      </ChartBlock>
    </ContentBodyBlock>
  );
};

export default ContentBody;
