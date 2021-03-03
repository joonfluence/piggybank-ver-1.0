import React from "react";
import styled from "styled-components";
import Header from "../../../Header";
import CenterButton from "../../../CenterButton";
import PayingMonthPresenter from "./PayingMonthPresenter";
import { useSelector } from "react-redux";

const PayingMonthContainerBlock = styled.div``;

const PayingMonthContainer = () => {
  const { yearInfo, monthInfo } = useSelector(({ dateReducer }) => ({
    yearInfo: dateReducer.yearInfo,
    monthInfo: dateReducer.monthInfo,
  }));

  const { budgetSum, monthlyBudget } = useSelector(({ budgetReducer }) => ({
    budgetSum: budgetReducer.budgetSum,
    monthlyBudget: budgetReducer.monthlyBudget,
  }));

  const { payingSum } = useSelector(({ payingReducer }) => ({
    payingSum: payingReducer.payingSum,
  }));

  const pocketMoney = budgetSum - payingSum;

  return (
    <PayingMonthContainerBlock>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <PayingMonthPresenter
        yearInfo={yearInfo}
        monthInfo={monthInfo}
        pocketMoney={pocketMoney}
        budgetSum={budgetSum}
        payingSum={payingSum}
        monthlyBudget={monthlyBudget}
      />
    </PayingMonthContainerBlock>
  );
};

export default PayingMonthContainer;
