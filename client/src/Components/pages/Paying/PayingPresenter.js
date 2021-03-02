import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";

const PayingPresenterBlock = styled.div`
  background-color: white;
`;

const PayingPresenter = ({ dataList }) => {
  return (
    <>
      <PayingPresenterBlock>
        <CreateBoard></CreateBoard>
        <CreateList dataList={dataList}></CreateList>
      </PayingPresenterBlock>
    </>
  );
};

PayingPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  memo: PropTypes.string,
  category: PropTypes.string.isRequired,
  InfoName: PropTypes.string,
};

export default PayingPresenter;
