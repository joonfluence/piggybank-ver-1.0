import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DateModal from "../../../utils/DateModal";
// import PropTypes from "prop-types";
import PieTotalRatio from "../../visuals/PieTotalRatio";
import TotalRatioChart from "../../visuals/TotalRatioChart";

const HomePresenterBlock = styled.div`
  position: relative;
  background-color: white;
  height: 100vh;
  display: flex;
`;

const ChartBlock = styled.div`
  position: relative;
`;

const HomePresenter = () => {
  const { budgetSum, monthlyBudget } = useSelector(({ budgetReducer }) => ({
    budgetSum: budgetReducer.budgetSum,
    monthlyBudget: budgetReducer.monthlyBudget,
  }));

  const { payingSum } = useSelector(({ payingReducer }) => ({
    payingSum: payingReducer.payingSum,
  }));

  const { savingGoalSum, monthlySavingGoal } = useSelector(
    ({ savingGoalReducer }) => ({
      savingGoalSum: savingGoalReducer.savingGoalSum,
      monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
    })
  );

  const { savingSum } = useSelector(({ savingReducer }) => ({
    savingSum: savingReducer.savingSum,
  }));

  const payingData = [
    {
      id: "총 소비액수",
      value: payingSum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: budgetSum - payingSum,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  const savingData = [
    {
      id: "총 저축액수",
      value: savingSum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 저축목표액",
      value: savingGoalSum - savingSum,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  return (
    <>
      <HomePresenterBlock>
        <DateModal />
        <>
          <>
            {monthlyBudget ? (
              monthlyBudget.map((budget) => (
                <ChartBlock>
                  <TotalRatioChart title={budget.title} price={budget.price} />
                </ChartBlock>
              ))
            ) : (
              <div> empty </div>
            )}
          </>
          <>
            {monthlySavingGoal ? (
              monthlySavingGoal.map((goal) => (
                <ChartBlock>
                  <TotalRatioChart title={goal.title} price={goal.price} />
                </ChartBlock>
              ))
            ) : (
              <div> empty </div>
            )}
          </>
        </>
        <>
          <ChartBlock>
            <h2>이번달 예산 및 지출내역</h2>
            <PieTotalRatio data={payingData} />
          </ChartBlock>
          <ChartBlock>
            <h2>이번달 저축목표 및 저축내역</h2>
            <PieTotalRatio data={savingData} />
          </ChartBlock>
        </>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
