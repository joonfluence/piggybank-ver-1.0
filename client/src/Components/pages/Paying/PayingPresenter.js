import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import { useDispatch } from "react-redux";
import { readPaying } from "../../../actions/payingActions";
import { useSelector } from "react-redux";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ dataList, userInfo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPaying());
  }, [userInfo]);

  return (
    <>
      <PayingPresenterBlock>
        <CreateBoard userInfo={userInfo} isPaying={true} InfoName="지출" />
        <CreateList dataList={dataList} />
      </PayingPresenterBlock>
    </>
  );
};

PayingPresenter.propTypes = {
  dateList: PropTypes.string,
};

export default PayingPresenter;
