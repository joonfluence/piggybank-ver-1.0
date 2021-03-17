import React from "react";
import styled from "styled-components";
import FormBoard from "../../FormBoard";
import CenterButton from "../../CenterButton";
import { useSelector } from "react-redux";

const SavingGoalPresenterBlock = styled.div`
  background-color: white;
`;

const SavingGoalPresenter = () => {
  const { monthInfo } = useSelector(({ dateReducer }) => ({
    monthInfo: dateReducer.monthInfo,
  }));
  return (
    <>
      <SavingGoalPresenterBlock>
        <CenterButton />
        <FormBoard
          isBudget={false}
          budgetInfo="주식"
          mention={`${monthInfo}월, 얼마나 모으실 건가요?`}
        />
      </SavingGoalPresenterBlock>
    </>
  );
};

export default SavingGoalPresenter;
