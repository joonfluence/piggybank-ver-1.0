import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingPresenter from "./SavingPresenter";
import ContentBoard from "../../CreateBoard";
import ContentHeader from "../../ContentHeader";

const SavingContainerBlock = styled.div``;

const SavingContainer = () => {
  // const { date, title, price, memo, category } = useSelector(({ savingReducer }) => ({
  //   date: savingReducer.payload.date,
  //   title: savingReducer.payload.title,
  //   price: savingReducer.payload.price,
  //   memo: savingRedcuer.payload.memo,
  //   category: savingReducer.payload.category,
  // }));
  return (
    <SavingContainerBlock>
      <Header HeaderInfo="저축"></Header>
      <SavingPresenter>
        <ContentHeader></ContentHeader>
        <ContentBoard></ContentBoard>
      </SavingPresenter>
    </SavingContainerBlock>
  );
};

export default SavingContainer;
