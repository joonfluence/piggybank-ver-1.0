import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";
import CreateBoard from "../../CreateBoard";
import CreateList from "../../CreateList";
import { useSelector } from "react-redux";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  // const { date, title, price, memo, category } = useSelector(
  //   ({ payingReducer }) => ({
  //     date: payingReducer.payload.date,
  //     title: payingReducer.payload.title,
  //     price: payingReducer.payload.price,
  //     memo: payingRedcuer.payload.memo,
  //     category: payingReducer.payload.category,
  //   })
  // );

  return (
    <PayingContainerBlock>
      <Header HeaderInfo="지출"></Header>
      <PayingPresenter
        title="title"
        category="category"
        categoryInfoName="지출"
      >
        <CreateBoard></CreateBoard>
        <CreateList></CreateList>
      </PayingPresenter>
    </PayingContainerBlock>
  );
};

export default PavingContainer;
