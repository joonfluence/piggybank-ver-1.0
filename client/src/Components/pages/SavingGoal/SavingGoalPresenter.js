import React from "react";
import styled from "styled-components";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";

const SavingGoalPresenterBlock = styled.div`
  background-color: white;
`;

const SavingGoalPresenter = () => {
  return (
    <>
      <SavingGoalPresenterBlock>
        <ContentHeader />
        <FormBoard />
        <ContentLists />
      </SavingGoalPresenterBlock>
    </>
  );
};

export default SavingGoalPresenter;
