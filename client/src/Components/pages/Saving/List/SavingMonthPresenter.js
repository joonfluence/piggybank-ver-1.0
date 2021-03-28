import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CreateList from "../../../CreateList";
import { readSaving } from "../../../../redux/actions/savingActions";

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
  }, []);

  return (
    <>
      <SavingMonthPresenterBlock>
        <CreateList isPaying={false} dataList={savingList} isCategory={true} />
      </SavingMonthPresenterBlock>
    </>
  );
};
export default SavingMonthPresenter;
