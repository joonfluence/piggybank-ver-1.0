import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateBoard from "../../CreateBoard";
import { useSelector } from "react-redux";

const SavingPresenterBlock = styled.div`
  background-color: white;
`;

const SavingPresenter = ({ dataList }) => {
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
          selectOptions={monthlySavingGoal}
        ></CreateBoard>
      </SavingPresenterBlock>
    </>
  );
};

SavingPresenter.propTypes = {
  dataList: PropTypes.array,
};

export default SavingPresenter;
