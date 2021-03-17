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

  & > div:last-child {
    position: absolute;
    top: 10%;
    right: 0%;

    & > button {
      width: 6rem;
      height: 3rem;
      border-radius: 10px;
    }
  }
`;

const ChartBlock = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 3rem;
  & > span {
    font-weight: 600;
    font-size: 1rem;
    margin: 3rem;
  }
`;

const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child() {
    position: absolute;
  }
`;

const HomePresenter = () => {
  const { budgetSum, monthlyBudget, budgetCategorySum } = useSelector(
    ({ budgetReducer }) => ({
      budgetSum: budgetReducer.budgetSum,
      monthlyBudget: budgetReducer.monthlyBudget,
      budgetCategorySum: budgetReducer.categorySum,
    })
  );

  const {
    savingGoalSum,
    monthlySavingGoal,
    savingGoalCategorySum,
  } = useSelector(({ savingGoalReducer }) => ({
    savingGoalSum: savingGoalReducer.savingGoalSum,
    monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
    savingGoalCategorySum: savingGoalReducer.categorySum,
  }));

  const payingData = [
    {
      id: "총 소비액수",
      value: budgetCategorySum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 예산",
      value: savingGoalSum - budgetCategorySum,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  const savingData = [
    {
      id: "총 저축액수",
      value: savingGoalCategorySum, // 전체 소비액
      color: "hsl(181, 70%, 50%)", // 카테고리 색상
    },
    {
      id: "남은 저축목표액",
      value: savingGoalSum - savingGoalCategorySum,
      color: "hsl(236, 70%, 50%)",
    },
  ];

  return (
    <>
      <HomePresenterBlock>
        <ColumnBlock>
          <MonthDataList
            isBudget={true}
            monthlyData={monthlyBudget}
            color={COLORS.apricot}
            isCategory={false}
          />
          <MonthDataList
            isBudget={false}
            monthlyData={monthlySavingGoal}
            color={COLORS.pink}
            isCategory={false}
          />
        </ColumnBlock>
        <ColumnBlock>
          <ChartBlock>
            <span>예산/지출액</span>
            <PieTotalRatio data={payingData} color="set1" />
            <p>
              {`소비율 ` +
                Math.floor(
                  (1 - (budgetSum - budgetCategorySum) / budgetSum) * 100,
                  2
                ) +
                `%`}
            </p>
          </ChartBlock>
          <ChartBlock>
            <span>목표액/저축액</span>
            <PieTotalRatio data={savingData} color="set1" />
            <p>
              {`달성률 ` +
                Math.floor(
                  (1 -
                    (savingGoalSum - savingGoalCategorySum) / savingGoalSum) *
                    100,
                  2
                ) +
                `%`}
            </p>
          </ChartBlock>
        </ColumnBlock>
        <div>
          <DateModal />
        </div>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
