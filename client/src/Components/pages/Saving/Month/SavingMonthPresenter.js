import React, { useEffect } from "react";
import styled from "styled-components";
import { readSaving } from "../../../../actions/savingActions";
import { useDispatch, useSelector } from "react-redux";
import CreateList from "../../../CreateList";

const SavingMonthPresenterBlock = styled.div`
  position: relative;
  background-color: white;
`;

const SavingMonthPresenter = () => {
  const dispatch = useDispatch();
  const { savingList } = useSelector(({ savingReducer }) => ({
    savingList: savingReducer.savingList,
  }));

  useEffect(() => {
    dispatch(readSaving());
  }, [savingList.length]);

  return (
    <>
      <SavingMonthPresenterBlock>
        <CreateList isPaying={false} dataList={savingList} isCategory={true} />
      </SavingMonthPresenterBlock>
    </>
  );
};
export default SavingMonthPresenter;
