import React from "react";
import Auth from "../../../hoc/auth";
import Header from "../../Header";
import BudgetPresenter from "./BudgetPresenter";
import { Helmet } from "react-helmet";

const BudgetContainer = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>예산관리 | 돼지저금통</title>
      </Helmet>
      <Header HeaderInfo="예산"></Header>
      <BudgetPresenter></BudgetPresenter>
    </>
  );
};

export default Auth(BudgetContainer, true);
