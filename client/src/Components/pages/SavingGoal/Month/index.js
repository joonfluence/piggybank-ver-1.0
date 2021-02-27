import React from "react";
import styled from "styled-components";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";

const SavingGoalMonthBlock = styled.div`
  background-color: white;
`;

const SavingGoalMonth = () => {
  return (
    <>
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
