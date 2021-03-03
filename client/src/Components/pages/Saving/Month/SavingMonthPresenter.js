import React, { useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import { monthSavingGoal } from "../../../../actions/savingGoalActions";
import { monthSaving } from "../../../../actions/savingActions";
import { useDispatch } from "react-redux";
import DateModal from "../../../../utils/DateModal";

const SavingMonthPresenterBlock = styled.div`
  position: relative;
  background-color: white;
`;

const SavingMonthPresenter = ({
  yearInfo,
  monthInfo,
  savingGoalSum,
  savingSum,
  pocketMoney,
  monthlySavingGoal,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    async function fetchPageData() {
      await dispatch(monthSaving(body));
      await dispatch(monthSavingGoal(body));
    }
    fetchPageData();
  }, [yearInfo, monthInfo]);

  return (
    <>
      <SavingMonthPresenterBlock>
        <DateModal />
        <ContentHeader
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          used={savingSum}
          remained={pocketMoney}
        ></ContentHeader>
        <ContentBody
          savingGoalSum={savingGoalSum}
          used={savingSum}
          remained={pocketMoney}
          monthlyData={monthlySavingGoal}
        ></ContentBody>
      </SavingMonthPresenterBlock>
    </>
  );
};

export default SavingMonthPresenter;
