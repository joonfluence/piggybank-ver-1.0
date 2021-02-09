import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ContentBoard from "../../ContentBoard";
import ContentHeader from "../../ContentHeader";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = () => {
  return (
    <>
      <PayingPresenterBlock>
        <ContentHeader></ContentHeader>
        <ContentBoard Date="2" InfoName="지출"></ContentBoard>
      </PayingPresenterBlock>
    </>
  );
};

export default PayingPresenter;
