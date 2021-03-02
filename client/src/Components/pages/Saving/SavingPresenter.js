import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";

const SavingPresenterBlock = styled.div`
  background-color: white;
`;

const SavingPresenter = ({ dataList }) => {
  return (
    <>
      <SavingPresenterBlock>
        <CreateBoard></CreateBoard>
        <CreateList dataList={dataList}></CreateList>
      </SavingPresenterBlock>
    </>
  );
};

SavingPresenter.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  memo: PropTypes.string,
  category: PropTypes.string.isRequired,
  InfoName: PropTypes.string,
};

export default SavingPresenter;
