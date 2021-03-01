import React, { useEffect } from "react";
import styled from "styled-components";
import CenterButton from "../../../CenterButton";
import Header from "../../../Header";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import DateModal from "../../../../utils/DateModal";
import { useDispatch } from "react-redux";
import { monthBudget } from "../../../../actions/budgetActions";
import { monthPaying } from "../../../../actions/payingActions";

const SavingGoalsPresenterBlock = styled.div`
  position: relative;
  background-color: white;
`;

const SavingGoalsPresenter = ({
  yearInfo,
  monthInfo,
  budgetSum,
  payingSum,
  pocketMoney,
  monthlyBudget,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthBudget(body));
      await dispatch(monthPaying(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  return (
    <>
      <SavingGoalsPresenterBlock>
        <DateModal />
        <ContentHeader
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          payingSum={payingSum}
          pocketMoney={pocketMoney}
        ></ContentHeader>
        <ContentBody
          budgetSum={budgetSum}
          payingSum={payingSum}
          pocketMoney={pocketMoney}
          monthlyBudget={monthlyBudget}
        ></ContentBody>
      </SavingGoalsPresenterBlock>
    </>
  );
};

export default SavingGoalsPresenter;
