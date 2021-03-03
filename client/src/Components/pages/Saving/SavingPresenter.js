import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import { readSaving } from "../../../actions/savingActions";
import { useDispatch } from "react-redux";

const SavingPresenterBlock = styled.div`
  background-color: white;
`;

const SavingPresenter = ({ dataList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPageData() {
      await dispatch(readSaving());
    }
    fetchPageData();
  }, []);
  return (
    <>
      <SavingPresenterBlock>
        <CreateBoard InfoName="저축"></CreateBoard>
        <CreateList dataList={dataList}></CreateList>
      </SavingPresenterBlock>
    </>
  );
};

SavingPresenter.propTypes = {
  dataList: PropTypes.array,
};

export default SavingPresenter;
