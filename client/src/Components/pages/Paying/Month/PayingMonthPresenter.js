import React, { useEffect } from "react";
import styled from "styled-components";
import MonthDataList from "../../../visuals/MonthDataList";
import ContentHeader from "../../../ContentHeader";
import DateModal from "../../../../utils/DateModal";
import { useDispatch } from "react-redux";
import { monthBudget } from "../../../../actions/budgetActions";
import { monthPaying } from "../../../../actions/payingActions";
import TotalRatioChart from "../../../visuals/TotalRatioChart";

const PayingMonthPresenterBlock = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
`;

const ChartBlock = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

// 기본적으로 Header랑 NavBar는 공통적으로 들어가야 할 요소임. 또한 Container에 들어갈 요소 역시도 기존과 동일하게 작업해줘야 한다.

const PayingMonthPresenter = ({
  yearInfo,
  monthInfo,
  payingSum,
  monthlyBudget,
  pocketMoney,
}) => {
  var data = [
    {
      id: "총 소비/저축액수",
      value: payingSum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산/목표액",
      value: pocketMoney, // 남은 예산
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
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthBudget(body));
      await dispatch(monthPaying(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  return (
    <>
      <PayingMonthPresenterBlock>
        <DateModal />
        <ContentHeader
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          used={payingSum}
          remained={pocketMoney}
        ></ContentHeader>
        <ChartBlock>
          <TotalRatioChart data={data} />
        </ChartBlock>
        <ChartBlock>
          <MonthDataList monthlyData={monthlyBudget} />
        </ChartBlock>
      </PayingMonthPresenterBlock>
    </>
  );
};

export default PayingMonthPresenter;
