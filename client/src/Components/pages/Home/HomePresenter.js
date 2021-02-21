import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import PieTotalRatio from "../../visuals/PieTotalRatio";
import TotalRatioChart from "../../visuals/TotalRatioChart";

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

const HomePresenterBlock = styled.div`
  background-color: white;
  height: 80vh;
  display: flex;
`;

const ChartBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const HomePresenter = () => {
  return (
    <>
      <HomePresenterBlock>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ChartBlock>
            <TotalRatioChart />
          </ChartBlock>
          <ChartBlock>
            <TotalRatioChart />
          </ChartBlock>
          <ChartBlock>
            <TotalRatioChart />
          </ChartBlock>
          <ChartBlock>
            <TotalRatioChart />
          </ChartBlock>
        </div>
        <ChartBlock>
          <PieTotalRatio data={data} />
        </ChartBlock>
        <ChartBlock>
          <PieTotalRatio data={data} />
        </ChartBlock>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
