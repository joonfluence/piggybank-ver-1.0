import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  return (
    <PayingContainerBlock>
      <Header HeaderInfo="지출"></Header>
      <PayingPresenter></PayingPresenter>
    </PayingContainerBlock>
  );
};

export default PavingContainer;
