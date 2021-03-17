import React from "react";
import styled from "styled-components";
import Auth from "../../../../hoc/auth";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import SavingMonthPresenter from "./SavingMonthPresenter";

const SavingMonthContainerBlock = styled.div``;

const SavingMonthContainer = () => {
  return (
    <SavingMonthContainerBlock>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <SavingMonthPresenter />
    </SavingMonthContainerBlock>
  );
};

export default Auth(SavingMonthContainer, true);
