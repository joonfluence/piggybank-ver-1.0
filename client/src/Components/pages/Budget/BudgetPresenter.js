import React from "react";
import styled from "styled-components";
import CenterButton from "../../CenterButton.js";
import FormBoard from "../../FormBoard";
import { useSelector } from "react-redux";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;

const BudgetPresenter = () => {
  const { monthInfo } = useSelector(({ dateReducer }) => ({
    monthInfo: dateReducer.monthInfo,
  }));
  return (
    <BudgetPresenterBlock>
      <CenterButton />
      <FormBoard
        isBudget={true}
        budgetInfo="식비"
        mention={`${monthInfo}월, 얼마나 쓰실 건가요?`}
      />
    </BudgetPresenterBlock>
  );
};

export default BudgetPresenter;
