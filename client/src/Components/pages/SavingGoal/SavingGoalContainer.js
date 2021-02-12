import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingGoalPresenter from "./SavingGoalPresenter";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";
import { useSelector } from "react-redux";

const SavingGoalContainerBlock = styled.div``;

const SavingGoalContainer = () => {
  const { date, title, price, memo } = useSelector(({ savingGoalReducer }) => ({
    date: savingGoalReducer.payload.date,
    title: savingGoalReducer.payload.title,
    price: savingGoalReducer.payload.price,
    memo: savingGoalReducer.payload.memo,
  }));

  return (
    <SavingGoalContainerBlock>
      <Header HeaderInfo="자산"></Header>
      <SavingGoalPresenter date={date} title={title} price={price} memo={memo}>
        <ContentHeader />
        <FormBoard />
        <ContentLists />
      </SavingGoalPresenter>
    </SavingGoalContainerBlock>
  );
};

export default SavingGoalContainer;
