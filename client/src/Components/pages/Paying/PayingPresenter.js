import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import { readPaying } from "../../../actions/payingActions";
import { useDispatch } from "react-redux";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ dataList, userInfo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPageData() {
      await dispatch(readPaying());
    }
    fetchPageData();
  }, []);
  return (
    <>
      <PayingPresenterBlock>
        <CreateBoard userInfo={userInfo} InfoName="지출" />
        <CreateList dataList={dataList} />
      </PayingPresenterBlock>
    </>
  );
};

PayingPresenter.propTypes = {
  dateList: PropTypes.string,
};

export default PayingPresenter;
