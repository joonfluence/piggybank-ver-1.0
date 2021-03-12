import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingGoalPresenter from "./SavingGoalPresenter";
import Auth from "../../../hoc/auth";
import { Helmet } from "react-helmet";

const SavingGoalContainerBlock = styled.div``;

const SavingGoalContainer = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>저축목표관리 | 돼지저금통</title>
      </Helmet>
      <SavingGoalContainerBlock>
        <Header HeaderInfo="자산"></Header>
        <SavingGoalPresenter></SavingGoalPresenter>
      </SavingGoalContainerBlock>
    </>
  );
};

export default Auth(SavingGoalContainer, true);
