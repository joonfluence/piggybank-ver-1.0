import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Auth from "../../../../hoc/auth";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import SavingGoalsPresenter from "./SavingGoalMPresenter";
import { Helmet } from "react-helmet";

const SavingGoalContainerBlock = styled.div``;

const SavingGoalContainer = () => {
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  const {
    savingGoalSum,
    monthlySavingGoal,
    savingGoalCategorySum,
  } = useSelector(({ savingGoalReducer }) => ({
    savingGoalSum: savingGoalReducer.savingGoalSum,
    monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
    savingGoalCategorySum: savingGoalReducer.categorySum,
  }));

  const pocketMoney = savingGoalSum - savingGoalCategorySum;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="http://localhost:3000/favicon-96x96.png"
        ></link>
        <title>이번달 저축관리 | 돼지저금통</title>
      </Helmet>
      <SavingGoalContainerBlock>
        <Header HeaderInfo="월 저축액"></Header>
        <CenterButton />
        <SavingGoalsPresenter
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          pocketMoney={pocketMoney}
          savingGoalSum={savingGoalSum}
          savingSum={savingGoalCategorySum}
          monthlySavingGoal={monthlySavingGoal}
        />
      </SavingGoalContainerBlock>
    </>
  );
};

export default Auth(SavingGoalContainer, true);
