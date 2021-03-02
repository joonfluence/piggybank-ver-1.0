import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingPresenter from "./SavingPresenter";
import CenterButton from "../../CenterButton";
import { useSelector } from "react-redux";

const SavingContainerBlock = styled.div``;

const SavingContainer = () => {
  const { savingList } = useSelector(({ savingReducer }) => ({
    savingList: savingReducer.savingList,
  }));
  return (
    <SavingContainerBlock>
      <Header HeaderInfo="저축" />
      <CenterButton />
      <SavingPresenter dataList={savingList} />
    </SavingContainerBlock>
  );
};

export default SavingContainer;
