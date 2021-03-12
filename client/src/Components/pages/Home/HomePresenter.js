import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DateModal from "../../../utils/DateModal";
import { COLORS } from "../../GlobalStyles";
import MonthDataList from "../../visuals/MonthDataList";
import PieTotalRatio from "../../visuals/PieTotalRatio";

const HomePresenterBlock = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ChartBlock = styled.div`
  width: 20rem;
  height: 20rem;
  & > span {
    font-weight: 600;
    font-size: 1rem;
    margin: 3rem;
  }
`;

const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
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
      value: savingGoalSum - payingSum,
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
        <ColumnBlock>
          <MonthDataList
            isBudget={true}
            monthlyData={monthlyBudget}
            color={COLORS.apricot}
          />
          <MonthDataList
            isBudget={false}
            monthlyData={monthlySavingGoal}
            color={COLORS.pink}
          />
        </ColumnBlock>
        <ChartBlock>
          <span>예산 및 지출내역</span>
          <PieTotalRatio data={payingData} color="set1" />
          <p>
            {`소비율 ` +
              Math.floor((1 - (budgetSum - payingSum) / budgetSum) * 100, 2) +
              `%`}
          </p>
        </ChartBlock>
        <ChartBlock>
          <span>저축 목표 및 내역</span>
          <PieTotalRatio data={savingData} color="set1" />
          <p>
            {`달성률 ` +
              Math.floor(
                (1 - (savingGoalSum - savingSum) / savingGoalSum) * 100,
                2
              ) +
              `%`}
          </p>
        </ChartBlock>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
