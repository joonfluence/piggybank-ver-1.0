import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../Header";
import CenterButton from "../../../CenterButton";
import BudgetMonthPresenter from "./BudgetMonthPresenter";
import { useSelector } from "react-redux";

const BudgetMonthContainerBlock = styled.div``;

const BudgetMonthContainer = () => {
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  const { budgetSum, budgetInfo } = useSelector(({ budgetReducer }) => ({
    budgetSum: budgetReducer.budgetSum,
    budgetInfo: budgetReducer.budgetInfo,
  }));

  const { payingSum } = useSelector(({ payingReducer }) => ({
    payingSum: payingReducer.payingSum,
  }));

  const pocketMoney = budgetSum - payingSum;

  return (
    <BudgetMonthContainerBlock>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <BudgetMonthPresenter
        yearInfo={yearInfo}
        monthInfo={monthInfo}
        pocketMoney={pocketMoney}
        budgetSum={budgetSum}
        payingSum={payingSum}
        budgetInfo={budgetInfo}
      />
    </BudgetMonthContainerBlock>
  );
};

export default BudgetMonthContainer;
