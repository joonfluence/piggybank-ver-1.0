import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { readPaying } from "../../../../actions/payingActions";
import CreateList from "../../../CreateList";

const PayingMonthPresenterBlock = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
`;

const PayingMonthPresenter = () => {
  return (
    <>
      <PayingMonthPresenterBlock></PayingMonthPresenterBlock>
    </>
  );
};

export default PayingMonthPresenter;
