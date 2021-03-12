import React from "react";
import styled from "styled-components";
import Header from "../../../Header";
import CenterButton from "../../../CenterButton";
import BudgetMonthPresenter from "./BudgetMonthPresenter";
import { useSelector } from "react-redux";
import Auth from "../../../../hoc/auth";
import { Helmet } from "react-helmet";

const BudgetMonthContainerBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const BudgetMonthContainer = () => {
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="http://localhost:3000/favicon-96x96.png"
        ></link>
        <title>이번달 소비관리 | 돼지저금통</title>
      </Helmet>
      <BudgetMonthContainerBlock>
        <Header HeaderInfo="월 예산"></Header>
        <CenterButton />
        <BudgetMonthPresenter
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          pocketMoney={pocketMoney}
          budgetSum={budgetSum}
          payingSum={payingSum}
          monthlyBudget={monthlyBudget}
        />
      </BudgetMonthContainerBlock>
    </>
  );
};

export default Auth(BudgetMonthContainer, true);
