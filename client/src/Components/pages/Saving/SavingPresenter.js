import React from "react";
import styled from "styled-components";
import CreateBoard from "../../CreateBoard";
import { useDispatch, useSelector } from "react-redux";
import CreateList from "../../CreateList";

const SavingPresenterBlock = styled.div`
  background-color: white;
`;

const SavingPresenter = ({ dataList }) => {
  const dispatch = useDispatch();
  const { savingList } = useSelector(({ savingReducer }) => ({
    savingList: savingReducer.savingList,
  }));
  const { monthlySavingGoal } = useSelector(({ savingGoalReducer }) => ({
    monthlySavingGoal: savingGoalReducer.monthlySavingGoal,
  }));
  return (
    <>
      <SavingPresenterBlock>
        <CreateBoard
          dataList={dataList}
          isPaying={false}
          InfoName="저축"
          isOpen={true}
          title="저축내역"
          selectOptions={monthlySavingGoal}
        ></CreateBoard>
        <CreateList isPaying={true} dataList={savingList} isCategory={true} />
      </SavingPresenterBlock>
    </>
  );
};

export default SavingPresenter;
