import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingGoalPresenter from "./SavingGoalPresenter";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";

const SavingGoalContainerBlock = styled.div``;

const SavingGoalContainer = () => {
  // const { date, title, price, priceSum, pricePercentage, categoryPercentage, memo, category } = useSelector(({ savingGoalReducer }) => ({
  //   date: savingGoalReducer.payload.date,
  //   title: savingGoalReducer.payload.title,
  //   price: savingGoalReducer.payload.price,
  //   priceSum: savingGoalReducer.payload.priceSum,
  //   pricePercentage: savingGoalReducer.payload.pricePercentage,
  //   memo: savingGoalReducer.payload.memo,
  //   category: savingGoalReducer.payload.category,
  // }));

  return (
    <SavingGoalContainerBlock>
      <Header HeaderInfo="자산"></Header>
      <SavingGoalPresenter
        date={""}
        title={""}
        price={""}
        priceSum={""}
        pricePercentage={""}
        memo={""}
        category={""}
      >
        <ContentHeader />
        <FormBoard />
        <ContentLists />
      </SavingGoalPresenter>
    </SavingGoalContainerBlock>
  );
};

export default SavingGoalContainer;
