import React from "react";
import styled from "styled-components";
import PieTotalRatio from "./visuals/PieTotalRatio";
import HorizontalStackChart from "./visuals/HorizontalStackChart";

const ContentBodyBlock = styled.div``;

const ChartBlock = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const ContentBody = ({ pocketMoney, budgetSum, payingSum, budgetInfo }) => {
  const data = [
    {
      id: "총 소비액수",
      value: payingSum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: pocketMoney,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  console.log(budgetInfo);
  budgetInfo.map((budget) => console.log(budget));

  const barData = [
    {
      category: "식비",
      식비: 51000,
      식비Color: "hsl(11, 70%, 50%)",
    },
    {
      category: "의복비",
      의복비: 100000,
      의복비Color: "hsl(205, 70%, 50%)",
    },
  ];

  return (
    <ContentBodyBlock>
      <ChartBlock>
        <PieTotalRatio data={data} />
      </ChartBlock>
      <ChartBlock>
        <HorizontalStackChart barData={barData} budgetInfo={budgetInfo} />
      </ChartBlock>
    </ContentBodyBlock>
  );
};

export default ContentBody;
