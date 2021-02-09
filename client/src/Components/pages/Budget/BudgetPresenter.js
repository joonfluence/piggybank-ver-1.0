import React from "react";
import styled from "styled-components";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";

const BudgetPresenterBlock = styled.div`
  background-color: white;
`;
const BudgetPresenter = () => {
  return (
    <>
      <BudgetPresenterBlock>
        <ContentHeader />
        <FormBoard />
        <ContentLists />
      </BudgetPresenterBlock>
    </>
  );
};

export default BudgetPresenter;
