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
  const dispatch = useDispatch();
  const { payingList } = useSelector(({ payingReducer }) => ({
    payingList: payingReducer.payingList,
  }));

  useEffect(() => {
    dispatch(readPaying());
  }, [payingList.length]);

  return (
    <>
      <PayingMonthPresenterBlock>
        <CreateList isPaying={true} dataList={payingList} isCategory={true} />
      </PayingMonthPresenterBlock>
    </>
  );
};

export default PayingMonthPresenter;
