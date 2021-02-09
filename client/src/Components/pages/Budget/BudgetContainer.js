import React from "react";
import Header from "../../Header";
import BudgetPresenter from "./BudgetPresenter";

const BudgetContainer = () => {
  return (
    <>
      <Header HeaderInfo="예산"></Header>
      <BudgetPresenter />
    </>
  );
};

export default BudgetContainer;
