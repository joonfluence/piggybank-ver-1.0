import React from "react";
import styled from "styled-components";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";

const SavingMonthBlock = styled.div`
  background-color: white;
  height: 80vh;
`;

const SavingMonth = () => {
  return (
    <>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <SavingMonthBlock>
        <ContentHeader></ContentHeader>
        <ContentBody></ContentBody>
      </SavingMonthBlock>
    </>
  );
};

export default SavingMonth;
