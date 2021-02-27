import React, { useEffect } from "react";
import styled from "styled-components";
import DateModal from "../../../../utils/DateModal";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import { useDispatch } from "react-redux";
import { readBudget } from "../../../../actions/budgetActions";

const BudgetMonthPresenterBlock = styled.div``;
const BudgetMonthBlock = styled.div`
  background-color: white;
`;

const BudgetMonthPresenter = ({
  yearInfo,
  monthInfo,
  budgetSum,
  payingSum,
  pocketMoney,
  budgetInfo,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readBudget);
  });

  return (
    <BudgetMonthPresenterBlock>
      <BudgetMonthBlock>
        <DateModal />
        <ContentHeader
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          used={budgetSum}
          remained={payingSum}
          diff={pocketMoney}
        ></ContentHeader>
        <ContentBody
          pocketMoney={pocketMoney}
          budgetSum={budgetSum}
          payingSum={payingSum}
          budgetInfo={budgetInfo}
        ></ContentBody>
      </BudgetMonthBlock>
    </BudgetMonthPresenterBlock>
  );
};

export default BudgetMonthPresenter;
