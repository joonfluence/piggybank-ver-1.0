import React from "react";
import styled from "styled-components";
import PieTotalRatio from "./visuals/PieTotalRatio";
import HorizontalStackChart from "./visuals/HorizontalStackChart";

const data = [
  {
    id: "총 소비액수",
    value: 100, // 전체 소비액
    color: "hsl(181, 70%, 50%)", // 카테고리 색상
  },
  {
    id: "남은 예산",
    value: 200,
    color: "hsl(236, 70%, 50%)",
  },
];

const barData = [
  {
    country: "AD",
    "hot dog": 81,
    "hot dogColor": "hsl(311, 70%, 50%)",
    burger: 13,
    burgerColor: "hsl(84, 70%, 50%)",
    sandwich: 161,
    sandwichColor: "hsl(263, 70%, 50%)",
    kebab: 175,
    kebabColor: "hsl(20, 70%, 50%)",
    fries: 191,
    friesColor: "hsl(103, 70%, 50%)",
    donut: 131,
    donutColor: "hsl(215, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 110,
    "hot dogColor": "hsl(291, 70%, 50%)",
    burger: 115,
    burgerColor: "hsl(46, 70%, 50%)",
    sandwich: 141,
    sandwichColor: "hsl(107, 70%, 50%)",
    kebab: 80,
    kebabColor: "hsl(197, 70%, 50%)",
    fries: 68,
    friesColor: "hsl(66, 70%, 50%)",
    donut: 151,
    donutColor: "hsl(236, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 192,
    "hot dogColor": "hsl(58, 70%, 50%)",
    burger: 110,
    burgerColor: "hsl(20, 70%, 50%)",
    sandwich: 199,
    sandwichColor: "hsl(213, 70%, 50%)",
    kebab: 143,
    kebabColor: "hsl(222, 70%, 50%)",
    fries: 35,
    friesColor: "hsl(120, 70%, 50%)",
    donut: 159,
    donutColor: "hsl(266, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 191,
    "hot dogColor": "hsl(141, 70%, 50%)",
    burger: 176,
    burgerColor: "hsl(296, 70%, 50%)",
    sandwich: 170,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 156,
    kebabColor: "hsl(55, 70%, 50%)",
    fries: 142,
    friesColor: "hsl(321, 70%, 50%)",
    donut: 132,
    donutColor: "hsl(235, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 125,
    "hot dogColor": "hsl(336, 70%, 50%)",
    burger: 86,
    burgerColor: "hsl(130, 70%, 50%)",
    sandwich: 27,
    sandwichColor: "hsl(97, 70%, 50%)",
    kebab: 106,
    kebabColor: "hsl(95, 70%, 50%)",
    fries: 18,
    friesColor: "hsl(175, 70%, 50%)",
    donut: 71,
    donutColor: "hsl(57, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 166,
    "hot dogColor": "hsl(211, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(32, 70%, 50%)",
    sandwich: 11,
    sandwichColor: "hsl(194, 70%, 50%)",
    kebab: 50,
    kebabColor: "hsl(162, 70%, 50%)",
    fries: 185,
    friesColor: "hsl(83, 70%, 50%)",
    donut: 47,
    donutColor: "hsl(116, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 192,
    "hot dogColor": "hsl(53, 70%, 50%)",
    burger: 33,
    burgerColor: "hsl(207, 70%, 50%)",
    sandwich: 26,
    sandwichColor: "hsl(35, 70%, 50%)",
    kebab: 22,
    kebabColor: "hsl(48, 70%, 50%)",
    fries: 45,
    friesColor: "hsl(200, 70%, 50%)",
    donut: 25,
    donutColor: "hsl(272, 70%, 50%)",
  },
];

const ContentBodyBlock = styled.div``;

const ChartBlock = styled.div`
  width: 300px;
  height: 300px;
`;

const ContentBody = () => {
  return (
    <ContentBodyBlock>
      <ChartBlock>
        <PieTotalRatio data={data} />
      </ChartBlock>
      <ChartBlock>
        <HorizontalStackChart barData={barData} />
      </ChartBlock>
    </ContentBodyBlock>
  );
};

export default ContentBody;
