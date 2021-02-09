import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContentBoard from "../../ContentBoard";
import ContentHeader from "../../ContentHeader";

const SavingPresenterBlock = styled.div`
  background-color: white;
`;

const SavingPresenter = () => {
  return (
    <>
      <SavingPresenterBlock>
        <ContentHeader></ContentHeader>
        <ContentBoard Date="2" InfoName="저축"></ContentBoard>
      </SavingPresenterBlock>
    </>
  );
};

export default SavingPresenter;
