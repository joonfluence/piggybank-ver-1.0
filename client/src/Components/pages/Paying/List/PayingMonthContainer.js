import React from "react";
import styled from "styled-components";
import Header from "../../../Header";
import CenterButton from "../../../CenterButton";
import PayingMonthPresenter from "./PayingMonthPresenter";
import Auth from "../../../../hoc/auth";

const PayingMonthContainerBlock = styled.div``;

const PayingMonthContainer = () => {
  return (
    <PayingMonthContainerBlock>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <PayingMonthPresenter />
    </PayingMonthContainerBlock>
  );
};

export default Auth(PayingMonthContainer, true);
