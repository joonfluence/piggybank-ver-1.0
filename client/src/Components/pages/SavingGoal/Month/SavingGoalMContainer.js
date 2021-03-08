import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Auth from "../../../../hoc/auth";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import SavingGoalsPresenter from "./SavingGoalMPresenter";

const SavingGoalContainerBlock = styled.div``;

const SavingGoalContainer = () => {
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
    <SavingGoalContainerBlock>
      <Header HeaderInfo="월 저축액"></Header>
      <CenterButton />
      <SavingGoalsPresenter
        yearInfo={yearInfo}
        monthInfo={monthInfo}
        pocketMoney={pocketMoney}
        savingGoalSum={savingGoalSum}
        savingSum={savingSum}
        monthlySavingGoal={monthlySavingGoal}
      />
    </SavingGoalContainerBlock>
  );
};

export default Auth(SavingGoalContainer, true);
