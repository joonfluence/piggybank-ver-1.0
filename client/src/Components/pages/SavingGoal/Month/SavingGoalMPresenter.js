import React, { useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import DateModal from "../../../../utils/DateModal";
import { useDispatch } from "react-redux";
import { monthSavingGoal } from "../../../../actions/savingGoalActions";
import { monthSaving } from "../../../../actions/savingActions";
import { COLORS } from "../../../GlobalStyles";

const SavingGoalsPresenterBlock = styled.div`
  position: relative;
  background-color: white;
`;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
        <HeaderBlock>
          <ContentHeader
            yearInfo={yearInfo}
            monthInfo={monthInfo}
            used={savingSum}
            remained={pocketMoney}
            isBudget={false}
            savingGoalSum={savingGoalSum}
          ></ContentHeader>
          <DateModal />
        </HeaderBlock>
        <ContentBody
          savingGoalSum={savingGoalSum}
          used={savingSum}
          remained={pocketMoney}
          monthlyData={monthlySavingGoal}
          color={COLORS.pink}
          isBudget={false}
        ></ContentBody>
      </SavingGoalsPresenterBlock>
    </>
  );
};

export default SavingGoalsPresenter;
