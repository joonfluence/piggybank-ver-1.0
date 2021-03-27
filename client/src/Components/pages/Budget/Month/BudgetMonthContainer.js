import React from "react";
import styled from "styled-components";
import Header from "../../../Header";
import CenterButton from "../../../CenterButton";
import BudgetMonthPresenter from "./BudgetMonthPresenter";
import { useSelector } from "react-redux";
import Auth from "../../../../hoc/auth";
import { Helmet } from "react-helmet";
import Footer from "../../../Footer";

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

  const { budgetSum, monthlyBudget, budgetCategorySum } = useSelector(
    ({ budgetReducer }) => ({
      budgetSum: budgetReducer.budgetSum,
      monthlyBudget: budgetReducer.monthlyBudget,
      budgetCategorySum: budgetReducer.categorySum,
    })
  );

  const pocketMoney = budgetSum - budgetCategorySum;
  console.log(typeof monthlyBudget);

  return (
    <>
      <Helmet>
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
          payingSum={budgetCategorySum}
          monthlyBudget={monthlyBudget}
        />
      </BudgetMonthContainerBlock>
      <Footer />
    </>
  );
};

export default Auth(BudgetMonthContainer, true);
