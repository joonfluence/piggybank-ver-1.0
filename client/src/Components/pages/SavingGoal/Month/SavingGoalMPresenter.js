import React, { useEffect } from "react";
import styled from "styled-components";
import ContentHeader from "../../../ContentHeader";
import ContentBody from "../../../ContentBody";
import { useDispatch } from "react-redux";
import FormBoard from "../../../FormBoard";
import { monthSaving } from "../../../../redux/actions/savingActions";
import { monthSavingGoal } from "../../../../redux/actions/savingGoalActions";

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
        <FormBoard
          isBudget={false}
          yearInfo={yearInfo}
          monthInfo={monthInfo}
          budgetInfo="주식"
          title="저축항목"
          mention={`${monthInfo}월, 얼마나 모으실 건가요?`}
        />
        <HeaderBlock>
          {savingSum === 0 && savingGoalSum === 0 ? (
            <></>
          ) : (
            <>
              <ContentHeader
                yearInfo={yearInfo}
                monthInfo={monthInfo}
                used={savingSum}
                remained={pocketMoney}
                isBudget={false}
                savingGoalSum={savingGoalSum}
              ></ContentHeader>
            </>
          )}
        </HeaderBlock>
        {monthlySavingGoal !== null ? (
          <ContentBody
            savingGoalSum={savingGoalSum}
            used={savingSum}
            remained={pocketMoney}
            monthlyData={monthlySavingGoal}
            isBudget={false}
          ></ContentBody>
        ) : (
          <></>
        )}
      </SavingGoalsPresenterBlock>
    </>
  );
};

export default SavingGoalsPresenter;
