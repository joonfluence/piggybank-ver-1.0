import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Auth from "../../../../hoc/auth";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import SavingMonthPresenter from "./SavingMonthPresenter";

const SavingMonthContainerBlock = styled.div``;

const SavingMonthContainer = () => {
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
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

  const pocketMoney = savingGoalSum - savingSum;

  return (
    <SavingMonthContainerBlock>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <SavingMonthPresenter
        yearInfo={yearInfo}
        monthInfo={monthInfo}
        pocketMoney={pocketMoney}
        savingGoalSum={savingGoalSum}
        savingSum={savingSum}
        monthlySavingGoal={monthlySavingGoal}
      />
    </SavingMonthContainerBlock>
  );
};

export default Auth(SavingMonthContainer, true);
