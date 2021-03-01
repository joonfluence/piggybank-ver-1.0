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

const ContentBody = ({ payingSum, pocketMoney, monthlyBudget }) => {
  const data = [
    {
      id: "총 소비액수",
      value: payingSum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: pocketMoney, // 남은 예산
      color: "hsl(236, 70%, 50%)",
    },
  ];

  return (
    <ContentBodyBlock>
      <ChartBlock>
        <PieTotalRatio data={data} />
      </ChartBlock>
      <ChartBlock>
        <HorizontalStackChart monthlyBudget={monthlyBudget} />
      </ChartBlock>
    </ContentBodyBlock>
  );
};

export default ContentBody;
