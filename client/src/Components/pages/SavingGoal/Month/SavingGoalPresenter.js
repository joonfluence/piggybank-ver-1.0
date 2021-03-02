import React, { useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import DateModal from "../../../../utils/DateModal";
import { useDispatch } from "react-redux";
import { monthSavingGoal } from "../../../../actions/savingGoalActions";
import { monthSaving } from "../../../../actions/savingActions";

const SavingGoalsPresenterBlock = styled.div`
  position: relative;
  background-color: white;
`;

const SavingGoalsPresenter = ({
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
      <SavingGoalsPresenterBlock>
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
      </SavingGoalsPresenterBlock>
    </>
  );
};

export default SavingGoalsPresenter;
