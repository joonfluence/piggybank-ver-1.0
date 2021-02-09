import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingPresenter from "./SavingPresenter";

const SavingContainerBlock = styled.div``;

const SavingContainer = () => {
  return (
    <SavingContainerBlock>
      <Header HeaderInfo="저축"></Header>
      <SavingPresenter></SavingPresenter>
    </SavingContainerBlock>
  );
};

export default SavingContainer;
