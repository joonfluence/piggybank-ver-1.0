import React from "react";
import styled from "styled-components";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import Nav from "../../../Nav";

const BudgetMonthBlock = styled.div`
  background-color: white;
  height: 80vh;
`;

const BudgetMonth = () => {
  return (
    <>
      <Nav></Nav>
      <Header HeaderInfo="월 지출"></Header>
      <CenterButton />
      <BudgetMonthBlock>example</BudgetMonthBlock>
    </>
  );
};

export default BudgetMonth;
