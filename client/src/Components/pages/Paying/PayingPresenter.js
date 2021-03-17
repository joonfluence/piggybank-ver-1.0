import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import { useSelector } from "react-redux";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ dataList, userInfo }) => {
  const { monthlyBudget } = useSelector(({ budgetReducer }) => ({
    monthlyBudget: budgetReducer.monthlyBudget,
  }));

  return (
    <>
      <PayingPresenterBlock>
        <CreateBoard
          userInfo={userInfo}
          dataList={dataList}
          isPaying={true}
          InfoName="지출"
          isOpen={true}
          selectOptions={monthlyBudget}
        />
      </PayingPresenterBlock>
    </>
  );
};

PayingPresenter.propTypes = {
  dateList: PropTypes.string,
};

export default PayingPresenter;
