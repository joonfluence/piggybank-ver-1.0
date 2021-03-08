import React from "react";
import styled from "styled-components";
import FormBoard from "../../FormBoard";
import CenterButton from "../../CenterButton";

const SavingGoalPresenterBlock = styled.div`
  background-color: white;
`;

const SavingGoalPresenter = () => {
  return (
    <>
      <SavingGoalPresenterBlock>
        <CenterButton />
        <FormBoard />
      </SavingGoalPresenterBlock>
    </>
  );
};

export default SavingGoalPresenter;
