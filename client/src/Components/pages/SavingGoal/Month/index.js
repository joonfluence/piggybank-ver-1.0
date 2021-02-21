import React from "react";
import styled from "styled-components";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import Nav from "../../../Nav";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";

const SavingGoalMonthBlock = styled.div`
  background-color: white;
  height: 80vh;
`;

const SavingGoalMonth = () => {
  return (
    <>
      <Nav></Nav>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <SavingGoalMonthBlock>
        <ContentHeader></ContentHeader>
        <ContentBody></ContentBody>
      </SavingGoalMonthBlock>
    </>
  );
};

export default SavingGoalMonth;