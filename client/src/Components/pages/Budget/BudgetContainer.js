import React from "react";
import Header from "../../Header";
import BudgetPresenter from "./BudgetPresenter";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";

const BudgetContainer = () => {
  // const { date, title, price, priceSum, pricePercentage, categoryPercentage, memo, category } = useSelector(({ budgetReducer }) => ({
  //   date: budgetReducer.payload.date,
  //   title: budgetReducer.payload.title,
  //   price: budgetReducer.payload.price,
  //   priceSum: budgetReducer.payload.priceSum,
  //   pricePercentage: budgetReducer.payload.pricePercentage,
  //   memo: budgetReducer.payload.memo,
  //   category: budgetReducer.payload.category,
  // }));

  return (
    <>
      <Header HeaderInfo="예산"></Header>
      <BudgetPresenter
        date={""}
        title={""}
        price={""}
        priceSum={""}
        pricePercentage={""}
        memo={""}
        category={""}
      >
        <ContentHeader />
        <FormBoard />
        <ContentLists />
      </BudgetPresenter>
    </>
  );
};

export default BudgetContainer;
