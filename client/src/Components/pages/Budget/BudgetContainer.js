import React from "react";
import Header from "../../Header";
import BudgetPresenter from "./BudgetPresenter";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";
import { useSelector } from "react-redux";

const BudgetContainer = () => {
  const { budgetSum, date, title, price, memo } = useSelector(
    ({ budgetReducer }) => ({
      budgetSum: budgetReducer.budgetSum,
      date: budgetReducer.payload.date,
      title: budgetReducer.payload.title,
      price: budgetReducer.payload.price,
      memo: budgetReducer.payload.memo,
    })
  );

  return (
    <>
      <Header HeaderInfo="예산"></Header>
      <BudgetPresenter date={date} title={title} price={price} memo={memo}>
        <ContentHeader budgetSum={budgetSum} />
        <FormBoard />
        <ContentLists />
      </BudgetPresenter>
    </>
  );
};

// date={date} title={title} price={price} memo={memo}
// date, title, price, memo
// date: budgetReducer.payload.date,
// title: budgetReducer.payload.title,
// price: budgetReducer.payload.price,
// memo: budgetReducer.payload.memo,
export default BudgetContainer;
