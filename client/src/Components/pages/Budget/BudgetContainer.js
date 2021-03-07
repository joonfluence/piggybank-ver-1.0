import React from "react";
import Auth from "../../../hoc/auth";
import Header from "../../Header";
import BudgetPresenter from "./BudgetPresenter";

const BudgetContainer = () => {
  return (
    <>
      <Header HeaderInfo="예산"></Header>
      <BudgetPresenter></BudgetPresenter>
    </>
  );
};

export default Auth(BudgetContainer, true);
