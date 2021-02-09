import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  return (
    <PayingContainerBlock>
      <Header></Header>
      <PayingPresenter></PayingPresenter>
    </PayingContainerBlock>
  );
};

export default PavingContainer;
