import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import { useDispatch, useSelector } from "react-redux";
import CreateList from "../../CreateList";
import { readPaying } from "../../../actions/payingActions";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ dataList, userInfo }) => {
  const { monthlyBudget } = useSelector(({ budgetReducer }) => ({
    monthlyBudget: budgetReducer.monthlyBudget,
  }));

  const dispatch = useDispatch();
  const { payingList } = useSelector(({ payingReducer }) => ({
    payingList: payingReducer.payingList,
  }));

  useEffect(() => {
    dispatch(readPaying());
  }, []);

  return (
    <>
      <PayingPresenterBlock>
        <CreateBoard
          userInfo={userInfo}
          dataList={dataList}
          isPaying={true}
          InfoName="소비"
          isOpen={true}
          title="소비내역"
          selectOptions={monthlyBudget}
        />
        <CreateList isPaying={true} dataList={payingList} isCategory={true} />
      </PayingPresenterBlock>
    </>
  );
};

PayingPresenter.propTypes = {
  dateList: PropTypes.string,
};

export default PayingPresenter;
